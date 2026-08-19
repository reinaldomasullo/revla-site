"use client";

import { useMemo, useState } from "react";
import NumberField from "./NumberField";
import { formatBRL, formatPercent, SALARIO_MINIMO } from "./formatters";
import {
  calcularCenarioAlavancagem,
  calcularCenarioVenda,
} from "./calculo";
import { whatsappLink } from "@/lib/site-config";
import CTAButton from "@/components/CTAButton";

type Cenario = "venda" | "alavancagem";

export default function Calculadora() {
  const [cenario, setCenario] = useState<Cenario>("venda");

  const [credito, setCredito] = useState(200000);
  const [indiceCorrecao, setIndiceCorrecao] = useState(5);
  const [parcelaReduzida, setParcelaReduzida] = useState(50);
  const [prazoTotal, setPrazoTotal] = useState(180);
  const [taxaAdministrativa, setTaxaAdministrativa] = useState(18);
  const [lanceEmbutido, setLanceEmbutido] = useState(25);
  const [mesContemplacao, setMesContemplacao] = useState(12);
  const [agioVenda, setAgioVenda] = useState(15);
  const [rendimentoComparativo, setRendimentoComparativo] = useState(11);

  const [valorImovelContemplacao, setValorImovelContemplacao] = useState(300000);
  const [valorizacaoAnual, setValorizacaoAnual] = useState(6);
  const [aluguelMensal, setAluguelMensal] = useState(1800);
  const [reajusteAluguel, setReajusteAluguel] = useState(4.5);
  const [impostoAluguel, setImpostoAluguel] = useState(15);
  const [prazoRestante, setPrazoRestante] = useState(60);

  const resultadoVenda = useMemo(
    () =>
      calcularCenarioVenda({
        credito,
        indiceCorrecao,
        parcelaReduzida,
        prazoTotal,
        taxaAdministrativa,
        lanceEmbutido,
        mesContemplacao,
        agioVenda,
        rendimentoComparativo,
      }),
    [
      credito,
      indiceCorrecao,
      parcelaReduzida,
      prazoTotal,
      taxaAdministrativa,
      lanceEmbutido,
      mesContemplacao,
      agioVenda,
      rendimentoComparativo,
    ]
  );

  const resultadoAlavancagem = useMemo(
    () =>
      calcularCenarioAlavancagem({
        credito,
        indiceCorrecao,
        parcelaReduzida,
        prazoTotal,
        taxaAdministrativa,
        lanceEmbutido,
        mesContemplacao,
        agioVenda,
        rendimentoComparativo,
        valorImovelContemplacao,
        valorizacaoAnual,
        aluguelMensal,
        reajusteAluguel,
        impostoAluguel,
        prazoRestante,
      }),
    [
      credito,
      indiceCorrecao,
      parcelaReduzida,
      prazoTotal,
      taxaAdministrativa,
      lanceEmbutido,
      mesContemplacao,
      agioVenda,
      rendimentoComparativo,
      valorImovelContemplacao,
      valorizacaoAnual,
      aluguelMensal,
      reajusteAluguel,
      impostoAluguel,
      prazoRestante,
    ]
  );

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
            cenario === "venda"
              ? "bg-[var(--color-primary)] text-white"
              : "text-[var(--color-ink)]/70"
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
            cenario === "alavancagem"
              ? "bg-[var(--color-primary)] text-white"
              : "text-[var(--color-ink)]/70"
          }`}
        >
          Alavancagem patrimonial
        </button>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
            Dados do consórcio
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <NumberField label="Crédito" value={credito} onChange={setCredito} suffix="R$" step={1000} />
            </div>
            <NumberField label="Índice de correção" value={indiceCorrecao} onChange={setIndiceCorrecao} suffix="% a.a." step={0.1} helpText="Referência: INCC" />
            <NumberField label="Parcela reduzida" value={parcelaReduzida} onChange={setParcelaReduzida} suffix="%" />
            <NumberField label="Prazo total" value={prazoTotal} onChange={setPrazoTotal} suffix="meses" />
            <NumberField label="Taxa administrativa" value={taxaAdministrativa} onChange={setTaxaAdministrativa} suffix="%" step={0.5} />
            <NumberField label="Lance embutido" value={lanceEmbutido} onChange={setLanceEmbutido} suffix="%" />
            <NumberField label="Mês da contemplação" value={mesContemplacao} onChange={setMesContemplacao} suffix="mês" />

            {cenario === "venda" && (
              <>
                <NumberField label="Ágio na venda" value={agioVenda} onChange={setAgioVenda} suffix="%" />
                <NumberField
                  label="Rendimento comparativo"
                  value={rendimentoComparativo}
                  onChange={setRendimentoComparativo}
                  suffix="% a.a."
                  step={0.1}
                  helpText="Referência: CDB/Tesouro"
                />
              </>
            )}
          </div>

          {cenario === "alavancagem" && (
            <>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
                Dados do imóvel
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <NumberField
                    label="Valor do imóvel na contemplação"
                    value={valorImovelContemplacao}
                    onChange={setValorImovelContemplacao}
                    suffix="R$"
                    step={1000}
                  />
                </div>
                <NumberField label="Valorização anual" value={valorizacaoAnual} onChange={setValorizacaoAnual} suffix="% a.a." step={0.1} helpText="Referência: FipeZap" />
                <NumberField label="Prazo restante" value={prazoRestante} onChange={setPrazoRestante} suffix="meses" />
                <NumberField label="Aluguel mensal" value={aluguelMensal} onChange={setAluguelMensal} suffix="R$" step={50} />
                <NumberField label="Reajuste do aluguel" value={reajusteAluguel} onChange={setReajusteAluguel} suffix="% a.a." step={0.1} helpText="Referência: IPCA" />
                <NumberField label="Imposto sobre aluguel" value={impostoAluguel} onChange={setImpostoAluguel} suffix="%" />
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
              <ResultRow label="Parcela até a contemplação" value={formatBRL(resultadoVenda.parcelaReduzidaValor)} />
              <ResultRow label="Total pago até a contemplação" value={formatBRL(resultadoVenda.totalPagoAteContemplacao)} />
              <ResultRow label="Crédito corrigido na contemplação" value={formatBRL(resultadoVenda.creditoCorrigido)} />
              <ResultRow label="Valor de venda com ágio" value={formatBRL(resultadoVenda.valorVenda)} highlight />
              <ResultRow label="Lucro líquido do consórcio" value={formatBRL(resultadoVenda.lucroLiquidoConsorcio)} highlight />
              <ResultRow
                label="Lucro em aplicação comparativa"
                value={formatBRL(resultadoVenda.lucroInvestimentoComparativo)}
              />
              <ResultRow
                label="Diferença a favor do consórcio"
                value={formatBRL(resultadoVenda.diferencaAbsoluta)}
                highlight
              />
              <ResultRow
                label="Diferença sobre o valor pago"
                value={formatPercent(resultadoVenda.ganhoPercentualSobrePago)}
              />
              <ResultRow
                label="Lucro líquido em salários mínimos"
                value={`${(resultadoVenda.lucroLiquidoConsorcio / SALARIO_MINIMO).toFixed(1)} salários`}
              />
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              <ResultRow label="Valor futuro do imóvel" value={formatBRL(resultadoAlavancagem.valorFuturoImovel)} highlight />
              <ResultRow label="Renda de aluguel acumulada (líquida)" value={formatBRL(resultadoAlavancagem.rendaAluguelAcumulada)} />
              <ResultRow label="Desembolso no período restante" value={formatBRL(resultadoAlavancagem.desembolsoRestante)} />
              <ResultRow
                label="% financiado pelo aluguel"
                value={formatPercent(resultadoAlavancagem.percentualFinanciadoPeloAluguel)}
                highlight
              />
              <ResultRow
                label="Patrimônio líquido projetado"
                value={formatBRL(resultadoAlavancagem.patrimonioLiquidoProjetado)}
                highlight
              />
            </div>
          )}

          <p className="mt-6 text-xs leading-relaxed text-[var(--color-ink)]/70">
            <strong>Simulação, não promessa.</strong> Os resultados são estimativas educativas
            e não consideram variáveis fora do controle da Revla, como disponibilidade de
            vagas no grupo, momento real da contemplação, oscilações do mercado imobiliário e
            vacância. Fale com um consultor para uma simulação personalizada.
          </p>

          <CTAButton
            href={whatsappLink("Olá! Fiz uma simulação de consórcio no site e quero conversar com um consultor.")}
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
      <span
        className={`text-sm font-bold ${
          highlight ? "text-[var(--color-accent-dark)]" : "text-[var(--color-ink)]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
