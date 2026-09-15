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
    startingPrice: "R$ 883,53",
    rows: [
      { faixa: "Até 43 anos", enfermaria: "R$ 883,53", apartamento: "R$ 1.055,50" },
      { faixa: "44 a 58 anos", enfermaria: "R$ 1.162,60", apartamento: "R$ 1.389,60" },
      { faixa: "59 anos em diante", enfermaria: "R$ 1.529,75", apartamento: "R$ 1.828,43" },
    ],
  },
  {
    codigo: "1025",
    nome: "Prevent Senior 1025",
    areas: "São Paulo, Santo André, São Bernardo do Campo, São Caetano do Sul, Santos e Praia Grande",
    ansEnfermaria: "505.407/25-9",
    ansApartamento: "505.408/25-7",
    startingPrice: "R$ 759,84",
    rows: [
      { faixa: "Até 43 anos", enfermaria: "R$ 759,84", apartamento: "R$ 907,73" },
      { faixa: "44 a 58 anos", enfermaria: "R$ 999,84", apartamento: "R$ 1.195,06" },
      { faixa: "59 anos em diante", enfermaria: "R$ 1.315,59", apartamento: "R$ 1.572,45" },
    ],
  },
];

export function getPlanoDeSaudePlano(codigo: PlanoCodigo): PlanoDeSaudePlano {
  const plano = planoDeSaudePlanos.find((p) => p.codigo === codigo);
  if (!plano) throw new Error(`Plano desconhecido: ${codigo}`);
  return plano;
}

export type PlanoDeSaudeCidade = {
  slug: string;
  nome: string;
  /** Quais planos Prevent Senior atendem essa cidade. */
  planos: PlanoCodigo[];
  /** Parágrafo de contexto único por cidade — nunca reaproveitado entre páginas. */
  contexto: string;
  faqEspecifica: { question: string; answer: string };
};

export const planoDeSaudeCidades: PlanoDeSaudeCidade[] = [
  {
    slug: "sao-paulo",
    nome: "São Paulo",
    planos: ["1025", "maes"],
    contexto:
      "O escritório da Revla fica na Avenida Paulista, em São Paulo — quem mora na capital pode agendar atendimento presencial pra tirar dúvidas sobre os planos Prevent Senior com um consultor, além da opção de fazer tudo por WhatsApp e videochamada. São Paulo é atendida pelos dois planos, 1025 e MA+S.",
    faqEspecifica: {
      question: "Posso ser atendido presencialmente em São Paulo?",
      answer:
        "Sim. O escritório da Revla fica na Avenida Paulista, em São Paulo, e é possível agendar atendimento presencial além da consultoria remota por WhatsApp e videochamada.",
    },
  },
  {
    slug: "santo-andre",
    nome: "Santo André",
    planos: ["1025", "maes"],
    contexto:
      "Santo André faz parte da região do ABC, onde a Revla já atende clientes em diversos produtos. Os dois planos Prevent Senior — 1025 e MA+S — têm rede própria na cidade, com contratação por consultoria remota.",
    faqEspecifica: {
      question: "A Prevent Senior tem rede própria em Santo André?",
      answer:
        "Sim. Os dois planos, 1025 e MA+S, incluem Santo André na área de cobertura, com a mesma rede própria disponível em São Paulo.",
    },
  },
  {
    slug: "sao-bernardo-do-campo",
    nome: "São Bernardo do Campo",
    planos: ["1025", "maes"],
    contexto:
      "São Bernardo do Campo também está na região do ABC atendida pela Revla. Os planos 1025 e MA+S da Prevent Senior cobrem a cidade, e a contratação pode ser feita inteiramente por WhatsApp e videochamada, sem necessidade de deslocamento.",
    faqEspecifica: {
      question: "A Revla atende outras cidades do ABC além de São Bernardo?",
      answer:
        "Sim, além de São Bernardo do Campo já atendemos clientes em outras cidades da região do ABC, como Santo André e São Caetano do Sul.",
    },
  },
  {
    slug: "sao-caetano-do-sul",
    nome: "São Caetano do Sul",
    planos: ["1025", "maes"],
    contexto:
      "São Caetano do Sul, também na região do ABC, está dentro da área de cobertura dos dois planos Prevent Senior — 1025 e MA+S —, com a mesma rede própria e condições disponíveis em São Paulo e nas demais cidades do ABC.",
    faqEspecifica: {
      question: "Moro em São Caetano do Sul, qual plano Prevent Senior escolher?",
      answer:
        "Os dois planos atendem São Caetano do Sul. O 1025 costuma ter mensalidade menor e cobre a região de São Paulo e Baixada Santista; o MA+S custa um pouco mais e amplia a cobertura para Rio de Janeiro e Niterói também.",
    },
  },
  {
    slug: "santos",
    nome: "Santos",
    planos: ["1025", "maes"],
    contexto:
      "Santos está na Baixada Santista, região onde os dois planos Prevent Senior têm rede própria. O atendimento é feito por consultoria remota, com o mesmo suporte completo oferecido em São Paulo, da simulação até a contratação.",
    faqEspecifica: {
      question: "A Prevent Senior tem hospital ou rede própria em Santos?",
      answer:
        "Sim, Santos está na área de cobertura dos dois planos — 1025 e MA+S —, com rede própria da Prevent Senior disponível na Baixada Santista.",
    },
  },
  {
    slug: "praia-grande",
    nome: "Praia Grande",
    planos: ["1025", "maes"],
    contexto:
      "Praia Grande, na Baixada Santista, também está coberta pelos dois planos Prevent Senior — 1025 e MA+S. A contratação e o acompanhamento são feitos remotamente, por WhatsApp e videochamada, com suporte de um consultor da Revla.",
    faqEspecifica: {
      question: "Quem mora em Praia Grande também usa a rede de Santos?",
      answer:
        "Sim, a área de cobertura da Baixada Santista inclui Santos e Praia Grande nos dois planos, então quem mora em Praia Grande também tem acesso à rede própria da região.",
    },
  },
  {
    slug: "rio-de-janeiro",
    nome: "Rio de Janeiro",
    planos: ["maes"],
    contexto:
      "No Rio de Janeiro, apenas o plano MA+S está disponível — é o único dos dois planos Prevent Senior com abrangência fora do eixo São Paulo/Baixada Santista. O atendimento é feito por consultoria remota, com um consultor da Revla acompanhando toda a simulação e contratação.",
    faqEspecifica: {
      question: "Por que só um dos planos Prevent Senior atende o Rio de Janeiro?",
      answer:
        "O plano 1025 tem abrangência restrita à região de São Paulo e Baixada Santista. Só o MA+S amplia a cobertura para fora desse eixo, incluindo Rio de Janeiro e Niterói — por isso é a única opção pra quem mora na cidade.",
    },
  },
  {
    slug: "niteroi",
    nome: "Niterói",
    planos: ["maes"],
    contexto:
      "Assim como no Rio de Janeiro, em Niterói só o plano MA+S está disponível, já que é o único com abrangência além da região de São Paulo e Baixada Santista. Toda a simulação e contratação são feitas remotamente, por WhatsApp e videochamada.",
    faqEspecifica: {
      question: "Moro em Niterói, posso contratar o plano 1025?",
      answer:
        "Não — o 1025 cobre apenas a região de São Paulo e Baixada Santista. Em Niterói, a opção disponível é o plano MA+S, que tem abrangência maior e inclui também o Rio de Janeiro.",
    },
  },
];

export function getPlanoDeSaudeCidade(slug: string): PlanoDeSaudeCidade | undefined {
  return planoDeSaudeCidades.find((c) => c.slug === slug);
}
