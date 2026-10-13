"use client";

import { useId, useState } from "react";

// Simulador da página /consorcios/brasileiros-no-japao.
// Regra usada (grupos de imóveis Ademicon vendidos pela Revla, out/2026):
// prazo de 220 meses, taxa de administração de 24,2% sobre a carta, parcela
// reduzida = 50% do fundo comum + taxa de administração cheia até a
// contemplação. A diferença do fundo comum não pago é diluída nas parcelas
// restantes depois da contemplação. Sem reajuste (INCC-DI, em janeiro) e
// sem seguro — avisado no texto. Condições variam por grupo.
const PRAZO_MESES = 220;
const TAXA_ADMINISTRACAO = 0.242;
const CAMBIO_PADRAO = 32; // ienes por real — referência editável pelo visitante
const MESES_CONTEMPLACAO = [12, 60, 120];
const CARTAS = [100_000, 150_000, 200_000, 250_000, 300_000, 350_000, 400_000, 500_000];

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const jpy = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 });

function calcular(carta: number) {
  const fundoComum = carta / PRAZO_MESES;
  const taxa = (carta * TAXA_ADMINISTRACAO) / PRAZO_MESES;
  const cheia = fundoComum + taxa;
  const reduzida = fundoComum / 2 + taxa;
  const aposContemplacao = MESES_CONTEMPLACAO.map((mes) => {
    const diferenca = (fundoComum / 2) * mes;
    return { mes, parcela: cheia + diferenca / (PRAZO_MESES - mes) };
  });
  return { cheia, reduzida, aposContemplacao };
}

export default function SimuladorJapao() {
  const idCarta = useId();
  const idCambio = useId();
  const [carta, setCarta] = useState(100_000);
  const [cambio, setCambio] = useState(CAMBIO_PADRAO);

  const { cheia, reduzida, aposContemplacao } = calcular(carta);
  const cambioValido = Number.isFinite(cambio) && cambio > 0 ? cambio : CAMBIO_PADRAO;
  const emIenes = (valor: number) => `¥ ${jpy.format(Math.round(valor * cambioValido))}`;

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={idCarta} className="block text-sm font-semibold text-[var(--color-ink)]">
            Valor da carta de crédito
          </label>
          <select
            id={idCarta}
            value={carta}
            onChange={(e) => setCarta(Number(e.target.value))}
            className="mt-2 h-12 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 text-base text-[var(--color-ink)]"
          >
            {CARTAS.map((valor) => (
              <option key={valor} value={valor}>
                {brl.format(valor)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={idCambio} className="block text-sm font-semibold text-[var(--color-ink)]">
            Câmbio (ienes por real)
          </label>
          <input
            id={idCambio}
            type="number"
            inputMode="decimal"
            min={1}
            step={0.1}
            value={cambio}
            onChange={(e) => setCambio(Number(e.target.value))}
            className="mt-2 h-12 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 text-base text-[var(--color-ink)]"
            aria-describedby={`${idCambio}-ajuda`}
          />
          <p id={`${idCambio}-ajuda`} className="mt-1 text-xs text-[var(--color-ink)]/60">
            Valor de referência. Ajuste pelo câmbio do dia.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2" aria-live="polite">
        <div className="rounded-xl bg-[var(--color-muted)] p-5">
          <p className="text-sm text-[var(--color-ink)]/70">Parcela reduzida até a contemplação</p>
          <p className="mt-1 text-2xl font-bold text-[var(--color-primary)]">{brl.format(reduzida)}</p>
          <p className="text-sm text-[var(--color-ink)]/70">cerca de {emIenes(reduzida)}</p>
        </div>
        <div className="rounded-xl bg-[var(--color-muted)] p-5">
          <p className="text-sm text-[var(--color-ink)]/70">Parcela cheia</p>
          <p className="mt-1 text-2xl font-bold text-[var(--color-primary)]">{brl.format(cheia)}</p>
          <p className="text-sm text-[var(--color-ink)]/70">cerca de {emIenes(cheia)}</p>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto" tabIndex={0} role="region" aria-label="Tabela de parcelas depois da contemplação">
        <table className="w-full min-w-[420px] text-left text-sm">
          <caption className="mb-2 text-left text-sm font-semibold text-[var(--color-ink)]">
            Parcela depois da contemplação, conforme o mês em que ela acontece
          </caption>
          <thead>
            <tr className="border-b border-[var(--color-border)] text-[var(--color-ink)]/70">
              <th scope="col" className="py-2 pr-4 font-medium">Contemplação no mês</th>
              <th scope="col" className="py-2 pr-4 font-medium">Parcela em reais</th>
              <th scope="col" className="py-2 font-medium">Em ienes</th>
            </tr>
          </thead>
          <tbody>
            {aposContemplacao.map(({ mes, parcela }) => (
              <tr key={mes} className="border-b border-[var(--color-border)]">
                <td className="py-2 pr-4">{mes}</td>
                <td className="py-2 pr-4 font-semibold">{brl.format(parcela)}</td>
                <td className="py-2">{emIenes(parcela)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--color-ink)]/60">
        Simulação ilustrativa com prazo de 220 meses e taxa de administração de 24,2%, condições da maioria dos
        grupos de imóveis com que a Revla trabalha hoje na Ademicon. As condições variam por grupo. Os valores não
        incluem o reajuste anual pelo INCC-DI, aplicado em janeiro sobre a carta e a parcela, nem o seguro
        prestamista, obrigatório depois da contemplação. A data da contemplação não é previsível.
      </p>
    </div>
  );
}
