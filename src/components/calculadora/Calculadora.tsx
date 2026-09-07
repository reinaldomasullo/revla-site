"use client";

import { useMemo, useState } from "react";
import NumberField from "./NumberField";
import { formatBRL, formatPercent } from "./formatters";
import { calcularCenarioAlavancagem, calcularCenarioVenda } from "./calculo";
import { whatsappLink } from "@/lib/site-config";
import CTAButton from "@/components/CTAButton";

type Cenario = "venda" | "alavancagem";

export default function Calculadora() {
  const [cenario, setCenario] = useState<Cenario>("venda");

  const [credito, setCredito] = useState<number | null>(null);
  const [indiceCorrecao, setIndiceCorrecao] = useState<number | null>(null);
  const [percentualParcela, setPercentualParcela] = useState<number | null>(null);
  const [prazoTotal, setPrazoTotal] = useState<number | null>(null);
  const [mesContemplacao, setMesContemplacao] = useState<number | null>(null);
  const [agioVenda, setAgioVenda] = useState<number | null>(null);
  const [rendimentoComparativo, setRendimentoComparativo] = useState<number | null>(null);

  const [valorImovel, setValorImovel] = useState<number | null>(null);
  const [reajusteAluguel, setReajusteAluguel] = useState<number | null>(null);
  const [impostoAluguel, setImpostoAluguel] = useState<number | null>(null);

  const inputVenda = useMemo(
    () => ({
      credito: credito ?? 0,
      indiceCorrecao: indiceCorrecao ?? 0,
      percentualParcela: percentualParcela ?? 0,
      prazoTotal: prazoTotal ?? 0,
      mesContemplacao: mesContemplacao ?? 0,
      agioVenda: agioVenda ?? 0,
      rendimentoComparativo: rendimentoComparativo ?? 0,
    }),
    [
      credito,
      indiceCorrecao,
      percentualParcela,
      prazoTotal,
      mesContemplacao,
      agioVenda,
      rendimentoComparativo,
    ]
  );

  const resultadoVenda = useMemo(() => calcularCenarioVenda(inputVenda), [inputVenda]);

  const resultadoAlavancagem = useMemo(
    () =>
      calcularCenarioAlavancagem(
        {
          ...inputVenda,
          valorImovel: valorImovel ?? 0,
          reajusteAluguel: reajusteAluguel ?? 0,
          impostoAluguel: impostoAluguel ?? 0,
        },
        resultadoVenda.valorVenda
      ),
    [inputVenda, valorImovel, reajusteAluguel, impostoAluguel, resultadoVenda.valorVenda]
  );

  const seloConfig = {
    excelente: { label: "Excelente", classes: "bg-emerald-100 text-emerald-700" },
    bom: { label: "Bom", classes: "bg-amber-100 text-amber-700" },
    atencao: { label: "Atenção", classes: "bg-red-100 text-red-700" },
  }[resultadoAlavancagem.selo];

  const maxPct = Math.max(resultadoVenda.lucroPercentual, resultadoVenda.lucroFinanceiroComparativoPct, 1);
  const barConsorcio = Math.min(100, Math.max(0, (resultadoVenda.lucroPercentual / maxPct) * 100));
  const barAplicacao = Math.min(100, Math.max(0, (resultadoVenda.lucroFinanceiroComparativoPct / maxPct) * 100));

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5 sm:p-8">
      <div
        className="flex gap-2 rounded-full bg-[var(--color-muted)] p-1"
        role="tablist"
        aria-label="Cenário de simulação"
      >
        <button
          type="button"
          role="tab"
          aria-selected={cenario === "venda"}
          onClick={() => setCenario("venda")}
          className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
            cenario === "venda" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-ink)]/70"
          }`}
        >
          Venda da carta contemplada
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={cenario === "alavancagem"}
          onClick={() => setCenario("alavancagem")}
          className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
            cenario === "alavancagem" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-ink)]/70"
          }`}
        >
          Alavancagem patrimonial
        </button>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
            Dados da carta de consórcio
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <NumberField label="Crédito" value={credito} onChange={setCredito} suffix="R$" />
            </div>
            <NumberField
              label="Índice de correção"
              value={indiceCorrecao}
              onChange={setIndiceCorrecao}
              suffix="% a.a."
              helpText="Referência: INCC"
            />
            <NumberField
              label="Parcela reduzida"
              value={percentualParcela}
              onChange={setPercentualParcela}
              suffix="%"
              helpText="% da parcela cheia paga até contemplar (100% = sem redução)"
            />
            <NumberField label="Prazo total" value={prazoTotal} onChange={setPrazoTotal} suffix="meses" />
            <NumberField
              label="Mês da contemplação"
              value={mesContemplacao}
              onChange={setMesContemplacao}
              suffix="mês"
            />
            <InfoTile label="Taxa administrativa" value="24,20% (fixa, padrão Revla)" />
            <InfoTile label="Lance embutido" value="25,00% (fixo, sobre crédito + taxa administrativa)" />

            {cenario === "venda" && (
              <>
                <NumberField
                  label="Ágio na venda da carta"
                  value={agioVenda}
                  onChange={setAgioVenda}
                  suffix="%"
                  helpText="Aplicado sobre o crédito já atualizado"
                />
                <NumberField
                  label="Rendimento comparativo"
                  value={rendimentoComparativo}
                  onChange={setRendimentoComparativo}
                  suffix="% a.a."
                  helpText="Referência: CDB/Tesouro"
                />
              </>
            )}
          </div>

          {cenario === "alavancagem" && (
            <>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
                Dados do imóvel e do aluguel
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <NumberField label="Valor do imóvel" value={valorImovel} onChange={setValorImovel} suffix="R$" />
                </div>
                <NumberField
                  label="Reajuste do aluguel"
                  value={reajusteAluguel}
                  onChange={setReajusteAluguel}
                  suffix="% a.a."
                  helpText="Referência: IPCA"
                />
                <NumberField
                  label="Imposto sobre o aluguel"
                  value={impostoAluguel}
                  onChange={setImpostoAluguel}
                  suffix="%"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <InfoTile label="Prazo restante após contemplar" value={`${resultadoAlavancagem.prazoRestante} meses`} />
                <InfoTile label="Aluguel mensal inicial (0,50% a.m. do imóvel)" value={formatBRL(resultadoAlavancagem.aluguelMensalInicial, 0)} />
                <InfoTile
                  label="Valorização do imóvel"
                  value={`${formatPercent(indiceCorrecao ?? 0)} a.a. (mesmo índice de correção da carta)`}
                />
                <InfoTile label="Valor futuro estimado do imóvel" value={formatBRL(resultadoAlavancagem.valorFuturoImovel, 0)} />
              </div>
            </>
          )}
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
            Resultado da simulação
          </h2>

          {cenario === "venda" ? (
            <div className="mt-4 space-y-3">
              <ResultRow label="Lucro líquido na venda da carta" value={formatBRL(resultadoVenda.lucroLiquido)} highlight />
              <p className="-mt-1 px-1 text-xs leading-relaxed text-[var(--color-ink)]/65">
                Aporta {formatBRL(resultadoVenda.totalAportado, 0)} em {mesContemplacao ?? 0} meses e vende a carta
                por {formatBRL(resultadoVenda.valorVenda, 0)}. Lucro de{" "}
                <strong>{formatPercent(resultadoVenda.lucroPercentual)}</strong> sobre o aporte.
              </p>
              <ResultRow label="Crédito atualizado na contemplação" value={formatBRL(resultadoVenda.creditoAtualizado)} />
              <ResultRow label="Valor de venda da carta" value={formatBRL(resultadoVenda.valorVenda)} />
              <ResultRow label="Parcela inicial (reduzida)" value={formatBRL(resultadoVenda.parcelaInicial)} />
              <ResultRow label="Parcela na contemplação" value={formatBRL(resultadoVenda.parcelaContemplacao)} />
              <ResultRow label="Parcela pós-contemplação" value={formatBRL(resultadoVenda.parcelaPosContemplacao)} />
              <ResultRow label="Total aportado até contemplar" value={formatBRL(resultadoVenda.totalAportado)} />
              <ResultRow label="Aporte sobre o crédito atualizado" value={formatPercent(resultadoVenda.aporteSobreCreditoPct)} />
              <ResultRow label="Rendimento equivalente" value={`${formatPercent(resultadoVenda.rendimentoEquivalenteAM)} a.m.`} />

              <div className="rounded-xl bg-[var(--color-muted)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
                  Consórcio vs. aplicação financeira
                </p>
                <div className="mt-3 space-y-2.5">
                  <div>
                    <div className="flex items-center justify-between text-xs font-medium text-[var(--color-ink)]">
                      <span>Consórcio (lucro sobre o aporte)</span>
                      <span>{formatPercent(resultadoVenda.lucroPercentual)}</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-[var(--color-border)]">
                      <div
                        className="h-2 rounded-full bg-[var(--color-primary)]"
                        style={{ width: `${barConsorcio}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs font-medium text-[var(--color-ink)]">
                      <span>
                        Aplicação a {rendimentoComparativo ?? 0}% a.a. ({formatPercent(resultadoVenda.rendimentoComparativoAM)} a.m.)
                      </span>
                      <span>{formatPercent(resultadoVenda.lucroFinanceiroComparativoPct)}</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-[var(--color-border)]">
                      <div className="h-2 rounded-full bg-[var(--color-steel)]" style={{ width: `${barAplicacao}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              <ResultRow label="Patrimônio construído (valor futuro do imóvel)" value={formatBRL(resultadoAlavancagem.valorFuturoImovel)} highlight />
              <p className="-mt-1 px-1 text-xs leading-relaxed text-[var(--color-ink)]/65">
                Desembolso efetivo de {formatBRL(resultadoAlavancagem.dinheiroDoBolso, 0)} — o aluguel ajuda a pagar o
                resto e o imóvel vira <strong>{formatBRL(resultadoAlavancagem.valorFuturoImovel, 0)}</strong>.
              </p>
              <ResultRow label="Aluguel líquido acumulado" value={formatBRL(resultadoAlavancagem.aluguelLiquidoAcumulado)} />
              <ResultRow label="Total pago no consórcio" value={formatBRL(resultadoAlavancagem.totalPagoConsorcio)} />
              <ResultRow label="Dinheiro do bolso" value={formatBRL(resultadoAlavancagem.dinheiroDoBolso)} highlight />

              <div className="rounded-xl bg-[var(--color-muted)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
                  Quebra da operação
                </p>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-ink)]/70">Aluguel bruto acumulado</span>
                    <span className="font-medium text-[var(--color-ink)]">{formatBRL(resultadoAlavancagem.aluguelBrutoAcumulado)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-ink)]/70">− Imposto pago total</span>
                    <span className="font-medium text-[var(--color-ink)]">− {formatBRL(resultadoAlavancagem.impostoTotal)}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-2">
                    <span className="text-[var(--color-ink)]/70">% do patrimônio já pago no consórcio</span>
                    <span className="font-medium text-[var(--color-ink)]">{formatPercent(resultadoAlavancagem.percentualPatrimonioPago)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-ink)]/70">Custo de oportunidade (vender + aplicar)</span>
                    <span className="font-medium text-[var(--color-ink)]">{formatBRL(resultadoAlavancagem.custoOportunidade)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-[var(--color-accent)]/10 p-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
                    Do bolso sobre o patrimônio futuro
                  </p>
                  <p className="mt-1 text-lg font-bold text-[var(--color-ink)]">
                    {formatPercent(resultadoAlavancagem.percentualBolsoSobreFuturo)}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${seloConfig.classes}`}>
                  {seloConfig.label}
                </span>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs leading-relaxed text-[var(--color-ink)]/70">
            <strong>Simulação, não promessa.</strong> Os números desta tela são uma projeção calculada a partir dos
            dados que você preencheu. Cada administradora aplica regras próprias — forma e limite de lance, vagas no
            grupo, índice de correção e condições da parcela reduzida — e o mês da contemplação depende do
            comportamento do grupo, ninguém garante. O ágio na venda da carta oscila com o mercado. Use esta
            calculadora como referência e confirme sempre as condições no regulamento do grupo com um consultor da
            Revla.
          </p>

          <CTAButton
            href={whatsappLink("Olá! Vim pelo site, simulei um consórcio na calculadora e gostaria de falar com um consultor da Revla.")}
            external
            className="mt-5 w-full"
          >
            Conversar com um consultor sobre esta simulação
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-muted)] px-3 py-2.5">
      <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-ink)]/55">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-[var(--color-ink)]">{value}</p>
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-xl px-4 py-3 ${
        highlight ? "bg-[var(--color-accent)]/12" : "bg-[var(--color-muted)]"
      }`}
    >
      <span className="text-sm text-[var(--color-ink)]/75">{label}</span>
      <span className={`text-sm font-bold ${highlight ? "text-[var(--color-accent-dark)]" : "text-[var(--color-ink)]"}`}>
        {value}
      </span>
    </div>
  );
}
