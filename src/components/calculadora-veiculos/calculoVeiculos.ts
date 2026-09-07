// Lógica da calculadora de consórcio de VEÍCULOS — foco em COMPARAÇÃO COM FINANCIAMENTO.
//
// Diferente da calculadora de consórcio de imóveis (que foca em venda da carta contemplada
// e alavancagem patrimonial), esta calculadora compara o custo total de adquirir o veículo
// via consórcio versus via financiamento tradicional (Tabela Price, parcela fixa).
//
// Regras específicas do consórcio de veículos, confirmadas com o usuário:
// - Taxa administrativa fixa: 16% do valor da carta, diluída igualmente ao longo de todo
//   o prazo (mesma lógica de diluição usada no consórcio de imóveis, só que com percentual
//   diferente: lá é 24,2%).
// - Prazo total fixo: 90 meses.
// - A parcela reduzida reduz só a parte do crédito (fundo comum); a taxa administrativa
//   nunca é reduzida, é sempre cobrada cheia — mesma regra do consórcio de imóveis.
// - DIFERENÇA IMPORTANTE em relação aos imóveis: no consórcio de veículos a parcela
//   reduzida só vale até a 24ª parcela (ou até a contemplação, se ocorrer antes) — depois
//   do mês 24, se ainda não contemplou, a parcela volta a ser cheia (sem redução) até a
//   contemplação. No consórcio de imóveis não existe esse limite: lá a redução vale até
//   contemplar, não importa quando.
// - Correção do crédito: a Ademicon usa o INPC pra veículos (o INCC é só pra imóveis), com
//   reajuste em degrau uma vez por ano (em janeiro), não correção mês a mês.

function fatorAnoDegrau(indiceAA: number, mes: number): number {
  // Reajuste anual em degrau (uma correção por ano, aplicada em janeiro no consórcio real).
  return Math.pow(1 + indiceAA / 100, Math.floor((mes - 1) / 12));
}

export const TAXA_ADMINISTRATIVA_VEICULO_PCT = 16; // % total sobre o crédito, fixo
export const PRAZO_TOTAL_VEICULO = 90; // meses, fixo
export const MES_LIMITE_REDUCAO_VEICULO = 24; // parcela reduzida só vale até aqui, ou até contemplar antes

export type ConsorcioVeiculoInput = {
  credito: number; // R$ (valor do veículo / carta de crédito)
  indiceCorrecao: number; // % a.a. (referência: INPC)
  percentualParcela: number; // % da parcela cheia paga na fase reduzida (100 = sem redução)
  mesContemplacao: number; // mês em que ocorre a contemplação
};

export type ResultadoConsorcioVeiculo = {
  mesFimReducao: number;
  temFaseCheiaAntesContemplacao: boolean;
  parcelaReduzida: number;
  parcelaCheiaAntesContemplacao: number;
  parcelaPosContemplacao: number;
  totalAportadoAteContemplar: number;
  creditoAtualizadoNaContemplacao: number;
  prazoRestante: number;
  totalPago90Meses: number;
  custoAlemDoCredito: number; // totalPago90Meses - credito (taxa administrativa + correção)
};

export function calcularConsorcioVeiculo(input: ConsorcioVeiculoInput): ResultadoConsorcioVeiculo {
  const { credito, indiceCorrecao, percentualParcela, mesContemplacao } = input;

  const mesFimReducao = Math.min(MES_LIMITE_REDUCAO_VEICULO, mesContemplacao);
  const temFaseCheiaAntesContemplacao = mesContemplacao > MES_LIMITE_REDUCAO_VEICULO;
  const prazoRestante = Math.max(0, PRAZO_TOTAL_VEICULO - mesContemplacao);

  const parcelaReduzidaBase =
    (credito * (percentualParcela / 100) + credito * (TAXA_ADMINISTRATIVA_VEICULO_PCT / 100)) /
    PRAZO_TOTAL_VEICULO;

  const totalDevido = credito * (1 + TAXA_ADMINISTRATIVA_VEICULO_PCT / 100);
  const parcelaCheiaBase = totalDevido / PRAZO_TOTAL_VEICULO;

  let totalAportadoAteContemplar = 0;
  for (let mes = 1; mes <= mesContemplacao; mes += 1) {
    const base = mes <= mesFimReducao ? parcelaReduzidaBase : parcelaCheiaBase;
    totalAportadoAteContemplar += base * fatorAnoDegrau(indiceCorrecao, mes);
  }

  const creditoAtualizadoNaContemplacao = credito * fatorAnoDegrau(indiceCorrecao, mesContemplacao);
  const totalDevidoAtualizado = totalDevido * fatorAnoDegrau(indiceCorrecao, mesContemplacao);
  const saldoDevedor = Math.max(0, totalDevidoAtualizado - totalAportadoAteContemplar);
  const parcelaPosContemplacao = prazoRestante > 0 ? saldoDevedor / prazoRestante : 0;

  const totalPago90Meses = totalAportadoAteContemplar + parcelaPosContemplacao * prazoRestante;
  const custoAlemDoCredito = totalPago90Meses - credito;

  return {
    mesFimReducao,
    temFaseCheiaAntesContemplacao,
    parcelaReduzida: parcelaReduzidaBase,
    parcelaCheiaAntesContemplacao: parcelaCheiaBase * fatorAnoDegrau(indiceCorrecao, mesFimReducao + 1),
    parcelaPosContemplacao,
    totalAportadoAteContemplar,
    creditoAtualizadoNaContemplacao,
    prazoRestante,
    totalPago90Meses,
    custoAlemDoCredito,
  };
}

export type FinanciamentoInput = {
  valorVeiculo: number; // R$
  entrada: number; // R$
  taxaJurosMensal: number; // % a.m.
  prazoMeses: number; // meses
};

export type ResultadoFinanciamento = {
  valorFinanciado: number;
  parcelaMensal: number;
  totalPago: number; // parcelas + entrada
  totalJuros: number; // totalPago - valorVeiculo
};

export function calcularFinanciamento(input: FinanciamentoInput): ResultadoFinanciamento {
  const { valorVeiculo, entrada, taxaJurosMensal, prazoMeses } = input;
  const valorFinanciado = Math.max(0, valorVeiculo - entrada);
  const i = taxaJurosMensal / 100;

  // Tabela Price (parcela fixa) — padrão do financiamento de veículos (CDC) no Brasil.
  const parcelaMensal =
    prazoMeses > 0
      ? i > 0
        ? (valorFinanciado * i) / (1 - Math.pow(1 + i, -prazoMeses))
        : valorFinanciado / prazoMeses
      : 0;

  const totalPago = parcelaMensal * prazoMeses + entrada;
  const totalJuros = totalPago - valorVeiculo;

  return { valorFinanciado, parcelaMensal, totalPago, totalJuros };
}
