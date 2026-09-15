// Dados das páginas de cidade do Plano Funerário (Estratégia 1 — Onda 7).
// Pesquisa de palavras-chave (Google Ads Keyword Planner) confirmou volume
// real e distinto por cidade em "plano funerário + cidade" — por isso essas
// 5 cidades mantiveram página própria (diferente do Consórcio de Imóveis na
// Onda 1, que não teve sinal real por cidade). Santo André, São Caetano do
// Sul, Diadema e Santos foram testadas e não mostraram demanda mensurável em
// nenhum termo — ficaram de fora.
//
// Termo real ("plano funerário + cidade"):
//   São Paulo: 100–1 mil (forte)
//   Campinas: 100–1 mil (forte)
//   São Bernardo do Campo: 10–100 (sinal novo, crescendo)
//   Osasco: 10–100 (confirmado)
//   Guarulhos: ~10–100 (via ideias relacionadas consistentes)
//
// Sem depoimento em nenhuma cidade — não há testemunho real verificado
// especificamente sobre o Amparo Funeral em nenhuma dessas 5 cidades.

export type PlanoFunerarioCidade = {
  slug: string;
  nome: string;
  /** Parágrafo de contexto único por cidade — nunca reaproveitado entre páginas. */
  contexto: string;
  faqEspecifica: { question: string; answer: string };
};

export const planoFunerarioCidades: PlanoFunerarioCidade[] = [
  {
    slug: "sao-paulo",
    nome: "São Paulo",
    contexto:
      "O escritório da Revla fica na Avenida Paulista, em São Paulo — o que significa que, além da consultoria remota disponível pra todo o Brasil, quem mora na capital pode agendar atendimento presencial para tirar dúvidas sobre o Amparo Funeral PASI com um consultor, cara a cara.",
    faqEspecifica: {
      question: "Posso ser atendido presencialmente em São Paulo?",
      answer:
        "Sim. O escritório da Revla fica na Avenida Paulista, em São Paulo, e é possível agendar atendimento presencial além da consultoria remota.",
    },
  },
  {
    slug: "campinas",
    nome: "Campinas",
    contexto:
      "Em Campinas, o atendimento é feito por consultoria remota — pelo WhatsApp e videochamada, com o mesmo suporte completo oferecido em São Paulo, da simulação até a contratação do Amparo Funeral PASI.",
    faqEspecifica: {
      question: "O atendimento em Campinas é presencial ou remoto?",
      answer:
        "É remoto — feito por WhatsApp e videochamada, com um consultor da Revla te acompanhando do início ao fim da contratação, sem precisar se deslocar.",
    },
  },
  {
    slug: "sao-bernardo-do-campo",
    nome: "São Bernardo do Campo",
    contexto:
      "São Bernardo do Campo faz parte da região do ABC, onde a Revla já atende clientes em diversos produtos. O Amparo Funeral PASI está disponível para contratação com consultoria remota, sem necessidade de vínculo empregatício.",
    faqEspecifica: {
      question: "A Revla atende outras cidades do ABC além de São Bernardo?",
      answer:
        "Sim, além de São Bernardo do Campo já atendemos clientes em outras cidades da região do ABC, como Santo André, São Caetano do Sul, Diadema e Mauá.",
    },
  },
  {
    slug: "osasco",
    nome: "Osasco",
    contexto:
      "Osasco fica na Grande São Paulo, e o atendimento é feito por consultoria remota — o mesmo processo de simulação e contratação disponível para toda a região metropolitana, sem precisar se deslocar até o escritório.",
    faqEspecifica: {
      question: "Preciso ir até São Paulo para contratar morando em Osasco?",
      answer:
        "Não. Todo o processo — simulação, dúvidas e contratação do Amparo Funeral PASI — pode ser feito remotamente, por WhatsApp e videochamada, com um consultor da Revla.",
    },
  },
  {
    slug: "guarulhos",
    nome: "Guarulhos",
    contexto:
      "Guarulhos faz parte da Grande São Paulo, e o Amparo Funeral PASI está disponível para moradores da cidade com o mesmo suporte consultivo oferecido em toda a região — simulação, dúvidas e contratação por consultoria remota.",
    faqEspecifica: {
      question: "O plano funerário em Guarulhos tem alguma diferença de cobertura?",
      answer:
        "Não. As coberturas e valores dos planos Individual, Familiar e Sênior são os mesmos em todo o Brasil — o que muda é apenas a forma de atendimento, que em Guarulhos é feita por consultoria remota.",
    },
  },
];

export function getPlanoFunerarioCidade(slug: string): PlanoFunerarioCidade | undefined {
  return planoFunerarioCidades.find((c) => c.slug === slug);
}
