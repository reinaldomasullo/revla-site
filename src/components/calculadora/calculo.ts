// Lógica de simulação do consórcio.
// Estas fórmulas reconstroem, da forma mais fiel possível, o comportamento
// descrito da calculadora original do site. Antes de publicar, compare os
// resultados com a ferramenta original em alguns cenários de referência.

export type CenarioVendaInput = {
  credito: number; // R$
  indiceCorrecao: number; // % a.a. (ex: INCC)
  parcelaReduzida: number; // % de redução da parcela até a contemplação
  prazoTotal: number; // meses
  taxaAdministrativa: number; // % total sobre o crédito
  lanceEmbutido: number; // % do crédito usado como lance embutido
  mesContemplacao: number; // mês em que ocorre a contemplação
  agioVenda: number; // % de ágio na venda da carta contemplada
  rendimentoComparativo: number; // % a.a. (ex: CDB/Tesouro)
};

export type CenarioVendaResultado = {
  parcelaCheia: number;
  parcelaReduzidaValor: number;
  totalPagoAteContemplacao: number;
  creditoLiquido: number;
  creditoCorrigido: number;
  valorVenda: number;
  lucroLiquidoConsorcio: number;
  valorFuturoInvestimento: number;
  lucroInvestimentoComparativo: number;
  diferencaAbsoluta: number;
  ganhoPercentualSobrePago: number;
};

export function calcularCenarioVenda(input: CenarioVendaInput): CenarioVendaResultado {
  const {
    credito,
    indiceCorrecao,
    parcelaReduzida,
    prazoTotal,
    taxaAdministrativa,
    lanceEmbutido,
    mesContemplacao,
    agioVenda,
    rendimentoComparativo,
  } = input;

  const valorTotalAPagar = credito * (1 + taxaAdministrativa / 100);
  const parcelaCheia = prazoTotal > 0 ? valorTotalAPagar / prazoTotal : 0;
  const parcelaReduzidaValor = parcelaCheia * (1 - parcelaReduzida / 100);
  const totalPagoAteContemplacao = parcelaReduzidaValor * mesContemplacao;

  const lanceEmbutidoValor = credito * (lanceEmbutido / 100);
  const creditoLiquido = credito - lanceEmbutidoValor;
  const creditoCorrigido =
    creditoLiquido * Math.pow(1 + indiceCorrecao / 100, mesContemplacao / 12);
  const valorVenda = creditoCorrigido * (1 + agioVenda / 100);
  const lucroLiquidoConsorcio = valorVenda - totalPagoAteContemplacao;

  const iMensal = Math.pow(1 + rendimentoComparativo / 100, 1 / 12) - 1;
  const valorFuturoInvestimento =
    iMensal > 0
      ? parcelaReduzidaValor * ((Math.pow(1 + iMensal, mesContemplacao) - 1) / iMensal)
      : parcelaReduzidaValor * mesContemplacao;
  const lucroInvestimentoComparativo = valorFuturoInvestimento - totalPagoAteContemplacao;

  const diferencaAbsoluta = lucroLiquidoConsorcio - lucroInvestimentoComparativo;
  // Expressa a diferença como % do que foi efetivamente desembolsado até a
  // contemplação — denominador estável, evita percentuais irreais quando o
  // lucro da aplicação comparativa fica próximo de zero.
  const baseEstavel = totalPagoAteContemplacao > 1 ? totalPagoAteContemplacao : 1;
  const ganhoPercentualSobrePago = (diferencaAbsoluta / baseEstavel) * 100;

  return {
    parcelaCheia,
    parcelaReduzidaValor,
    totalPagoAteContemplacao,
    creditoLiquido,
    creditoCorrigido,
    valorVenda,
    lucroLiquidoConsorcio,
    valorFuturoInvestimento,
    lucroInvestimentoComparativo,
    diferencaAbsoluta,
    ganhoPercentualSobrePago,
  };
}

export type CenarioAlavancagemInput = CenarioVendaInput & {
  valorImovelContemplacao: number; // R$
  valorizacaoAnual: number; // % a.a. (ex: FipeZap)
  aluguelMensal: number; // R$
  reajusteAluguel: number; // % a.a. (ex: IPCA)
  impostoAluguel: number; // %
  prazoRestante: number; // meses após a contemplação
};

export type CenarioAlavancagemResultado = {
  valorFuturoImovel: number;
  rendaAluguelAcumulada: number;
  desembolsoRestante: number;
  percentualFinanciadoPeloAluguel: number;
  patrimonioLiquidoProjetado: number;
};

export function calcularCenarioAlavancagem(
  input: CenarioAlavancagemInput
): CenarioAlavancagemResultado {
  const {
    valorImovelContemplacao,
    valorizacaoAnual,
    aluguelMensal,
    reajusteAluguel,
    impostoAluguel,
    prazoRestante,
    credito,
    taxaAdministrativa,
    prazoTotal,
  } = input;

  const valorFuturoImovel =
    valorImovelContemplacao * Math.pow(1 + valorizacaoAnual / 100, prazoRestante / 12);

  let rendaAluguelAcumulada = 0;
  for (let mes = 1; mes <= prazoRestante; mes += 1) {
    const anosCompletos = Math.floor((mes - 1) / 12);
    const aluguelCorrigido = aluguelMensal * Math.pow(1 + reajusteAluguel / 100, anosCompletos);
    rendaAluguelAcumulada += aluguelCorrigido * (1 - impostoAluguel / 100);
  }

  const valorTotalAPagar = credito * (1 + taxaAdministrativa / 100);
  const parcelaCheia = prazoTotal > 0 ? valorTotalAPagar / prazoTotal : 0;
  const desembolsoRestante = parcelaCheia * prazoRestante;

  const percentualFinanciadoPeloAluguel =
    desembolsoRestante > 0
      ? Math.min(100, (rendaAluguelAcumulada / desembolsoRestante) * 100)
      : 0;

  const patrimonioLiquidoProjetado =
    valorFuturoImovel - Math.max(0, desembolsoRestante - rendaAluguelAcumulada);

  return {
    valorFuturoImovel,
    rendaAluguelAcumulada,
    desembolsoRestante,
    percentualFinanciadoPeloAluguel,
    patrimonioLiquidoProjetado,
  };
}
