import nodemailer from "nodemailer";

/**
 * Manda um e-mail simples pra revlacorretora@gmail.com a cada novo
 * agendamento, usando o Gmail via SMTP com uma "senha de app" (não dá pra
 * usar a senha normal da conta — o Gmail exige uma senha de app gerada em
 * myaccount.google.com/apppasswords, com verificação em duas etapas ativada).
 *
 * Isso existe porque o jeito "nativo" do Google Agenda (convidar o dono da
 * agenda como participante do evento pra disparar um e-mail de convite) não
 * funciona: a API rejeita com "Service accounts cannot invite attendees
 * without Domain-Wide Delegation of Authority" (só dá pra convidar
 * participantes com delegação de domínio inteiro, que não existe pra conta
 * Gmail pessoal).
 *
 * Variáveis de ambiente: GMAIL_SMTP_USER (o e-mail), GMAIL_SMTP_APP_PASSWORD
 * (a senha de app de 16 caracteres, sem espaços).
 *
 * Nunca lança erro pro chamador: se faltar configuração ou o envio falhar,
 * só loga no console. O agendamento em si já foi criado na Google Agenda
 * antes dessa função ser chamada — um problema no e-mail não pode derrubar
 * a resposta de sucesso pro usuário que agendou.
 */
export async function enviarAvisoReserva(input: {
  nome: string;
  whatsapp: string;
  interesseCompleto: string;
  data: string; // YYYY-MM-DD
  horario: string; // "09:00"
}): Promise<void> {
  const user = process.env.GMAIL_SMTP_USER;
  const pass = process.env.GMAIL_SMTP_APP_PASSWORD;

  if (!user || !pass) {
    console.error(
      "Aviso por e-mail não enviado: GMAIL_SMTP_USER / GMAIL_SMTP_APP_PASSWORD não configurados.",
    );
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const [y, m, d] = input.data.split("-");
    const dataFormatada = `${d}/${m}/${y}`;

    await transporter.sendMail({
      from: `Agendador Revla <${user}>`,
      to: user,
      subject: `Novo agendamento: ${input.nome} — ${dataFormatada} às ${input.horario}`,
      text: [
        "Novo agendamento pelo site revlacorretora.com.br",
        "",
        `Nome: ${input.nome}`,
        `WhatsApp: ${input.whatsapp}`,
        `Interesse: ${input.interesseCompleto}`,
        `Data: ${dataFormatada} às ${input.horario} (horário de Brasília)`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Erro ao enviar e-mail de aviso do agendamento:", err);
  }
}
