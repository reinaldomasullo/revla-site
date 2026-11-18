import { google } from "googleapis";
import { enviarAvisoReserva } from "@/lib/email-aviso";

/**
 * Integração com o Google Agenda para o agendador de reuniões (/components
 * SchedulerButton.tsx + rotas /api/agendar/*). Autentica como a service
 * account "agendador-revla@revla-406102.iam.gserviceaccount.com", que tem
 * permissão de "Fazer alterações e ver todos os detalhes dos eventos" na
 * agenda principal da Revla (revlacorretora@gmail.com) — concedida
 * manualmente em Configurações da agenda > Compartilhado com.
 *
 * Credenciais vêm de variáveis de ambiente (nunca commitadas no repo):
 * GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY (com
 * quebras de linha escapadas como \n) e GOOGLE_CALENDAR_ID.
 */

const TIMEZONE = "America/Sao_Paulo";

// Janela de atendimento: segunda a sexta, reuniões de 1h às 9h, 10h, 11h,
// 14h, 15h, 16h e 17h (sem horário de almoço, 12h-14h livre).
export const BUSINESS_HOURS = [9, 10, 11, 14, 15, 16, 17];
export const MEETING_DURATION_MINUTES = 60;

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  if (!email || !rawKey) {
    throw new Error(
      "Variáveis de ambiente do Google Agenda não configuradas (GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY).",
    );
  }
  const privateKey = rawKey.replace(/\\n/g, "\n");
  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
}

function getCalendarId() {
  const id = process.env.GOOGLE_CALENDAR_ID;
  if (!id) {
    throw new Error("GOOGLE_CALENDAR_ID não configurado.");
  }
  return id;
}

function getCalendarClient() {
  return google.calendar({ version: "v3", auth: getAuth() });
}

/** Converte um horário local de São Paulo (data + hora) em Date UTC real,
 * sem depender de bibliotecas externas de timezone. America/Sao_Paulo é
 * UTC-3 o ano todo (sem horário de verão desde 2019). */
function spDateTimeToUTC(dateStr: string, hour: number): Date {
  // dateStr: "YYYY-MM-DD"
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, hour + 3, 0, 0));
}

export type DiaDisponibilidade = {
  data: string; // YYYY-MM-DD
  horarios: string[]; // ["09:00", "10:00", ...] já filtrados (livres e futuros)
};

/**
 * Calcula os horários livres dos próximos `diasUteis` dias úteis
 * (segunda a sexta), consultando o freebusy da agenda de uma vez só.
 */
export async function getDisponibilidade(
  diasUteis = 10,
): Promise<DiaDisponibilidade[]> {
  const calendar = getCalendarClient();
  const calendarId = getCalendarId();

  // Monta a lista de dias úteis a partir de amanhã.
  const now = new Date();
  const dias: string[] = [];
  const cursor = new Date(now);
  cursor.setUTCHours(0, 0, 0, 0);
  while (dias.length < diasUteis) {
    cursor.setUTCDate(cursor.getUTCDate() + 1);
    // Dia da semana em horário de SP (UTC-3): como cursor é meia-noite UTC,
    // subtrair 3h ainda cai no mesmo dia civil em SP na grande maioria dos
    // casos; para o propósito de achar dia da semana isso é suficiente.
    const weekday = cursor.getUTCDay(); // 0=domingo .. 6=sábado
    if (weekday >= 1 && weekday <= 5) {
      dias.push(cursor.toISOString().slice(0, 10));
    }
  }

  const windowStart = spDateTimeToUTC(dias[0], 0);
  const windowEnd = spDateTimeToUTC(dias[dias.length - 1], 24);

  const freebusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: windowStart.toISOString(),
      timeMax: windowEnd.toISOString(),
      timeZone: TIMEZONE,
      items: [{ id: calendarId }],
    },
  });

  const busy = freebusy.data.calendars?.[calendarId]?.busy ?? [];
  const busyRanges = busy.map((b) => ({
    start: new Date(b.start!).getTime(),
    end: new Date(b.end!).getTime(),
  }));

  const nowMs = Date.now();

  const resultado: DiaDisponibilidade[] = dias.map((data) => {
    const horarios = BUSINESS_HOURS.filter((hour) => {
      const slotStart = spDateTimeToUTC(data, hour).getTime();
      const slotEnd = slotStart + MEETING_DURATION_MINUTES * 60 * 1000;
      if (slotStart <= nowMs) return false; // não oferece horário no passado
      const conflita = busyRanges.some(
        (b) => slotStart < b.end && slotEnd > b.start,
      );
      return !conflita;
    }).map((hour) => `${String(hour).padStart(2, "0")}:00`);
    return { data, horarios };
  });

  return resultado.filter((d) => d.horarios.length > 0);
}

export type ReservaInput = {
  nome: string;
  whatsapp: string;
  interesse: "consorcio" | "seguro" | "plano-de-saude";
  // Só preenchido quando interesse === "consorcio".
  consorcioTipo?: "imovel" | "veiculos" | "servicos" | "investimentos";
  // Só preenchido quando interesse === "seguro" (texto livre da pessoa).
  seguroDetalhe?: string;
  data: string; // YYYY-MM-DD
  horario: string; // "09:00"
};

const INTERESSE_LABEL: Record<ReservaInput["interesse"], string> = {
  consorcio: "Consórcio",
  seguro: "Seguro",
  "plano-de-saude": "Plano de Saúde",
};

const CONSORCIO_TIPO_LABEL: Record<
  NonNullable<ReservaInput["consorcioTipo"]>,
  string
> = {
  imovel: "Imóvel",
  veiculos: "Veículos",
  servicos: "Serviços",
  investimentos: "Investimentos",
};

/**
 * Cria o evento na agenda após reconferir que o horário ainda está livre
 * (evita condição de corrida entre duas pessoas agendando o mesmo horário
 * ao mesmo tempo).
 */
export async function criarReserva(
  input: ReservaInput,
): Promise<{ ok: true; inicio: string } | { ok: false; error: string }> {
  const hour = Number(input.horario.split(":")[0]);
  if (!BUSINESS_HOURS.includes(hour)) {
    return { ok: false, error: "Horário inválido." };
  }

  const calendar = getCalendarClient();
  const calendarId = getCalendarId();

  const slotStart = spDateTimeToUTC(input.data, hour);
  const slotEnd = new Date(
    slotStart.getTime() + MEETING_DURATION_MINUTES * 60 * 1000,
  );

  if (slotStart.getTime() <= Date.now()) {
    return { ok: false, error: "Esse horário já passou." };
  }

  // Reconfere disponibilidade bem na hora de criar.
  const freebusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: slotStart.toISOString(),
      timeMax: slotEnd.toISOString(),
      timeZone: TIMEZONE,
      items: [{ id: calendarId }],
    },
  });
  const busy = freebusy.data.calendars?.[calendarId]?.busy ?? [];
  if (busy.length > 0) {
    return {
      ok: false,
      error: "Esse horário acabou de ser reservado por outra pessoa.",
    };
  }

  const interesseLabel = INTERESSE_LABEL[input.interesse];
  // Detalhe extra pra mostrar junto do interesse: tipo de consórcio (vindo
  // de botões) ou o texto livre do que a pessoa quer de seguro.
  const detalhe =
    input.interesse === "consorcio" && input.consorcioTipo
      ? CONSORCIO_TIPO_LABEL[input.consorcioTipo]
      : input.interesse === "seguro" && input.seguroDetalhe
        ? input.seguroDetalhe
        : null;
  const interesseCompleto = detalhe
    ? `${interesseLabel} - ${detalhe}`
    : interesseLabel;

  // OBS: uma service account sem "domain-wide delegation" (indisponível pra
  // Gmail pessoal) não pode convidar "attendees" nem usar sendUpdates — a
  // API rejeita com "Service accounts cannot invite attendees without
  // Domain-Wide Delegation of Authority". Por isso o aviso por e-mail dos
  // novos agendamentos é mandado à parte, via SMTP do Gmail (ver
  // email-aviso.ts), e não por um convite de evento.
  await calendar.events.insert({
    calendarId,
    requestBody: {
      summary: `Reunião: ${input.nome} (${interesseCompleto})`,
      description: [
        `Agendado pelo site revlacorretora.com.br`,
        `Nome: ${input.nome}`,
        `WhatsApp: ${input.whatsapp}`,
        `Interesse: ${interesseCompleto}`,
      ].join("\n"),
      start: { dateTime: slotStart.toISOString(), timeZone: TIMEZONE },
      end: { dateTime: slotEnd.toISOString(), timeZone: TIMEZONE },
    },
  });

  // O e-mail é "melhor esforço": se falhar, não deve derrubar a resposta de
  // sucesso pro usuário que agendou (o evento já foi criado na agenda).
  await enviarAvisoReserva({
    nome: input.nome,
    whatsapp: input.whatsapp,
    interesseCompleto,
    data: input.data,
    horario: input.horario,
  });

  return { ok: true, inicio: slotStart.toISOString() };
}
