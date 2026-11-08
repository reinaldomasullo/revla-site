// Páginas de operadoras de plano de saúde (além da Prevent Senior).
// A Revla cota e contrata esses planos; NÃO é "parceira oficial" (decisão do
// usuário, 08/11/2026) e a BlissHub nunca é citada em conteúdo público.
// Fatos conferidos nos sites oficiais em novembro de 2026. Sem tabela de
// preços: as cotações são individuais (idade, cidade, tipo de contrato e
// número de vidas). Nada aqui pode prometer o que o site oficial não diz.
//
// CORREÇÃO (auditoria SEO, 08/11/2026): metaTitle (+ sufixo " | Revla
// Corretora" do layout) e metaDescription das 6 operadoras passavam do
// orçamento de ~60/~160 caracteres que o resto do site respeita — mesma
// classe de problema do title truncado do blog (ver buildBlogTitle em
// site-config.ts), só que aqui nunca corrigido porque essas páginas usam
// buildMetadata() direto, sem nenhum teto de caracteres. Textos encurtados
// abaixo sem perder o fato principal de cada operadora.

export type OperadoraSlug =
  | "amil"
  | "bradesco-saude"
  | "sulamerica"
  | "hapvida"
  | "notredame"
  | "medsenior";

export type OperadoraTipo = { title: string; description: string };
export type OperadoraFaq = { question: string; answer: string };

export type Operadora = {
  slug: OperadoraSlug;
  nome: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  sobre: string;
  tipos: OperadoraTipo[];
  diferenciais: OperadoraTipo[];
  paraQuem: string;
  faq: OperadoraFaq[];
};

export const OPERADORAS_CONFERIDO_EM = "novembro de 2026";

export const operadoras: Operadora[] = [
  {
    slug: "amil",
    nome: "Amil",
    metaTitle: "Plano de Saúde Amil: Convênio e Cotação",
    metaDescription: "Plano de saúde Amil (convênio Amil): linhas Amil One, Amil Fácil e Amil Black. Cotação com a Revla por WhatsApp, sem compromisso.",
    heroTitle: "Plano de saúde Amil: cotação e contratação com a Revla",
    heroDescription:
      "A Revla cota e contrata planos Amil e compara com outras operadoras para o seu perfil. Atendimento por WhatsApp e videochamada, com simulação gratuita e sem compromisso.",
    sobre:
      "A Amil é uma operadora de planos de saúde registrada na Agência Nacional de Saúde Suplementar (ANS). O portfólio dela reúne linhas de diferentes níveis, de opções de entrada a planos premium, e o material público cita linhas como Amil Black. A disponibilidade de cada linha, a rede e o tipo de contratação variam conforme a região e o momento, por isso conferimos tudo na hora da cotação.",
    tipos: [
      {
        title: "Linhas Amil, Amil One e Amil Fácil",
        description:
          "Linhas de plano médico citadas no material comercial da operadora. A disponibilidade varia por região e por tipo de contrato.",
      },
      {
        title: "Amil One",
        description:
          "Linha de padrão mais alto, segundo o material comercial da operadora. Confirmamos rede e condições na cotação.",
      },
      {
        title: "Amil Black",
        description:
          "Linha de alto padrão associada à marca. Confirmamos na cotação se está disponível na sua região e em que condições.",
      },
    ],
    diferenciais: [
      {
        title: "Linhas para vários níveis de orçamento",
        description: "Do plano de entrada ao premium, na mesma operadora, o que facilita comparar custo e rede.",
      },
      {
        title: "Planos empresariais e PME",
        description: "A operadora comercializa planos para empresas, e a Revla monta a simulação conforme o número de vidas.",
      },
      {
        title: "Plano odontológico",
        description: "A Amil também tem plano odontológico, que podemos cotar junto com o plano médico.",
      },
    ],
    paraQuem:
      "Quem procura uma operadora com mais de uma linha de produto para comparar, e empresas que querem cotar plano para a equipe. Para pessoas físicas, a possibilidade de contratação depende do produto vigente na sua região, e conferimos isso antes de qualquer proposta.",
    faq: [
      {
        question: "Existe plano Amil para empresa (Amil Empresas)?",
        answer:
          "Sim. A Amil comercializa planos para empresas, e \"Amil empresa\" é uma das buscas mais frequentes sobre a operadora. A Revla monta a simulação conforme o número de vidas e compara com outras operadoras. As condições dependem do porte da empresa e da região.",
      },
      {
        question: "O que é o Amil One?",
        answer:
          "É uma das linhas citadas no material comercial da operadora, associada a padrão mais alto de rede e acomodação. A disponibilidade e as condições variam por região e por tipo de contrato, e confirmamos tudo na cotação.",
      },
      {
        question: "A Amil tem plano odontológico?",
        answer:
          "A operadora também comercializa plano odontológico (Amil Dental), que pode ser contratado separado ou junto com o plano médico. Confirmamos as condições vigentes na cotação.",
      },
      {
        question: "Quais são as linhas de plano de saúde da Amil?",
        answer:
          "No material público da operadora aparecem linhas como Amil, Amil One, Amil Fácil e Amil Black. Quais delas estão à venda na sua cidade e para o seu tipo de contrato (pessoa física, adesão ou empresa) muda com o tempo, e confirmamos na cotação.",
      },
      {
        question: "Dá para contratar Amil como pessoa física?",
        answer:
          "Depende do produto disponível na sua região e do seu perfil. Muitas contratações acontecem por plano coletivo, empresarial ou por adesão. Conferimos qual caminho existe para você antes de enviar qualquer proposta.",
      },
    ],
  },
  {
    slug: "bradesco-saude",
    nome: "Bradesco Saúde",
    metaTitle: "Plano de Saúde Bradesco Saúde: Empresarial",
    metaDescription: "Plano de saúde Bradesco Saúde empresarial e por adesão. A Bradesco Saúde não vende plano individual. Cote com a Revla sem compromisso.",
    heroTitle: "Plano de saúde Bradesco Saúde: empresarial e por adesão",
    heroDescription:
      "A Revla cota e contrata planos Bradesco Saúde para empresas e para quem tem direito a plano por adesão. A operadora não comercializa plano individual ou familiar.",
    sobre:
      "A Bradesco Saúde é uma operadora registrada na ANS. Segundo o próprio site da Bradesco Seguros, ela comercializa exclusivamente planos e seguros de saúde coletivos, que podem ser empresariais ou por adesão. Os empresariais são contratados por pessoas jurídicas ou empresários individuais, para quem tem vínculo com a empresa. Os por adesão são contratados por entidades de classe, conselhos, sindicatos, associações e cooperativas, para os seus associados. A rede é chamada de rede referenciada, e há reembolso para atendimentos fora dela.",
    tipos: [
      {
        title: "Plano coletivo empresarial",
        description:
          "Contratado por CNPJ ou empresário individual, para funcionários e dependentes. É o caminho para empresas que querem oferecer plano de saúde à equipe.",
      },
      {
        title: "Plano coletivo por adesão",
        description:
          "Contratado por entidades como conselhos profissionais, sindicatos, associações e cooperativas, para as pessoas vinculadas a elas, conforme as regras da ANS.",
      },
      {
        title: "Sem plano individual ou familiar",
        description:
          "O site oficial informa que a Bradesco Saúde não comercializa seguro individual ou familiar. Quem é pessoa física sem vínculo precisa de outra operadora, e a Revla cota as alternativas.",
      },
    ],
    diferenciais: [
      {
        title: "Rede referenciada e reembolso",
        description: "Atendimento na rede referenciada, com reembolso das despesas feitas fora dela, conforme o contrato.",
      },
      {
        title: "Aplicativo da operadora",
        description: "Aplicativo da operadora, com recursos que variam conforme o plano contratado.",
      },
      {
        title: "Canais digitais",
        description: "Aplicativo da operadora para consultas à rede e solicitações, conforme o plano contratado.",
      },
    ],
    paraQuem:
      "Empresas e empresários individuais que querem plano para a equipe, e pessoas que pertencem a uma entidade de classe com contrato por adesão. Quem busca plano individual ou familiar não consegue contratar Bradesco Saúde diretamente.",
    faq: [
      {
        question: "Bradesco Saúde individual ou pessoa física: existe?",
        answer:
          "Muita gente busca \"plano de saúde Bradesco individual\" ou \"pessoa física\", mas a Bradesco Saúde não comercializa plano individual ou familiar. As opções são o plano empresarial, para quem tem CNPJ, e o plano por adesão, para quem pertence a uma entidade de classe. Se você não se enquadra em nenhum dos dois, a Revla cota outras operadoras.",
      },
      {
        question: "A Bradesco Saúde tem plano odontológico (Bradesco Dental)?",
        answer:
          "A Bradesco Seguros comercializa plano odontológico, chamado Bradesco Dental, que pode ser cotado junto com o plano de saúde empresarial. As condições vigentes são confirmadas na cotação.",
      },
      {
        question: "A Bradesco Saúde vende plano individual ou familiar?",
        answer:
          "Não. O site oficial da Bradesco Seguros informa que a Bradesco Saúde não comercializa seguro individual ou familiar, apenas planos coletivos empresariais ou por adesão. Se você é pessoa física sem vínculo com empresa ou entidade, a Revla cota outras operadoras para o seu caso.",
      },
      {
        question: "Preciso ter CNPJ para contratar Bradesco Saúde?",
        answer:
          "Para o plano empresarial, sim: o contratante é uma pessoa jurídica ou um empresário individual. Para o plano por adesão, o contrato é feito por uma entidade de classe, e a pessoa precisa ter vínculo com ela.",
      },
      {
        question: "Como funciona o reembolso da Bradesco Saúde?",
        answer:
          "A operadora informa que há reembolso das despesas médicas feitas fora da rede referenciada, e as regras e os limites dependem do plano contratado. Explicamos o reembolso do plano que você estiver avaliando antes da contratação.",
      },
    ],
  },
  {
    slug: "sulamerica",
    nome: "SulAmérica",
    metaTitle: "Plano de Saúde SulAmérica: Cotação",
    metaDescription: "Plano de saúde SulAmérica empresarial a partir de 3 vidas: linhas SulAmérica, Vital e Profissões. Cotação com a Revla por WhatsApp.",
    heroTitle: "Plano de saúde SulAmérica: cotação e contratação com a Revla",
    heroDescription:
      "A Revla cota e contrata planos SulAmérica para empresas e profissionais, e compara com outras operadoras. Atendimento por WhatsApp, com simulação gratuita.",
    sobre:
      "No portal de saúde da SulAmérica, os planos aparecem em linhas empresariais: SulAmérica, Vital e Profissões. Os planos personalizados começam a partir de 3 vidas, com escolha de acomodação e modelos com e sem coparticipação. A operadora informa uma rede com mais de 14 mil hospitais, clínicas e consultórios, mais de 2,5 mil laboratórios e mais de 55 mil médicos e terapeutas, e pede para consultar a rede conforme o plano contratado.",
    tipos: [
      {
        title: "Linha SulAmérica",
        description:
          "Planos personalizados a partir de 3 vidas, com rede de excelência, escolha de acomodação e modelos com e sem coparticipação.",
      },
      {
        title: "Linha Vital",
        description:
          "Planos a partir de 3 vidas, com hospitais e laboratórios de excelência assistencial e mais previsibilidade no investimento em saúde.",
      },
      {
        title: "Linha Profissões",
        description:
          "Plano de saúde hospitalar com seguro de vida e check-up inclusos, em contratação empresarial de 3 a 29 vidas, para médicos, dentistas, advogados, engenheiros, psicólogos, corretores e outros profissionais.",
      },
    ],
    diferenciais: [
      {
        title: "Modelos com e sem coparticipação",
        description: "Você escolhe entre mensalidade mais previsível ou pagar parte do uso, conforme o perfil de utilização.",
      },
      {
        title: "Saúde na Tela e LabIN",
        description: "Consulta médica por vídeo 24 horas por dia e coleta de exames em casa, nos planos elegíveis, segundo a operadora.",
      },
      {
        title: "Rede nacional",
        description: "Mais de 14 mil hospitais, clínicas e consultórios, conforme informado pela operadora (consulte a rede do plano).",
      },
    ],
    paraQuem:
      "Empresas com 3 vidas ou mais e profissionais liberais que montam uma pequena empresa para contratar plano. Para quem é pessoa física sem CNPJ, conferimos na cotação se existe um caminho de contratação com a SulAmérica ou se outra operadora serve melhor.",
    faq: [
      {
        question: "A SulAmérica tem plano odontológico (SulAmérica Odonto)?",
        answer:
          "A SulAmérica comercializa plano odontológico, que pode ser cotado junto com o plano de saúde empresarial. As condições vigentes são confirmadas na cotação.",
      },
      {
        question: "Qual o valor do plano de saúde SulAmérica?",
        answer:
          "O valor depende da linha (SulAmérica, Vital ou Profissões), da idade dos beneficiários, da cidade, do número de vidas e da escolha entre acomodação e coparticipação. Por isso não existe um preço único. A Revla faz a simulação e compara com outras operadoras.",
      },
      {
        question: "A partir de quantas vidas dá para contratar SulAmérica?",
        answer:
          "Segundo o portal da operadora, os planos empresariais das linhas SulAmérica e Vital partem de 3 vidas. A linha Profissões é para contratação empresarial de 3 a 29 vidas, voltada a profissionais como médicos, dentistas, advogados e engenheiros.",
      },
      {
        question: "O que é a linha Profissões da SulAmérica?",
        answer:
          "É um plano de saúde hospitalar com seguro de vida e check-up inclusos, para contratação empresarial de 3 a 29 vidas, destinado a profissionais como médicos, dentistas, advogados, engenheiros, psicólogos e corretores. As condições exatas dependem da proposta.",
      },
      {
        question: "O plano SulAmérica tem coparticipação?",
        answer:
          "A operadora informa que há modelos com e sem coparticipação. Mostramos os dois lado a lado na cotação, para você comparar mensalidade e custo de uso.",
      },
    ],
  },
  {
    slug: "hapvida",
    nome: "Hapvida",
    metaTitle: "Plano de Saúde Hapvida: Cotação",
    metaDescription: "Plano de saúde Hapvida individual, familiar, empresarial e microempresa, com rede própria. Simulação com a Revla por WhatsApp.",
    heroTitle: "Plano de saúde Hapvida: cotação e contratação com a Revla",
    heroDescription:
      "A Revla cota e contrata planos Hapvida para pessoas físicas, famílias e empresas, e compara com outras operadoras. Simulação gratuita e sem compromisso.",
    sobre:
      "A Hapvida informa em seu site mais de 15 milhões de beneficiários ativos, 86 hospitais próprios e 365 clínicas e centros médicos, com mais de 80 anos de atuação. O modelo é de rede própria, com atendimento integrado, teleconsulta, programa de prevenção (Qualivida) e clube de vantagens. A operadora apresenta planos para pessoa física, pessoa jurídica e microempresa. Em São Paulo e no Rio de Janeiro, o grupo também atende pela marca NotreDame.",
    tipos: [
      {
        title: "Individual e familiar",
        description: "Planos para pessoa física e para a família, com acesso à rede própria da operadora.",
      },
      {
        title: "Empresarial (pessoa jurídica)",
        description: "Planos para empresas, para oferecer a funcionários e dependentes.",
      },
      {
        title: "Microempresa",
        description: "Linha específica para microempresas, com regras próprias de contratação.",
      },
    ],
    diferenciais: [
      {
        title: "Rede própria",
        description: "86 hospitais próprios e 365 clínicas e centros médicos, segundo o site da operadora.",
      },
      {
        title: "Mais de 15 milhões de beneficiários",
        description: "Número informado pela própria operadora em seu site.",
      },
      {
        title: "Teleconsulta e prevenção",
        description: "Consultas por vídeo em várias especialidades e programas de prevenção, como o Qualivida.",
      },
    ],
    paraQuem:
      "Quem valoriza uma operadora com rede própria e planos para pessoa física, família e empresa. A rede varia muito por região, então comparamos onde ficam os hospitais e clínicas perto de você antes de indicar o plano.",
    faq: [
      {
        question: "Existe plano Hapvida para empresa?",
        answer:
          "Sim. A operadora comercializa planos para pessoa jurídica e uma linha para microempresa, e \"Hapvida empresa\" é uma das buscas mais frequentes sobre a marca. A Revla faz a simulação conforme o número de vidas e a cidade.",
      },
      {
        question: "A Hapvida tem plano odontológico (Hapvida Odonto)?",
        answer:
          "A operadora também comercializa plano odontológico, que pode ser cotado junto com o plano médico. Confirmamos as condições vigentes na cotação.",
      },
      {
        question: "Quanto custa o plano de saúde Hapvida individual?",
        answer:
          "O valor depende da idade, da cidade e do plano escolhido, então não há preço único. Envie sua idade e cidade pelo WhatsApp e a Revla faz a simulação do plano individual ou familiar e compara com outras operadoras.",
      },
      {
        question: "A Hapvida tem plano individual e familiar?",
        answer:
          "Sim. O site da operadora apresenta planos individual e familiar, além de planos empresariais e para microempresa. Quais estão disponíveis na sua cidade confirmamos na cotação.",
      },
      {
        question: "A Hapvida tem rede própria?",
        answer:
          "Sim. A operadora informa 86 hospitais próprios e 365 clínicas e centros médicos. A cobertura de cada plano depende da região contratada, e ajudamos a verificar a rede perto de você.",
      },
      {
        question: "Hapvida e NotreDame são a mesma operadora?",
        answer:
          "São do mesmo grupo. O site que antes era da GNDI/NotreDame hoje é identificado como Hapvida SP/RJ e anuncia a nova NotreDame Saúde para São Paulo e Rio de Janeiro. Temos também uma página sobre o plano de saúde NotreDame.",
      },
    ],
  },
  {
    slug: "notredame",
    nome: "NotreDame",
    metaTitle: "Plano de Saúde NotreDame: SP e RJ",
    metaDescription: "Plano de saúde NotreDame (antiga Intermédica), hoje do grupo Hapvida, em SP e RJ. Cotação com a Revla, sem compromisso.",
    heroTitle: "Plano de saúde NotreDame: cotação e contratação com a Revla",
    heroDescription:
      "A Revla cota e contrata planos NotreDame Saúde em São Paulo e no Rio de Janeiro e compara com outras operadoras. Simulação gratuita e sem compromisso.",
    sobre:
      "A NotreDame é hoje uma marca do grupo Hapvida. O site que antes era da GNDI (NotreDame Intermédica) aparece agora como Hapvida SP/RJ e anuncia a nova NotreDame Saúde, com rede integrada de hospitais, clínicas e centros médicos em São Paulo e no Rio de Janeiro, para pessoa física e pessoa jurídica. A imprensa noticiou o lançamento da marca em agosto de 2026 no segmento premium, com rede credenciada de hospitais de referência e reembolso. Como a oferta está sendo reformulada, confirmamos produto, rede e condições vigentes na hora da cotação.",
    tipos: [
      {
        title: "Pessoa física",
        description: "O site da operadora apresenta planos individuais para pessoa física, com acesso à rede própria do grupo.",
      },
      {
        title: "Pessoa jurídica",
        description: "Planos para empresas, para oferecer a funcionários e dependentes em São Paulo e no Rio de Janeiro.",
      },
      {
        title: "Nova NotreDame Saúde (premium)",
        description:
          "Linha anunciada pelo grupo Hapvida com foco no segmento premium. Segundo a imprensa, inclui rede credenciada de hospitais de referência e reembolso. Confirmamos os detalhes na cotação.",
      },
    ],
    diferenciais: [
      {
        title: "Rede integrada em SP e RJ",
        description: "Hospitais, clínicas e centros médicos, segundo o site da operadora para São Paulo e Rio de Janeiro.",
      },
      {
        title: "Grupo Hapvida",
        description: "Operadora do mesmo grupo da Hapvida, com 86 hospitais e 365 clínicas próprios no total, segundo o site.",
      },
      {
        title: "Teleconsulta e prevenção",
        description: "Consultas por vídeo em várias especialidades e programas de prevenção, como o Qualivida.",
      },
    ],
    paraQuem:
      "Quem mora ou trabalha em São Paulo ou no Rio de Janeiro e quer comparar a oferta NotreDame com outras operadoras, inclusive no segmento premium. Fora dessas duas regiões, a Hapvida costuma ser o caminho, e cotamos as duas.",
    faq: [
      {
        question: "NotreDame Intermédica e NotreDame Saúde são a mesma coisa?",
        answer:
          "A marca NotreDame Intermédica (antiga GNDI) passou a integrar o grupo Hapvida, e o site anuncia a nova NotreDame Saúde para São Paulo e Rio de Janeiro. Quem busca \"plano de saúde Intermédica\" ou \"convênio NotreDame\" chega ao mesmo grupo. Confirmamos na cotação qual produto está à venda na sua cidade.",
      },
      {
        question: "O que é o convênio Intermédica (GNDI)?",
        answer:
          "Intermédica e GNDI são nomes anteriores da operadora que hoje faz parte do grupo Hapvida e usa a marca NotreDame. O termo ainda é muito buscado. A Revla cota os planos atuais do grupo para a sua cidade.",
      },
      {
        question: "NotreDame e Hapvida são a mesma empresa?",
        answer:
          "São do mesmo grupo. O site da antiga GNDI (NotreDame Intermédica) hoje é identificado como Hapvida SP/RJ e anuncia a nova NotreDame Saúde. Temos também uma página sobre o plano de saúde Hapvida.",
      },
      {
        question: "O que é a nova NotreDame Saúde?",
        answer:
          "É a marca que o grupo Hapvida relançou em 2026 para São Paulo e Rio de Janeiro. Segundo a imprensa, ela mira o segmento premium, com rede credenciada de hospitais de referência e reembolso. As condições mudam, então confirmamos o produto vigente na cotação.",
      },
      {
        question: "Em quais cidades o plano NotreDame atende?",
        answer:
          "O site da operadora fala em rede integrada em São Paulo e no Rio de Janeiro. A abrangência de cada plano depende do contrato, e verificamos se a sua cidade está coberta antes da proposta.",
      },
    ],
  },
  {
    slug: "medsenior",
    nome: "MedSênior",
    metaTitle: "Plano de Saúde MedSênior: Cotação",
    metaDescription: "Plano de saúde MedSênior para a terceira idade em SP, Campinas, RJ, ES e outras cidades. Compare e cote com a Revla.",
    heroTitle: "Plano de saúde MedSênior para a terceira idade",
    heroDescription:
      "A Revla cota e contrata planos MedSênior e compara com a Prevent Senior e outras operadoras para o seu perfil e a sua cidade. Simulação gratuita e sem compromisso.",
    sobre:
      "A MedSênior é uma operadora voltada à terceira idade. O site informa mais de 16 anos de atuação, 45 unidades próprias com diversas especialidades e oficinas de saúde, laboratório próprio e coleta domiciliar em alguns serviços. Há planos por localidade: Campinas, Distrito Federal, Espírito Santo, Minas Gerais, Paraná, Pernambuco, Rio de Janeiro, Rio Grande do Sul e São Paulo. O foco é o chamado Bem Envelhecer, com plano de gerenciamento de cuidados individualizado.",
    tipos: [
      {
        title: "Planos por localidade",
        description:
          "A operadora organiza os planos por região: Campinas, Distrito Federal, Espírito Santo, Minas Gerais, Paraná, Pernambuco, Rio de Janeiro, Rio Grande do Sul e São Paulo.",
      },
      {
        title: "Foco na terceira idade",
        description: "Plano e unidades pensados para o público idoso, com programa Bem Envelhecer e oficinas de saúde.",
      },
      {
        title: "Venda por corretores",
        description:
          "O site da operadora direciona a contratação para sua central de vendas e para corretores. A Revla faz a cotação e acompanha a proposta.",
      },
    ],
    diferenciais: [
      {
        title: "45 unidades",
        description: "Unidades próprias com ampla capacidade de atendimento, especialidades e oficinas de saúde, segundo o site.",
      },
      {
        title: "Programa Bem Envelhecer",
        description: "Ações de cuidado individualizado e promoção do envelhecimento saudável.",
      },
      {
        title: "Laboratório e serviços próprios",
        description: "Laboratório próprio e coleta domiciliar em alguns serviços, segundo o site.",
      },
    ],
    paraQuem:
      "Pessoas na terceira idade e famílias que buscam uma operadora especializada nesse público. Se você também avalia a Prevent Senior, nós comparamos as duas, porque rede, unidades e regiões atendidas são diferentes.",
    faq: [
      {
        question: "O plano MedSênior é bom?",
        answer:
          "Depende do que você precisa e de onde mora. Os pontos a comparar são as unidades próprias perto de você, as especialidades disponíveis, o programa de cuidado para a terceira idade e a mensalidade por faixa etária. A Revla compara a MedSênior com a Prevent Senior e outras operadoras para o seu caso, e não avaliamos a operadora de forma genérica.",
      },
      {
        question: "Qual o valor do plano de saúde MedSênior?",
        answer:
          "O valor varia com a idade, a cidade e o plano contratado, e a operadora o define na proposta. Envie sua idade e cidade pelo WhatsApp e a Revla faz a cotação e compara com a Prevent Senior.",
      },
      {
        question: "MedSênior atende no Espírito Santo?",
        answer:
          "Sim. O Espírito Santo aparece entre as localidades com plano no site da operadora, junto com São Paulo, Campinas, Distrito Federal, Minas Gerais, Paraná, Pernambuco, Rio de Janeiro e Rio Grande do Sul. Confirmamos a rede disponível na sua cidade na cotação.",
      },
      {
        question: "A MedSênior atende em São Paulo?",
        answer:
          "Sim. São Paulo aparece entre as localidades com plano no site da operadora, junto com Campinas, Distrito Federal, Espírito Santo, Minas Gerais, Paraná, Pernambuco, Rio de Janeiro e Rio Grande do Sul. Confirmamos na cotação a rede disponível na sua cidade.",
      },
      {
        question: "Qual a diferença entre MedSênior e Prevent Senior?",
        answer:
          "As duas são operadoras com foco na terceira idade, mas diferem em rede, unidades e regiões. A Prevent Senior tem página própria na Revla, com tabela de preços e a regra de sem aumento por faixa etária a partir dos 44 anos. Fazemos a comparação para o seu caso.",
      },
      {
        question: "Existe idade mínima ou máxima para contratar MedSênior?",
        answer:
          "As regras de idade e de carência dependem do plano e da região, e não constam de forma clara no site da operadora. Confirmamos esses pontos na cotação, antes de qualquer proposta.",
      },
    ],
  },
];

export function getOperadora(slug: OperadoraSlug): Operadora {
  const op = operadoras.find((o) => o.slug === slug);
  if (!op) throw new Error(`Operadora desconhecida: ${slug}`);
  return op;
}
