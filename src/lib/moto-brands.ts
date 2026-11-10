// Dados das subpáginas de marca de consórcio de moto (Estratégia 1 — Onda 4).
// Pesquisa de palavras-chave (Google Ads Keyword Planner, 15/09) confirmou
// volume real e distinto por marca no termo "consórcio moto [marca]" — por
// isso cada marca vira página própria, com conteúdo genuinamente diferente
// (nunca doorway page), igual ao critério já usado nas páginas de cidade do
// Plano Funerário. Marcas de moto podem aparecer na URL (uso nominativo,
// descreve compatibilidade de produto, não parceria com a marca).
// Triumph e Haojue ficaram de fora: o volume alto dessas marcas sozinhas
// (100 mil–1 mi e 10 mil–100 mil) não tem relação com consórcio — as
// sugestões relacionadas eram todas sobre modelo/ficha técnica da moto, e
// "consórcio moto triumph"/"consórcio moto haojue" não retornou volume
// mensurável.

export type MotoBrand = {
  slug: string;
  name: string;
  /** Volume real de "consórcio moto [marca]" no Keyword Planner, 15/09. */
  volume: string;
  /** Um parágrafo de posicionamento único por marca — nunca reaproveitado entre páginas. */
  posicionamento: string;
  /** Pergunta de FAQ específica dessa marca (além das 5 genéricas). */
  faqEspecifica: { question: string; answer: string };
  /**
   * Conteúdo editorial extra, opcional. Quando preenchido, a página da marca
   * deixa de depender só do molde compartilhado (09/11/2026: as 9 páginas
   * tinham ~85% do texto idêntico porque só `posicionamento` e
   * `faqEspecifica` variavam). Marcas sem esses campos continuam no molde.
   */
  /** Título da aba, sem o sufixo " | Revla Corretora" (o layout acrescenta). */
  metaTitle?: string;
  metaDescription?: string;
  /** H1 próprio. */
  h1?: string;
  /** Texto do Hero. */
  heroDescription?: string;
  /** Seções de texto próprias, exibidas depois de "como funciona". */
  secoes?: { title: string; paragraphs: string[] }[];
  /** Modelos mais procurados, exibidos em grade (sem preço). */
  modelos?: { title: string; intro?: string; items: { name: string; description: string }[] };
  /** FAQs extras da marca, logo após `faqEspecifica`. */
  faqsExtras?: { question: string; answer: string }[];
};

export const motoBrands: MotoBrand[] = [
  {
    slug: "honda",
    name: "Honda",
    volume: "10 mil–100 mil",
    posicionamento:
      "A Honda é a marca de motos mais vendida do Brasil, com uma rede de concessionárias presente praticamente em todo o país. Isso significa mais opções de modelo, cor e concessionária pra usar sua carta de crédito quando ela for contemplada.",
    faqEspecifica: {
      question: "Posso usar a carta de crédito em qualquer concessionária Honda?",
      answer:
        "Sim. A carta de crédito contemplada pode ser usada em qualquer concessionária Honda autorizada, em qualquer modelo novo, dentro do valor da carta.",
    },
    // Conteúdo próprio da Honda (09/11/2026). Fontes: Motonline, 29/01/2026
    // (Consórcio Honda, fundado em jan/1981) e ranking de emplacamentos
    // jan–set/2026 compilado a partir do informativo da Fenabrave.
    // Sem valores de carta nem de parcela, por decisão do usuário.
    metaTitle: "Consórcio de Moto Honda: Como Funciona",
    metaDescription:
      "Consórcio de moto Honda: como funciona, a diferença para o Consórcio Honda, os modelos mais procurados e como simular sem compromisso com a Revla.",
    h1: "Consórcio de moto Honda: como funciona e como simular",
    heroDescription:
      "Entenda como funciona o consórcio para comprar uma moto Honda, qual a diferença entre o Consórcio Honda e a carta de crédito de administradoras comparadas pela Revla, e peça uma simulação sem compromisso.",
    secoes: [
      {
        title: "Consórcio Honda ou carta de crédito de administradora: qual a diferença?",
        paragraphs: [
          "O Consórcio Honda é a administradora da própria marca. Segundo o Motonline, ele existe desde janeiro de 1981 e vende cotas de motocicletas, automóveis e máquinas Honda. Quem já decidiu comprar uma Honda e quer fazer o consórcio direto com a fabricante tem aí uma opção natural, e vale conhecê-la antes de decidir.",
          "A Revla não é o Consórcio Honda e não administra grupos. Somos uma corretora que cota e compara cartas de crédito de administradoras autorizadas pelo Banco Central com as quais trabalhamos: Ademicon, Porto Seguro e Rodobens. Depois da contemplação, a carta é usada para comprar a moto em uma concessionária da marca que você escolher, inclusive a Honda.",
          "Na prática, a comparação que vale fazer é entre taxa de administração, prazo do grupo, forma de lance, regras de contemplação e reajuste da carta. Peça as condições de cada opção por escrito antes de assinar qualquer contrato.",
        ],
      },
    ],
    modelos: {
      title: "Modelos Honda mais procurados",
      intro:
        "Segundo um levantamento baseado nos dados da Fenabrave, de janeiro a setembro de 2026, oito dos dez modelos de moto mais emplacados do Brasil são Honda. O valor da carta e da parcela depende do modelo, do grupo e da administradora, por isso o caminho é simular o modelo que você quer.",
      items: [
        {
          name: "CG 160",
          description: "Moto de uso diário e de trabalho, a mais emplacada do país no período, segundo esse levantamento.",
        },
        {
          name: "Biz",
          description: "Modelo urbano e prático, pensado para o trânsito da cidade e para o deslocamento diário.",
        },
        {
          name: "Pop 110i",
          description: "Modelo de entrada, comum entre quem está comprando a primeira moto.",
        },
        {
          name: "NXR 160 Bros",
          description: "Trail urbana, para quem alterna cidade e trechos de terra.",
        },
        {
          name: "PCX 160",
          description: "Scooter urbana, procurada por quem prefere câmbio automático no dia a dia.",
        },
        {
          name: "CB 300F, XRE 190 e XRE 300",
          description: "Modelos de cilindrada intermediária, para quem já pilota e quer mais desempenho do que uma 160, na rua ou em uso misto.",
        },
      ],
    },
    faqsExtras: [
      {
        question: "O Consórcio Honda e a Revla são a mesma coisa?",
        answer:
          "Não. O Consórcio Honda é a administradora da própria marca. A Revla é uma corretora que cota cartas de crédito de outras administradoras autorizadas pelo Banco Central (Ademicon, Porto Seguro e Rodobens) e ajuda você a comparar as condições. A carta contemplada pode ser usada para comprar uma moto Honda em concessionária autorizada.",
      },
      {
        question: "O que comparar entre o Consórcio Honda e outra administradora?",
        answer:
          "Compare taxa de administração, fundo de reserva, prazo do grupo, modalidades de lance, regras de contemplação e reajuste da carta, sempre com as condições por escrito. O custo total e o tempo até a contemplação mudam de um grupo para outro, e não dá para dizer qual é melhor sem olhar o seu caso.",
      },
      {
        question: "Qual moto Honda eu consigo comprar com o consórcio?",
        answer:
          "Qualquer modelo novo cujo preço caiba no valor da carta contratada, como CG 160, Biz, Pop 110i, NXR 160 Bros, PCX 160 ou os de cilindrada intermediária, como CB 300F e XRE 300. Os preços das motos mudam com frequência, então a carta é definida na simulação, com o modelo que você quer.",
      },
      {
        question: "Vale mais a pena consórcio ou financiamento para comprar uma Honda?",
        answer:
          "Depende da urgência. No financiamento a moto é liberada logo, mas com juros. No consórcio não há juros, só taxa de administração, mas você precisa esperar a contemplação, por sorteio ou lance. Quem precisa da moto agora tende a preferir o financiamento; quem pode aguardar pode considerar o consórcio. Compare o custo total das duas opções antes de decidir.",
      },
    ],
  },
  {
    slug: "yamaha",
    name: "Yamaha",
    volume: "1 mil–10 mil",
    posicionamento:
      "A Yamaha é a segunda marca de motos mais buscada para consórcio no Brasil, com modelos que vão do uso urbano do dia a dia até motos maiores para viagem. O consórcio é uma alternativa sem juros ao financiamento tradicional pra realizar essa troca ou primeira compra.",
    faqEspecifica: {
      question: "Consigo trocar minha moto atual usando o consórcio Yamaha?",
      answer:
        "O consórcio em si não faz avaliação de moto usada — ele entrega uma carta de crédito para comprar a moto nova. Mas nada impede você de vender sua moto atual separadamente e usar o valor pra dar um lance e antecipar a contemplação.",
    },
  },
  {
    slug: "bmw",
    name: "BMW Motorrad",
    volume: "1 mil–10 mil",
    posicionamento:
      "A BMW Motorrad tem um público que busca motos de maior cilindrada e viagem, com um investimento inicial mais alto — exatamente o cenário em que o consórcio costuma fazer mais sentido, já que parcelas menores no início e a possibilidade de dar lances ajudam a viabilizar a compra sem juros.",
    faqEspecifica: {
      question: "O consórcio funciona pra modelos de alta cilindrada como a BMW?",
      answer:
        "Sim. O grupo de consórcio é escolhido conforme o valor da carta de crédito necessária — quanto maior o valor do modelo BMW pretendido, maior a carta contratada. Fale com um consultor pra simular o valor certo pro modelo que você quer.",
    },
  },
  {
    slug: "royal-enfield",
    name: "Royal Enfield",
    volume: "1 mil–10 mil",
    posicionamento:
      "A Royal Enfield vem crescendo forte no Brasil nos últimos anos, com motos de estilo clássico que atraem quem busca algo diferente das marcas mais tradicionais. Apesar de ser uma marca menos conhecida do público em geral, a busca por consórcio pra ela já é real e crescente.",
    faqEspecifica: {
      question: "A Royal Enfield tem concessionárias suficientes pra usar a carta de crédito?",
      answer:
        "A rede Royal Enfield no Brasil é menor que a de marcas mais tradicionais, mas está presente nas principais capitais e vem crescendo. Confirme a concessionária mais próxima de você com um consultor da Revla antes de contratar.",
    },
  },
  {
    slug: "suzuki",
    name: "Suzuki",
    volume: "100–1 mil",
    posicionamento:
      "A Suzuki é conhecida principalmente pelas motos esportivas e de médio porte, voltadas a quem já é motociclista e busca um upgrade. O consórcio permite planejar essa troca sem pagar juros, escolhendo o prazo que cabe no seu orçamento.",
    faqEspecifica: {
      question: "O consórcio Suzuki serve pra motos esportivas de maior cilindrada?",
      answer:
        "Sim, desde que a carta de crédito contratada cubra o valor do modelo escolhido. Modelos esportivos maiores exigem cartas de crédito maiores — um consultor da Revla te ajuda a simular o valor certo.",
    },
  },
  {
    slug: "kawasaki",
    name: "Kawasaki",
    volume: "100–1 mil",
    posicionamento:
      "A Kawasaki tem um público fiel entre quem busca motos esportivas de performance. Pra esse perfil de comprador, o consórcio costuma ser usado como uma forma de planejar a compra com antecedência, aproveitando lances pra antecipar a contemplação quando surge a oportunidade certa.",
    faqEspecifica: {
      question: "Vale a pena usar lance no consórcio pra antecipar uma Kawasaki?",
      answer:
        "Pode valer, principalmente se você já tem uma reserva guardada — o lance usa parte ou todo esse valor pra aumentar suas chances de contemplação antes do prazo normal do grupo. Um consultor da Revla explica as modalidades de lance disponíveis no seu grupo.",
    },
  },
  {
    slug: "harley-davidson",
    name: "Harley-Davidson",
    volume: "100–1 mil",
    posicionamento:
      "A Harley-Davidson é a marca de moto premium mais desejada por quem busca uma experiência de pilotagem diferenciada, com um investimento inicial consideravelmente mais alto que as marcas populares. O consórcio é uma forma de acessar esse modelo sem comprometer o caixa com juros de financiamento.",
    faqEspecifica: {
      question: "Dá pra fazer consórcio pra qualquer modelo Harley-Davidson?",
      answer:
        "Sim, desde que a carta de crédito contratada cubra o valor do modelo. Como os modelos Harley-Davidson variam bastante de preço, o ideal é simular com um consultor da Revla o valor de carta necessário pro modelo específico que você quer.",
    },
  },
  {
    slug: "dafra",
    name: "Dafra",
    volume: "100–1 mil",
    posicionamento:
      "A Dafra é uma marca nacional focada em modelos de entrada e custo-benefício, e a busca por consórcio pra ela cresceu bastante no último ano — um sinal de que mais gente está considerando essa alternativa sem juros pra motos de entrada, e não só pra modelos mais caros.",
    faqEspecifica: {
      question: "Consórcio vale a pena pra uma moto de entrada como a Dafra?",
      answer:
        "Sim — o consórcio não é exclusivo pra motos caras. Pra modelos de entrada, ele costuma ter parcelas ainda mais acessíveis, sendo uma alternativa real ao financiamento pra quem está comprando a primeira moto.",
    },
  },
  {
    slug: "shineray",
    name: "Shineray",
    volume: "100–1 mil",
    posicionamento:
      "A Shineray é outra marca de entrada com boa aceitação no mercado brasileiro, especialmente entre quem busca o menor custo total de aquisição. O consórcio reforça essa vantagem por eliminar os juros do financiamento tradicional.",
    faqEspecifica: {
      question: "Por que fazer consórcio em vez de financiar uma Shineray direto na revenda?",
      answer:
        "Porque no consórcio você paga só a taxa de administração, sem juros — o que normalmente resulta num custo total menor que o financiamento, mesmo em modelos de entrada. A contrapartida é que você precisa aguardar a contemplação (por sorteio ou lance) para receber a carta de crédito.",
    },
  },
];

export function getMotoBrand(slug: string): MotoBrand | undefined {
  return motoBrands.find((b) => b.slug === slug);
}
