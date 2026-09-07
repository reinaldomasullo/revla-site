// Lógica de simulação do consórcio.
//
// Fórmulas replicadas de uma calculadora de referência (modelo "Ademicon") que o
// usuário validou como correta — extraídas diretamente do código-fonte dela, não
// estimadas. Principais regras que fogem do senso comum e por isso merecem nota:
//
// - O lance embutido é calculado sobre a CATEGORIA (crédito + taxa administrativa),
//   não só sobre o crédito puro.
// - A "parcela reduzida" reduz APENAS a parte do crédito (fundo comum); a taxa
//   administrativa continua sendo cobrada cheia mesmo na fase reduzida.
// - A parcela pós-contemplação é o saldo devedor (categoria - já pago - lance)
//   dividido pelos meses restantes — não é simplesmente a "parcela cheia" original.
// - O ágio de venda da carta é um percentual APLICADO SOBRE o crédito atualizado
//   (não somado a ele) — ex.: ágio de 35% sobre um crédito atualizado de
//   R$315.500 gera venda de R$110.425, não de R$425.925.

function fatorMes(indiceAA: number, mes: number): number {
  // Correção composta com passo mensal a partir do índice anual, sem correção no mês 1.
  return Math.pow(1 + indiceAA / 100, (mes - 1) / 12);
}

function fatorAnoDegrau(taxaAA: number, mes: number): number {
  // Crescimento anual em degraus (reajuste uma vez por ano, ex.: aluguel).
  return Math.pow(1 + taxaAA / 100, Math.floor((mes - 1) / 12));
}

export type SimulacaoInput = {
  credito: number; // R$
  indiceCorrecao: number; // % a.a. (ex: INCC)
  percentualParcela: number; // % da parcela cheia que é paga na fase reduzida (100 = sem redução)
  prazoTotal: number; // meses
  taxaAdministrativa: number; // % total sobre o crédito
  lanceEmbutido: number; // % (sobre crédito + taxa administrativa)
  mesContemplacao: number; // mês em que ocorre a contemplação
  agioVenda: number; // % aplicado sobre o crédito atualizado, na venda da carta
  rendimentoComparativo: number; // % a.a. (ex: CDB/Tesouro)
};

export type ResultadoVenda = {
  prazoRestante: number;
  lanceEmbutidoValor: number;
  creditoLiquido: number;
  creditoAtualizado: number;
  parcelaInicial: number;
  parcelaContemplacao: number;
  parcelaPosContemplacao: number;
  totalAportado: number;
  valorVenda: number;
  lucroLiquido: number;
  lucroPercentual: number;
  rendimentoEquivalenteAM: number;
  aporteSobreCreditoPct: number;
  lucroFinanceiroComparativoPct: number;
  rendimentoComparativoAM: number;
};

export function calcularCenarioVenda(input: SimulacaoInput): ResultadoVenda {
  const {
    credito,
    indiceCorrecao,
    percentualParcela,
    prazoTotal,
    taxaAdministrativa,
    lanceEmbutido,
    mesContemplacao,
    agioVenda,
    rendimentoComparativo,
  } = input;

  const prazoRestante = Math.max(0, prazoTotal - mesContemplacao);

  const lanceEmbutidoValor = credito * (1 + taxaAdministrativa / 100) * (lanceEmbutido / 100);
  const creditoLiquido = Math.max(0, credito - lanceEmbutidoValor);
  const creditoAtualizado =
    creditoLiquido * Math.pow(1 + indiceCorrecao / 100, Math.floor(mesContemplacao / 12));

  const parcelaReduzidaBase =
    prazoTotal > 0
      ? (credito * (percentualParcela / 100) + credito * (taxaAdministrativa / 100)) / prazoTotal
      : 0;
  const parcelaInicial = parcelaReduzidaBase;
  const parcelaContemplacao = parcelaReduzidaBase * fatorMes(indiceCorrecao, mesContemplacao);

  const totalDevidoConsorcio = credito * (1 + taxaAdministrativa / 100);
  const pagoAntesContemplacao = parcelaReduzidaBase * mesContemplacao;
  const parcelaPosContemplacao =
    prazoRestante > 0
      ? Math.max(0, totalDevidoConsorcio - pagoAntesContemplacao - lanceEmbutidoValor) / prazoRestante
      : 0;

  let totalAportado = 0;
  for (let mes = 1; mes <= mesContemplacao; mes += 1) {
    totalAportado += parcelaReduzidaBase * fatorMes(indiceCorrecao, mes);
  }

  const valorVenda = creditoAtualizado * (agioVenda / 100);
  const lucroLiquido = valorVenda - totalAportado;
  const lucroPercentual = totalAportado > 0 ? (lucroLiquido / totalAportado) * 100 : 0;
  const rendimentoEquivalenteAM = mesContemplacao > 0 ? lucroPercentual / mesContemplacao : 0;
  const aporteSobreCreditoPct = creditoAtualizado > 0 ? (totalAportado / creditoAtualizado) * 100 : 0;

  const finalFinanceiro = totalAportado * Math.pow(1 + rendimentoComparativo / 100, mesContemplacao / 12);
  const ganhoFinanceiro = finalFinanceiro - totalAportado;
  const lucroFinanceiroComparativoPct = totalAportado > 0 ? (ganhoFinanceiro / totalAportado) * 100 : 0;
  const rendimentoComparativoAM = (Math.pow(1 + rendimentoComparativo / 100, 1 / 12) - 1) * 100;

  return {
    prazoRestante,
    lanceEmbutidoValor,
    creditoLiquido,
    creditoAtualizado,
    parcelaInicial,
    parcelaContemplacao,
    parcelaPosContemplacao,
    totalAportado,
    valorVenda,
    lucroLiquido,
    lucroPercentual,
    rendimentoEquivalenteAM,
    aporteSobreCreditoPct,
    lucroFinanceiroComparativoPct,
    rendimentoComparativoAM,
  };
}

export type AlavancagemInput = SimulacaoInput & {
  valorImovel: number; // R$
  valorizacaoAnual: number; // % a.a. (ex: FipeZap)
  aluguelPercentual: number; // % ao mês sobre o valor do imóvel
  reajusteAluguel: number; // % a.a. (ex: IPCA)
  impostoAluguel: number; // %
};

export type ResultadoAlavancagem = {
  prazoRestante: number;
  aluguelMensalInicial: number;
  aluguelBrutoAcumulado: number;
  impostoTotal: number;
  aluguelLiquidoAcumulado: number;
  valorFuturoImovel: number;
  totalPagoConsorcio: number;
  dinheiroDoBolso: number;
  percentualBolsoSobreFuturo: number;
  percentualPatrimonioPago: number;
  custoOportunidade: number;
  selo: "excelente" | "bom" | "atencao";
};

export function calcularCenarioAlavancagem(
  input: AlavancagemInput,
  valorVendaCarta: number
): ResultadoAlavancagem {
  const {
    credito,
    indiceCorrecao,
    prazoTotal,
    taxaAdministrativa,
    mesContemplacao,
    rendimentoComparativo,
    valorImovel,
    valorizacaoAnual,
    aluguelPercentual,
    reajusteAluguel,
    impostoAluguel,
  } = input;

  const prazoRestante = Math.max(0, prazoTotal - mesContemplacao);

  const aluguelMensalInicial = valorImovel * (aluguelPercentual / 100);
  let aluguelBrutoAcumulado = 0;
  for (let mes = 1; mes <= prazoRestante; mes += 1) {
    aluguelBrutoAcumulado += aluguelMensalInicial * fatorAnoDegrau(reajusteAluguel, mes);
  }

  const impostoTotal = aluguelBrutoAcumulado * (impostoAluguel / 100);
  const aluguelLiquidoAcumulado = aluguelBrutoAcumulado - impostoTotal;
  const valorFuturoImovel = valorImovel * Math.pow(1 + valorizacaoAnual / 100, prazoRestante / 12);

  const totalDevidoBase = credito * (1 + taxaAdministrativa / 100);
  const totalPagoConsorcio = totalDevidoBase * fatorMes(indiceCorrecao, mesContemplacao);
  const dinheiroDoBolso = totalPagoConsorcio - aluguelLiquidoAcumulado;
  const percentualBolsoSobreFuturo =
    valorFuturoImovel > 0 ? (dinheiroDoBolso / valorFuturoImovel) * 100 : 0;
  const percentualPatrimonioPago =
    valorFuturoImovel > 0 ? (totalPagoConsorcio / valorFuturoImovel) * 100 : 0;
  const custoOportunidade = valorVendaCarta * Math.pow(1 + rendimentoComparativo / 100, prazoRestante / 12);

  const selo: ResultadoAlavancagem["selo"] =
    percentualBolsoSobreFuturo <= 25 ? "excelente" : percentualBolsoSobreFuturo <= 50 ? "bom" : "atencao";

  return {
    prazoRestante,
    aluguelMensalInicial,
    aluguelBrutoAcumulado,
    impostoTotal,
    aluguelLiquidoAcumulado,
    valorFuturoImovel,
    totalPagoConsorcio,
    dinheiroDoBolso,
    percentualBolsoSobreFuturo,
    percentualPatrimonioPago,
    custoOportunidade,
    selo,
  };
}
