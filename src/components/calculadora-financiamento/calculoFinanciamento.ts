// Lógica da calculadora "Consórcio x Financiamento (SFH)".
//
// Compara o custo total de adquirir um imóvel por 3 caminhos: consórcio (pra usar o
// imóvel, não pra vender a carta), financiamento pelo SFH no sistema SAC e no sistema
// SACRE. Baseado em pesquisa de mercado (set/2026): taxa padrão SBPE/SFH da Caixa
// ≈ 11,49% a.a. + TR pra novos clientes; TR média ≈ 0,17% a.m.; entrada mínima de 20%
// (financia até 80% do imóvel); prazo máximo de 420 meses (35 anos). Esses três últimos
// são fixos nesta calculadora, replicando a regra padrão do SFH.
//
// - SAC (Sistema de Amortização Constante): amortização mensal constante (saldo devedor
//   dividido pelos meses restantes); juros incidem sobre o saldo, então a parcela cai
//   mês a mês.
// - SACRE (Sistema de Amortização Crescente, usado pela Caixa): a diferença real pro SAC
//   está na cadência da correção do saldo pela TR — em vez de mês a mês, a TR é aplicada
//   de uma vez por ano (no aniversário do contrato), e a amortização mensal é recalculada
//   nesse momento (saldo corrigido ÷ meses restantes), ficando praticamente estável
//   durante os 12 meses seguintes. Isso faz a parcela cair em "degraus" anuais, e não mês
//   a mês como no SAC — e o resultado fica, como esperado, entre o SAC (mais barato) e a
//   Tabela Price (mais cara).
// - No SAC, a TR é tratada como taxa mensal adicional sobre o saldo, combinada com os
//   juros contratuais numa taxa mensal efetiva (juros + TR compostos mês a mês) — mesma
//   lógica de composição de índices já usada no restante do site.

import {
  INCC_REFERENCIA_PCT,
  PARCELA_REDUZIDA_PADRAO_PCT,
  PRAZO_TOTAL_PADRAO_MESES,
  TAXA_ADMINISTRATIVA_PCT,
  fatorMes,
} from "@/components/calculadora/calculo";

export const ENTRADA_FINANCIAMENTO_PCT = 20; // % do valor do imóvel (financia-se até 80%)
export const PRAZO_FINANCIAMENTO_MESES = 420; // 35 anos — prazo máximo padrão do SFH
export const TAXA_JUROS_SFH_AA_PCT = 11.49; // taxa padrão SBPE/SFH da Caixa p/ novos clientes — mar/2026
export const TR_REFERENCIA_PCT = 0.17; // TR média — set/2026

// Reaproveita os mesmos padrões da calculadora de imóveis (consórcio), pra manter
// consistência entre as duas ferramentas: mesmo índice de correção, mesma parcela
// reduzida "padrão de mercado" e mesmo prazo de referência.
export {
  INCC_REFERENCIA_PCT as INDICE_CORRECAO_PADRAO_PCT,
  PARCELA_REDUZIDA_PADRAO_PCT,
  PRAZO_TOTAL_PADRAO_MESES,
};

export type ConsorcioImovelInput = {
  credito: number; // R$ (valor do imóvel/carta)
  indiceCorrecao: number; // % a.a. (ex: INCC)
  percentualParcela: number; // % da parcela cheia paga na fase reduzida (100 = sem redução)
  prazoTotal: number; // meses
  mesContemplacao: number; // mês em que ocorre a contemplação
};

export type ResultadoConsorcioImovel = {
  prazoRestante: number;
  parcelaReduzida: number;
  parcelaContemplacao: number;
  parcelaPosContemplacao: number;
  creditoAtualizado: number;
  totalPagoPrazoTotal: number;
};

export function calcularConsorcioImovelUso(input: ConsorcioImovelInput): ResultadoConsorcioImovel {
  const { credito, indiceCorrecao, percentualParcela, prazoTotal, mesContemplacao } = input;

  const prazoRestante = Math.max(0, prazoTotal - mesContemplacao);

  const parcelaReduzidaBase =
    prazoTotal > 0
      ? (credito * (percentualParcela / 100) + credito * (TAXA_ADMINISTRATIVA_PCT / 100)) / prazoTotal
      : 0;
  const parcelaContemplacao = parcelaReduzidaBase * fatorMes(indiceCorrecao, mesContemplacao);

  let totalAportadoAteContemplacao = 0;
  for (let mes = 1; mes <= mesContemplacao; mes += 1) {
    totalAportadoAteContemplacao += parcelaReduzidaBase * fatorMes(indiceCorrecao, mes);
  }

  const totalDevidoConsorcio = credito * (1 + TAXA_ADMINISTRATIVA_PCT / 100);
  const parcelaPosContemplacao =
    prazoRestante > 0
      ? Math.max(0, totalDevidoConsorcio - totalAportadoAteContemplacao) / prazoRestante
      : 0;

  const creditoAtualizado = credito * fatorMes(indiceCorrecao, mesContemplacao);
  const totalPagoPrazoTotal = totalAportadoAteContemplacao + parcelaPosContemplacao * prazoRestante;

  return {
    prazoRestante,
    parcelaReduzida: parcelaReduzidaBase,
    parcelaContemplacao,
    parcelaPosContemplacao,
    creditoAtualizado,
    totalPagoPrazoTotal,
  };
}

export type FinanciamentoSFHInput = {
  valorImovel: number; // R$
  taxaJurosAA: number; // % a.a. (taxa contratual, sem TR)
  trMensal: number; // % a.m. (TR)
};

export type ResultadoFinanciamentoSFH = {
  valorEntrada: number;
  valorFinanciado: number;
  primeiraParcela: number;
  ultimaParcela: number;
  totalJuros: number;
  totalPago: number; // entrada + soma de todas as parcelas
};

function taxaContratualMensal(taxaJurosAA: number): number {
  return Math.pow(1 + taxaJurosAA / 100, 1 / 12) - 1;
}

function taxaEfetivaMensal(taxaJurosAA: number, trMensal: number): number {
  const taxaJurosMensal = taxaContratualMensal(taxaJurosAA);
  return (1 + taxaJurosMensal) * (1 + trMensal / 100) - 1; // juros contratuais + TR, compostos mês a mês
}

export function calcularFinanciamentoSAC(input: FinanciamentoSFHInput): ResultadoFinanciamentoSFH {
  const { valorImovel, taxaJurosAA, trMensal } = input;
  const valorEntrada = valorImovel * (ENTRADA_FINANCIAMENTO_PCT / 100);
  const valorFinanciado = valorImovel - valorEntrada;
  const taxa = taxaEfetivaMensal(taxaJurosAA, trMensal);
  const prazoMeses = PRAZO_FINANCIAMENTO_MESES;

  const amortizacao = prazoMeses > 0 ? valorFinanciado / prazoMeses : 0;
  let saldo = valorFinanciado;
  let totalJuros = 0;
  let totalParcelas = 0;
  let primeiraParcela = 0;
  let ultimaParcela = 0;

  for (let mes = 1; mes <= prazoMeses; mes += 1) {
    const juros = saldo * taxa;
    const parcela = amortizacao + juros;
    totalJuros += juros;
    totalParcelas += parcela;
    if (mes === 1) primeiraParcela = parcela;
    if (mes === prazoMeses) ultimaParcela = parcela;
    saldo -= amortizacao;
  }

  return {
    valorEntrada,
    valorFinanciado,
    primeiraParcela,
    ultimaParcela,
    totalJuros,
    totalPago: valorEntrada + totalParcelas,
  };
}

export function calcularFinanciamentoSACRE(input: FinanciamentoSFHInput): ResultadoFinanciamentoSFH {
  const { valorImovel, taxaJurosAA, trMensal } = input;
  const valorEntrada = valorImovel * (ENTRADA_FINANCIAMENTO_PCT / 100);
  const valorFinanciado = valorImovel - valorEntrada;
  const taxaPura = taxaContratualMensal(taxaJurosAA); // juros contratuais, sem TR (a TR entra em bloco)
  const prazoMeses = PRAZO_FINANCIAMENTO_MESES;
  const blocoMeses = 12;

  let saldo = valorFinanciado;
  let totalJuros = 0;
  let totalParcelas = 0;
  let primeiraParcela = 0;
  let ultimaParcela = 0;
  let mes = 1;
  let primeiroBloco = true;

  while (mes <= prazoMeses) {
    const mesesRestantesTotal = prazoMeses - mes + 1;
    const mesesBloco = Math.min(blocoMeses, mesesRestantesTotal);

    // A cada aniversário do contrato (exceto o início), a TR acumulada do bloco anterior
    // corrige o saldo devedor de uma vez só — é essa correção "em degrau" que diferencia
    // o SACRE do SAC (que corrige mês a mês).
    if (!primeiroBloco) {
      saldo *= Math.pow(1 + trMensal / 100, blocoMeses);
    }
    primeiroBloco = false;

    const amortizacaoBloco = saldo / mesesRestantesTotal;

    for (let k = 0; k < mesesBloco; k += 1) {
      const juros = saldo * taxaPura;
      const parcela = amortizacaoBloco + juros;
      totalJuros += juros;
      totalParcelas += parcela;
      if (mes === 1) primeiraParcela = parcela;
      if (mes === prazoMeses) ultimaParcela = parcela;
      saldo -= amortizacaoBloco;
      mes += 1;
    }
  }

  return {
    valorEntrada,
    valorFinanciado,
    primeiraParcela,
    ultimaParcela,
    totalJuros,
    totalPago: valorEntrada + totalParcelas,
  };
}
