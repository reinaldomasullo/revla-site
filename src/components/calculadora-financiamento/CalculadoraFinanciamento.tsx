"use client";

import { useMemo, useState } from "react";
import NumberField from "@/components/calculadora/NumberField";
import CurrencyField from "@/components/calculadora/CurrencyField";
import { formatBRL, formatPercent } from "@/components/calculadora/formatters";
import { TAXA_ADMINISTRATIVA_PCT } from "@/components/calculadora/calculo";
import {
  calcularConsorcioImovelUso,
  calcularFinanciamentoSAC,
  calcularFinanciamentoSACRE,
  ENTRADA_FINANCIAMENTO_PCT,
  INDICE_CORRECAO_PADRAO_PCT,
  PARCELA_REDUZIDA_PADRAO_PCT,
  PRAZO_FINANCIAMENTO_MESES,
  PRAZO_TOTAL_PADRAO_MESES,
  TAXA_JUROS_SFH_AA_PCT,
  TR_REFERENCIA_PCT,
} from "./calculoFinanciamento";
import { whatsappLink } from "@/lib/site-config";
import CTAButton from "@/components/CTAButton";

export default function CalculadoraFinanciamento() {
  // Único campo de valor — usado tanto pro crédito do consórcio quanto pro valor do
  // imóvel financiado, pra comparar sempre em cima do mesmo valor total a ser contratado.
  const [valorImovel, setValorImovel] = useState<number | null>(null);
  // Único outro campo aberto: mês da contemplação (depende do grupo, então faz sentido
  // deixar o usuário explorar diferentes cenários).
  const [mesContemplacao, setMesContemplacao] = useState<number | null>(null);

  const consorcio = useMemo(
    () =>
      calcularConsorcioImovelUso({
        credito: valorImovel ?? 0,
        indiceCorrecao: INDICE_CORRECAO_PADRAO_PCT,
        percentualParcela: PARCELA_REDUZIDA_PADRAO_PCT,
        prazoTotal: PRAZO_TOTAL_PADRAO_MESES,
        mesContemplacao: mesContemplacao ?? 0,
      }),
    [valorImovel, mesContemplacao]
  );

  const sac = useMemo(
    () =>
      calcularFinanciamentoSAC({
        valorImovel: valorImovel ?? 0,
        taxaJurosAA: TAXA_JUROS_SFH_AA_PCT,
        trMensal: TR_REFERENCIA_PCT,
      }),
    [valorImovel]
  );

  const sacre = useMemo(
    () =>
      calcularFinanciamentoSACRE({
        valorImovel: valorImovel ?? 0,
        taxaJurosAA: TAXA_JUROS_SFH_AA_PCT,
        trMensal: TR_REFERENCIA_PCT,
      }),
    [valorImovel]
  );

  const opcoes = [
    { key: "consorcio", label: "Consórcio", total: consorcio.totalPagoPrazoTotal },
    { key: "sac", label: "Financiamento SAC", total: sac.totalPago },
    { key: "sacre", label: "Financiamento SACRE", total: sacre.totalPago },
  ];
  const maisBarata = opcoes.reduce((a, b) => (b.total < a.total ? b : a), opcoes[0]);
  const outrasOrdenadas = opcoes.filter((o) => o.key !== maisBarata.key).sort((a, b) => a.total - b.total);
  const proximaMaisBarata = outrasOrdenadas[0];
  const diferenca = Math.max(0, (proximaMaisBarata?.total ?? maisBarata.total) - maisBarata.total);
  const maiorTotal = Math.max(...opcoes.map((o) => o.total), 1);

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5 sm:p-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <CurrencyField label="Valor do imóvel" value={valorImovel} onChange={setValorImovel} />
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
              Dados do consórcio
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <NumberField
                label="Mês da contemplação"
                value={mesContemplacao}
                onChange={setMesContemplacao}
                suffix="mês"
                helpText="Depende do grupo — explore diferentes meses"
              />
              <InfoTile label="Prazo total" value={`${PRAZO_TOTAL_PADRAO_MESES} meses (referência de mercado, Ademicon)`} />
              <InfoTile label="Taxa administrativa" value={`${formatPercent(TAXA_ADMINISTRATIVA_PCT, 1)} (fixa, sobre o crédito)`} />
              <InfoTile
                label="Parcela reduzida"
                value={`${formatPercent(PARCELA_REDUZIDA_PADRAO_PCT, 0)} (prática comum de mercado até a contemplação)`}
              />
              <InfoTile
                label="Índice de correção"
                value={`${formatPercent(INDICE_CORRECAO_PADRAO_PCT)} a.a. (INCC-DI, FGV — acum. 12m ago/25 a jul/26)`}
              />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
              Dados do financiamento (SFH)
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InfoTile label="Entrada" value={`${formatPercent(ENTRADA_FINANCIAMENTO_PCT, 0)} do imóvel (fixa)`} />
              <InfoTile label="Prazo do financiamento" value={`${PRAZO_FINANCIAMENTO_MESES} meses / 35 anos (fixo)`} />
              <div className="sm:col-span-2">
                <InfoTile
                  label="Taxa de juros"
                  value={`${formatPercent(TAXA_JUROS_SFH_AA_PCT, 2)} a.a. + TR (Caixa, SBPE/SFH p/ novos clientes — mar/2026)`}
                />
              </div>
              <div className="sm:col-span-2">
                <InfoTile label="TR" value={`${formatPercent(TR_REFERENCIA_PCT, 2)} a.m. (TR média — set/2026)`} />
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
              {maisBarata.label} sai mais barato no total
            </p>
            <p className="mt-1 text-2xl font-bold text-[var(--color-primary)]">{formatBRL(maisBarata.total, 0)}</p>
            {proximaMaisBarata && (
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink)]/65">
                {formatBRL(diferenca, 0)} a menos que a segunda opção mais barata ({proximaMaisBarata.label}), somando
                todo o custo até a quitação.
              </p>
            )}
          </div>

          <div className="mt-4 space-y-2.5">
            {opcoes.map((opcao) => (
              <div key={opcao.key}>
                <div className="flex items-center justify-between text-xs font-medium text-[var(--color-ink)]">
                  <span>{opcao.label} — total pago</span>
                  <span>{formatBRL(opcao.total, 0)}</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-[var(--color-border)]">
                  <div
                    className={`h-2 rounded-full ${opcao.key === maisBarata.key ? "bg-[var(--color-primary)]" : "bg-[var(--color-steel)]"}`}
                    style={{ width: `${Math.min(100, (opcao.total / maiorTotal) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-[var(--color-muted)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">Consórcio</p>
              <div className="mt-3 space-y-3 text-sm">
                <StatMini label="Parcela reduzida" value={formatBRL(consorcio.parcelaReduzida)} />
                <StatMini label="Parcela pós-contemplação" value={formatBRL(consorcio.parcelaPosContemplacao)} />
                <StatMini label="Total pago no prazo" value={formatBRL(consorcio.totalPagoPrazoTotal, 0)} />
              </div>
            </div>
            <div className="rounded-xl bg-[var(--color-muted)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">Financiamento SAC</p>
              <div className="mt-3 space-y-3 text-sm">
                <StatMini label="1ª parcela" value={formatBRL(sac.primeiraParcela)} />
                <StatMini label="Última parcela" value={formatBRL(sac.ultimaParcela)} />
                <StatMini label="Total de juros" value={formatBRL(sac.totalJuros, 0)} />
                <StatMini label="Total pago (c/ entrada)" value={formatBRL(sac.totalPago, 0)} />
              </div>
            </div>
            <div className="rounded-xl bg-[var(--color-muted)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">Financiamento SACRE</p>
              <div className="mt-3 space-y-3 text-sm">
                <StatMini label="1ª parcela" value={formatBRL(sacre.primeiraParcela)} />
                <StatMini label="Última parcela" value={formatBRL(sacre.ultimaParcela)} />
                <StatMini label="Total de juros" value={formatBRL(sacre.totalJuros, 0)} />
                <StatMini label="Total pago (c/ entrada)" value={formatBRL(sacre.totalPago, 0)} />
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-[var(--color-ink)]/70">
            <strong>Simulação, não promessa.</strong> No consórcio, o imóvel só é liberado na contemplação — que
            depende do comportamento do grupo, ninguém garante o mês exato — enquanto no financiamento SFH o imóvel
            é adquirido de imediato, mediante aprovação de crédito. A taxa de juros e a TR do financiamento variam
            por banco e por período; confirme sempre as condições reais com sua instituição financeira e com um
            consultor da Revla antes de decidir.
          </p>

          <CTAButton
            href={whatsappLink("Olá! Vim pelo site, comparei consórcio de imóvel com financiamento SFH (SAC/SACRE) na calculadora e gostaria de falar com um consultor da Revla.")}
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

function StatMini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-[var(--color-ink)]/70">{label}</p>
      <p className="mt-0.5 font-semibold text-[var(--color-ink)]">{value}</p>
    </div>
  );
}
