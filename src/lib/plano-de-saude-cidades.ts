// ATUALIZAÇÃO 10/11/2026: as páginas passaram de 8 para 5 cidades (São Paulo,
// Santo André/Grande ABC, Santos, Praia Grande, Rio de Janeiro/Niterói). A
// pesquisa de volume abaixo é histórica e explica a decisão de unir as cidades
// de pouca busca (10 a 100 por mês) às vizinhas.
//
// Dados das páginas de cidade do Plano de Saúde Prevent Senior (Estratégia 1
// — Onda 6). Pesquisa de palavras-chave (Google Ads Keyword Planner, 15/09)
// testou dois padrões de busca pra cada uma das 8 cidades atendidas pela
// Prevent Senior: o termo genérico ("plano de saúde + cidade") e o termo de
// marca ("prevent senior + cidade") — esperado, já que é um convênio
// tradicionalmente pesquisado por quem já conhece o nome, muito usado por
// idosos e famílias. As 8 cidades têm volume real em pelo menos um dos dois
// padrões, então nenhuma ficou de fora:
//
//   Cidade                  | "plano de saúde"  | "prevent senior"
//   São Paulo               | 1 mil – 10 mil     | 100 – 1 mil
//   Rio de Janeiro          | 1 mil – 10 mil     | 100 – 1 mil
//   Santos                  | 100 – 1 mil        | 1 mil – 10 mil
//   Praia Grande            | 100 – 1 mil        | 100 – 1 mil
//   Santo André             | 10 – 100           | 100 – 1 mil
//   São Bernardo do Campo   | sem dado           | 10 – 100  (só aparece pela marca)
//   São Caetano do Sul      | 10 – 100           | sem dado  (só aparece pelo termo genérico)
//   Niterói                 | 10 – 100           | 10 – 100
//
// Áreas de cobertura reais dos planos (mesma fonte usada em /plano-de-saude):
//   1025: São Paulo, Santo André, São Bernardo do Campo, São Caetano do Sul,
//         Santos e Praia Grande.
//   MA+S: as 6 acima + Rio de Janeiro e Niterói (abrangência maior).
// Ou seja, Rio de Janeiro e Niterói só têm o plano MA+S disponível — as
// outras 6 cidades têm as duas opções.

export type PlanoCodigo = "1025" | "maes";

export type PlanoDeSaudeTier = {
  faixa: string;
  enfermaria: string;
  apartamento: string;
};

export type PlanoDeSaudePlano = {
  codigo: PlanoCodigo;
  nome: string;
  areas: string;
  ansEnfermaria: string;
  ansApartamento: string;
  startingPrice: string;
  rows: PlanoDeSaudeTier[];
};

// Fonte única dos dois planos — reaproveitada tanto pela página nacional
// (/plano-de-saude) quanto pelas páginas de cidade, pra nunca haver
// divergência de preço/ANS entre elas.
export const planoDeSaudePlanos: PlanoDeSaudePlano[] = [
  {
    codigo: "maes",
    nome: "Prevent MA+S",
    areas:
      "São Paulo, Santo André, São Bernardo do Campo, São Caetano do Sul, Santos, Praia Grande, Rio de Janeiro e Niterói",
    ansEnfermaria: "505.028/25-6",
    ansApartamento: "505.029/25-4",
    startingPrice: "R$ 928,65",
    rows: [
      { faixa: "Até 43 anos", enfermaria: "R$ 928,65", apartamento: "R$ 1.109,44" },
      { faixa: "44 a 58 anos", enfermaria: "R$ 1.222,01", apartamento: "R$ 1.460,61" },
      { faixa: "59 anos em diante", enfermaria: "R$ 1.607,92", apartamento: "R$ 1.921,86" },
    ],
  },
  {
    codigo: "1025",
    nome: "Prevent Senior 1025",
    areas: "São Paulo, Santo André, São Bernardo do Campo, São Caetano do Sul, Santos e Praia Grande",
    ansEnfermaria: "505.407/25-9",
    ansApartamento: "505.408/25-7",
    startingPrice: "R$ 798,67",
    rows: [
      { faixa: "Até 43 anos", enfermaria: "R$ 798,67", apartamento: "R$ 954,12" },
      { faixa: "44 a 58 anos", enfermaria: "R$ 1.050,93", apartamento: "R$ 1.256,13" },
      { faixa: "59 anos em diante", enfermaria: "R$ 1.382,82", apartamento: "R$ 1.652,80" },
    ],
  },
];

export function getPlanoDeSaudePlano(codigo: PlanoCodigo): PlanoDeSaudePlano {
  const plano = planoDeSaudePlanos.find((p) => p.codigo === codigo);
  if (!plano) throw new Error(`Plano desconhecido: ${codigo}`);
  return plano;
}

// Selo de atualização exibido junto da tabela de preços (hub nacional e as 8
// páginas de cidade) — sinal de frescor de conteúdo, tanto para SEO quanto
// para IA generativa: concorrentes de nicho (ex. corretoras especializadas
// em Prevent Senior) costumam anunciar isso já no título da própria página
// ("Tabela de Preços Prevent Senior 2026: Atualizada em Setembro"). Fonte
// única aqui pra nunca desalinhar entre as páginas — atualizar manualmente
// sempre que os valores de `planoDeSaudePlanos` acima mudarem de verdade.
export const PRECOS_ATUALIZADO_EM = "novembro de 2026";

export type PlanoDeSaudeCidade = {
  slug: string;
  nome: string;
  /** Texto usado só no title da página, quando a página cobre uma região (ex.: Grande ABC). */
  tituloLocal?: string;
  /** Quais planos Prevent Senior atendem essa cidade. */
  planos: PlanoCodigo[];
  /** Parágrafo de contexto único por cidade — nunca reaproveitado entre páginas. */
  contexto: string;
  /** Hospitais e pronto-atendimentos listados na consulta oficial de rede (nome e bairro). */
  hospitais: string[];
  /** Observação sobre a lista de hospitais, única por cidade. */
  redeNota: string;
  faqs: { question: string; answer: string }[];
};

// Hospitais conferidos na consulta oficial de rede da Prevent Senior
// (preventsenior.com.br/rede-de-atendimento, aba Locais; planos 1025 e MA+S;
// serviços Internação Clínica e Pronto Atendimento/Pronto Socorro) em
// 10/11/2026. A consulta muda com o tempo: a lista é de referência e a
// consulta oficial prevalece. Em Santos, Praia Grande e Santo André a consulta
// lista hospitais credenciados. As unidades próprias (Sancta Maggiore e Núcleos)
// aparecem nas páginas oficiais de cada plano (prevent-senior-1025 e prevent-mais):
// em São Paulo, no Rio, em Santos (Núcleo Cascais) e na Baixada (Hospital Dia
// Cascais). Santo André e Praia Grande não têm unidade própria listada lá. As antigas páginas de São Bernardo do
// Campo, São Caetano do Sul e Niterói foram unidas a Santo André (Grande ABC)
// e Rio de Janeiro em 10/11/2026 (redirecionamentos em next.config.ts).
export const planoDeSaudeCidades: PlanoDeSaudeCidade[] = [
  {
    slug: "sao-paulo",
    nome: "São Paulo",
    planos: ["1025", "maes"],
    contexto:
      "A capital concentra a maior parte da rede da Prevent Senior, com hospitais Sancta Maggiore e Núcleos de Medicina Avançada e Diagnóstica próprios. Os dois planos, 1025 e MA+S, valem em São Paulo. O escritório da Revla fica na Avenida Paulista, e a simulação também pode ser feita por WhatsApp e videochamada.",
    hospitais: [
      "Hospital Sancta Maggiore Amsterdã (Cerqueira César)",
      "Hospital Sancta Maggiore Madrid (Liberdade)",
      "Hospital Sancta Maggiore Roma (Mooca)",
      "Hospital Sancta Maggiore Paris (Vila da Saúde)",
      "Hospital Sancta Maggiore Dubai (Real Parque)",
      "Hospital Sancta Maggiore Rússia (Butantã)",
      "Núcleo de Medicina Avançada e Diagnóstica Alemanha (Alameda Santos)",
      "Núcleo de Medicina Avançada e Diagnóstica Londres (Pinheiros)",
      "Núcleo de Medicina Avançada e Diagnóstica Istambul (Tatuapé)",
      "Núcleo de Medicina Avançada e Diagnóstica Brasil (Ibirapuera)",
      "Pronto Atendimento Sancta Maggiore Chicago (Santana)",
      "Pronto Atendimento Sancta Maggiore Buenos Aires (Belenzinho)",
      "Hospital e Maternidade Sepaco (Vila Mariana)",
      "Hospital e Maternidade Cruz Azul (Cambuci)",
      "Hospital Santa Clara (Vila Matilde)",
    ],
    redeNota:
      "Hospitais Sancta Maggiore e Núcleos são unidades próprias da operadora, segundo o site oficial; Sepaco, Cruz Azul e Santa Clara são hospitais credenciados. A lista completa, com todos os bairros, está na consulta oficial.",
    faqs: [
      {
        question: "Posso ser atendido presencialmente em São Paulo?",
        answer:
          "Sim. O escritório da Revla fica na Avenida Paulista, em São Paulo, e é possível agendar atendimento presencial além da consultoria remota por WhatsApp e videochamada.",
      },
      {
        question: "Quais hospitais da Prevent Senior atendem em São Paulo?",
        answer:
          "Na consulta oficial da rede, a capital reúne hospitais Sancta Maggiore em bairros como Cerqueira César, Liberdade, Mooca, Vila da Saúde, Real Parque e Butantã, além de hospitais credenciados como Sepaco, Cruz Azul e Santa Clara. A rede muda com o tempo, então a consulta oficial deve ser conferida antes de contratar.",
      },
    ],
  },
  {
    slug: "santo-andre",
    nome: "Santo André",
    tituloLocal: "Santo André e Grande ABC",
    planos: ["1025", "maes"],
    contexto:
      "Esta página atende Santo André e o Grande ABC. Os dois planos, 1025 e MA+S, cobrem Santo André, São Bernardo do Campo e São Caetano do Sul. O site oficial da Prevent Senior lista um ponto de vendas em Santo André, na Avenida Atlântica, e a consulta de rede mostra hospitais na região, incluindo o Hospital Sancta Maggiore Pequim, em São Bernardo do Campo.",
    hospitais: [
      "Hospital Acácias, Santo André (Silveira)",
      "Centro Clínico Avançado Santo André, NotreDame Intermédica (Centro)",
      "Hospital Sancta Maggiore Pequim, São Bernardo do Campo (Rudge Ramos)",
      "Hospital São Bernardo, NotreDame Intermédica, São Bernardo do Campo (Centro)",
      "Hospital Santa Ana, São Caetano do Sul (São José)",
    ],
    redeNota:
      "Santo André, São Bernardo do Campo e São Caetano do Sul aparecem como municípios separados na consulta oficial. A lista é de referência.",
    faqs: [
      {
        question: "Moro em São Bernardo do Campo ou São Caetano do Sul, esta página serve para mim?",
        answer:
          "Sim. Os planos 1025 e MA+S cobrem as três cidades, e a simulação é a mesma. As páginas antigas de São Bernardo do Campo e São Caetano do Sul foram reunidas aqui para concentrar as informações do Grande ABC.",
      },
      {
        question: "Onde fica o atendimento da Prevent Senior em Santo André?",
        answer:
          "O site oficial da Prevent Senior lista um ponto de vendas em Santo André, na Avenida Atlântica, 195, na Vila Valparaíso. Para consultas e internação, a consulta de rede mostra o Hospital Acácias e o Centro Clínico Avançado da NotreDame Intermédica na cidade. A Revla simula e acompanha a contratação por WhatsApp e videochamada.",
      },
    ],
  },
  {
    slug: "santos",
    nome: "Santos",
    planos: ["1025", "maes"],
    contexto:
      "Santos está na Baixada Santista, região coberta pelos dois planos Prevent Senior. A Prevent Senior tem em Santos o Núcleo de Medicina Avançada e Diagnóstica Cascais e dois pontos de venda, e a consulta de rede lista hospitais credenciados em bairros como Campo Grande, Boqueirão e Vila Belmiro. A contratação e o acompanhamento podem ser feitos por WhatsApp e videochamada.",
    hospitais: [
      "Núcleo de Medicina Avançada e Diagnóstica Cascais, unidade própria (Santos)",
      "Hospital Ana Costa, unidade Santos (Campo Grande)",
      "Hospital Casa de Saúde Santos (Boqueirão)",
      "Hospital Frei Galvão, NotreDame Intermédica (Boqueirão)",
      "Associação Policial de Assistência à Saúde da Baixada Santista (Vila Belmiro)",
    ],
    redeNota:
      "O Núcleo Cascais vem do site oficial do plano e atende consultas e exames; os hospitais vêm da consulta de rede. O Hospital Dia Sancta Maggiore Cascais, também próprio, atende a Baixada Santista. A lista é de referência.",
    faqs: [
      {
        question: "A Prevent Senior tem hospital em Santos?",
        answer:
          "Em Santos há o Núcleo de Medicina Avançada e Diagnóstica Cascais, unidade própria com consultas e exames, e hospitais na consulta de rede, como Ana Costa (Campo Grande), Casa de Saúde Santos e Frei Galvão (Boqueirão). O site oficial cita ainda o Hospital Dia Sancta Maggiore Cascais, para cirurgias de pequeno e médio porte, na Baixada Santista.",
      },
      {
        question: "Onde contratar o plano Prevent Senior em Santos?",
        answer:
          "O site oficial lista dois pontos de venda em Santos: Rua Jorge Tibiriçá, 5, no Gonzaga, e Alameda Armênio Mendes, 66, na Aparecida. A Revla também faz a simulação e acompanha a contratação por WhatsApp e videochamada.",
      },
    ],
  },
  {
    slug: "praia-grande",
    nome: "Praia Grande",
    planos: ["1025", "maes"],
    contexto:
      "Praia Grande, na Baixada Santista, é coberta pelos dois planos Prevent Senior. A consulta de rede lista na cidade a Casa de Saúde Praia Grande, no Mirim, e o Pronto Socorro Ana Costa da Praia Grande, na Aviação. Os pontos de venda e a unidade própria listados no site oficial para a região ficam em Santos.",
    hospitais: [
      "Hospital Casa de Saúde Praia Grande (Mirim)",
      "Pronto Socorro Ana Costa da Praia Grande (Aviação)",
      "Núcleo de Medicina Avançada e Diagnóstica Cascais, unidade própria em Santos",
    ],
    redeNota:
      "A lista de Praia Grande é curta porque a consulta oficial mostra poucos locais na cidade. A unidade de Santos vem do site oficial do plano.",
    faqs: [
      {
        question: "Tem hospital da Prevent Senior em Praia Grande ou preciso ir a Santos?",
        answer:
          "Há dois locais listados em Praia Grande na consulta de rede: a Casa de Saúde Praia Grande, com internação clínica e pronto atendimento, e o Pronto Socorro Ana Costa. Os pontos de venda e o Núcleo Cascais, unidade própria, ficam em Santos, na mesma região de cobertura.",
      },
      {
        question: "Como contratar em Praia Grande sem ir a São Paulo?",
        answer:
          "Você envia idade e cidade pelo WhatsApp, recebe a simulação dos planos 1025 e MA+S e acompanha a proposta com o consultor por mensagem e videochamada, sem precisar ir ao escritório da Revla na Avenida Paulista.",
      },
    ],
  },
  {
    slug: "rio-de-janeiro",
    nome: "Rio de Janeiro",
    tituloLocal: "Rio de Janeiro e Niterói",
    planos: ["maes"],
    contexto:
      "Esta página atende o Rio de Janeiro e Niterói. Nessas duas cidades só o plano MA+S está disponível, porque o 1025 vale apenas para São Paulo e Baixada Santista. O site oficial do plano lista no Rio o Hospital Dia Sancta Maggiore São Francisco, no BarraShopping, e o Núcleo Malibu. A consulta de rede mostra o Centro Médico Prevent Senior Havaí, em Botafogo, e hospitais credenciados em bairros como Tijuca, Méier, Barra da Tijuca e Jacarepaguá.",
    hospitais: [
      "Hospital Dia Sancta Maggiore São Francisco, Rio de Janeiro (BarraShopping)",
      "Núcleo de Medicina Avançada e Diagnóstica Malibu, Rio de Janeiro",
      "Centro Médico Prevent Senior Havaí, Rio de Janeiro (Botafogo)",
      "Hospital Pasteur, Rio de Janeiro (Méier)",
      "Hospital Panamericano, Rio de Janeiro (Tijuca)",
      "Hospital Dr Badim, Rio de Janeiro (Maracanã)",
      "Hospital de Clínicas de Jacarepaguá, Rio de Janeiro (Taquara)",
      "Hospital Casa São Bernardo, Rio de Janeiro (Barra da Tijuca)",
      "Casa de Saúde e Maternidade Santa Martha, Niterói (Santa Rosa)",
      "Hospital de Clínicas Alameda, Niterói (Fonseca)",
    ],
    redeNota:
      "Unidades próprias conforme o site oficial do plano MA+S; hospitais conforme a consulta de rede, onde os de Niterói são credenciados. A lista completa é maior.",
    faqs: [
      {
        question: "Por que só um dos planos Prevent Senior atende o Rio de Janeiro?",
        answer:
          "O plano 1025 tem abrangência restrita a São Paulo e Baixada Santista. Só o MA+S amplia a área para o Rio de Janeiro e Niterói, por isso ele é a opção para quem mora ou vai usar o plano no Rio.",
      },
      {
        question: "Moro em Niterói, esta página serve para mim?",
        answer:
          "Sim. O MA+S também cobre Niterói, e a consulta oficial lista na cidade a Casa de Saúde e Maternidade Santa Martha (Santa Rosa) e o Hospital de Clínicas Alameda (Fonseca). A página antiga de Niterói foi reunida a esta.",
      },
    ],
  },
];

export function getPlanoDeSaudeCidade(slug: string): PlanoDeSaudeCidade | undefined {
  return planoDeSaudeCidades.find((c) => c.slug === slug);
}
