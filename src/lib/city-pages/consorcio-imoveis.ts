// Dados das páginas "Consórcio de Imóveis + cidade" (Estratégia 1 — SEO/GEO local).
// Cada cidade tem headline, CTA, intro e FAQ genuinamente diferentes — nunca é
// a mesma página com o nome da cidade trocado. Cidades escolhidas por terem
// demanda de busca local comprovada (concorrente real com página própria por
// cidade, pesquisado via WebSearch em 15/09): São Paulo, Santo André,
// Guarulhos e Osasco. Diadema e Mauá não mostraram esse sinal pra "imóveis"
// especificamente e por isso ainda não têm página própria aqui.
import type { Testimonial } from "@/components/Testimonials";

export type CityFaqItem = { question: string; answer: string };

export type ConsorcioImoveisCityPage = {
  citySlug: string;
  cityName: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  ctaLabel: string;
  whatsappMessage: string;
  introHeading: string;
  introParagraphs: string[];
  faqExtra: CityFaqItem;
  /** Só presente quando temos um cliente real e verificado naquela cidade —
   *  nunca inventado. Título da seção fica genérico ("clientes reais em X"),
   *  sem afirmar que o depoimento é especificamente sobre imóveis quando não é. */
  testimonial?: Testimonial;
  testimonialSectionTitle?: string;
};

// 3 perguntas genéricas do produto, reaproveitadas literalmente do conteúdo
// já publicado em /consorcios (mesma resposta, sem reescrever fatos).
export const sharedConsorcioFaq: CityFaqItem[] = [
  {
    question: "Consórcio tem juros?",
    answer:
      "Não. No consórcio você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento.",
  },
  {
    question: "Como funciona a contemplação?",
    answer:
      "A contemplação ocorre por sorteio mensal entre os participantes do grupo, ou por lance — quando você oferece antecipar parte do saldo devedor para aumentar suas chances.",
  },
  {
    question: "A Revla é uma administradora de consórcio?",
    answer:
      "Não. A Revla é uma corretora parceira que pesquisa entre administradoras autorizadas pelo Banco Central para encontrar o grupo mais vantajoso para você.",
  },
];

export const consorcioImoveisCities: ConsorcioImoveisCityPage[] = [
  {
    citySlug: "sao-paulo",
    cityName: "São Paulo",
    metaTitle: "Consórcio de Imóveis em São Paulo",
    metaDescription:
      "Consórcio de imóveis sem juros em São Paulo: carta de crédito a partir de R$ 40.000, atendimento na Avenida Paulista. Simulação gratuita com a Revla.",
    eyebrow: "Consórcio de Imóveis em São Paulo",
    heroTitle: "Consórcio de imóveis em São Paulo: carta de crédito sem juros, do jeito certo",
    heroDescription:
      "Nosso escritório fica na Avenida Paulista, no coração de São Paulo — atendimento presencial na capital e consultoria completa até a contemplação, sem juros e com parcelas que cabem no seu orçamento.",
    ctaLabel: "Simular consórcio de imóveis em SP",
    whatsappMessage: "Olá! Vim pelo site e gostaria de simular um consórcio de imóveis em São Paulo.",
    introHeading: "Por que fazer consórcio de imóveis em São Paulo com a Revla",
    introParagraphs: [
      "Com o escritório na Avenida Paulista, a Revla atende quem busca consórcio de imóveis em São Paulo de forma presencial ou remota, comparando entre administradoras autorizadas pelo Banco Central para encontrar o grupo com o prazo e o valor de parcela que fazem sentido para o seu caso.",
      "São Paulo é a cidade onde a Revla nasceu e onde já ajudou clientes reais a planejar a compra de imóveis sem financiamento tradicional — sem juros, só taxa de administração.",
    ],
    faqExtra: {
      question: "A Revla atende consórcio de imóveis em toda a cidade de São Paulo?",
      answer:
        "Sim. Nosso escritório fica na Avenida Paulista, na Bela Vista, e atendemos toda a capital paulista, presencialmente ou por WhatsApp, com simulação gratuita.",
    },
    testimonial: {
      name: "Vinicius",
      city: "São Paulo",
      quote:
        "Toda vez que tive dúvida sobre o meu consórcio de imóvel, fui respondido rápido pelo WhatsApp, sem enrolação. Isso fez toda diferença pra eu me sentir seguro na decisão.",
    },
    testimonialSectionTitle: "Quem já fez consórcio de imóveis com a Revla em São Paulo",
  },
  {
    citySlug: "santo-andre",
    cityName: "Santo André",
    metaTitle: "Consórcio de Imóveis em Santo André SP",
    metaDescription:
      "Consórcio de imóveis sem juros em Santo André SP: carta de crédito a partir de R$ 40.000, consultoria até a contemplação. Simulação gratuita com a Revla.",
    eyebrow: "Consórcio de Imóveis em Santo André SP",
    heroTitle: "Consórcio de imóveis em Santo André SP: carta de crédito sem juros com consultoria completa",
    heroDescription:
      "A Revla já atende clientes reais em Santo André e no Grande ABC, comparando administradoras autorizadas pelo Banco Central para encontrar o grupo de consórcio de imóveis com o prazo e a parcela certos para o seu momento.",
    ctaLabel: "Simular consórcio de imóveis em Santo André",
    whatsappMessage: "Olá! Vim pelo site e gostaria de simular um consórcio de imóveis em Santo André.",
    introHeading: "Consórcio de imóveis para quem mora ou investe em Santo André",
    introParagraphs: [
      "Santo André está entre as cidades onde a Revla já tem histórico de clientes reais de consórcio — comparamos as opções entre administradoras autorizadas pelo Banco Central e acompanhamos cada etapa, da simulação até a contemplação.",
      "Se o seu objetivo é comprar um imóvel, reformar, quitar um financiamento ou usar o consórcio como parte de um planejamento de longo prazo, montamos a simulação sem compromisso — atendimento remoto direto pelo WhatsApp, sem precisar se deslocar até o escritório em São Paulo.",
    ],
    faqExtra: {
      question: "A Revla atende consórcio em Santo André mesmo sem escritório na cidade?",
      answer:
        "Sim. O atendimento é consultivo, por telefone e WhatsApp, com a mesma qualidade de quem vai até o nosso escritório na Avenida Paulista — vários clientes de Santo André já fazem assim.",
    },
    testimonial: {
      name: "Leonardo",
      city: "Santo André",
      quote:
        "Eu não sabia que dava pra usar consórcio como estratégia de investimento até conversar com a Revla. Me explicaram tudo com calma, sem empurrar nada, e hoje entendo exatamente como funciona cada parcela.",
    },
    testimonialSectionTitle: "Clientes reais da Revla em Santo André",
  },
  {
    citySlug: "guarulhos",
    cityName: "Guarulhos",
    metaTitle: "Consórcio de Imóveis em Guarulhos",
    metaDescription:
      "Consórcio de imóveis sem juros em Guarulhos: carta de crédito a partir de R$ 40.000, simulação gratuita e consultoria completa com a Revla.",
    eyebrow: "Consórcio de Imóveis em Guarulhos",
    heroTitle: "Consórcio de imóveis em Guarulhos: carta de crédito sem juros, simulação gratuita",
    heroDescription:
      "Comparamos administradoras autorizadas pelo Banco Central para encontrar o consórcio de imóveis com o prazo e a parcela certos para quem mora em Guarulhos — atendimento consultivo por WhatsApp, sem taxa de simulação.",
    ctaLabel: "Simular consórcio de imóveis em Guarulhos",
    whatsappMessage: "Olá! Vim pelo site e gostaria de simular um consórcio de imóveis em Guarulhos.",
    introHeading: "Consórcio de imóveis em Guarulhos, sem sair de casa",
    introParagraphs: [
      "Guarulhos é a segunda maior cidade do estado de São Paulo, e o atendimento da Revla chega lá do mesmo jeito que chega na capital: consultoria completa por telefone e WhatsApp, sem precisar ir até o nosso escritório na Avenida Paulista.",
      "Comparamos as administradoras autorizadas pelo Banco Central para encontrar o grupo com o valor de carta, prazo e parcela que fazem sentido para o seu orçamento — seja para comprar, reformar ou quitar um imóvel.",
    ],
    faqExtra: {
      question: "A Revla tem escritório em Guarulhos?",
      answer:
        "Não temos escritório físico em Guarulhos — o atendimento é consultivo, por telefone e WhatsApp, com a mesma simulação gratuita e o mesmo acompanhamento até a contemplação que oferecemos em São Paulo.",
    },
  },
  {
    citySlug: "osasco",
    cityName: "Osasco",
    metaTitle: "Consórcio de Imóveis em Osasco SP",
    metaDescription:
      "Consórcio de imóveis sem juros em Osasco SP: carta de crédito a partir de R$ 40.000, simulação gratuita e consultoria completa com a Revla.",
    eyebrow: "Consórcio de Imóveis em Osasco SP",
    heroTitle: "Consórcio de imóveis em Osasco SP: carta de crédito sem juros e consultoria completa",
    heroDescription:
      "Osasco é um dos principais polos financeiros da Grande São Paulo — e quem mora ou trabalha lá também pode contar com a Revla para comparar administradoras de consórcio autorizadas pelo Banco Central e simular sem compromisso.",
    ctaLabel: "Simular consórcio de imóveis em Osasco",
    whatsappMessage: "Olá! Vim pelo site e gostaria de simular um consórcio de imóveis em Osasco.",
    introHeading: "Consórcio de imóveis para quem mora ou trabalha em Osasco",
    introParagraphs: [
      "Osasco fica a poucos minutos de São Paulo, e o atendimento da Revla acompanha esse fluxo: consultoria completa por WhatsApp, sem precisar se deslocar até o nosso escritório na Avenida Paulista.",
      "Ajudamos a comparar as administradoras autorizadas pelo Banco Central e a entender qual grupo tem o prazo e a parcela certos para quem quer comprar, reformar ou quitar um imóvel usando carta de crédito sem juros.",
    ],
    faqExtra: {
      question: "A Revla atende consórcio de imóveis em Osasco mesmo à distância?",
      answer:
        "Sim. Todo o processo — simulação, escolha do grupo e acompanhamento até a contemplação — é feito remotamente, por telefone e WhatsApp, com o mesmo cuidado do atendimento presencial em São Paulo.",
    },
  },
];

export function getConsorcioImoveisCity(slug: string) {
  return consorcioImoveisCities.find((c) => c.citySlug === slug);
}
