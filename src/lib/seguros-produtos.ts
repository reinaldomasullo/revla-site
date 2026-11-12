// Dados das páginas de produto do hub de Seguros (Estratégia 1 — Onda 8).
// As 9 páginas foram validadas com volume real e distinto no Google Ads
// Keyword Planner (pesquisa de 15/09) — todas nacionais, nenhuma mostrou
// sinal de demanda diferenciado por cidade. Seguradoras parceiras (Porto
// Seguro, Suhai, Junto) só entram no conteúdo, nunca em URL/título, sempre
// com linguagem de corretor multimarca. RC Profissional e Condominial usam
// Porto Seguro sem citar o nome dela (decisão fechada com o usuário).
//
// | Produto          | Termo principal          | Volume nacional  |
// |------------------|---------------------------|-------------------|
// | Residencial      | seguro residencial         | 10 mil–100 mil   |
// | Celular          | seguro celular              | 10 mil–100 mil   |
// | Moto             | seguro moto / de moto       | 10 mil–100 mil   |
// | Fiança            | seguro fiança               | 10 mil–100 mil   |
// | Empresarial      | seguro empresarial          | 1 mil–10 mil     |
// | Garantia          | seguro garantia             | 1 mil–10 mil     |
// | RC Profissional  | seguro rc profissional      | 100–1 mil        |
// | Condominial      | seguro condominial          | 100–1 mil        |
// | Bicicleta        | seguro bicicleta            | 100–1 mil        |
//
// Nenhuma das 9 páginas recebe depoimento: nenhum dos testemunhos reais já
// confirmados (ver src/lib/site-config.ts) fala especificamente sobre
// qualquer um desses 9 produtos — evita reaproveitar fora de contexto.

/** Chave de ícone — mapeada para o componente real dentro da página. */
export type CoberturaIcon =
  | "Flame"
  | "ShieldCheck"
  | "Wrench"
  | "Globe"
  | "Scale"
  | "Truck"
  | "Key"
  | "Receipt"
  | "TrendingUp"
  | "DocumentCheck"
  | "LockDocument"
  | "Sparkle"
  | "HospitalCross"
  | "Backpack"
  | "Plane"
  | "Heart"
  | "ShieldUsers"
  | "ClockShort";

/** Depoimento real de cliente (mesma fonte de src/lib/site-config.ts),
 * usado só quando o relato bate de verdade com o produto da página —
 * evita reaproveitar fora de contexto. */
export type SeguroTestemunho = { name: string; city: string; quote: string };

export type SeguroProduto = {
  slug: string;
  /** Nome de exibição, ex. "Seguro Residencial". */
  nome: string;
  /** Título só da página (sem o sufixo " | Revla Corretora"), ≤42 caracteres. */
  tituloMeta: string;
  descricaoMeta: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  /** Parágrafo de contexto único — nunca reaproveitado entre páginas. */
  introParagrafo: string;
  /** Menção às seguradoras parceiras, respeitando a regra de marca do produto. */
  seguradorasTexto: string;
  coberturas: { title: string; description: string; icon: CoberturaIcon }[];
  /** Seções de conteúdo próprio (exclusões, como acionar, documentos etc.) — nunca reaproveitadas entre produtos. */
  secoes: { title: string; paragrafos: string[] }[];
  /** Pergunta de preço própria do produto (fatores que pesam no valor). */
  faqPreco: { question: string; answer: string };
  /** Perguntas específicas deste produto, além das genéricas compartilhadas. */
  faqEspecifica: { question: string; answer: string }[];
  /** Opcional — só preenchido quando um depoimento real já aprovado fala
   * especificamente desse produto. */
  testemunho?: SeguroTestemunho;
};

export const segurosProdutos: SeguroProduto[] = [
  {
    slug: "residencial",
    nome: "Seguro Residencial",
    tituloMeta: "Seguro Residencial: Cobertura e Preço",
    descricaoMeta:
      "Seguro residencial contra incêndio, roubo e danos elétricos, comparando as maiores seguradoras do Brasil. Simulação gratuita com a Revla.",
    heroEyebrow: "Seguro Residencial",
    heroTitle: "Seguro Residencial: proteção completa pra sua casa ou apartamento",
    heroDescription:
      "Cobertura contra incêndio, roubo, danos elétricos e desastres naturais, com simulação gratuita e sem compromisso.",
    introParagrafo:
      "O seguro residencial protege sua casa ou apartamento contra imprevistos como incêndio, roubo e danos elétricos — seja você proprietário ou inquilino. Na simulação, a Revla ajusta o valor do imóvel, o dos bens e as coberturas ao seu caso, seja casa ou apartamento, próprio ou alugado.",
    seguradorasTexto:
      "Cotamos seguro residencial com as principais seguradoras do mercado — Porto Seguro, Zurich, HDI, AXA, Ezze, Ituran, Akad, Capemisa, Mongeral e Omint, entre outras — comparando cobertura e preço pra encontrar a opção com melhor custo-benefício pro seu imóvel.",
    coberturas: [
      {
        title: "Incêndio e explosão",
        description: "Indenização em caso de incêndio, explosão ou queda de raio que atinja o imóvel.",
        icon: "Flame",
      },
      {
        title: "Roubo e furto qualificado",
        description: "Cobertura para roubo e furto qualificado (com arrombamento) dos bens dentro do imóvel.",
        icon: "ShieldCheck",
      },
      {
        title: "Danos elétricos e vendaval",
        description:
          "Proteção contra danos elétricos em equipamentos e prejuízos causados por vendaval, granizo e outros desastres naturais.",
        icon: "Wrench",
      },
    ],
    secoes: [
      { title: "O que costuma ficar de fora do seguro residencial", paragrafos: ["Toda apólice traz uma lista de exclusões, e vale lê-la antes de contratar. No seguro residencial, costumam ficar de fora o desgaste natural, a falta de manutenção (uma infiltração antiga que nunca foi consertada, por exemplo) e os danos causados de propósito por quem mora no imóvel.", "O furto simples, sem arrombamento ou outro vestígio de invasão, também costuma não ser coberto: a cobertura de furto normalmente exige o chamado furto qualificado. Objetos de grande valor, como joias e obras de arte, em geral precisam ser declarados à parte. As regras exatas dependem da seguradora e do contrato."] },
      { title: "Como acionar o seguro residencial depois de um sinistro", paragrafos: ["Avise a seguradora assim que possível, pelo canal indicado na apólice, e preserve o local e os objetos danificados até a vistoria. Fotografe tudo antes de qualquer reparo e guarde notas fiscais e orçamentos.", "Em caso de roubo ou arrombamento, o boletim de ocorrência costuma ser exigido. A Revla acompanha o processo com você, desde o aviso até a resposta da seguradora."] },
    ],
    faqPreco: { question: "De que depende o preço do seguro residencial?", answer: "O preço varia com o valor do imóvel e o dos bens que você quer proteger, o tipo de moradia (casa ou apartamento), a região, as coberturas escolhidas e a franquia, quando houver. Dizer o valor certo dos bens importa: segurar por menos do que vale pode reduzir a indenização no sinistro. A Revla faz a simulação e compara as propostas sem custo." },
    faqEspecifica: [
      {
        question: "O seguro residencial cobre imóvel alugado?",
        answer:
          "Sim. Tanto proprietários quanto inquilinos podem contratar, mas as coberturas costumam variar — o inquilino normalmente protege os bens dentro do imóvel, enquanto o proprietário pode incluir a estrutura do imóvel também.",
      },
      {
        question: "O que é responsabilidade civil familiar no seguro residencial?",
        answer:
          "É uma cobertura adicional que indeniza terceiros por danos causados, sem querer, por você ou por pessoas da sua casa — como um vazamento que danifica o apartamento do vizinho.",
      },
      {
        question: "O que significam franquia, sinistro e apólice no seguro residencial?",
        answer:
          "Apólice é o contrato do seguro. Sinistro é o evento coberto — um incêndio, um roubo. Franquia é o valor que fica por sua conta no reparo, caso exista essa cláusula na modalidade contratada; muitas coberturas residenciais nem têm franquia.",
      },
    ],
  },
  {
    slug: "celular",
    nome: "Seguro Celular",
    tituloMeta: "Seguro Celular: Cote em Minutos",
    descricaoMeta:
      "Seguro celular contra roubo, furto e quebra de tela, com as maiores seguradoras do Brasil. Simulação gratuita e sem compromisso com a Revla.",
    heroEyebrow: "Seguro Celular",
    heroTitle: "Seguro Celular: proteção contra roubo, furto e quebra",
    heroDescription:
      "Cobertura para roubo, furto qualificado e quebra acidental de tela, válida em qualquer lugar do Brasil.",
    introParagrafo:
      "O seguro celular protege seu aparelho contra roubo, furto e quebra acidental — situações que costumam pegar a maioria das pessoas de surpresa e sem previsão no orçamento. A simulação considera o modelo, o valor e a idade do aparelho para chegar a uma cobertura que faça sentido.",
    seguradorasTexto:
      "Cotamos seguro celular com as principais seguradoras do mercado, como a Porto Seguro, entre outras, buscando a cobertura com melhor custo-benefício pro seu aparelho.",
    coberturas: [
      {
        title: "Roubo e furto qualificado",
        description: "Cobertura para roubo e furto qualificado do aparelho, dentro ou fora de casa.",
        icon: "ShieldCheck",
      },
      {
        title: "Quebra acidental de tela",
        description: "Indenização ou conserto em caso de quebra acidental da tela ou da carcaça do aparelho.",
        icon: "Wrench",
      },
      {
        title: "Válido em qualquer lugar do Brasil",
        description: "A cobertura acompanha o aparelho — protege seu celular em qualquer cidade do país.",
        icon: "Globe",
      },
    ],
    secoes: [
      { title: "O que o seguro celular normalmente não cobre", paragrafos: ["Perda ou esquecimento do aparelho, defeitos de fabricação (que ficam com a garantia do fabricante) e danos por mau uso, como molhar o celular em situação não prevista, costumam ficar fora. O furto simples, quando o aparelho some sem violência e sem vestígio, também costuma não ser coberto, e é a dúvida mais comum de quem contrata.", "A franquia, o prazo de contratação em relação à data de compra do aparelho e as exclusões variam por seguradora. Por isso conferimos essas regras na simulação e não só o preço."] },
      { title: "O que fazer em caso de roubo ou quebra", paragrafos: ["Em caso de roubo, registre o boletim de ocorrência e peça à operadora o bloqueio da linha e do aparelho. Depois, acione a seguradora com os documentos que ela pedir, normalmente a nota fiscal ou outro comprovante do aparelho e o próprio boletim.", "Na quebra de tela, a seguradora indica o conserto ou a indenização conforme a apólice. Evite mandar o aparelho para uma assistência não autorizada antes de avisá-la."] },
    ],
    faqPreco: { question: "Quanto custa um seguro celular?", answer: "O valor depende principalmente do modelo e do preço do aparelho, da idade dele e das coberturas escolhidas, como roubo, furto qualificado e quebra de tela. Aparelhos mais caros costumam ter prêmio maior. A Revla simula o seu modelo e compara as opções entre seguradoras, sem custo." },
    faqEspecifica: [
      {
        question: "O seguro celular cobre tela quebrada?",
        answer:
          "Sim, a quebra acidental de tela costuma estar entre as coberturas principais, junto com roubo e furto qualificado — confira as condições específicas na simulação com um consultor.",
      },
      {
        question: "Preciso de nota fiscal do aparelho pra contratar?",
        answer:
          "Normalmente sim, ou outro comprovante que confirme o modelo e o valor do celular — isso é usado pra calcular a cobertura e o valor do prêmio.",
      },
    ],
  },
  {
    slug: "moto",
    nome: "Seguro de Moto",
    tituloMeta: "Seguro de Moto: Cotação Online",
    descricaoMeta:
      "Seguro de moto com cobertura contra colisão, roubo, furto e assistência 24h. Comparamos as melhores seguradoras. Simulação gratuita com a Revla.",
    heroEyebrow: "Seguro de Moto",
    heroTitle: "Seguro de Moto: cotação com as melhores seguradoras",
    heroDescription:
      "Cobertura contra colisão, roubo, furto e responsabilidade civil a terceiros, com assistência 24 horas.",
    introParagrafo:
      "O seguro de moto cobre colisão, roubo, furto e responsabilidade civil a terceiros, além de assistência 24 horas — essencial pra quem usa a moto no dia a dia ou como meio de trabalho. A simulação leva em conta o modelo, a cilindrada, o uso e a cidade onde a moto passa a noite.",
    seguradorasTexto:
      "Cotamos seguro de moto com seguradoras especializadas nesse ramo, como a Suhai e a Porto Seguro, comparando cobertura e preço conforme o modelo e o uso da sua moto.",
    coberturas: [
      {
        title: "Colisão, roubo e furto",
        description: "Cobertura para colisão, roubo e furto qualificado da moto.",
        icon: "ShieldCheck",
      },
      {
        title: "Responsabilidade civil a terceiros",
        description: "Indenização por danos materiais ou corporais causados a terceiros em caso de acidente.",
        icon: "Scale",
      },
      {
        title: "Assistência 24 horas",
        description: "Guincho, chaveiro e outros serviços de assistência disponíveis a qualquer hora, todos os dias.",
        icon: "Truck",
      },
    ],
    secoes: [
      { title: "Situações em que o seguro de moto pode ser negado", paragrafos: ["As apólices costumam excluir sinistros em que o condutor estava sem habilitação válida para a categoria, dirigia sob efeito de álcool ou de outras substâncias, ou usava a moto de forma diferente da declarada, como entrega por aplicativo informada como uso pessoal. Corridas, manobras e trilhas também costumam ficar de fora.", "Declarar o uso real da moto na contratação evita surpresa na hora de acionar o seguro. As regras exatas variam por seguradora e estão na apólice."] },
      { title: "Como acionar o seguro após roubo, furto ou colisão", paragrafos: ["Em roubo ou furto, registre o boletim de ocorrência e avise a seguradora o quanto antes. Em colisão, use a assistência 24 horas para o guincho e, se houver terceiros envolvidos, troque dados e registre a ocorrência.", "Evite mandar a moto para conserto antes da vistoria ou da autorização da seguradora."] },
    ],
    faqPreco: { question: "De que depende o preço do seguro de moto?", answer: "Pesam o modelo e a cilindrada, o valor de mercado da moto, a cidade e o local onde ela dorme (garagem ou rua), a idade e o histórico do condutor, o uso (pessoal ou trabalho) e as coberturas escolhidas. A Revla simula com os seus dados e compara seguradoras, sem custo." },
    faqEspecifica: [
      {
        question: "Moto zero km paga mais caro no seguro?",
        answer:
          "Geralmente sim, porque o valor segurado é maior — mas o custo também depende do modelo, da cilindrada, da cidade e do perfil do condutor. Uma simulação mostra o valor real pro seu caso.",
      },
      {
        question: "O seguro de moto cobre acessórios como baú e alarme?",
        answer:
          "Sim, equipamentos e acessórios instalados na moto podem ser incluídos na apólice, geralmente com um limite de cobertura à parte — informe todos os itens na hora da contratação.",
      },
    ],
  },
  {
    slug: "fianca",
    nome: "Seguro Fiança",
    tituloMeta: "Seguro Fiança: Sem Precisar de Fiador",
    descricaoMeta:
      "Seguro fiança substitui o fiador na locação de imóveis, com aprovação rápida. Comparamos as melhores seguradoras. Simulação gratuita com a Revla.",
    heroEyebrow: "Seguro Fiança",
    heroTitle: "Seguro Fiança: alternativa ao fiador na locação",
    heroDescription:
      "Aprovação mais rápida pro inquilino, sem precisar apresentar fiador ou pagar caução em dinheiro.",
    introParagrafo:
      "O seguro fiança é a alternativa mais usada hoje pra quem não tem um fiador ou não quer imobilizar dinheiro em caução — a seguradora garante o contrato de locação perante o proprietário do imóvel. A Revla faz a simulação e acompanha a análise cadastral do inquilino na seguradora.",
    seguradorasTexto:
      "Cotamos seguro fiança com seguradoras especializadas em locação, como a Junto e a Porto Seguro, comparando as condições pra aprovar seu contrato de aluguel mais rápido.",
    coberturas: [
      {
        title: "Substitui o fiador",
        description:
          "O locador dispensa a exigência de fiador — a seguradora garante o cumprimento do contrato de locação.",
        icon: "Key",
      },
      {
        title: "Aluguel e condomínio em atraso",
        description: "Cobertura para débitos de aluguel, condomínio e IPTU em atraso, conforme o contrato.",
        icon: "Receipt",
      },
      {
        title: "Danos ao imóvel na entrega",
        description: "Proteção para danos ao imóvel identificados na vistoria de saída do inquilino.",
        icon: "Wrench",
      },
    ],
    secoes: [
      { title: "Como é a aprovação do seguro fiança", paragrafos: ["A seguradora faz uma análise cadastral do inquilino, normalmente com base em renda e histórico de crédito, e define se aprova o contrato e em quais condições. Os documentos pedidos variam, mas costumam incluir identidade, comprovante de renda e dados do imóvel e do locador.", "A imobiliária ou o proprietário precisa aceitar o seguro fiança como garantia do contrato. Vale confirmar isso antes de fechar o aluguel."] },
      { title: "Prazo, renovação e vistoria do imóvel", paragrafos: ["O seguro fiança costuma ser contratado por prazo definido e renovado junto com o contrato de locação. Confira na apólice as condições de renovação e de reajuste.", "A garantia também não substitui a vistoria de entrada e de saída do imóvel: ela segue sendo o registro do estado em que o imóvel foi entregue e devolvido."] },
    ],
    faqPreco: { question: "Quanto custa o seguro fiança?", answer: "O custo costuma ser calculado sobre o valor do aluguel e dos encargos previstos no contrato, e varia conforme o perfil do inquilino, o prazo e a seguradora. Cada uma tem as suas regras de cobrança e de parcelamento. A Revla simula com o valor do seu aluguel e compara as condições, sem custo." },
    faqEspecifica: [
      {
        question: "O seguro fiança substitui o fiador de verdade?",
        answer:
          "Sim. Com o seguro fiança aprovado, o locador dispensa a exigência de fiador — a seguradora assume a garantia do contrato de locação.",
      },
      {
        question: "Quem paga o seguro fiança, inquilino ou proprietário?",
        answer:
          "Na grande maioria dos contratos, é o inquilino quem contrata e paga o seguro fiança, como alternativa a apresentar um fiador ou pagar caução em dinheiro.",
      },
    ],
  },
  {
    slug: "empresarial",
    nome: "Seguro Empresarial",
    tituloMeta: "Seguro Empresarial para Seu Negócio",
    descricaoMeta:
      "Seguro empresarial para proteger patrimônio, faturamento e operação do seu negócio. Comparamos seguradoras. Simulação gratuita com a Revla.",
    heroEyebrow: "Seguro Empresarial",
    heroTitle: "Seguro Empresarial: proteção completa pro seu negócio",
    heroDescription:
      "Cobertura para patrimônio, faturamento e responsabilidade civil das operações da sua empresa.",
    introParagrafo:
      "O seguro empresarial protege o patrimônio, o faturamento e a operação do seu negócio contra imprevistos como incêndio, roubo e paralisação das atividades. A simulação parte da atividade, do endereço e do valor do patrimônio da empresa.",
    seguradorasTexto:
      "Cotamos seguro empresarial com as principais seguradoras do mercado, como a Porto Seguro, entre outras, ajustando a cobertura ao porte e ao tipo de operação do seu negócio.",
    coberturas: [
      {
        title: "Incêndio, explosão e roubo",
        description: "Cobertura para o patrimônio da empresa contra incêndio, explosão, roubo e furto qualificado.",
        icon: "Flame",
      },
      {
        title: "Lucros cessantes",
        description: "Indenização pela perda de faturamento enquanto o negócio fica parado por causa de um sinistro coberto.",
        icon: "TrendingUp",
      },
      {
        title: "Responsabilidade civil das operações",
        description: "Proteção contra indenizações por danos causados a terceiros durante a operação do negócio.",
        icon: "Scale",
      },
    ],
    secoes: [
      { title: "Como definir os valores no seguro empresarial", paragrafos: ["O valor segurado do prédio, do estoque, das máquinas e dos móveis deve refletir o que custaria repor tudo. Segurar por menos do que o patrimônio vale pode reduzir a indenização em caso de sinistro, porque a seguradora pode aplicar rateio proporcional.", "As coberturas adicionais, como lucros cessantes, danos elétricos e responsabilidade civil, são escolhidas conforme os riscos da atividade. Uma loja, um escritório e uma oficina têm exposições diferentes."] },
      { title: "O que costuma ficar de fora e como acionar", paragrafos: ["Desgaste, falta de manutenção, atividades não declaradas e riscos que não foram contratados costumam não ser cobertos. Informar corretamente a atividade e o endereço na contratação evita problemas depois.", "Em um sinistro, avise a seguradora o quanto antes, preserve o local, fotografe os danos e guarde notas fiscais do patrimônio. A Revla acompanha o processo junto com você."] },
    ],
    faqPreco: { question: "O que define o preço do seguro empresarial?", answer: "O preço depende da atividade da empresa, do endereço e do tipo de construção, do valor do patrimônio a segurar, das coberturas escolhidas e do histórico de sinistros. Negócios com maior risco de incêndio ou de furto tendem a pagar mais. A Revla simula com os dados da sua empresa e compara seguradoras, sem custo." },
    faqEspecifica: [
      {
        question: "O seguro empresarial cobre perda de faturamento?",
        answer:
          "Pode cobrir, através da cobertura de lucros cessantes — que indeniza a perda de receita enquanto o negócio fica parado por causa de um sinistro coberto, como um incêndio.",
      },
      {
        question: "Empresas pequenas também podem contratar seguro empresarial?",
        answer:
          "Sim. Existem apólices dimensionadas pra pequenos e médios negócios, com coberturas e valores ajustados ao porte e ao tipo de operação da empresa.",
      },
    ],
  },
  {
    slug: "garantia",
    nome: "Seguro Garantia",
    tituloMeta: "Seguro Garantia: Judicial e Contratual",
    descricaoMeta:
      "Seguro garantia judicial, contratual e de licitação, alternativa à caução em dinheiro. Simulação gratuita e sem compromisso com a Revla.",
    heroEyebrow: "Seguro Garantia",
    heroTitle: "Seguro Garantia: judicial, contratual e de licitação",
    heroDescription:
      "Alternativa à caução em dinheiro ou carta fiança bancária, pra obrigações judiciais, contratuais e de licitação.",
    introParagrafo:
      "O seguro garantia substitui a caução em dinheiro ou a carta fiança bancária em contratos, licitações e processos judiciais — liberando capital que, de outra forma, ficaria imobilizado como garantia. A Revla acompanha a modalidade, o valor e o prazo exigidos no contrato, na licitação ou no processo.",
    seguradorasTexto:
      "Trabalhamos com a Junto, seguradora especializada em seguro garantia, comparando as condições pra cada modalidade — judicial, contratual ou de licitação — conforme a sua necessidade.",
    coberturas: [
      {
        title: "Garantia judicial",
        description: "Substitui depósito em dinheiro em execuções fiscais, ações judiciais e recursos.",
        icon: "Scale",
      },
      {
        title: "Garantia contratual",
        description: "Garante o cumprimento de contratos de obra, fornecimento e prestação de serviços.",
        icon: "DocumentCheck",
      },
      {
        title: "Garantia de licitação",
        description:
          "Cobre as modalidades exigidas em editais públicos — proposta, execução e adiantamento de pagamento.",
        icon: "LockDocument",
      },
    ],
    secoes: [
      { title: "Quem participa de um seguro garantia", paragrafos: ["No seguro garantia há três partes: o tomador, que é a empresa ou pessoa obrigada a cumprir o contrato ou a obrigação; o segurado, que é quem recebe a garantia, como o órgão público ou o contratante; e a seguradora, que paga a indenização se o tomador não cumprir o que prometeu.", "A seguradora analisa o pedido antes de emitir a apólice, e os critérios variam por seguradora."] },
      { title: "Prazo, valor e documentos", paragrafos: ["O valor da garantia e o prazo de vigência normalmente vêm do edital, do contrato ou da decisão judicial, e a apólice precisa atender exatamente a essas exigências. Em licitações, o texto do edital define quais modalidades são aceitas.", "Os documentos pedidos costumam incluir dados cadastrais e financeiros da empresa e cópia do contrato ou do edital. A Revla orienta a montagem do pedido para evitar recusa por detalhe de forma."] },
    ],
    faqPreco: { question: "Como é calculado o custo do seguro garantia?", answer: "O custo costuma ser um percentual sobre o valor da garantia, aplicado pelo prazo de vigência, e varia conforme a modalidade, o perfil financeiro do tomador e a seguradora. Garantias maiores ou por prazos mais longos tendem a custar mais. A Revla simula conforme o seu edital ou contrato, sem custo." },
    faqEspecifica: [
      {
        question: "Qual a diferença entre seguro garantia e caução em dinheiro?",
        answer:
          "O seguro garantia substitui o depósito em dinheiro (caução) ou a carta fiança bancária — a empresa paga um prêmio à seguradora em vez de imobilizar capital como garantia da obrigação contratual.",
      },
      {
        question: "O seguro garantia serve pra qualquer tipo de licitação?",
        answer:
          "Ele cobre as modalidades mais comuns exigidas em editais — garantia de proposta, de execução contratual e de adiantamento de pagamento. As condições específicas variam conforme o edital e a seguradora.",
      },
    ],
  },
  {
    slug: "rc-profissional",
    nome: "Seguro RC Profissional",
    tituloMeta: "Seguro RC Profissional: Cotação",
    descricaoMeta:
      "Seguro de responsabilidade civil profissional contra erros e omissões no exercício da sua atividade. Simulação gratuita com a Revla.",
    heroEyebrow: "Seguro RC Profissional",
    heroTitle: "Seguro RC Profissional: proteção pra quem presta serviço",
    heroDescription:
      "Cobertura contra indenizações por erros técnicos cometidos no exercício da sua atividade profissional.",
    introParagrafo:
      "O seguro de Responsabilidade Civil Profissional protege quem presta serviços contra indenizações por erros técnicos cometidos no exercício da atividade — comum entre advogados, engenheiros, médicos, contadores e outros profissionais liberais. A simulação parte da profissão, do faturamento e do limite de indenização que você quer contratar.",
    // Regra de arquitetura fechada: RC Profissional usa Porto Seguro, mas
    // sem citar o nome dela no conteúdo — linguagem só genérica.
    seguradorasTexto:
      "Cotamos seguro RC Profissional com seguradoras especializadas nesse ramo, comparando cobertura e preço conforme a sua atividade profissional — sem custo pela consultoria.",
    coberturas: [
      {
        title: "Erros e omissões profissionais",
        description: "Cobertura para indenizações decorrentes de erros técnicos cometidos no exercício da atividade.",
        icon: "ShieldCheck",
      },
      {
        title: "Indenização a clientes e terceiros",
        description: "Proteção financeira caso você seja responsabilizado por prejuízos causados a clientes ou terceiros.",
        icon: "Scale",
      },
      {
        title: "Despesas de defesa judicial",
        description: "Cobertura para custos com advogados e processo em caso de ação contra você.",
        icon: "DocumentCheck",
      },
    ],
    secoes: [
      { title: "Como funciona o limite de indenização", paragrafos: ["O limite máximo de indenização é o teto que a seguradora paga por reclamação ou durante a vigência, conforme a apólice. Quanto maior o risco da atividade e maior o prejuízo que um erro pode causar, mais alto costuma ser o limite recomendado.", "Também vale conferir a franquia e se as despesas de defesa entram dentro do limite ou além dele. Essas regras mudam de uma seguradora para outra."] },
      { title: "O que costuma ficar de fora e o que fazer ao receber uma reclamação", paragrafos: ["Atos dolosos (feitos de propósito), atividades fora da profissão declarada e multas costumam não ser cobertos. Declare corretamente a atividade e o faturamento na contratação.", "Ao receber uma notificação, uma reclamação ou um processo, avise a seguradora dentro do prazo da apólice e evite assumir culpa ou fazer acordos sem consultá-la. A Revla acompanha você no aviso."] },
    ],
    faqPreco: { question: "De que depende o preço do seguro RC Profissional?", answer: "Pesam a profissão e a especialidade, o faturamento, o limite de indenização escolhido, a franquia e o histórico de reclamações. Atividades com maior risco de prejuízo a terceiros costumam ter prêmio maior. A Revla simula para a sua profissão e compara seguradoras, sem custo." },
    faqEspecifica: [
      {
        question: "Quais profissões precisam de RC Profissional?",
        answer:
          "É comum em profissões que envolvem risco de erro técnico com impacto pra terceiros, como advogados, engenheiros, arquitetos, médicos, contadores e consultores — mas qualquer profissional liberal pode contratar.",
      },
      {
        question: "O seguro cobre um erro cometido antes de contratar a apólice?",
        answer:
          "Depende da modalidade. A maioria das apólices de RC Profissional cobre reclamações feitas durante a vigência, referentes a atos cometidos depois de uma data de retroatividade definida em contrato — é importante confirmar esse detalhe na contratação.",
      },
    ],
  },
  {
    slug: "condominial",
    nome: "Seguro Condominial",
    tituloMeta: "Seguro Condominial: Cobertura Completa",
    descricaoMeta:
      "Seguro condominial obrigatório por lei, com cobertura para áreas comuns do prédio. Simulação gratuita e sem compromisso com a Revla.",
    heroEyebrow: "Seguro Condominial",
    heroTitle: "Seguro Condominial: proteção completa pro seu prédio",
    heroDescription:
      "Cobertura obrigatória por lei para incêndio e outros riscos que atinjam a estrutura e as áreas comuns.",
    introParagrafo:
      "O seguro condominial é obrigatório por lei e protege a estrutura e as áreas comuns do prédio contra incêndio e outros riscos que causem destruição total ou parcial. A simulação parte do porte do prédio, do tipo de construção e das coberturas que o síndico precisa contratar.",
    // Mesma regra de arquitetura do RC Profissional: sem citar o nome da
    // seguradora no conteúdo.
    seguradorasTexto:
      "Cotamos seguro condominial com seguradoras especializadas, comparando cobertura e preço conforme o porte e as características do seu condomínio — sem custo pela consultoria.",
    coberturas: [
      {
        title: "Incêndio e explosão das áreas comuns",
        description: "Cobertura obrigatória por lei para incêndio e explosão que atinjam a estrutura do condomínio.",
        icon: "Flame",
      },
      {
        title: "Responsabilidade civil do condomínio",
        description: "Proteção contra indenizações por danos causados a terceiros nas áreas comuns.",
        icon: "Scale",
      },
      {
        title: "Danos elétricos em equipamentos comuns",
        description: "Cobertura para elevador, bomba d'água e outros equipamentos das áreas comuns.",
        icon: "Wrench",
      },
    ],
    secoes: [
      { title: "O papel do síndico na contratação", paragrafos: ["A contratação do seguro do condomínio costuma ficar a cargo do síndico, que deve manter a apólice em dia e informar a seguradora sobre mudanças relevantes, como obras e ampliações. A assembleia pode decidir sobre coberturas além da básica.", "Atualizar o valor segurado da edificação evita que a indenização fique abaixo do custo de reconstrução. A Revla ajuda a organizar as informações do prédio para a simulação."] },
      { title: "Coberturas adicionais e o que costuma ficar de fora", paragrafos: ["Além do incêndio, o condomínio pode contratar coberturas como danos elétricos, vendaval, responsabilidade civil e quebra de vidros. Cada uma deve ser avaliada conforme os riscos do prédio.", "Danos causados por falta de manutenção, obras sem autorização e bens dentro das unidades (que cada morador segura à parte) costumam ficar fora da apólice do condomínio."] },
    ],
    faqPreco: { question: "O que define o preço do seguro condominial?", answer: "O preço depende da área construída, da idade e do tipo de construção, do número de torres e de elevadores, da localização, das coberturas escolhidas e do histórico de sinistros. A Revla simula com os dados do seu prédio e compara seguradoras, sem custo." },
    faqEspecifica: [
      {
        question: "O seguro condominial é obrigatório por lei?",
        answer:
          "Sim, o Código Civil exige que todo condomínio tenha seguro contra incêndio e outros riscos que causem destruição total ou parcial do prédio — a responsabilidade é do síndico.",
      },
      {
        question: "O seguro condominial cobre o apartamento ou só as áreas comuns?",
        answer:
          "A apólice do condomínio cobre a estrutura do prédio e as áreas comuns. Os bens e melhorias dentro de cada unidade normalmente precisam de um seguro residencial à parte, contratado pelo morador.",
      },
    ],
  },
  {
    slug: "bicicleta",
    nome: "Seguro de Bicicleta",
    tituloMeta: "Seguro de Bicicleta: Cote Agora",
    descricaoMeta:
      "Seguro de bicicleta contra roubo, furto e colisão, para bikes comuns e elétricas. Simulação gratuita e sem compromisso com a Revla.",
    heroEyebrow: "Seguro de Bicicleta",
    heroTitle: "Seguro de Bicicleta: proteção pra bike comum ou elétrica",
    heroDescription:
      "Cobertura contra roubo, furto e danos por colisão ou queda, incluindo bikes elétricas e acessórios.",
    introParagrafo:
      "O seguro de bicicleta protege sua bike — comum ou elétrica — contra roubo, furto e danos por colisão ou queda, incluindo os acessórios instalados. A simulação considera o valor da bike, o uso e os acessórios que você quer incluir.",
    seguradorasTexto:
      "Cotamos seguro de bicicleta com seguradoras especializadas, como a Porto Seguro, comparando cobertura e preço conforme o valor e o uso da sua bike.",
    coberturas: [
      {
        title: "Roubo e furto qualificado",
        description: "Cobertura para roubo e furto qualificado da bicicleta, dentro ou fora de casa.",
        icon: "ShieldCheck",
      },
      {
        title: "Danos por colisão ou queda",
        description: "Indenização ou conserto em caso de danos causados por colisão ou queda.",
        icon: "Wrench",
      },
      {
        title: "Bikes elétricas e acessórios",
        description: "Cobertura disponível também para bicicletas elétricas (e-bikes) e acessórios instalados.",
        icon: "Sparkle",
      },
    ],
    secoes: [
      { title: "O que o seguro de bicicleta costuma excluir", paragrafos: ["Desgaste de peças, como pneus, corrente e freios, e a falta de manutenção costumam ficar fora. O uso em competições e provas também pode ser excluído, a menos que a apólice preveja. O furto simples, sem vestígio de arrombamento do local onde a bike estava guardada, costuma não ser coberto.", "As regras variam por seguradora, inclusive sobre bikes deixadas na rua ou presas em bicicletários. Confira os requisitos de guarda antes de contratar."] },
      { title: "Documentos e cuidados para a contratação e o sinistro", paragrafos: ["Guarde a nota fiscal, o número de série do quadro e fotos da bicicleta e dos acessórios. Esses dados ajudam a comprovar o valor e a identificar o bem em caso de roubo.", "Em roubo ou furto, o boletim de ocorrência é um dos documentos pedidos pela seguradora. Informe todos os acessórios na contratação para que entrem na cobertura."] },
    ],
    faqPreco: { question: "De que depende o preço do seguro de bicicleta?", answer: "O preço varia com o valor da bike e dos acessórios, o tipo (comum ou elétrica), o uso, a cidade e as coberturas escolhidas. Bicicletas mais caras costumam ter prêmio maior. A Revla simula com os dados da sua bike e compara seguradoras, sem custo." },
    faqEspecifica: [
      {
        question: "O seguro de bicicleta cobre bike elétrica?",
        answer:
          "Muitas apólices cobrem, mas o valor do prêmio costuma ser maior por causa do valor do equipamento — confirme com um consultor se o modelo específico da sua e-bike está dentro das condições contratadas.",
      },
      {
        question: "Preciso registrar boletim de ocorrência em caso de roubo?",
        answer:
          "Sim, o boletim de ocorrência é obrigatório pra acionar o seguro em caso de roubo ou furto — é um dos documentos pedidos na hora do sinistro.",
      },
    ],
  },
  {
    // Onda 9 (16/09): as 3 páginas de maior volume real que ainda não
    // tinham página própria — "seguro de vida" sozinho (74 mil/mês) é a
    // maior oportunidade de todo o site, maior que qualquer outra palavra-
    // chave mapeada até aqui. Auto e Viagem completam o trio (ambos já
    // apareciam como card sem link na home e no hub /seguros).
    slug: "auto",
    nome: "Seguro Auto",
    tituloMeta: "Seguro Auto: Cotação Online",
    descricaoMeta:
      "Seguro auto com cobertura contra colisão, roubo, furto e assistência 24h. Comparamos as melhores seguradoras. Simulação gratuita com a Revla.",
    heroEyebrow: "Seguro Auto",
    heroTitle: "Seguro Auto: cotação com as melhores seguradoras",
    heroDescription:
      "Cobertura contra colisão, roubo, furto e responsabilidade civil a terceiros, com assistência 24 horas para o seu carro.",
    introParagrafo:
      "O seguro auto protege seu carro contra colisão, roubo, furto e danos causados a terceiros, com assistência 24 horas em qualquer lugar do Brasil. A simulação leva em conta o modelo e o ano do carro, o CEP onde ele passa a noite e o seu histórico como condutor.",
    seguradorasTexto:
      "Cotamos seguro auto com as principais seguradoras do mercado — Porto Seguro, Zurich, HDI, AXA, Ezze, Ituran, Akad, Capemisa, Mongeral e Omint, entre outras —, comparando cobertura e franquia conforme o modelo do seu carro e o seu perfil de condutor.",
    coberturas: [
      {
        title: "Colisão, roubo e furto",
        description:
          "Cobertura para colisão, roubo e furto qualificado do veículo, com indenização conforme a modalidade contratada.",
        icon: "ShieldCheck",
      },
      {
        title: "Responsabilidade civil a terceiros (RCF-V)",
        description: "Indenização por danos materiais ou corporais causados a terceiros em caso de acidente com o seu carro.",
        icon: "Scale",
      },
      {
        title: "Assistência 24 horas",
        description: "Guincho, chaveiro, troca de pneu e outros serviços de assistência disponíveis a qualquer hora, todos os dias.",
        icon: "Truck",
      },
    ],
    secoes: [
      { title: "Como a franquia afeta o preço do seguro auto", paragrafos: ["A franquia é o valor que fica por sua conta em um sinistro de colisão. Em geral, escolher uma franquia maior reduz o prêmio e uma franquia menor o aumenta, então vale pensar no valor que você conseguiria pagar de uma vez em um imprevisto.", "O prêmio também muda com o modelo e o ano do carro, o CEP de pernoite, o perfil e o histórico do condutor principal e o uso do veículo. Comparar mais de uma proposta ajuda a equilibrar preço e cobertura."] },
      { title: "O que costuma ficar de fora e como acionar o seguro", paragrafos: ["Sinistros com condutor sem habilitação válida ou sob efeito de álcool, uso do carro diferente do declarado e desgaste natural costumam não ser cobertos. As regras exatas estão na apólice.", "Depois de um acidente, acione a assistência 24 horas, registre o boletim de ocorrência quando houver terceiros, roubo ou furto, e avise a seguradora antes de mandar o carro para conserto. A Revla acompanha o processo."] },
    ],
    faqPreco: { question: "Por que o seguro auto custa tanto para uns e menos para outros?", answer: "Cada seguradora pondera de forma própria o modelo e o ano do veículo, o CEP de pernoite, a idade e o histórico do condutor, o uso e a franquia. Duas pessoas com o mesmo carro podem receber valores diferentes. A Revla compara as propostas e mostra a que melhor equilibra preço e cobertura, sem custo." },
    faqEspecifica: [
      {
        question: "O seguro auto cobre carro usado como aplicativo?",
        answer:
          "Depende da seguradora — carros usados para aplicativos de transporte costumam precisar de uma modalidade específica, com prêmio calculado pelo uso comercial do veículo. Informe esse uso na hora da simulação.",
      },
      {
        question: "Ficar tempo sem acionar o seguro reduz o valor?",
        answer:
          "Sim. A cada ano sem sinistro, você sobe uma classe de bônus, o que reduz o valor do prêmio na renovação — o histórico do condutor principal é um dos fatores mais importantes no cálculo.",
      },
      {
        question: "O que significam franquia, sinistro e apólice no seguro auto?",
        answer:
          "Apólice é o contrato do seguro. Sinistro é o evento coberto — uma colisão, um roubo. Franquia é o valor que você paga do próprio bolso no reparo, caso opte por acionar o seguro, e varia conforme a modalidade escolhida.",
      },
      {
        question: "Vale a pena contratar RCF-V (Responsabilidade Civil Facultativa de Veículos)?",
        answer:
          "Costuma valer, sim — é a cobertura que indeniza terceiros por danos materiais e corporais que você causar com o seu carro, incluindo o veículo de outra pessoa. Sem ela, você responde com o próprio patrimônio por esses prejuízos.",
      },
    ],
  },
  {
    slug: "viagem",
    nome: "Seguro de Viagem",
    tituloMeta: "Seguro de Viagem: Cote Agora",
    descricaoMeta:
      "Seguro de viagem com despesas médicas no exterior, bagagem e cancelamento de viagem. Simulação gratuita e sem compromisso com a Revla.",
    heroEyebrow: "Seguro de Viagem",
    heroTitle: "Seguro de Viagem: proteção pra viagens nacionais e internacionais",
    heroDescription:
      "Cobertura para despesas médicas, bagagem extraviada e cancelamento de viagem, com assistência 24 horas em qualquer lugar do mundo.",
    introParagrafo:
      "O seguro de viagem cobre despesas médicas e hospitalares, bagagem extraviada ou danificada e cancelamento ou interrupção da viagem — essencial pra quem viaja pro exterior (em vários países é até exigência de visto) ou dentro do Brasil. A simulação parte do destino, da duração da viagem e da idade de quem viaja.",
    seguradorasTexto:
      "Cotamos seguro de viagem com seguradoras especializadas nesse ramo, como a Porto Seguro, Zurich, HDI, AXA, Ezze, Ituran, Akad, Capemisa, Mongeral e Omint, comparando cobertura de despesas médicas e valor da apólice conforme o destino e a duração da sua viagem.",
    coberturas: [
      {
        title: "Despesas médicas e hospitalares",
        description:
          "Cobertura para consultas, exames, internação e procedimentos de emergência durante a viagem, no Brasil ou no exterior.",
        icon: "HospitalCross",
      },
      {
        title: "Bagagem extraviada ou danificada",
        description: "Indenização em caso de extravio, roubo ou dano à bagagem despachada durante o trajeto.",
        icon: "Backpack",
      },
      {
        title: "Cancelamento e interrupção de viagem",
        description: "Reembolso de despesas não utilizadas caso a viagem precise ser cancelada ou interrompida por motivo coberto.",
        icon: "Plane",
      },
    ],
    secoes: [
      { title: "Como escolher a cobertura do seguro de viagem", paragrafos: ["O destino, a duração da viagem, a idade dos viajantes e as atividades previstas ajudam a definir o limite de despesas médicas e as coberturas extras. Esportes de risco e a prática de atividades específicas costumam exigir uma cobertura à parte.", "Se o destino exigir seguro para visto, confira o valor mínimo de cobertura pedido por esse país antes de contratar."] },
      { title: "Doenças preexistentes e como acionar a assistência", paragrafos: ["Doenças que você já tinha antes da viagem costumam ter restrições ou exclusões, e as regras variam por seguradora. Leia com atenção essa parte da apólice e informe condições de saúde quando solicitado.", "Em caso de necessidade, entre em contato com a central de assistência 24 horas antes de procurar um atendimento sempre que possível: ela orienta o local e define o que será pago direto pela seguradora. Guarde recibos e relatórios médicos para eventual reembolso."] },
    ],
    faqPreco: { question: "O que muda o preço do seguro de viagem?", answer: "O preço varia com o destino, o número de dias, a idade dos viajantes, o limite de despesas médicas e as coberturas extras escolhidas, como bagagem e cancelamento. Viagens mais longas e destinos com atendimento médico mais caro tendem a custar mais. A Revla simula o seu roteiro e compara seguradoras, sem custo." },
    faqEspecifica: [
      {
        question: "O seguro de viagem é obrigatório pra viajar pro exterior?",
        answer:
          "Não é obrigatório em todos os países, mas é exigência de visto em vários destinos, como os do Tratado de Schengen (Europa). Mesmo onde não é exigido, vale pela cobertura de despesas médicas, que costumam ser altas fora do Brasil.",
      },
      {
        question: "Vale a pena contratar seguro de viagem nacional?",
        answer:
          "Sim — cobre despesas médicas, bagagem e imprevistos mesmo em viagens dentro do Brasil, sobretudo pra quem viaja pra cidades sem boa estrutura hospitalar ou tem plano de saúde sem cobertura fora da sua região.",
      },
    ],
  },
  {
    slug: "vida",
    nome: "Seguro de Vida",
    tituloMeta: "Seguro de Vida: Cotação Online",
    descricaoMeta:
      "Seguro de vida com indenização por morte, invalidez e diária por incapacidade. Comparamos as melhores seguradoras. Simulação gratuita com a Revla.",
    heroEyebrow: "Seguro de Vida",
    heroTitle: "Seguro de Vida: proteção financeira pra você e sua família",
    heroDescription:
      "Indenização por morte, invalidez permanente por acidente e diária por incapacidade temporária, com capital segurado definido conforme sua necessidade.",
    introParagrafo:
      "O seguro de vida garante uma indenização em dinheiro pra sua família em caso de morte ou invalidez permanente por acidente — e também pode incluir diária por incapacidade temporária, caso você precise ficar afastado do trabalho. A simulação parte da sua idade, da renda que a família precisa proteger e das coberturas adicionais que você quer.",
    seguradorasTexto:
      "Cotamos seguro de vida com seguradoras especializadas nesse ramo, como a Icatu, a MAG Mongeral e a AZOS, comparando capital segurado e coberturas adicionais conforme a sua necessidade e o seu orçamento.",
    coberturas: [
      {
        title: "Morte natural e acidental",
        description: "Indenização em dinheiro para os beneficiários indicados, em caso de morte natural ou acidental do segurado.",
        icon: "Heart",
      },
      {
        title: "Invalidez permanente por acidente",
        description: "Indenização proporcional ao grau da invalidez, em caso de acidente que cause perda ou redução permanente de função.",
        icon: "ShieldUsers",
      },
      {
        title: "Diária por incapacidade temporária",
        description: "Renda extra por dia de afastamento do trabalho por doença ou acidente, conforme a cobertura contratada.",
        icon: "ClockShort",
      },
    ],
    secoes: [
      { title: "Como pensar o valor do capital segurado", paragrafos: ["O capital segurado é o valor que os beneficiários recebem. Uma forma comum de pensar nele é considerar por quanto tempo a família precisaria de renda, as dívidas a quitar, como financiamentos, e despesas futuras, como a educação dos filhos.", "Não existe valor único correto: ele depende da sua situação e do orçamento. A Revla ajuda a comparar diferentes valores de capital e o impacto de cada um no preço."] },
      { title: "Declaração de saúde e como é o pagamento aos beneficiários", paragrafos: ["Na contratação, a seguradora pode pedir uma declaração de saúde. Informar tudo corretamente é importante: dados omitidos ou incorretos podem levar à recusa da indenização.", "Depois do sinistro, os beneficiários apresentam à seguradora os documentos exigidos, como a certidão de óbito e documentos pessoais, e a seguradora analisa o pedido. Os prazos e documentos exatos estão na apólice."] },
    ],
    faqPreco: { question: "De que depende o preço do seguro de vida?", answer: "Os principais fatores são a idade, o capital segurado, a profissão, os hábitos de saúde (como fumar) e as coberturas adicionais, como invalidez e doenças graves. Quem contrata mais jovem costuma pagar menos pela mesma cobertura. A Revla simula com os seus dados e compara seguradoras, sem custo." },
    faqEspecifica: [
      {
        question: "Quem pode ser beneficiário do seguro de vida?",
        answer:
          "Você escolhe livremente os beneficiários na contratação — geralmente cônjuge, filhos ou outros dependentes — e pode alterar essa indicação a qualquer momento durante a vigência da apólice.",
      },
      {
        question: "O seguro de vida cobre doenças graves?",
        answer:
          "Pode cobrir, através de uma cobertura adicional específica pra diagnóstico de doenças graves, contratada junto com a cobertura básica de morte e invalidez — informe esse interesse na hora da simulação.",
      },
      {
        question: "O seguro de vida entra em inventário ou paga imposto?",
        answer:
          "Não. A indenização do seguro de vida não entra em inventário e é isenta de ITCMD (Imposto de Transmissão Causa Mortis e Doação) — o valor vai direto para os beneficiários indicados na apólice, mesmo sem vínculo familiar com o segurado, sem passar pelo processo de partilha de bens.",
      },
    ],
    testemunho: {
      name: "Paulo",
      city: "São Bernardo do Campo",
      quote:
        "Eu tinha interesse em uma cobertura específica, diária por incapacidade temporária, caso precisasse ficar afastado do trabalho por algum motivo. A Revla montou meu seguro de vida já incluindo essa cobertura, e me explicaram cada detalhe com muita paciência.",
    },
  },
];

export function getSeguroProduto(slug: string): SeguroProduto | undefined {
  return segurosProdutos.find((p) => p.slug === slug);
}
