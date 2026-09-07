"use client";

import { useMemo, useState } from "react";
import NumberField from "@/components/calculadora/NumberField";
import CurrencyField from "@/components/calculadora/CurrencyField";
import { formatBRL, formatPercent } from "@/components/calculadora/formatters";
import {
  calcularConsorcioVeiculo,
  calcularFinanciamento,
  ENTRADA_FINANCIAMENTO_VEICULO_PCT,
  INPC_REFERENCIA_PCT,
  MES_LIMITE_REDUCAO_VEICULO,
  PARCELA_REDUZIDA_PADRAO_PCT,
  PRAZO_FINANCIAMENTO_VEICULO_MESES,
  PRAZO_TOTAL_VEICULO,
  TAXA_ADMINISTRATIVA_VEICULO_PCT,
  TAXA_JUROS_FINANCIAMENTO_VEICULO_AM_PCT,
} from "./calculoVeiculos";
import { whatsappLink } from "@/lib/site-config";
import CTAButton from "@/components/CTAButton";

export default function CalculadoraVeiculos() {
  // Único campo de valor — usado como crédito do consórcio e como valor do veículo no
  // financiamento, pra comparar sempre em cima do mesmo valor total a ser contratado.
  const [valor, setValor] = useState<number | null>(null);
  // Único outro campo aberto: mês da contemplação (aleatório na vida real, então faz
  // sentido deixar o usuário explorar cenários).
  const [mesContemplacao, setMesContemplacao] = useState<number | null>(null);

  const entrada = useMemo(() => (valor ?? 0) * (ENTRADA_FINANCIAMENTO_VEICULO_PCT / 100), [valor]);

  const resultadoConsorcio = useMemo(
    () =>
      calcularConsorcioVeiculo({
        credito: valor ?? 0,
        indiceCorrecao: INPC_REFERENCIA_PCT,
        percentualParcela: PARCELA_REDUZIDA_PADRAO_PCT,
        mesContemplacao: mesContemplacao ?? 0,
      }),
    [valor, mesContemplacao]
  );

  const resultadoFinanciamento = useMemo(
    () =>
      calcularFinanciamento({
        valorVeiculo: valor ?? 0,
        entrada,
        taxaJurosMensal: TAXA_JUROS_FINANCIAMENTO_VEICULO_AM_PCT,
        prazoMeses: PRAZO_FINANCIAMENTO_VEICULO_MESES,
      }),
    [valor, entrada]
  );

  const diferenca = resultadoFinanciamento.totalPago - resultadoConsorcio.totalPago90Meses;
  const consorcioMaisBarato = diferenca >= 0;
  const maiorTotal = Math.max(resultadoConsorcio.totalPago90Meses, resultadoFinanciamento.totalPago, 1);
  const barConsorcio = Math.min(100, (resultadoConsorcio.totalPago90Meses / maiorTotal) * 100);
  const barFinanciamento = Math.min(100, (resultadoFinanciamento.totalPago / maiorTotal) * 100);

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5 sm:p-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
              Dados da simulação
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <CurrencyField label="Valor do veículo" value={valor} onChange={setValor} />
              </div>
              <NumberField
                label="Mês da contemplação"
                value={mesContemplacao}
                onChange={setMesContemplacao}
                suffix="mês"
                helpText="Depende do grupo — explore diferentes meses"
              />
              <InfoTile label="Prazo total (consórcio)" value={`${PRAZO_TOTAL_VEICULO} meses (fixo)`} />
              <InfoTile label="Taxa administrativa" value={`${formatPercent(TAXA_ADMINISTRATIVA_VEICULO_PCT, 0)} (fixa, sobre o crédito)`} />
              <InfoTile
                label="Parcela reduzida"
                value={`${formatPercent(PARCELA_REDUZIDA_PADRAO_PCT, 0)} (prática comum de mercado — só até o mês ${MES_LIMITE_REDUCAO_VEICULO} ou a contemplação)`}
              />
              <InfoTile
                label="Índice de correção"
                value={`${formatPercent(INPC_REFERENCIA_PCT)} a.a. (INPC, IBGE — acum. 12m ago/25 a jul/26, reajuste em jan)`}
              />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
              Dados do financiamento (comparação)
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InfoTile label="Entrada" value={`${formatPercent(ENTRADA_FINANCIAMENTO_VEICULO_PCT, 0)} do veículo — ${formatBRL(entrada, 0)} (piso recomendado, Comprecar 2026)`} />
              <InfoTile label="Prazo do financiamento" value={`${PRAZO_FINANCIAMENTO_VEICULO_MESES} meses (financiamento tradicional)`} />
              <div className="sm:col-span-2">
                <InfoTile
                  label="Taxa de juros"
                  value={`${formatPercent(TAXA_JUROS_FINANCIAMENTO_VEICULO_AM_PCT, 1)} a.m. (≈27,7% a.a., Banco Central — jan/2026)`}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
            Resultado da comparação
          </h2>

          <div className="mt-4 rounded-xl bg-[var(--color-primary)]/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
              {consorcioMaisBarato ? "Consórcio sai mais barato" : "Financiamento sai mais barato"}
            </p>
            <p className="mt-1 text-2xl font-bold text-[var(--color-primary)]">{formatBRL(Math.abs(diferenca), 0)}</p>
            <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink)]/65">
              de diferença no total pago ao final, comparando os {PRAZO_TOTAL_VEICULO} meses do consórcio com os{" "}
              {PRAZO_FINANCIAMENTO_VEICULO_MESES} meses do financiamento.
            </p>
          </div>

          <div className="mt-4 space-y-2.5">
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-[var(--color-ink)]">
                <span>Consórcio — total pago em {PRAZO_TOTAL_VEICULO} meses</span>
                <span>{formatBRL(resultadoConsorcio.totalPago90Meses, 0)}</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-[var(--color-border)]">
                <div className="h-2 rounded-full bg-[var(--color-primary)]" style={{ width: `${barConsorcio}%` }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-[var(--color-ink)]">
                <span>Financiamento — total pago em {PRAZO_FINANCIAMENTO_VEICULO_MESES} meses</span>
                <span>{formatBRL(resultadoFinanciamento.totalPago, 0)}</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-[var(--color-border)]">
                <div className="h-2 rounded-full bg-[var(--color-steel)]" style={{ width: `${barFinanciamento}%` }} />
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[var(--color-muted)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">Consórcio</p>
              <div className="mt-3 space-y-2 text-sm">
                <RowMini label="Parcela reduzida" value={formatBRL(resultadoConsorcio.parcelaReduzida)} />
                {resultadoConsorcio.temFaseCheiaAntesContemplacao && (
                  <RowMini
                    label={`Parcela cheia (do mês ${resultadoConsorcio.mesFimReducao + 1})`}
                    value={formatBRL(resultadoConsorcio.parcelaCheiaAntesContemplacao)}
                  />
                )}
                <RowMini label="Parcela pós-contemplação" value={formatBRL(resultadoConsorcio.parcelaPosContemplacao)} />
                <RowMini label="Crédito atualizado na contemplação" value={formatBRL(resultadoConsorcio.creditoAtualizadoNaContemplacao)} />
                <RowMini label="Custo além do valor do veículo" value={formatBRL(resultadoConsorcio.custoAlemDoCredito)} />
              </div>
            </div>
            <div className="rounded-xl bg-[var(--color-muted)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">Financiamento</p>
              <div className="mt-3 space-y-2 text-sm">
                <RowMini label="Valor financiado" value={formatBRL(resultadoFinanciamento.valorFinanciado)} />
                <RowMini label="Parcela mensal fixa" value={formatBRL(resultadoFinanciamento.parcelaMensal)} />
                <RowMini label="Total de juros pagos" value={formatBRL(resultadoFinanciamento.totalJuros)} />
                <RowMini label="Total pago (com entrada)" value={formatBRL(resultadoFinanciamento.totalPago)} />
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-[var(--color-ink)]/70">
            <strong>Simulação, não promessa.</strong> No consórcio, o veículo só é liberado na contemplação — que
            depende do comportamento do grupo, ninguém garante o mês exato — enquanto no financiamento o veículo sai
            na hora. Os campos fixos acima usam referências de mercado pesquisadas (fonte e período indicados em
            cada um); confirme sempre as condições reais com sua instituição financeira e com um consultor da Revla
            antes de decidir.
          </p>

          <CTAButton
            href={whatsappLink("Olá! Vim pelo site, comparei consórcio de veículo com financiamento na calculadora e gostaria de falar com um consultor da Revla.")}
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

function RowMini({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-[var(--color-ink)]/70">{label}</span>
      <span className="shrink-0 whitespace-nowrap text-right font-medium text-[var(--color-ink)]">{value}</span>
    </div>
  );
}
