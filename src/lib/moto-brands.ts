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
  modelos?: { title: string; intro?: string; columns?: 2 | 3 | 4; items: { name: string; description: string }[] };
  /** FAQs extras da marca, logo após `faqEspecifica`. */
  faqsExtras?: { question: string; answer: string }[];
  /** Título e parágrafos próprios no lugar do bloco "como funciona" do molde. */
  comoFuncionaTitulo?: string;
  comoFuncionaParagrafos?: string[];
  /**
   * Quando informado, só estas FAQs genéricas entram na página. Evita repetir
   * em todas as marcas as mesmas 9 perguntas só com o nome trocado.
   */
  faqGenericas?: FaqGenericaKey[];
  /** Oculta o bloco de diferenciais, idêntico em todas as marcas do molde. */
  ocultarDiferenciais?: boolean;
  /** Textos próprios do selo do topo e da chamada final (evita repetir o molde). */
  eyebrow?: string;
  ctaTitulo?: string;
  ctaDescricao?: string;
};

export type FaqGenericaKey =
  | "juros"
  | "contemplacao"
  | "valorMinimo"
  | "administradora"
  | "administradorasMarca"
  | "susep"
  | "obrigado"
  | "cidades"
  | "pertoDeMim";

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
      "Consórcio de moto Honda: como funciona, os modelos mais procurados, o que comparar entre grupos e como simular sem compromisso com a Revla.",
    h1: "Consórcio de moto Honda: como funciona e como simular",
    heroDescription:
      "Entenda como funciona o consórcio para comprar uma moto Honda, quais modelos entram nas simulações e o que comparar entre os grupos, e peça uma simulação sem compromisso.",
    modelos: {
      title: "Modelos Honda para considerar na simulação",
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
      { question: "Como o consórcio evita os juros e quando eu recebo a moto?", answer: "A parcela é composta pelo valor da carta, taxa de administração e fundo de reserva, sem juros embutidos. A moto só chega após a contemplação, que acontece por sorteio mensal ou por lance, e o prazo varia conforme o grupo." },
      
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
    comoFuncionaTitulo: "Consórcio para Honda: como funciona na prática",
    comoFuncionaParagrafos: [
      "A Honda é a marca de motos mais vendida do Brasil, com uma rede de concessionárias presente praticamente em todo o país. Isso significa mais opções de modelo, cor e concessionária para usar a carta de crédito quando ela for contemplada.",
      "Trabalhamos com administradoras autorizadas pelo Banco Central e comparamos as condições dos grupos de moto para o valor de carta que você precisa. Dentro do valor da carta, você escolhe o modelo Honda que melhor combina com você, desde que o valor da carta cubra o preço da moto, e compra em uma concessionária autorizada."
    ],
    faqGenericas: [],
    eyebrow: "Consórcio de moto Honda · simulação com a Revla",
    ctaTitulo: "Quer saber quanto custa a sua Honda no consórcio?",
    ctaDescricao: "Conte qual modelo você tem em mente e um consultor da Revla monta a simulação, sem custo e sem compromisso.",
    ocultarDiferenciais: true,
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
    metaTitle: "Consórcio de Moto Yamaha: Como Escolher",
    metaDescription: "Consórcio de moto Yamaha: conheça os modelos mais procurados, veja como escolher o modelo antes da carta e simule sem compromisso com a Revla.",
    h1: "Consórcio de moto Yamaha: do uso diário à esportiva",
    heroDescription: "A Yamaha tem desde a moto de trabalho até a esportiva, e cada uma pede uma carta de crédito diferente. Veja como escolher o modelo e peça uma simulação sem compromisso.",
    comoFuncionaTitulo: "Consórcio para Yamaha: escolha o modelo antes da carta",
    comoFuncionaParagrafos: [
      "A linha da Yamaha vai de motos para o deslocamento diário a naked e esportivas, e o preço muda bastante de uma para outra. Por isso o primeiro passo do consórcio é decidir o modelo; o valor da carta e o prazo vêm depois.",
      "A Revla compara grupos de moto de administradoras autorizadas pelo Banco Central. Depois da contemplação, o consorciado escolhe o modelo Yamaha que mais lhe convier, desde que o valor da carta cubra o preço, e usa a carta em uma concessionária autorizada."
    ],
    modelos: {
      "title": "Modelos Yamaha mais procurados",
      "intro": "Segundo um levantamento baseado nos dados da Fenabrave, de janeiro a setembro de 2026, a YBR 150 foi a Yamaha mais emplacada, em sexto lugar entre todas as motos do país. Outros modelos da marca aparecem logo depois, cada um líder ou destaque na sua categoria.",
      "columns": 4,
      "items": [
        {
          "name": "YBR 150",
          "description": "Moto de uso diário e de trabalho, a Yamaha mais emplacada do período."
        },
        {
          "name": "Fazer 150 e Fazer 250",
          "description": "Motos de rua da linha Fazer, em duas cilindradas, entre as mais emplacadas da marca."
        },
        {
          "name": "XTZ 250",
          "description": "Trail de uso misto, para cidade, estrada e trechos de terra."
        },
        {
          "name": "MT-03 e YZF-R15",
          "description": "Naked e esportiva carenada. A MT-03 lidera a categoria naked e roadster no levantamento."
        }
      ]
    },
    faqsExtras: [
      { question: "Por que não há juros no consórcio de uma Yamaha?", answer: "Porque o consórcio é uma poupança coletiva: os participantes do grupo contribuem todo mês e o dinheiro é usado para contemplar um por vez. Você paga a taxa de administração e o fundo de reserva, e não juros como no crédito direto." },
      {
        "question": "Posso escolher qualquer modelo Yamaha ao contratar?",
        "answer": "Qualquer modelo novo cujo preço caiba no valor da carta. Como os valores mudam de uma linha para outra, a carta é definida na simulação, a partir do modelo que você quer."
      },
      {
        "question": "Moto de trabalho ou esportiva: o consórcio funciona diferente?",
        "answer": "O funcionamento é o mesmo, com sorteio e lance. O que muda é o valor da carta e o grupo em que você entra, por isso o ideal é simular o modelo exato antes de escolher o prazo."
      }
    ],
    faqGenericas: [],
    eyebrow: "Consórcio Yamaha · simulação feita por corretora independente",
    ctaTitulo: "Já sabe qual Yamaha quer? Peça a simulação",
    ctaDescricao: "Informe o modelo e o prazo desejado. A Revla compara os grupos disponíveis e retorna com as opções, sem compromisso.",
    ocultarDiferenciais: true,
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
    metaTitle: "Consórcio de Moto BMW: Planeje a Compra",
    metaDescription: "Consórcio de moto BMW Motorrad: como planejar a compra de uma GS ou outro modelo, o que conferir na carta de crédito e como simular com a Revla.",
    h1: "Consórcio de moto BMW Motorrad: como planejar a compra",
    heroDescription: "Da G 310 GS à R 1300 GS, o valor de uma BMW varia muito de um modelo para outro. Veja o que conferir na carta de crédito antes de simular e peça uma simulação sem compromisso.",
    comoFuncionaTitulo: "Consórcio para BMW Motorrad: a carta é o centro do plano",
    comoFuncionaParagrafos: [
      "A BMW Motorrad vende desde a G 310 GS, a porta de entrada da marca, até modelos de grande cilindrada como a R 1300 GS. Como o valor varia muito de um modelo para outro, a carta de crédito costuma ser o ponto central do planejamento.",
      "Cotamos cartas de grupos de moto de administradoras autorizadas pelo Banco Central e comparamos as condições para o valor que você precisa. Depois da contemplação, dentro do valor da carta, o consorciado escolhe o modelo BMW Motorrad que melhor lhe convier, desde que a carta cubra o preço, e compra em uma concessionária autorizada."
    ],
    secoes: [
      {
        "title": "O que conferir antes de simular uma BMW",
        "paragraphs": [
          "Defina primeiro o modelo e a versão, porque o preço muda com o pacote de equipamentos. Depois pergunte o que a carta de crédito cobre: só a moto ou também itens como emplacamento, frete e acessórios. Isso varia por administradora e por grupo, e deve constar por escrito.",
          "Considere também o seguro e as revisões, que não fazem parte do consórcio e podem pesar no orçamento mensal junto com a parcela, principalmente em motos de maior valor.",
          "Se a ideia é antecipar a contemplação, avalie a modalidade de lance do grupo e o valor que você teria disponível, sem comprometer a reserva do seu orçamento."
        ]
      },
    ],
    modelos: {
      "title": "Modelos BMW Motorrad mais procurados",
      "intro": "Segundo o Motonline, com base em dados da Fenabrave de 2025 até outubro, as cinco BMW mais vendidas do país foram R 1300 GS, G 310 GS, R 1300 GS Adventure, F 900 GS e S 1000 RR. O valor da carta depende do modelo e da versão.",
      "columns": 3,
      "items": [
        {
          "name": "R 1300 GS",
          "description": "Big trail de grande cilindrada, a BMW mais vendida no período."
        },
        {
          "name": "G 310 GS",
          "description": "Aventureira de entrada da marca, a segunda mais vendida."
        },
        {
          "name": "R 1300 GS Adventure",
          "description": "Versão da R 1300 GS voltada a viagens longas, a terceira mais vendida."
        },
        {
          "name": "F 900 GS",
          "description": "Big trail de cilindrada média, a quarta mais vendida."
        },
        {
          "name": "S 1000 RR",
          "description": "Esportiva de alto desempenho, a quinta mais vendida."
        }
      ]
    },
    faqsExtras: [
      { question: "Como o lance ajuda em uma carta de valor mais alto?", answer: "O lance antecipa a contemplação ao oferecer parte do saldo do grupo, com recursos próprios ou, quando o regulamento permite, parte da própria carta. Em cartas maiores, a diferença de prazo pode ser relevante, e as regras mudam de grupo para grupo." },
      
      {
        "question": "A carta de crédito cobre acessórios e emplacamento?",
        "answer": "Depende da administradora e do grupo. Pergunte antes de contratar o que a carta cobre além da moto e peça a resposta por escrito."
      },
    ],
    faqGenericas: [],
    eyebrow: "Consórcio BMW Motorrad · planejamento de carta de maior valor",
    ctaTitulo: "Planeje a sua BMW com uma simulação sob medida",
    ctaDescricao: "Em motos de valor mais alto, prazo e lance fazem diferença. Fale com a Revla e compare as opções do seu caso.",
    ocultarDiferenciais: true,
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
    metaTitle: "Consórcio de Moto Royal Enfield: Modelos",
    metaDescription: "Consórcio de moto Royal Enfield: Hunter, Meteor, Himalayan e outros modelos, a rede de concessionárias e simulação sem compromisso com a Revla.",
    h1: "Consórcio de moto Royal Enfield: modelos e rede",
    heroDescription: "Hunter 350, Meteor, Himalayan e a linha 650: veja quais modelos mais saem, o que considerar na rede de concessionárias e peça uma simulação sem compromisso.",
    comoFuncionaTitulo: "Consórcio para Royal Enfield: o que considerar",
    comoFuncionaParagrafos: [
      "A Royal Enfield tem motos de estilo clássico e de uso misto. Segundo o Motonline, em levantamento de janeiro a junho de 2026 com dados da Fenabrave, a Hunter 350 foi a mais vendida da marca no país, seguida da Himalayan e da Super Meteor 650.",
      "A rede de concessionárias da marca é menor que a das fabricantes mais tradicionais. Antes de contratar, veja qual concessionária fica mais perto de você e se ela trabalha com o modelo que você quer, porque é lá que a carta contemplada será usada. Dentro do valor da carta, o consorciado escolhe o modelo Royal Enfield que preferir, desde que a carta cubra o preço. A Revla cota grupos de moto de administradoras autorizadas pelo Banco Central e compara as condições para o valor de carta que você precisa."
    ],
    modelos: {
      "title": "Linhas Royal Enfield para comparar",
      "intro": "No levantamento do Motonline de janeiro a junho de 2026, a ordem de vendas da marca foi Hunter 350, Himalayan, Super Meteor 650, Meteor 350, Guerrilla 450, Classic 350 e Shotgun 650.",
      "columns": 3,
      "items": [
        {
          "name": "Hunter 350",
          "description": "Roadster urbana, a mais vendida da marca no período."
        },
        {
          "name": "Himalayan",
          "description": "Aventureira para estrada e terra, a segunda mais vendida."
        },
        {
          "name": "Super Meteor 650",
          "description": "Cruiser de maior cilindrada, a terceira mais vendida."
        },
        {
          "name": "Meteor 350",
          "description": "Cruiser de estilo clássico, a quarta mais vendida."
        },
        {
          "name": "Guerrilla 450",
          "description": "Roadster de cilindrada intermediária, a quinta mais vendida."
        },
        {
          "name": "Classic 350 e Shotgun 650",
          "description": "Modelos de estilo retrô e custom, na sexta e na sétima posição."
        }
      ]
    },
    faqsExtras: [
      { question: "Existe prazo para usar a carta depois de contemplado?", answer: "Depois da contemplação, a carta de crédito fica disponível para comprar o modelo novo escolhido em uma concessionária da marca. Confirme com a administradora as condições do seu grupo, inclusive prazos e documentação." },
      
      {
        "question": "Qual Royal Enfield é a mais procurada?",
        "answer": "No levantamento de janeiro a junho de 2026, com dados da Fenabrave, a Hunter 350 foi a mais vendida, seguida da Himalayan e da Super Meteor 650."
      },
      {
        "question": "Onde posso usar a carta contemplada?",
        "answer": "Em uma concessionária Royal Enfield autorizada. Como a rede é menor, confirme antes de contratar se há uma concessionária perto de você e se ela tem o modelo desejado."
      }
    ],
    faqGenericas: [],
    eyebrow: "Consórcio Royal Enfield · como comparar antes de contratar",
    ctaTitulo: "Simule o consórcio da sua Royal Enfield",
    ctaDescricao: "Diga o modelo que você quer e o prazo que cabe no orçamento. A Revla apresenta as alternativas disponíveis.",
    ocultarDiferenciais: true,
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
    // Conteúdo próprio (10/11/2026). Fonte da linha: Motonline, 25/01/2026 (Suzuki 2026: 12 modelos 0km). Sem valores.
    metaTitle: "Consórcio de Moto Suzuki: Como Escolher",
    metaDescription: "Consórcio de moto Suzuki: GSX-8S, GSX-8R, V-Strom, Hayabusa e outros modelos, como escolher o uso antes da carta e simulação sem compromisso com a Revla.",
    h1: "Consórcio de moto Suzuki: naked, esportiva ou trail",
    heroDescription: "A Suzuki concentra a linha em motos de média e alta cilindrada. Veja como escolher entre naked, esportiva e trail antes de definir a carta, e peça uma simulação sem compromisso.",
    eyebrow: "Consórcio de moto Suzuki · escolha o modelo, depois a carta",
    comoFuncionaTitulo: "Consórcio para Suzuki: o uso define o modelo",
    comoFuncionaParagrafos: [
      "Segundo o Motonline, a Suzuki vende hoje no Brasil 12 modelos 0km, entre nakeds, esportivas, trails e a Hayabusa. Como a linha é de motos maiores, o consórcio costuma ser pensado com antecedência, e o primeiro passo é saber que tipo de moto combina com o seu uso.",
      "Dentro do valor da carta, o consorciado escolhe o modelo Suzuki que melhor lhe convier, desde que a carta cubra o preço da moto. Depois da contemplação, a compra é feita em uma concessionária Suzuki autorizada."
    ],
    secoes: [
      {
        "title": "GSX, V-Strom ou Hayabusa: como a linha se divide",
        "paragraphs": [
          "A família GSX reúne as motos de perfil esportivo, como a GSX-8S, naked, e a GSX-8R, carenada, ambas da plataforma 800, além da GSX-S1000, que usa motor derivado da GSX-R1000, segundo o Motonline. Já a linha V-Strom, com versões 650XT, 800, 800 DE e 1050, é voltada à viagem e ao uso misto.",
          "No topo da linha estão a GSX-R1000R, superesportiva, e a Hayabusa, que a matéria descreve como um ícone mundial. Quem pensa em viagens longas tende a olhar para as V-Strom; quem prefere pilotagem esportiva no dia a dia, para as GSX.",
          "A escolha pesa na carta, porque o preço varia bastante entre os modelos. Por isso a simulação deve partir do modelo desejado, e não de um valor aleatório."
        ]
      }
    ],
    modelos: {
      "title": "Linha Suzuki para considerar na simulação",
      "intro": "Modelos da linha 2026 listados pelo Motonline em janeiro de 2026. A disponibilidade de versões e cores varia por concessionária.",
      "columns": 3,
      "items": [
        {
          "name": "GSX-8S",
          "description": "Naked da plataforma 800, para quem quer pilotagem esportiva sem carenagem."
        },
        {
          "name": "GSX-8R",
          "description": "Versão carenada da plataforma 800, com perfil mais esportivo."
        },
        {
          "name": "V-Strom 800 DE",
          "description": "Trail de média cilindrada com foco em uso fora do asfalto."
        },
        {
          "name": "V-Strom 650XT",
          "description": "Trail média para viagem e uso misto, de proposta mais tradicional."
        },
        {
          "name": "GSX-S1000",
          "description": "Naked de maior cilindrada, com motor derivado da GSX-R1000."
        },
        {
          "name": "Hayabusa",
          "description": "Ícone da marca, esportiva voltada a viagens rápidas em estrada."
        }
      ]
    },
    faqsExtras: [
      {
        "question": "Posso escolher qualquer modelo Suzuki com o consórcio?",
        "answer": "Qualquer modelo novo da marca cujo preço caiba no valor da carta contratada. Como o valor muda de um modelo para outro, a carta é definida na simulação."
      },
      {
        "question": "Qual a diferença entre uma GSX e uma V-Strom?",
        "answer": "Segundo a descrição do Motonline, as GSX têm perfil de naked e esportiva, e as V-Strom são trails e crossovers voltadas à viagem e ao uso misto. A escolha depende de como você pretende usar a moto."
      },
      {
        "question": "O consórcio de Suzuki tem juros?",
        "answer": "Não há juros no consórcio. O que se paga é a taxa de administração e o fundo de reserva, definidos no contrato do grupo. Peça as condições por escrito antes de assinar."
      }
    ],
    ctaTitulo: "Qual Suzuki você quer? Peça a simulação",
    ctaDescricao: "Informe o modelo e o prazo que cabe no orçamento, e a Revla compara os grupos de moto disponíveis.",
    faqGenericas: [],
    ocultarDiferenciais: true,
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
    // Conteúdo próprio (10/11/2026). Fonte da linha: Motonline, 07/02/2026 (Kawasaki 2026: modelos e preços). Sem valores.
    metaTitle: "Consórcio de Moto Kawasaki: Como Planejar",
    metaDescription: "Consórcio de moto Kawasaki: Ninja, Z, Versys, Eliminator e outros modelos, uso do lance para antecipar a contemplação e simulação sem compromisso com a Revla.",
    h1: "Consórcio de moto Kawasaki: Ninja, Z, Versys e Eliminator",
    heroDescription: "Da esportiva Ninja à custom Eliminator, a Kawasaki tem uma linha ampla. Veja como cada família se encaixa no seu uso e como o lance pode antecipar a compra.",
    eyebrow: "Consórcio de moto Kawasaki · planejar com antecedência",
    comoFuncionaTitulo: "Consórcio para Kawasaki: planejar a compra com tempo",
    comoFuncionaParagrafos: [
      "A Kawasaki reúne no Brasil esportivas, nakeds, motos de viagem, customs e modelos fora de estrada. Em motos de maior cilindrada o consórcio costuma ser planejado com tempo, porque a carta é mais alta e o prazo do grupo pesa na decisão.",
      "Dentro do valor da carta, o consorciado escolhe o modelo Kawasaki que preferir, desde que a carta cubra o preço. Depois da contemplação, a compra é feita em uma concessionária Kawasaki autorizada."
    ],
    secoes: [
      {
        "title": "Cinco famílias, cinco usos",
        "paragraphs": [
          "Segundo o Motonline, a linha 2026 inclui as esportivas Ninja (300, 500, 650, ZX-4R, ZX-6R e ZX-10R), as nakeds Z (500, 650, 900, Z900 RS e Z H2), as Versys para viagem (X-300, 650 e 1100) e as customs Vulcan S e Eliminator 500. Há ainda modelos fora de estrada, como as KLX e KX.",
          "Uma forma prática de decidir é partir do uso: cidade e estrada com pilotagem esportiva pedem uma Z ou uma Ninja; viagens longas, uma Versys; e um estilo mais relaxado, uma custom."
        ]
      },
      {
        "title": "Quando faz sentido usar o lance",
        "paragraphs": [
          "O lance é a forma de antecipar a contemplação ao oferecer parte do saldo devedor no grupo, e quem tem uma reserva pode usá-lo para encurtar a espera. Cada grupo tem regras próprias, como lance livre, fixo ou embutido, e elas devem ser lidas antes de contratar.",
          "Vale evitar o lance que comprometa a reserva de emergência: se a contemplação por sorteio já atende ao seu prazo, ele pode não ser necessário."
        ]
      }
    ],
    modelos: {
      "title": "Famílias Kawasaki para considerar",
      "intro": "Modelos da linha 2026 listados pelo Motonline em fevereiro de 2026. Versões e disponibilidade variam por concessionária.",
      "columns": 3,
      "items": [
        {
          "name": "Ninja 500",
          "description": "Esportiva da família Ninja, indicada a quem quer carenagem e pilotagem esportiva."
        },
        {
          "name": "Z500",
          "description": "Naked da família Z, com proposta mais urbana e versátil."
        },
        {
          "name": "Z650",
          "description": "Naked de média cilindrada, para uso diário e estrada."
        },
        {
          "name": "Z900",
          "description": "Naked de 900 cc, acima da Z650 na família Z."
        },
        {
          "name": "Versys-X 300",
          "description": "Moto de viagem de entrada da linha Versys, para uso misto."
        },
        {
          "name": "Eliminator 500",
          "description": "Custom da marca, voltada a um estilo de pilotagem mais relaxado."
        }
      ]
    },
    faqsExtras: [
      {
        "question": "Posso escolher qualquer modelo Kawasaki ao contratar?",
        "answer": "Qualquer modelo novo da marca cujo preço caiba no valor da carta. Como o valor muda entre as famílias, a carta é definida na simulação, a partir do modelo que você quer."
      },
      {
        "question": "O consórcio serve para as Kawasaki de maior cilindrada?",
        "answer": "Sim, desde que a carta cubra o preço do modelo. Cartas mais altas costumam ter prazos mais longos e exigem atenção às regras de lance do grupo."
      },
      {
        "question": "Qual a diferença entre uma Ninja e uma Z?",
        "answer": "Segundo o Motonline, as Ninja são esportivas carenadas e as Z são nakeds, sem carenagem. Em geral a escolha depende da posição de pilotagem e do uso que você pretende dar à moto."
      }
    ],
    ctaTitulo: "Já escolheu a sua Kawasaki? Simule o plano",
    ctaDescricao: "Diga o modelo e se pretende dar lance. A Revla compara os grupos e apresenta as opções.",
    faqGenericas: [],
    ocultarDiferenciais: true,
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
    // Conteúdo próprio (10/11/2026). Fontes: Garagem360 (linha 2026 apresentada na EICMA 2025) e anúncios de 0km no Webmotors. Sem valores.
    metaTitle: "Consórcio de Moto Harley-Davidson: Modelos",
    metaDescription: "Consórcio de moto Harley-Davidson: Street Glide, Road Glide, Low Rider, Fat Boy e Sportster S, como escolher a família e simular sem compromisso com a Revla.",
    h1: "Consórcio de moto Harley-Davidson: escolha a família",
    heroDescription: "Touring, Softail e Sportster têm propostas diferentes. Veja como escolher a família e peça uma simulação sem compromisso para a Harley-Davidson que você quer.",
    eyebrow: "Consórcio de moto Harley-Davidson · planejamento de carta alta",
    comoFuncionaTitulo: "Consórcio para Harley-Davidson: família, uso e prazo",
    comoFuncionaParagrafos: [
      "A Harley-Davidson organiza a linha por famílias, como Touring, Softail e Sportster, e cada uma entrega um tipo de pilotagem. Como as cartas de uma moto desse porte costumam ser altas, o consórcio exige planejamento de prazo e de lance.",
      "Dentro do valor da carta, o consorciado escolhe o modelo Harley-Davidson que melhor lhe convier, desde que a carta cubra o preço. Depois da contemplação, a compra é feita em uma concessionária Harley-Davidson autorizada."
    ],
    secoes: [
      {
        "title": "Touring, Softail ou Sportster?",
        "paragraphs": [
          "Segundo a Garagem360, a linha 2026 apresentada pela marca inclui, entre as Grand American Touring, a Street Glide e a Road Glide, feitas para estrada e viagem. Entre as cruisers, aparecem Low Rider S, Low Rider ST, Heritage Classic, Breakout, Fat Boy e Street Bob, todas com motor Milwaukee-Eight 117.",
          "A família Sport, com Sportster S e Nightster, tem uma proposta mais compacta e esportiva, enquanto a Pan America representa a linha de aventura. A mesma matéria informa que a chegada de cada modelo ao Brasil não estava confirmada, então vale checar na concessionária o que está disponível agora."
        ]
      },
      {
        "title": "O que pesar antes de simular",
        "paragraphs": [
          "Defina a família e o modelo antes de escolher o prazo, e pergunte o que a carta cobre além da moto, como emplacamento e acessórios. Pergunte também como o grupo trata o lance e o reajuste da carta.",
          "Por ser um plano mais longo e de valor mais alto, o ideal é guardar tudo por escrito e comparar pelo menos duas propostas antes de assinar."
        ]
      }
    ],
    modelos: {
      "title": "Harley-Davidson para considerar na simulação",
      "intro": "Modelos da linha atual, conforme matérias e anúncios consultados em novembro de 2026. A oferta no Brasil muda de ano para ano.",
      "columns": 3,
      "items": [
        {
          "name": "Street Glide",
          "description": "Touring de estrada, com carenagem e foco em conforto para viagens longas."
        },
        {
          "name": "Road Glide",
          "description": "Touring de estrada com carenagem fixa no quadro, para quem viaja bastante."
        },
        {
          "name": "Low Rider S",
          "description": "Cruiser da família Softail, com postura esportiva."
        },
        {
          "name": "Low Rider ST",
          "description": "Versão de perfil mais viajante da Low Rider."
        },
        {
          "name": "Heritage Classic",
          "description": "Softail de estilo clássico, com para-brisa e baús."
        },
        {
          "name": "Sportster S",
          "description": "Representante da família Sport, mais compacta que as Softail e Touring."
        }
      ]
    },
    faqsExtras: [
      
      {
        "question": "Cartas mais altas têm prazo diferente?",
        "answer": "Em geral os grupos de valor mais alto têm prazos longos e parcelas maiores. As condições mudam por administradora e por grupo, e devem ser conferidas por escrito antes de contratar."
      },
      {
        "question": "Os modelos citados estão disponíveis no Brasil?",
        "answer": "A oferta muda a cada ano. Segundo a Garagem360, a chegada de cada modelo da linha 2026 ao país ainda não estava confirmada, então confirme com uma concessionária Harley-Davidson antes de decidir."
      }
    ],
    ctaTitulo: "Simule o consórcio da sua Harley-Davidson",
    ctaDescricao: "Escolha a família, informe o prazo desejado e a Revla apresenta as opções de grupo.",
    faqGenericas: [],
    ocultarDiferenciais: true,
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
    // Conteúdo próprio (10/11/2026). Fonte parcial: página da Dafra NH 190 no Motonline/Tabela Fipe 2026. Sem valores.
    metaTitle: "Consórcio de Moto Dafra: Como Escolher",
    metaDescription: "Consórcio de moto Dafra: Riva 150, NH 190, Next 250, Citycom 300i e outros modelos, o que avaliar antes de contratar e simulação sem compromisso com a Revla.",
    h1: "Consórcio de moto Dafra: do uso diário à trail",
    heroDescription: "A Dafra tem modelos de 150 cc, uma trail e scooters maiores. Veja como escolher o modelo e peça uma simulação sem compromisso.",
    eyebrow: "Consórcio de moto Dafra · custo-benefício em foco",
    comoFuncionaTitulo: "Consórcio para Dafra: escolha o modelo pelo uso",
    comoFuncionaParagrafos: [
      "A Dafra é uma marca com modelos de entrada e de custo-benefício, e o consórcio costuma agradar quem quer organizar a compra em parcelas sem juros. Como a linha mistura motos de 150 cc, uma trail e scooters maiores, o primeiro passo é saber para que a moto será usada.",
      "Dentro do valor da carta, o consorciado escolhe o modelo Dafra que melhor lhe convier, desde que a carta cubra o preço. Depois da contemplação, a compra é feita em uma concessionária Dafra autorizada."
    ],
    secoes: [
      {
        "title": "Qual modelo Dafra para qual uso",
        "paragraphs": [
          "Segundo o Motonline, a Dafra NH 190 é classificada como trail e compete com motos como a XRE 190. Entre as scooters, a Citycom 300i e a Maxsym 400i atendem quem busca mais potência na cidade. A linha também inclui modelos como Riva 150, Next 250, Horizon 150 e Apache RTR.",
          "Como a oferta de versões pode mudar de um ano para outro, confirme na simulação o modelo e a versão disponíveis. Em motos de entrada, o ponto principal costuma ser o custo total, e não apenas a parcela."
        ]
      }
    ],
    modelos: {
      "title": "Modelos Dafra para comparar",
      "intro": "Modelos citados pelo Motonline na página da marca. A disponibilidade varia por concessionária.",
      "columns": 4,
      "items": [
        {
          "name": "Riva 150",
          "description": "Opção de 150 cc da linha, a de menor cilindrada entre as quatro desta lista."
        },
        {
          "name": "NH 190",
          "description": "Trail da marca, que o Motonline compara à XRE 190."
        },
        {
          "name": "Next 250",
          "description": "Modelo de 250 cc da linha, de cilindrada mais alta que a Riva."
        },
        {
          "name": "Citycom 300i",
          "description": "Scooter de maior cilindrada, para uso urbano."
        }
      ]
    },
    faqsExtras: [
      {
        "question": "Posso escolher qualquer modelo Dafra ao contratar?",
        "answer": "Qualquer modelo novo da marca cujo preço caiba no valor da carta. A carta é definida na simulação, a partir do modelo que você quer."
      },
      {
        "question": "A carta cobre o modelo se o preço mudar até a contemplação?",
        "answer": "A simulação parte do modelo e da versão que você quer. O reajuste da carta até a contemplação segue as regras do contrato do grupo, por isso peça essa regra por escrito antes de assinar."
      },
      {
        "question": "Como confirmar a concessionária mais próxima?",
        "answer": "Antes de contratar, veja qual concessionária Dafra fica mais perto de você e se ela trabalha com o modelo escolhido. Um consultor da Revla pode ajudar nessa checagem."
      }
    ],
    ctaTitulo: "Simule o consórcio da sua Dafra",
    ctaDescricao: "Informe o modelo e o prazo desejado, e a Revla compara os grupos de moto disponíveis.",
    faqGenericas: [],
    ocultarDiferenciais: true,
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
    // Conteúdo próprio (10/11/2026). Fonte da linha: Motonline, 19/02/2026 (Shineray: 33 modelos). Sem valores.
    metaTitle: "Consórcio de Moto Shineray: Como Funciona",
    metaDescription: "Consórcio de moto Shineray: como funciona, modelos de 125 a 250 cc, o que comparar com o financiamento e simulação sem compromisso com a Revla.",
    h1: "Consórcio de moto Shineray: como funciona e como simular",
    heroDescription: "A Shineray tem motos de 125 a 250 cc, scooters e modelos elétricos. Veja como o consórcio funciona para uma moto de entrada e peça uma simulação sem compromisso.",
    eyebrow: "Consórcio de moto Shineray · moto de entrada, sem juros",
    comoFuncionaTitulo: "Consórcio para Shineray: moto de entrada e custo total",
    comoFuncionaParagrafos: [
      "A Shineray se firmou no Brasil com motos, scooters e veículos elétricos de preço acessível, segundo o Motonline. Em motos de entrada, a diferença entre juros e taxa de administração pode ser decisiva, e é aí que o consórcio entra como alternativa ao financiamento.",
      "Dentro do valor da carta, o consorciado escolhe o modelo Shineray que melhor lhe convier, desde que a carta cubra o preço. Depois da contemplação, a compra é feita em uma concessionária Shineray autorizada."
    ],
    secoes: [
      {
        "title": "Consórcio ou financiamento para uma moto de entrada?",
        "paragraphs": [
          "No financiamento a moto é liberada logo, mas com juros que somam ao preço. No consórcio, a parcela é composta por valor da carta, taxa de administração e fundo de reserva, sem juros, e a moto é liberada após a contemplação, por sorteio ou lance.",
          "Quem precisa da moto agora tende a preferir o financiamento. Quem pode esperar e quer pagar menos no total costuma considerar o consórcio. Compare o custo das duas opções por escrito antes de decidir."
        ]
      }
    ],
    modelos: {
      "title": "Modelos Shineray para considerar",
      "intro": "Modelos da linha 2026 listados pelo Motonline em fevereiro de 2026. A linha de motos vai de 125 cc a 250 cc, além de scooters e elétricas.",
      "columns": 3,
      "items": [
        {
          "name": "Rio 125 EFI",
          "description": "Moto de 125 cc com injeção eletrônica, para uso diário."
        },
        {
          "name": "Jet 125SS EFI",
          "description": "Modelo de 125 cc da família Jet, também com injeção."
        },
        {
          "name": "Free 150 EFI",
          "description": "Opção de 150 cc da marca com injeção eletrônica."
        },
        {
          "name": "SHI 175s EFI",
          "description": "Versão de 175 cc da linha SHI, com injeção."
        },
        {
          "name": "Storm 200 EFI",
          "description": "Modelo de 200 cc, entre os de maior cilindrada da marca."
        },
        {
          "name": "SHI 250",
          "description": "Moto de 250 cc, no topo da linha de motos da marca."
        }
      ]
    },
    faqsExtras: [
      {
        "question": "Posso escolher qualquer modelo Shineray ao contratar?",
        "answer": "Qualquer modelo novo da marca cujo preço caiba no valor da carta. A carta é definida na simulação, a partir do modelo que você quer."
      },
      {
        "question": "Quando eu recebo a moto no consórcio?",
        "answer": "Depois da contemplação, que ocorre por sorteio mensal ou por lance. O prazo varia conforme o grupo, por isso vale perguntar o histórico de contemplações antes de contratar."
      },
      {
        "question": "Existe consórcio para scooter ou moto elétrica Shineray?",
        "answer": "Depende do grupo e da administradora. Informe o modelo na simulação e um consultor da Revla confirma se há cartas para o que você quer."
      }
    ],
    ctaTitulo: "Simule o consórcio da sua Shineray",
    ctaDescricao: "Informe o modelo e o prazo que cabe no orçamento, e a Revla apresenta as opções.",
    faqGenericas: [],
    ocultarDiferenciais: true,
  },
];

export function getMotoBrand(slug: string): MotoBrand | undefined {
  return motoBrands.find((b) => b.slug === slug);
}
