"use client";

import { useState } from "react";

export type Interesse = "consorcio" | "seguro" | "plano-de-saude";
export type ConsorcioTipo = "imovel" | "veiculos" | "servicos" | "investimentos";

const INTERESSES: { value: Interesse; label: string }[] = [
  { value: "consorcio", label: "Consórcio" },
  { value: "seguro", label: "Seguro" },
  { value: "plano-de-saude", label: "Plano de Saúde" },
];

const CONSORCIO_TIPOS: { value: ConsorcioTipo; label: string }[] = [
  { value: "imovel", label: "Imóvel" },
  { value: "veiculos", label: "Veículos" },
  { value: "servicos", label: "Serviços" },
  { value: "investimentos", label: "Investimentos" },
];

type Dia = { data: string; horarios: string[] };

type Passo = "formulario" | "horario" | "confirmado";

const DIAS_SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
const MESES = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

function formatarDiaCurto(dataStr: string) {
  const [y, m, d] = dataStr.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return {
    semana: DIAS_SEMANA[dt.getUTCDay()],
    dia: d,
    mes: MESES[m - 1],
  };
}

type AgendadorFormProps = {
  /** Quando presente, mostra o "X" de fechar (uso dentro do modal flutuante). */
  onClose?: () => void;
};

export default function AgendadorForm({ onClose }: AgendadorFormProps) {
  const [passo, setPasso] = useState<Passo>("formulario");

  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [interesse, setInteresse] = useState<Interesse | "">("");
  const [consorcioTipo, setConsorcioTipo] = useState<ConsorcioTipo | "">("");
  const [seguroDetalhe, setSeguroDetalhe] = useState("");

  const [dias, setDias] = useState<Dia[] | null>(null);
  const [erroDisponibilidade, setErroDisponibilidade] = useState<
    string | null
  >(null);
  const [diaSelecionado, setDiaSelecionado] = useState<string | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(
    null,
  );

  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState<string | null>(null);
  const [confirmacao, setConfirmacao] = useState<{
    data: string;
    horario: string;
  } | null>(null);

  function selecionarInteresse(valor: Interesse) {
    setInteresse(valor);
    // Troca de interesse descarta o detalhe do anterior, pra não mandar
    // "Imóvel" junto de um pedido de Seguro, por exemplo.
    setConsorcioTipo("");
    setSeguroDetalhe("");
  }

  const detalheValido =
    interesse === "consorcio"
      ? !!consorcioTipo
      : interesse === "seguro"
        ? seguroDetalhe.trim().length > 0
        : true;

  const formularioValido =
    !!nome.trim() && !!whatsapp.trim() && !!interesse && detalheValido;

  async function irParaHorarios(e: React.FormEvent) {
    e.preventDefault();
    if (!formularioValido) return;
    setPasso("horario");
    if (!dias) {
      setErroDisponibilidade(null);
      try {
        const resp = await fetch("/api/agendar/disponibilidade");
        const json = await resp.json();
        if (!resp.ok || !json.ok) {
          throw new Error(json.error || "Falha ao carregar horários.");
        }
        setDias(json.dias);
        if (json.dias?.length) {
          setDiaSelecionado(json.dias[0].data);
        }
      } catch {
        setErroDisponibilidade(
          "Não foi possível carregar os horários agora. Tente novamente em instantes.",
        );
      }
    }
  }

  async function confirmarReserva() {
    if (!diaSelecionado || !horarioSelecionado || !interesse) return;
    setEnviando(true);
    setErroEnvio(null);
    try {
      const resp = await fetch("/api/agendar/reservar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          whatsapp,
          interesse,
          consorcioTipo: interesse === "consorcio" ? consorcioTipo : undefined,
          seguroDetalhe: interesse === "seguro" ? seguroDetalhe.trim() : undefined,
          data: diaSelecionado,
          horario: horarioSelecionado,
        }),
      });
      const json = await resp.json();
      if (!resp.ok || !json.ok) {
        throw new Error(json.error || "Não foi possível agendar.");
      }
      setConfirmacao({ data: diaSelecionado, horario: horarioSelecionado });
      setPasso("confirmado");
    } catch (err) {
      setErroEnvio(
        err instanceof Error
          ? err.message
          : "Não foi possível agendar agora. Tente novamente.",
      );
      // Se o horário foi tomado por outra pessoa, limpa a lista pra forçar
      // recarregar na próxima tentativa.
      setDias(null);
      setHorarioSelecionado(null);
    } finally {
      setEnviando(false);
    }
  }

  function recomecar() {
    setPasso("formulario");
    setNome("");
    setWhatsapp("");
    setInteresse("");
    setConsorcioTipo("");
    setSeguroDetalhe("");
    setDias(null);
    setErroDisponibilidade(null);
    setDiaSelecionado(null);
    setHorarioSelecionado(null);
    setErroEnvio(null);
    setConfirmacao(null);
  }

  const diaAtual = dias?.find((d) => d.data === diaSelecionado);

  return (
    <div>
      {/* No modal mostra título + "X" aqui; na página /agendar o <h1> da
          própria página já cumpre esse papel, então não duplica. */}
      {onClose && (
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[var(--color-primary)]">
            Agendar uma conversa
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-ink)]/60 hover:bg-[var(--color-muted)]"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}

      {passo === "formulario" && (
        <form onSubmit={irParaHorarios} className="flex flex-col gap-4">
          <p className="text-sm text-[var(--color-ink)]/70">
            Preencha seus dados e escolha o melhor horário pra falar com a gente.
          </p>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="agendador-nome" className="text-sm font-medium">
              Nome
            </label>
            <input
              id="agendador-nome"
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
              className="rounded-lg border border-[var(--color-border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="agendador-whatsapp" className="text-sm font-medium">
              WhatsApp
            </label>
            <input
              id="agendador-whatsapp"
              type="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="(11) 90000-0000"
              className="rounded-lg border border-[var(--color-border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Interesse</span>
            <div className="grid grid-cols-3 gap-2">
              {INTERESSES.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => selecionarInteresse(opt.value)}
                  className={`rounded-lg border px-2 py-2.5 text-center text-xs font-medium transition-colors ${
                    interesse === opt.value
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-[var(--color-border)] text-[var(--color-ink)]/80 hover:border-[var(--color-primary)]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {interesse === "consorcio" && (
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">
                Consórcio de que tipo?
              </span>
              <div className="grid grid-cols-2 gap-2">
                {CONSORCIO_TIPOS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setConsorcioTipo(opt.value)}
                    className={`rounded-lg border px-2 py-2.5 text-center text-xs font-medium transition-colors ${
                      consorcioTipo === opt.value
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                        : "border-[var(--color-border)] text-[var(--color-ink)]/80 hover:border-[var(--color-primary)]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {interesse === "seguro" && (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="agendador-seguro-detalhe" className="text-sm font-medium">
                Qual tipo de seguro você quer?
              </label>
              <input
                id="agendador-seguro-detalhe"
                type="text"
                required
                value={seguroDetalhe}
                onChange={(e) => setSeguroDetalhe(e.target.value)}
                placeholder="Ex: seguro de vida, auto, residencial…"
                className="rounded-lg border border-[var(--color-border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={!formularioValido}
            className="mt-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
          >
            Ver horários disponíveis
          </button>
        </form>
      )}

      {passo === "horario" && (
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setPasso("formulario")}
            className="flex w-fit items-center gap-1 text-sm text-[var(--color-primary)]"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Voltar
          </button>

          {!dias && !erroDisponibilidade && (
            <p className="py-8 text-center text-sm text-[var(--color-ink)]/60">
              Carregando horários…
            </p>
          )}

          {erroDisponibilidade && (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <p className="text-sm text-[var(--color-accent-dark)]">
                {erroDisponibilidade}
              </p>
              <button
                type="button"
                onClick={() => {
                  setErroDisponibilidade(null);
                  setDias(null);
                  irParaHorarios({
                    preventDefault() {},
                  } as React.FormEvent);
                }}
                className="rounded-full border border-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]"
              >
                Tentar de novo
              </button>
            </div>
          )}

          {dias && dias.length === 0 && (
            <p className="py-8 text-center text-sm text-[var(--color-ink)]/60">
              Sem horários livres nos próximos dias. Fale com a gente pelo WhatsApp.
            </p>
          )}

          {dias && dias.length > 0 && (
            <>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {dias.map((d) => {
                  const { semana, dia, mes } = formatarDiaCurto(d.data);
                  const ativo = d.data === diaSelecionado;
                  return (
                    <button
                      key={d.data}
                      type="button"
                      onClick={() => {
                        setDiaSelecionado(d.data);
                        setHorarioSelecionado(null);
                      }}
                      className={`flex min-w-[56px] flex-col items-center rounded-xl border px-2 py-2 text-xs font-medium uppercase transition-colors ${
                        ativo
                          ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                          : "border-[var(--color-border)] text-[var(--color-ink)]/70 hover:border-[var(--color-primary)]"
                      }`}
                    >
                      <span>{semana}</span>
                      <span className="text-base normal-case">{dia}</span>
                      <span>{mes}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {diaAtual?.horarios.map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHorarioSelecionado(h)}
                    className={`rounded-lg border px-2 py-2.5 text-sm font-medium transition-colors ${
                      horarioSelecionado === h
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                        : "border-[var(--color-border)] text-[var(--color-ink)]/80 hover:border-[var(--color-primary)]"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>

              {erroEnvio && (
                <p className="text-sm text-[var(--color-accent-dark)]">{erroEnvio}</p>
              )}

              <button
                type="button"
                disabled={!horarioSelecionado || enviando}
                onClick={confirmarReserva}
                className="mt-1 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              >
                {enviando ? "Agendando…" : "Confirmar agendamento"}
              </button>
            </>
          )}
        </div>
      )}

      {passo === "confirmado" && confirmacao && (
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)]/10 text-[var(--color-whatsapp)]">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-[var(--color-primary)]">
            Reunião agendada!
          </h3>
          <p className="text-sm text-[var(--color-ink)]/70">
            {(() => {
              const { dia, mes } = formatarDiaCurto(confirmacao.data);
              return `Dia ${dia} de ${mes} às ${confirmacao.horario}, horário de Brasília.`;
            })()}
          </p>
          <p className="text-xs text-[var(--color-ink)]/50">
            Guardamos seu contato pra confirmar pelo WhatsApp se precisar remarcar.
          </p>
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="mt-2 rounded-full border border-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-primary)]"
            >
              Fechar
            </button>
          ) : (
            <button
              type="button"
              onClick={recomecar}
              className="mt-2 rounded-full border border-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-primary)]"
            >
              Agendar outro horário
            </button>
          )}
        </div>
      )}
    </div>
  );
}
