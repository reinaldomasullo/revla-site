export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

export const formatPercent = (value: number) =>
  `${new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 }).format(
    Number.isFinite(value) ? value : 0
  )}%`;

// Salário mínimo nacional vigente — atualizar anualmente (valor 2026: R$ 1.621).
export const SALARIO_MINIMO = 1621;
