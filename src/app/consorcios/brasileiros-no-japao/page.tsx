import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import SimuladorJapao from "@/components/japao/SimuladorJapao";
import VideoCurto from "@/components/japao/VideoCurto";
import { Receipt, DocumentCheck, Key, Laptop, Building, ShieldCheck, HandCoin, PiggyBank } from "@/components/icons";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";

// Página para brasileiros que moram no Japão (13/10/2026). Construída a
// partir do teste GEO de linha de base (ChatGPT/Gemini/Google, 12/10) e da
// análise dos concorrentes citados (Consórcio Nikkei, Rafner, Consórcio
// Garantia): nenhum deles explica documentos japoneses, pagamento em ienes,
// contemplação estando no Japão nem custo total com números. Regras da
// Ademicon confirmadas pela base de suporte da administradora em 13/10/2026
// (ver projeto "Inteligência Comercial Brasil Japão", doc 26). Pontos ainda
// não confirmados ficaram de fora ou com redação cautelosa.
//
// Ao alterar o conteúdo, atualize LAST_UPDATED (aparece na página e no
// schema) e a data correspondente em sitemap.ts.

const PATH = "/consorcios/brasileiros-no-japao";
const PUBLISHED = "2026-10-13";
const LAST_UPDATED = "2026-11-09";
const LAST_UPDATED_LABEL = "09 de novembro de 2026";

// Os 7 posts do blog escritos especificamente para quem mora no Japão
// (todos publicados em 07/11/2026, cada um já linka de volta pra esta
// página). Mantido aqui pra fechar o link interno nos dois sentidos —
// adicionar um novo post dessa série também aqui.
const postsRelacionados = [
  {
    title: "Como pagar a parcela em ienes",
    description:
      "Cartão de crédito internacional com cobrança automática, conta digital no Brasil e o efeito do câmbio.",
    href: "/blog/como-pagar-consorcio-no-brasil-morando-no-japao",
    linkLabel: "Recebo em ienes: como pagar a parcela do consórcio?",
    icon: <Receipt />,
  },
  {
    title: "Precisa comprovar renda?",
    description:
      "Para entrar no consórcio, não. A renda só é analisada na contemplação, se você usar a carta para comprar o imóvel.",
    href: "/blog/comprovar-renda-consorcio-morando-no-japao",
    linkLabel: "Preciso comprovar renda morando no Japão?",
    icon: <DocumentCheck />,
  },
  {
    title: "Como comprar depois de contemplado",
    description:
      "Assinatura digital, procurador no Brasil e como a carta vale como pagamento à vista na negociação.",
    href: "/blog/comprar-imovel-contemplado-morando-no-japao",
    linkLabel: "Fui contemplado morando no Japão: e agora?",
    icon: <Key />,
  },
  {
    title: "Pode fazer consórcio estando no Japão?",
    description:
      "Sim, de forma totalmente online, com endereço no Japão — veja como funciona do início ao fim.",
    href: "/blog/consorcio-de-imovel-no-brasil-morando-no-japao",
    linkLabel: "Morando no Japão, posso fazer consórcio no Brasil?",
    icon: <Laptop />,
  },
  {
    title: "Comprar um imóvel antes de voltar",
    description:
      "Carta de R$ 350 mil, parcela reduzida e lance embutido pra chegar com patrimônio pronto no Brasil.",
    href: "/blog/comprar-imovel-no-brasil-antes-de-voltar-do-japao",
    linkLabel: "Como comprar um imóvel antes de voltar do Japão?",
    icon: <Building />,
  },
  {
    title: "Como saber se não é golpe",
    description:
      "Três conferências antes de pagar qualquer valor: administradora autorizada, pagamento em nome dela e desconfiar de data garantida.",
    href: "/blog/consorcio-e-golpe-morando-no-japao",
    linkLabel: "Como saber se o consórcio é golpe?",
    icon: <ShieldCheck />,
  },
  {
    title: "O aluguel pode pagar a parcela",
    description:
      "Depois da contemplação, você compra um imóvel pra alugar e o aluguel ajuda a pagar a parcela até o fim do consórcio.",
    href: "/blog/aluguel-pagar-parcela-consorcio-morando-no-japao",
    linkLabel: "O aluguel pode pagar a parcela do consórcio?",
    icon: <HandCoin />,
  },
  {
    title: "Aposentadoria imobiliária",
    description:
      "O acordo de previdência com o Japão soma o tempo contribuído lá, mas o INSS paga só a parte proporcional. Veja por que isso muda o seu planejamento.",
    href: "/blog/aposentadoria-imobiliaria-morando-no-japao",
    linkLabel: "Vale a pena pensar em aposentadoria imobiliária morando no Japão?",
    icon: <PiggyBank />,
  },
];

const WHATSAPP_MESSAGE = "Olá, Reinaldo! Moro no Japão e quero entender o consórcio de imóvel no Brasil.";
const CTA_LABEL = "Falar com o Reinaldo no WhatsApp";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio para brasileiros no Japão",
  description:
    "Mora no Japão? Contrate consórcio de imóvel no Brasil online, com endereço no Japão, pague com cartão internacional e simule a parcela em reais e ienes.",
  path: PATH,
});

// Termo em japonês com leitura em português — marcado com lang="ja" para
// leitores de tela e buscadores. Usa a fonte do sistema (sem webfont).
function Ja({ kanji, leitura }: { kanji: string; leitura: string }) {
  return (
    <>
      <span lang="ja">{kanji}</span> ({leitura})
    </>
  );
}

function SectionCTA({ label = CTA_LABEL }: { label?: string }) {
  return (
    <div className="mt-8">
      <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} variant="secondary" external>
        {label}
      </CTAButton>
    </div>
  );
}

function SectionCard({ titulo, passos, label = CTA_LABEL }: { titulo: string; passos: string[]; label?: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-6">
      <p className="text-base font-semibold text-[var(--color-primary)]">{titulo}</p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed text-[var(--color-ink)]/75">
        {passos.map((passo) => (
          <li key={passo}>{passo}</li>
        ))}
      </ol>
      <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]/75">
        Atendimento pelo WhatsApp todos os dias, inclusive sábado e domingo, das 7h às 11h e das 19h às 23h no horário
        do Japão.
      </p>
      <div className="mt-5">
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} variant="secondary" external>
          {label}
        </CTAButton>
      </div>
    </div>
  );
}

const resumo = [
  "Brasileiro que mora no Japão pode contratar consórcio de imóvel no Brasil, de forma online, com o endereço do Japão.",
  "A análise de renda é feita na contemplação, quando você vai usar a carta para comprar o imóvel.",
  "A parcela pode ser paga com cartão de crédito internacional, com cobrança automática todo mês, sem conta no Brasil.",
  "Exemplo: carta de R$ 100 mil, parcela reduzida de cerca de R$ 337 até a contemplação, perto de ¥ 10.800 no câmbio de ¥ 32 por real.",
  "Depois da contemplação, o crédito fica aplicado, rendendo cerca de 100% do CDI, enquanto você escolhe o imóvel.",
  "Ninguém pode dizer em que mês você será contemplado. Desconfie de qualquer corretor ou pessoa que prometer.",
];

// Passos do primeiro contato, ao lado do vídeo da seção "Quem pode".
const comoComecar = [
  "Você me chama no WhatsApp e conta o que quer construir no Brasil.",
  "Eu faço a simulação com o valor que cabe no seu mês, em reais e em ienes.",
  "Fazemos o cadastro online, com o seu endereço no Japão.",
];

const etapas = [
  {
    titulo: "Você entra no grupo, do Japão",
    texto:
      "Eu faço o seu cadastro no sistema da administradora, online, com o seu endereço no Japão, e você passa a ter uma cota num grupo.",
  },
  {
    titulo: "Paga a parcela todo mês",
    texto: "Com cartão de crédito internacional com cobrança automática todo mês, ou por boleto enviado por e-mail.",
  },
  {
    titulo: "Participa das assembleias",
    texto:
      "Todo mês tem assembleia, e a contemplação acontece por sorteio ou por lance. O lance pode ser livre, com recursos seus, ou embutido, usando parte da própria carta. Eu acompanho cada assembleia com você.",
  },
  {
    titulo: "É contemplado e a carta é liberada",
    texto:
      "Você apresenta a documentação, incluindo a de renda, e a administradora libera a carta de crédito. Enquanto você escolhe o imóvel, o crédito fica aplicado, rendendo cerca de 100% do CDI.",
  },
  {
    titulo: "Compra o imóvel à vista",
    texto:
      "Com a carta, você compra como quem paga à vista, e isso dá poder de negociação com o vendedor. Os contratos aceitam assinatura digital válida.",
  },
  {
    titulo: "Mora ou aluga",
    texto: "Você usa o imóvel quando voltar, ou aluga, e o aluguel ajuda a pagar a parcela até lá.",
  },
  {
    titulo: "Ou vende a carta",
    texto:
      "Se o seu plano mudar, a carta contemplada pode ser vendida. A própria administradora faz uma oferta à vista, conforme a avaliação no momento. Sem burocracia para quem está no Japão: você aceita, o dinheiro cai na sua conta, e a cota e as parcelas saem do seu nome na hora.",
  },
];

const caminhos = [
  {
    caminho: "Juntar e comprar à vista",
    juros: "Não",
    quando: "Só quando o valor total estiver guardado",
    atencao: "Exige disciplina por muitos anos; o dinheiro parado é o primeiro a sair num imprevisto.",
  },
  {
    caminho: "Financiamento",
    juros: "Sim, durante todo o contrato",
    quando: "Logo após a aprovação",
    atencao: "Exige entrada e comprovação de renda no banco; os juros aumentam muito o custo total.",
  },
  {
    caminho: "Consórcio",
    juros: "Não, só taxa de administração",
    quando: "Na contemplação, por sorteio ou lance",
    atencao: "A data da contemplação não é previsível; a parcela é reajustada uma vez por ano.",
  },
];

const ademiconNumeros = [
  { valor: "35+", rotulo: "anos de história" },
  { valor: "+675 mil", rotulo: "clientes atendidos" },
  { valor: "R$ 145,8 bi", rotulo: "em créditos comercializados" },
  { valor: "+945 mil", rotulo: "cotas comercializadas" },
  { valor: "+300", rotulo: "lojas no Brasil" },
];

const faqItems = [
  {
    question: "Morando no Japão, posso fazer consórcio de imóvel no Brasil?",
    answer:
      "Sim. Na Ademicon, administradora com que a Revla trabalha, o brasileiro que mora no Japão contrata o consórcio online, com o endereço do Japão, e paga a parcela de lá. Quando for contemplado, usa o crédito para comprar um imóvel no Brasil.",
  },
  {
    question: "Preciso voltar ao Brasil para contratar?",
    answer:
      "Não. A contratação é feita online, com assinatura eletrônica do contrato e pagamento da primeira parcela a partir do Japão.",
  },
  {
    question: "Preciso comprovar renda para entrar no grupo?",
    answer:
      "A análise de renda é feita na contemplação, quando você for usar a carta para comprar o imóvel. A regra vale igual para quem mora no Brasil, no Japão ou em qualquer outro país — o consórcio para brasileiros no exterior segue a mesma regra do Japão.",
  },
  {
    question: "Como pago a parcela recebendo em ienes?",
    answer:
      "Com cartão de crédito internacional, com cobrança automática todo mês, sem precisar de conta no Brasil, e eu te ajudo a cadastrar o cartão. Se preferir, também pode receber o boleto por e-mail. A primeira parcela pode ser paga por boleto, Pix ou cartão; as seguintes, por boleto ou no cartão. Para boleto ou Pix, é preciso ter conta no Brasil, que pode ser aberta em um banco digital pelo celular. A parcela é em reais, e o valor em ienes muda com o câmbio.",
  },
  {
    question: "Quais documentos do Japão servem para comprovar renda?",
    answer:
      "Na contemplação, a Ademicon aceita um documento real de renda emitido no Japão, com tradução juramentada e sem apostila de Haia. Extratos bancários servem só como complemento. Exemplos: contrato de trabalho (koyō keiyakusho), documento do seu contador (zeirishi) com o ganho anual, comprovante anual de rendimentos (gensen chōshūhyō) e certidão de renda da prefeitura (kazei shōmeisho).",
  },
  {
    question: "Fui contemplado e estou no Japão. Preciso voltar para comprar o imóvel?",
    answer:
      "Não necessariamente. O contrato de compra e venda e o de alienação fiduciária aceitam assinatura digital válida ou firma reconhecida, e o registro é feito no cartório de imóveis da cidade do imóvel. Se alguma etapa exigir presença, você pode nomear um procurador no Brasil.",
  },
  {
    question: "Posso esperar para comprar o imóvel só quando eu voltar?",
    answer:
      "Sim. Na Ademicon, enquanto você não usa a carta, o crédito contemplado fica aplicado e rende cerca de 100% do CDI. A parcela continua sendo paga normalmente nesse período.",
  },
  {
    question: "Existe data certa para ser contemplado?",
    answer:
      "Não. A contemplação acontece por sorteio ou lance, todos os meses. Estratégias de lance aumentam as chances, mas ninguém pode dizer em que mês você será contemplado.",
  },
  {
    question: "A parcela muda com o tempo?",
    answer:
      "Sim. A carta e a parcela são reajustadas uma vez por ano, em janeiro, pelo INCC-DI. Se você pagar a parcela reduzida, a diferença é diluída nas parcelas que faltam depois da contemplação, e a parcela sobe. O seguro prestamista passa a ser obrigatório depois da contemplação.",
  },
  {
    question: "Consórcio é investimento?",
    answer:
      "Não no sentido de aplicação financeira: o consórcio não rende sobre o que você paga. Ele é a forma planejada e sem juros de comprar o imóvel que pode virar patrimônio e renda de aluguel no Brasil.",
  },
  {
    question: "Como sei que a administradora é confiável?",
    answer:
      "Consulte o nome ou o CNPJ da administradora no site do Banco Central e pague sempre em nome da administradora, nunca a uma pessoa física ou ao corretor. Desconfie de qualquer corretor ou pessoa que prometa em que mês você vai ser contemplado.",
  },
  {
    question: "Com quais administradoras a Revla trabalha?",
    answer:
      "A Revla é homologada na Ademicon, na Porto Seguro e na Rodobens. As regras desta página para quem mora no Japão são as da Ademicon, a administradora com que a Revla atende esse público hoje.",
  },
  {
    question: "Outras pessoas vão saber do meu consórcio?",
    answer:
      "Não. O atendimento é individual, direto com o Reinaldo, e as informações do seu consórcio ficam entre você, quem você escolher e a administradora.",
  },
  {
    question: "Posso usar o dinheiro que já guardei no Japão para começar?",
    answer:
      "Sim. Uma transferência internacional do Japão para o Brasil (o furikomi, como é chamado por lá) pode virar a primeira parcela ou um lance livre com recursos próprios, aumentando sua carta ou suas chances na contemplação. Fora isso, não é preciso fazer remessa todo mês: a parcela normal é cobrada direto no seu cartão de crédito internacional.",
  },
  {
    question: "Ainda não sei quando vou voltar para o Brasil. Faz sentido começar agora?",
    answer:
      "Faz. A contemplação não tem data certa de qualquer forma — ela depende de sorteio ou lance, não de quando você decide usar o crédito. Enquanto isso, você paga a parcela normalmente; depois de contemplado, pode deixar o crédito aplicado, rendendo, até decidir o que fazer, mesmo sem data para voltar.",
  },
  {
    question: "O que acontece com o consórcio se eu voltar para o Brasil antes de ser contemplado?",
    answer:
      "Nada muda no consórcio em si: você continua pagando a parcela normalmente, só que agora com endereço no Brasil em vez do Japão. A contemplação continua acontecendo por sorteio ou lance, do mesmo jeito.",
  },
  {
    question: "Consórcio é melhor que financiamento para quem mora fora do Brasil?",
    answer:
      "Depende do seu momento. O consórcio não cobra juros (só taxa de administração) e a contemplação acontece por sorteio ou lance; o financiamento tem juros durante todo o contrato, mas entrega o crédito logo após a aprovação, exigindo entrada e comprovação de renda já na contratação. Para quem está no Japão sem pressa de uma data certa, o consórcio costuma pesar menos no orçamento mensal.",
  },
  {
    question: "Vale a pena pensar em aposentadoria enquanto moro no Japão?",
    answer:
      "Vale, e o planejamento é diferente do de quem nunca saiu do Brasil. O acordo de previdência social entre Brasil e Japão, em vigor desde 2012, permite somar o tempo contribuído nos dois países para completar o tempo mínimo de aposentadoria no Brasil — mas o INSS paga só a parte proporcional ao tempo contribuído aqui, não um benefício cheio nem uma segunda aposentadoria. Por isso muita gente no Japão usa o consórcio para montar, além do que vier do INSS, uma fonte própria de renda: um imóvel que, alugado, complementa a aposentadoria na volta ao Brasil.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}${PATH}#webpage`,
  url: `${siteConfig.url}${PATH}`,
  name: "Consórcio de imóvel no Brasil para brasileiros que moram no Japão",
  description:
    "Como o brasileiro que mora no Japão contrata consórcio de imóvel no Brasil, paga a parcela em ienes, comprova renda e compra o imóvel depois da contemplação.",
  inLanguage: "pt-BR",
  datePublished: PUBLISHED,
  dateModified: LAST_UPDATED,
  isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  author: {
    "@type": "Person",
    name: "Reinaldo Masullo",
    url: `${siteConfig.url}/reinaldo-masullo`,
    jobTitle: "Corretor de seguros e consultor de consórcios",
    worksFor: { "@type": "InsuranceAgency", name: siteConfig.legalName, url: siteConfig.url },
  },
  publisher: { "@type": "InsuranceAgency", name: siteConfig.legalName, url: siteConfig.url },
  audience: {
    "@type": "Audience",
    audienceType: "Brasileiros que moram no Japão",
    geographicArea: { "@type": "Country", name: "Japão" },
  },
  about: [
    { "@type": "Thing", name: "Consórcio de imóveis" },
    { "@type": "Thing", name: "Brasileiros no Japão" },
  ],
  mentions: [{ "@type": "Organization", name: "Ademicon", url: "https://www.ademicon.com.br" }],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio de imóveis para brasileiros residentes no Japão",
  provider: { "@type": "InsuranceAgency", name: siteConfig.legalName, url: siteConfig.url },
  areaServed: [
    { "@type": "Country", name: "Japão" },
    { "@type": "Country", name: "Brasil" },
  ],
  audience: { "@type": "Audience", audienceType: "Brasileiros que moram no Japão" },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${siteConfig.url}${PATH}`,
    availableLanguage: "pt-BR",
  },
  description:
    "Consultoria e corretagem de consórcio de imóvel no Brasil para brasileiros que moram no Japão: contratação online, pagamento com cartão internacional e acompanhamento até a compra do imóvel.",
};

// Vídeos curtos da série (canal do Reinaldo no YouTube). A transcrição é o que
// foi falado no vídeo, para buscadores e IAs.
const videoQuemPode = {
  youtubeId: "IocTEfTWKNA",
  titulo: "Morando no Japão, posso fazer consórcio de imóvel no Brasil?",
  capa: "/images/videos/japao-v1.webp",
  publicado: "2026-10-17",
  duracao: "PT45S",
  transcricao:
    "Você mora no Japão e acha que só vai ter imóvel no Brasil quando voltar? Eu sou o Reinaldo, consultor especialista em consórcios, e te digo: não precisa esperar. Você contrata o consórcio comigo de forma totalmente online, com o seu endereço aí. Paga uma parcela por mês, sem juros, só com a taxa de administração, e ainda tem a opção de pagar a parcela reduzida até a contemplação. E pode pagar com o seu cartão de crédito internacional, boleto, Pix ou conta digital. A análise de renda só acontece na contemplação, quando você for usar o crédito. Todo mês você concorre por sorteio ou por lance. Quando for contemplado, usa o crédito para comprar um imóvel à vista aqui no Brasil. Me chama no WhatsApp e me conta o que você quer construir.",
};

const videoPagamento = {
  youtubeId: "rEQJhSeS6iw",
  titulo: "Recebo em ienes. Como pago a parcela do consórcio no Brasil?",
  capa: "/images/videos/japao-v2.webp",
  publicado: "2026-10-20",
  duracao: "PT56S",
  transcricao:
    "Você recebe em ienes e a parcela do consórcio é em reais. Como paga estando no Japão? Eu sou o Reinaldo, consultor de consórcios, e te explico. O jeito mais prático é o cartão de crédito internacional, com cobrança automática todo mês. Eu te ajudo a cadastrar o cartão no aplicativo da administradora, e a parcela é cobrada no dia do vencimento. Se você tem conta no Brasil, também pode receber o boleto por e-mail ou pagar a primeira parcela por Pix. E se não tem, dá para abrir uma conta em um banco digital pelo celular. A parcela é sempre em reais, então o valor em ienes muda com o câmbio. Numa carta de R$ 100.000, a parcela reduzida fica em torno de R$ 337, pouco mais de 10.000 ienes. Me chama no WhatsApp e me conta quanto você consegue guardar por mês, em ienes, que eu te mostro qual carta se encaixa melhor para você.",
};

const videoRenda = {
  youtubeId: "mj8us4gBypA",
  titulo: "Moro no Japão. Preciso comprovar renda para fazer consórcio no Brasil?",
  capa: "/images/videos/japao-v3.webp",
  publicado: "2026-10-24",
  duracao: "PT48S",
  transcricao:
    "Morando no Japão, você precisa comprovar a renda para fazer consórcio no Brasil? Eu sou o Reinaldo e te explico. Para entrar, não precisa. Você contrata daí, com seu endereço no Japão. A renda só é analisada na contemplação, e só se você for usar a carta para comprar o imóvel. Se você é funcionário de empresa ou de empreiteira, comprova com seu contrato de trabalho, o koyō keiyakusho. Se você é patrão do seu negócio, o seu contador, o zeirishi, emite um documento com seu ganho anual. Nos dois casos, com tradução juramentada. Apostila de Haia não é exigida. E se você vender a carta em vez de comprar o imóvel, não precisa comprovar renda. Quer saber mais? Me chama no WhatsApp.",
};

const videoContemplado = {
  youtubeId: "apnGfmuAS9Q",
  titulo: "Como comprar o imóvel no Brasil se eu for contemplado morando no Japão?",
  capa: "/images/videos/japao-v4.webp",
  publicado: "2026-10-25",
  duracao: "PT42S",
  transcricao:
    "Como comprar o imóvel no Brasil se for contemplado morando no Japão? Eu sou o Reinaldo e te explico. Contemplado, você tem três caminhos: comprar o imóvel na hora, deixar o crédito guardado enquanto escolhe com calma, ou vender a carta, se esse for o seu plano. Para comprar, você faz tudo daí. O contrato aceita assinatura digital válida. E se alguma etapa pedir presença, um procurador de confiança no Brasil resolve. E como a carta vale como pagamento à vista, você ainda negocia desconto com o vendedor. Quer saber mais? Me chama no WhatsApp.",
};

const videoGolpe = {
  youtubeId: "aU1XSQkR2ew",
  titulo: "Como saber se o consórcio é golpe? (Morando no Japão)",
  capa: "/images/videos/japao-v5.webp",
  publicado: "2026-11-07",
  duracao: "PT50S",
  transcricao:
    "Mora no Japão e tem medo de cair num golpe fazendo consórcio no Brasil? Esse medo faz sentido. Antes de pagar qualquer coisa, confira três coisas. Primeiro: a administradora precisa ser autorizada pelo Banco Central. Você confere pelo nome ou pelo CNPJ, no site do próprio Banco Central. Segundo: o pagamento vai sempre para a administradora. Nunca para uma pessoa, nunca para o corretor. Terceiro: desconfie de quem promete em que mês você vai ser contemplado. Ninguém sabe essa data, porque depende de sorteio e de lance. Eu te mando o contrato e o CNPJ e explico tudo antes de você pagar qualquer valor. Quer conferir tudo isso comigo? Me chama no WhatsApp: 55 11 94726 3140.",
};

const videoAluguel = {
  youtubeId: "LdgXm6XnqVk",
  titulo: "O aluguel pode pagar a parcela do consórcio? (Morando no Japão)",
  capa: "/images/videos/japao-v6.webp",
  publicado: "2026-11-07",
  duracao: "PT46S",
  transcricao:
    "E se o imóvel que você comprar no Brasil ajudasse a pagar a própria parcela? Funciona assim: você é contemplado e compra um imóvel pensado para alugar. O aluguel entra todo mês e ajuda a pagar a parcela do consórcio. Quando o consórcio termina, esse aluguel fica para você. E você não precisa vir ao Brasil: uma imobiliária cuida do inquilino. A Revla ainda faz o seguro fiança, que é pago pelo inquilino. Se ele atrasar, a seguradora paga para você. O segredo está na escolha do imóvel, e eu analiso cada opção junto com você. Quer ver um exemplo com números? Me chama no WhatsApp: 55 11 94726 3140.",
};

function videoObject(video: typeof videoQuemPode, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.titulo,
    description,
    thumbnailUrl: `${siteConfig.url}${video.capa}`,
    uploadDate: video.publicado,
    duration: video.duracao,
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
    url: `https://www.youtube.com/shorts/${video.youtubeId}`,
    inLanguage: "pt-BR",
    transcript: video.transcricao,
    author: { "@type": "Person", name: "Reinaldo Masullo", url: `${siteConfig.url}/reinaldo-masullo` },
  };
}

const videoSchema = videoObject(
  videoQuemPode,
  "Reinaldo Masullo explica em 45 segundos como o brasileiro que mora no Japão contrata consórcio de imóvel no Brasil, paga a parcela e usa o crédito para comprar o imóvel à vista.",
);

const videoPagamentoSchema = videoObject(
  videoPagamento,
  "Reinaldo Masullo explica em menos de 1 minuto como o brasileiro que recebe em ienes paga a parcela do consórcio no Brasil: cartão de crédito internacional, boleto por e-mail ou Pix, e quanto fica em ienes.",
);

const videoRendaSchema = videoObject(
  videoRenda,
  "Reinaldo Masullo explica em 48 segundos quando o brasileiro que mora no Japão precisa comprovar renda no consórcio de imóvel no Brasil e quais documentos japoneses usar, com tradução juramentada.",
);

const videoContempladoSchema = videoObject(
  videoContemplado,
  "Reinaldo Masullo explica em 42 segundos os três caminhos de quem é contemplado no consórcio morando no Japão: comprar o imóvel no Brasil, deixar o crédito guardado ou vender a carta, com assinatura digital ou procurador.",
);

const videoGolpeSchema = videoObject(
  videoGolpe,
  "Reinaldo Masullo explica em 50 segundos as três conferências para o brasileiro que mora no Japão não cair em golpe ao fazer consórcio no Brasil: administradora autorizada pelo Banco Central, pagamento sempre em nome da administradora e desconfiança de quem promete data de contemplação.",
);

const videoAluguelSchema = videoObject(
  videoAluguel,
  "Reinaldo Masullo explica em 46 segundos como o brasileiro que mora no Japão usa o consórcio para comprar um imóvel no Brasil e colocar para alugar: o aluguel ajuda a pagar a parcela, uma imobiliária cuida do inquilino e o seguro fiança é pago pelo inquilino.",
);

const h2 = "text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl";
const lead = "mt-4 text-lg leading-relaxed text-[var(--color-ink)]";
const body = "mt-4 text-base leading-relaxed text-[var(--color-ink)]/75";

export default function BrasileirosNoJapaoPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={videoSchema} />
      <JsonLd data={videoPagamentoSchema} />
      <JsonLd data={videoRendaSchema} />
      <JsonLd data={videoContempladoSchema} />
      <JsonLd data={videoGolpeSchema} />
      <JsonLd data={videoAluguelSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Brasileiros no Japão", href: PATH },
        ]}
      />

      {/* Topo: pergunta, resposta direta e CTA na primeira dobra */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] pb-10 pt-4 sm:pb-14 sm:pt-6">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
              Consórcio para brasileiros no Japão
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              Morando no Japão, posso fazer consórcio de imóvel no Brasil?
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/80 sm:text-lg">
              Sim. Você contrata online, com o seu endereço no Japão, e paga a parcela com cartão de crédito
              internacional. A comprovação de renda é feita na contemplação, quando você vai usar o crédito, e o crédito
              fica rendendo enquanto você escolhe o imóvel no Brasil.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} variant="secondary" external>
                {CTA_LABEL}
              </CTAButton>
              <a
                href="#simulador"
                className="text-base font-semibold text-[var(--color-secondary)] underline decoration-[var(--color-secondary)]/40 underline-offset-4 hover:decoration-[var(--color-secondary)]"
              >
                Simular a parcela em reais e ienes
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm text-[var(--color-ink)]/80" aria-label="Destaques">
              {[
                "Contratação 100% online",
                "Endereço no Japão aceito",
                "Renda analisada na contemplação",
                "Administradora autorizada pelo Banco Central",
              ].map((item) => (
                <li key={item} className="rounded-full bg-[var(--color-muted)] px-3 py-1.5">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 text-sm text-[var(--color-ink)]/70">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/reinaldo-avatar.jpg"
                alt="Reinaldo Masullo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <p>
                Por{" "}
                <Link href="/reinaldo-masullo" className="font-semibold text-[var(--color-ink)] hover:underline">
                  Reinaldo Masullo
                </Link>
                , consultor da Revla Corretora · Atualizado em{" "}
                <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Resumo factual — trecho pensado para ser citado por IAs */}
      <section className="py-10 sm:py-12" aria-labelledby="resumo-heading">
        <Container className="max-w-3xl">
          <h2 id="resumo-heading" className={h2}>
            Resumo em 30 segundos
          </h2>
          <ul className="mt-5 space-y-3">
            {resumo.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-[var(--color-ink)]/80">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Quem pode */}
      <section className="section-muted py-10 sm:py-12" aria-labelledby="quem-pode-heading">
        <Container className="grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_280px]">
          <div className="md:col-start-1 md:row-start-1">
            <h2 id="quem-pode-heading" className={h2}>
            Quem pode fazer consórcio no Brasil morando no Japão?
          </h2>
          <p className={lead}>
            Qualquer brasileiro que mora no Japão — dekassegui ou não, há pouco tempo ou há décadas — com CPF regular,
            pode contratar consórcio de imóvel na Ademicon.
          </p>
          <p className={body}>
            O cadastro é feito com o seu endereço no Japão. A análise de renda acontece na contemplação, quando você
            for usar a carta para comprar o imóvel, e a regra é a mesma para quem mora no Brasil ou em qualquer outro
            país.
          </p>
          <p className={body}>
            A Revla não é administradora: é a corretora que explica, contrata com você e acompanha o seu consórcio do
            primeiro ao último mês. O dinheiro fica no grupo da administradora, autorizada e fiscalizada pelo Banco
            Central.
          </p>
          </div>
          <div className="md:col-start-2 md:row-span-2 md:row-start-1">
          <VideoCurto
            youtubeId={videoQuemPode.youtubeId}
            titulo={videoQuemPode.titulo}
            capa={videoQuemPode.capa}
            transcricao={videoQuemPode.transcricao}
            duracaoTexto="45 s"
          />
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-6 md:col-start-1 md:row-start-2">
            <p className="text-base font-semibold text-[var(--color-primary)]">Como começar, morando no Japão</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed text-[var(--color-ink)]/75">
              {comoComecar.map((passo) => (
                <li key={passo}>{passo}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]/75">
              Atendimento pelo WhatsApp todos os dias, inclusive sábado e domingo, das 7h às 11h e das 19h às 23h no
              horário do Japão.
            </p>
            <div className="mt-5">
              <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} variant="secondary" external>
                {CTA_LABEL}
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Como funciona — linha do tempo */}
      <section className="py-10 sm:py-12" aria-labelledby="como-funciona-heading">
        <Container>
          <div className="max-w-3xl">
            <h2 id="como-funciona-heading" className={h2}>
              Como funciona, do Japão até o imóvel no Brasil
            </h2>
            <p className={lead}>
              Você paga uma parcela por mês, sem juros, e concorre todos os meses. Quando é contemplado, usa o crédito
              para comprar o imóvel à vista no Brasil.
            </p>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {etapas.map((etapa, i) => (
              <li
                key={etapa.titulo}
                className={`rounded-2xl border p-6 ${
                  i === etapas.length - 1
                    ? "border-dashed border-[var(--color-secondary)]/40 bg-[var(--color-muted)] sm:col-span-2 lg:col-span-3"
                    : "border-[var(--color-border)]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)]/15 text-sm font-bold text-[var(--color-accent-dark)]"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">{etapa.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">{etapa.texto}</p>
              </li>
            ))}
          </ol>
          <SectionCTA />
        </Container>
      </section>

      {/* Simulador */}
      <section id="simulador" className="section-tint-blue scroll-mt-24 py-10 sm:py-12" aria-labelledby="simulador-heading">
        <Container className="max-w-4xl">
          <h2 id="simulador-heading" className={h2}>
            Quanto custa? Simule a parcela em reais e em ienes
          </h2>
          <p className={lead}>
            Uma carta de R$ 100 mil tem parcela reduzida de cerca de R$ 337 até a contemplação e parcela cheia de cerca
            de R$ 565, com prazo de 220 meses e taxa de administração de 24,2%.
          </p>
          <p className={body}>
            A parcela cheia é a parte da carta (R$ 454,55) mais a taxa de administração (R$ 110,00). Na parcela
            reduzida, você paga metade da parte da carta e a taxa inteira até ser contemplado. A diferença não paga é
            diluída nas parcelas restantes depois da contemplação: por isso, quanto mais tarde a contemplação, maior a
            parcela depois dela.
          </p>
          <div className="mt-8">
            <SimuladorJapao />
          </div>
          <SectionCTA label="Quero a simulação com o meu nome" />
        </Container>
      </section>

      {/* Pagamento em ienes */}
      <section className="py-10 sm:py-12" aria-labelledby="pagamento-heading">
        <Container className="grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_280px]">
          <div>
          <h2 id="pagamento-heading" className={h2}>
            Como pagar a parcela recebendo em ienes?
          </h2>
          <p className={lead}>
            Com cartão de crédito internacional, com cobrança automática todo mês, sem precisar de conta no Brasil.
          </p>
          <p className={body}>
            Eu te ajudo a cadastrar o cartão no aplicativo da administradora, e a parcela é cobrada todo mês no dia do
            vencimento. Se preferir, você também pode receber o boleto por e-mail todo mês. A primeira parcela pode ser
            paga por boleto, Pix ou cartão; as seguintes, por boleto ou no cartão. Para pagar boleto ou Pix, você
            precisa de uma conta no Brasil, e quem não tem pode abrir uma conta em um banco digital pelo celular. A
            parcela é sempre em
            reais, então o valor em ienes muda com o câmbio: com o real mais caro, você gasta mais ienes; com o real
            mais barato, menos.
          </p>
          <p className={body}>
            Um cuidado prático: deixe uma folga no orçamento para a variação do câmbio e para o reajuste anual da
            parcela. Eu te mostro o cálculo em ienes antes de você decidir.
          </p>
          <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-6">
            <p className="text-base font-semibold text-[var(--color-primary)]">Exemplo em ienes</p>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/75">
              Numa carta de R$ 100 mil, a parcela reduzida fica em torno de R$ 337 até a contemplação, pouco mais de
              ¥ 10.000, conforme o câmbio. Me conte quanto você consegue guardar por mês, em ienes, que eu te mostro
              qual carta encaixa.
            </p>
            <div className="mt-5">
              <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} variant="secondary" external>
                {CTA_LABEL}
              </CTAButton>
            </div>
          </div>
          </div>
          <VideoCurto
            youtubeId={videoPagamento.youtubeId}
            titulo={videoPagamento.titulo}
            capa={videoPagamento.capa}
            transcricao={videoPagamento.transcricao}
            duracaoTexto="56 s"
          />
        </Container>
      </section>

      {/* Renda */}
      <section className="section-muted py-10 sm:py-12" aria-labelledby="renda-heading">
        <Container className="grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_280px]">
          <div>
          <h2 id="renda-heading" className={h2}>
            Como comprovar renda trabalhando no Japão?
          </h2>
          <p className={lead}>
            Na contemplação, quando você for usar a carta para comprar o imóvel. É nesse momento que a análise de renda
            acontece.
          </p>
          <p className={body}>
            A Ademicon aceita um documento real de renda emitido no Japão, com tradução juramentada. Extratos bancários
            servem apenas como complemento, e o aluguel de um imóvel conta como renda quando vem com o contrato de
            locação e o extrato do recebimento.
          </p>
          <p className={body}>Exemplos de documentos japoneses de renda:</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-[var(--color-ink)]/75">
            <li>
              Contrato de trabalho, para quem é funcionário de empresa ou de empreiteira:{" "}
              <Ja kanji="雇用契約書" leitura="koyō keiyakusho" />.
            </li>
            <li>
              Documento do seu contador com o ganho anual, para quem tem negócio próprio:{" "}
              <Ja kanji="税理士" leitura="zeirishi" />.
            </li>
            <li>
              Comprovante anual de rendimentos emitido pela empresa: <Ja kanji="源泉徴収票" leitura="gensen chōshūhyō" />.
            </li>
            <li>
              Certidão de renda emitida pela prefeitura: <Ja kanji="課税証明書" leitura="kazei shōmeisho" />.
            </li>
            <li>
              Para quem trabalha por conta própria, a declaração anual de imposto:{" "}
              <Ja kanji="確定申告書" leitura="kakutei shinkokusho" />.
            </li>
          </ul>
          <p className={body}>
            Os documentos vão com tradução juramentada, feita por tradutor público no Brasil a partir do documento
            digitalizado, sem você sair do Japão. A Ademicon não exige apostila de Haia.
          </p>
          <SectionCTA label="Tirar a minha dúvida sobre renda" />
          </div>
          <VideoCurto
            youtubeId={videoRenda.youtubeId}
            titulo={videoRenda.titulo}
            capa={videoRenda.capa}
            transcricao={videoRenda.transcricao}
            duracaoTexto="48 s"
          />
        </Container>
      </section>

      {/* Contemplação no Japão */}
      <section className="py-10 sm:py-12" aria-labelledby="contemplado-heading">
        <Container className="grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_280px]">
          <div>
          <h2 id="contemplado-heading" className={h2}>
            Fui contemplado e moro no Japão. E agora?
          </h2>
          <p className={lead}>
            Você tem três caminhos: comprar o imóvel na hora, deixar o crédito aplicado, rendendo cerca de 100% do CDI,
            enquanto escolhe com calma, ou vender a carta, se esse for o seu plano.
          </p>
          <p className={body}>
            O contrato de compra e venda e o de alienação fiduciária aceitam assinatura digital válida ou firma
            reconhecida, e o registro é feito no cartório de imóveis da cidade do imóvel. A administradora libera 80% do
            crédito com o contrato assinado e os 20% restantes depois do registro. Se alguma etapa exigir presença, você
            pode nomear um procurador de confiança no Brasil.
          </p>
          <p className={body}>
            O crédito também pode ser usado para reforma, com construção averbada na matrícula e notas fiscais ou
            contrato com profissional habilitado. A documentação da compra (ITBI, escritura e registro) fica por conta
            de quem compra; como você paga o vendedor à vista, o desconto que negociar ajuda a cobrir esses custos.
          </p>
          <SectionCard
            titulo="Como eu te acompanho depois da contemplação"
            passos={[
              "Analiso com você os imóveis e a documentação do vendedor antes da compra.",
              "Organizo a assinatura digital ou o procurador de confiança no Brasil.",
              "Acompanho o registro no cartório até a liberação dos 20% finais do crédito.",
            ]}
            label="Fui contemplado, quero ajuda para comprar"
          />
          </div>
          <VideoCurto
            youtubeId={videoContemplado.youtubeId}
            titulo={videoContemplado.titulo}
            capa={videoContemplado.capa}
            transcricao={videoContemplado.transcricao}
            duracaoTexto="42 s"
          />
        </Container>
      </section>

      {/* Comparação */}
      <section className="section-muted py-10 sm:py-12" aria-labelledby="comparacao-heading">
        <Container className="max-w-4xl">
          <h2 id="comparacao-heading" className={h2}>
            Juntar, financiar ou fazer consórcio: o que faz sentido para quem está no Japão?
          </h2>
          <p className={lead}>
            Os três caminhos levam ao imóvel; o que muda é o custo, o momento em que você recebe e o que pode dar
            errado.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)]" tabIndex={0} role="region" aria-label="Comparação entre juntar, financiar e consórcio">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-muted)] text-[var(--color-ink)]">
                  <th scope="col" className="p-4 font-semibold">Caminho</th>
                  <th scope="col" className="p-4 font-semibold">Juros</th>
                  <th scope="col" className="p-4 font-semibold">Quando você tem o imóvel</th>
                  <th scope="col" className="p-4 font-semibold">Ponto de atenção</th>
                </tr>
              </thead>
              <tbody>
                {caminhos.map((c) => (
                  <tr key={c.caminho} className="border-b border-[var(--color-border)] last:border-b-0">
                    <th scope="row" className="p-4 font-semibold text-[var(--color-ink)]">
                      {c.caminho}
                    </th>
                    <td className="p-4 text-[var(--color-ink)]/75">{c.juros}</td>
                    <td className="p-4 text-[var(--color-ink)]/75">{c.quando}</td>
                    <td className="p-4 text-[var(--color-ink)]/75">{c.atencao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Quando faz sentido */}
      <section className="py-10 sm:py-12" aria-labelledby="sentido-heading">
        <Container className="max-w-4xl">
          <h2 id="sentido-heading" className={h2}>
            Quando o consórcio faz sentido para quem mora no Japão, e quando não faz
          </h2>
          <p className={lead}>
            Faz sentido para quem quer construir patrimônio no Brasil com planejamento; não faz para quem precisa do
            imóvel numa data certa.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] p-6">
              <h3 className="text-base font-semibold text-[var(--color-ink)]">Faz sentido se você</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-ink)]/75">
                <li>quer um imóvel no Brasil, para morar na volta ou para alugar;</li>
                <li>tem alguns anos de planejamento pela frente;</li>
                <li>consegue guardar todo mês e quer um compromisso que te ajude a manter a disciplina;</li>
                <li>não quer pagar juros de financiamento.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] p-6">
              <h3 className="text-base font-semibold text-[var(--color-ink)]">Não faz sentido se você</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-ink)]/75">
                <li>precisa do imóvel numa data definida;</li>
                <li>não tem folga para a parcela em reais, considerando câmbio e reajuste;</li>
                <li>não tem nenhum plano de patrimônio no Brasil;</li>
                <li>procura uma aplicação que renda sobre o que você paga.</li>
              </ul>
            </div>
          </div>
          <p className={body}>
            <strong>E se eu desistir?</strong> O valor pago não volta na hora: ele só é devolvido quando a sua cota for
            sorteada entre as canceladas ou quando o grupo terminar, conforme as regras do contrato. Por isso, escolha
            uma parcela que caiba no seu orçamento com folga, mesmo com o câmbio e o reajuste anual.
          </p>
        </Container>
      </section>

      {/* Aluguel */}
      <section className="section-muted py-10 sm:py-12" aria-labelledby="aluguel-heading">
        <Container className="grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_280px]">
          <div>
          <h2 id="aluguel-heading" className={h2}>
            O aluguel pode ajudar a pagar a parcela?
          </h2>
          <p className={lead}>
            Pode. Depois da contemplação, você compra um imóvel pensado para alugar, e o aluguel ajuda a pagar a
            parcela até o fim do consórcio, quando passa a ser renda para você.
          </p>
          <p className={body}>
            Você não precisa vir ao Brasil para isso: uma imobiliária cuida do anúncio, da vistoria, do contrato e da
            cobrança. Para você ter mais tranquilidade com o pagamento, a Revla, que também é corretora de seguros,
            contrata o seguro fiança, pago pelo inquilino: se ele atrasar, a seguradora paga os aluguéis devidos, conforme as condições da
            apólice.
          </p>
          <p className={body}>
            Se a conta fecha depende do imóvel escolhido, do valor do aluguel e do momento da contemplação. Por isso eu
            analiso cada opção com você, com números, antes da compra.
          </p>
          <SectionCard
            titulo="Como eu monto essa conta com você"
            passos={[
              "Simulo a carta e a parcela, em reais e em ienes.",
              "Comparo o aluguel esperado na região do imóvel com a parcela depois da contemplação.",
              "Faço o seguro fiança do contrato de aluguel, pago pelo inquilino.",
            ]}
            label="Simular com o aluguel ajudando a pagar"
          />
          </div>
          <VideoCurto
            youtubeId={videoAluguel.youtubeId}
            titulo={videoAluguel.titulo}
            capa={videoAluguel.capa}
            transcricao={videoAluguel.transcricao}
            duracaoTexto="46 s"
          />
        </Container>
      </section>

      {/* Aposentadoria imobiliária */}
      <section className="py-10 sm:py-12" aria-labelledby="aposentadoria-heading">
        <Container className="max-w-3xl">
          <h2 id="aposentadoria-heading" className={h2}>
            Aposentadoria imobiliária: pensando no que vem depois do Japão
          </h2>
          <p className={lead}>
            O acordo de previdência social entre Brasil e Japão, em vigor desde 2012, soma o tempo contribuído nos
            dois países para completar o tempo mínimo de aposentadoria no Brasil. Não é uma segunda aposentadoria: o
            INSS paga só a parte proporcional ao tempo contribuído aqui.
          </p>
          <p className={body}>
            Por isso, quem mora no Japão costuma pensar num complemento próprio de renda, e não só no que o INSS vai
            pagar. É aí que entra o que eu chamo de aposentadoria imobiliária: usar o consórcio para chegar à volta ao
            Brasil com um ou mais imóveis já comprados e alugados, com o aluguel virando renda mensal além do
            benefício oficial.
          </p>
          <p className={body}>
            Fonte oficial sobre o acordo:{" "}
            <a
              href="https://www.gov.br/inss/pt-br/direitos-e-deveres/acordos-internacionais/paises/japao"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-secondary)] hover:underline"
            >
              Acordo Brasil-Japão, no site do INSS
            </a>
            .
          </p>
          <SectionCTA label="Pensar na minha aposentadoria imobiliária" />
        </Container>
      </section>

      {/* Golpe e solidez */}
      <section className="py-10 sm:py-12" aria-labelledby="golpe-heading">
        <Container className="max-w-5xl">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_280px]">
          <div>
          <h2 id="golpe-heading" className={h2}>
            Como saber que não é golpe?
          </h2>
          <p className={lead}>
            Confira três coisas antes de pagar qualquer valor: a administradora, para quem vai o pagamento e o que o
            vendedor promete.
          </p>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-base leading-relaxed text-[var(--color-ink)]/75">
            <li>
              A administradora precisa ser autorizada pelo Banco Central. Você confere pelo nome ou pelo CNPJ em{" "}
              <a
                href="https://www.bcb.gov.br/meubc/encontreinstituicao"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--color-secondary)] hover:underline"
              >
                Encontre uma instituição, no site do Banco Central
              </a>
              .
            </li>
            <li>O pagamento é sempre feito em nome da administradora, nunca para uma pessoa física ou para o corretor.</li>
            <li>
              Desconfie de qualquer corretor ou pessoa que prometa em que mês você vai ser contemplado. Ninguém sabe
              essa data, porque ela depende de sorteio e de lance.
            </li>
          </ol>
          <SectionCard
            titulo="O que eu te mando antes de você pagar qualquer valor"
            passos={[
              "O contrato da administradora, para você ler com calma.",
              "O CNPJ da administradora, para conferir no site do Banco Central.",
              "O meu registro de corretor na SUSEP.",
            ]}
            label="Tirar minha dúvida sobre segurança"
          />
          </div>
          <VideoCurto
            youtubeId={videoGolpe.youtubeId}
            titulo={videoGolpe.titulo}
            capa={videoGolpe.capa}
            transcricao={videoGolpe.transcricao}
            duracaoTexto="50 s"
          />
          </div>
          <div className="mt-8 rounded-2xl border border-[var(--color-border)] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Administradora parceira: Ademicon</h3>
            <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-5">
              {ademiconNumeros.map((n) => (
                <div key={n.rotulo} className="flex flex-col">
                  <dt className="text-sm text-[var(--color-ink)]/70">{n.rotulo}</dt>
                  <dd className="order-first text-2xl font-bold text-[#ee3124]">{n.valor}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-[var(--color-ink)]/75">
              A Ademicon é a única administradora de consórcios do Brasil com dois fundos de private equity na
              estrutura acionária. O sistema de consórcios é regulamentado pela Lei nº 11.795/2008 e fiscalizado pelo
              Banco Central.
            </p>
            <p className="mt-3 text-xs text-[var(--color-ink)]/60">
              Fonte: dados institucionais divulgados pela{" "}
              <a
                href="https://www.ademicon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Ademicon
              </a>
              , outubro de 2026.
            </p>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[var(--color-ink)]/75">
            A Revla Corretora de Seguros é registrada na SUSEP sob o nº {siteConfig.susep}, CNPJ {siteConfig.cnpj}, com
            escritório na Avenida Paulista, em São Paulo.{" "}
            <Link href="/consorcios/e-confiavel" className="font-semibold text-[var(--color-secondary)] hover:underline">
              A Ademicon é confiável? Veja a resposta completa
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Quem atende */}
      <section className="section-muted py-10 sm:py-12" aria-labelledby="quem-atende-heading">
        <Container className="max-w-4xl">
          <div className="grid items-start gap-8 sm:grid-cols-[180px_1fr]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/reinaldo-masullo.webp"
              alt="Reinaldo Masullo, consultor da Revla Corretora"
              width={180}
              height={225}
              loading="lazy"
              decoding="async"
              className="h-56 w-44 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-100 object-cover object-top"
            />
            <div>
              <h2 id="quem-atende-heading" className={h2}>
                Quem vai te atender
              </h2>
              <p className={lead}>
                Eu, Reinaldo Masullo. Abri a Revla depois de quase perder um direito por falta de informação.
              </p>
              <p className={body}>
                Quando meu pai faleceu, o seguro de vida em grupo que eu tinha contratado pelo banco cuidou do funeral, e
                ninguém me explicou que havia também uma indenização. Anos depois, me disseram que o prazo tinha
                passado. Fui estudar: fiz um ano de curso de corretor na Escola Nacional de Seguros, tirei a minha
                habilitação, levei o caso à SUSEP e recebi. Foi aí que eu entendi o problema: quem vende muitas vezes
                não explica.
              </p>
              <p className={body}>
                Por isso a Revla trabalha com atendimento consultivo. Sou consultor autorizado da Ademicon e explico
                tudo antes, respondo a todas as perguntas e acompanho cada cliente do primeiro ao último mês do
                consórcio. E eu sei o que é construir a vida longe de casa: meu pai saiu da Itália com 18 anos, fugindo
                da guerra, e construiu tudo aqui no Brasil.
              </p>
              <p className={body}>
                O atendimento é individual e discreto: as informações do seu consórcio ficam entre você, quem você
                escolher e a administradora.
              </p>
              <p className={body}>
                <strong>Atendimento todos os dias, inclusive sábado e domingo.</strong> Pelo WhatsApp, no horário do
                Japão, das 7h às 11h e das 19h às 23h (em Brasília, das 19h às 23h e das 7h às 11h). Eu sei que a
                jornada no Japão é pesada e que, muitas vezes, o único tempo livre para pensar no futuro é o fim de
                semana. Por isso o atendimento aos brasileiros no Japão também funciona aos sábados e domingos.
              </p>
              <SectionCTA />
            </div>
          </div>
        </Container>
      </section>

      <FAQ title="Perguntas frequentes de quem mora no Japão" items={faqItems} />

      <FeatureGrid
        title="Leia também: dúvidas de quem mora no Japão"
        description="Oito respostas específicas pra quem vai pagar, acompanhar e usar o consórcio estando no Japão."
        items={postsRelacionados}
        columns={3}
      />

      <section className="pb-2 text-center sm:pb-4">
        <Container>
          <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} variant="secondary" external>
            Ainda com dúvida? Fala com o Reinaldo no WhatsApp
          </CTAButton>
        </Container>
      </section>

      <section className="pb-10 sm:pb-12">
        <Container className="max-w-3xl">
          <p className="text-sm leading-relaxed text-[var(--color-ink)]/70">
            Veja também:{" "}
            <Link
              href="/consorcios/brasileiros-nos-estados-unidos"
              className="font-semibold text-[var(--color-secondary)] hover:underline"
            >
              consórcio para brasileiros nos Estados Unidos
            </Link>
            ,{" "}
            <Link
              href="/consorcios/brasileiros-na-europa"
              className="font-semibold text-[var(--color-secondary)] hover:underline"
            >
              consórcio para brasileiros na Europa
            </Link>
            ,{" "}
            <Link href="/consorcios/imoveis" className="font-semibold text-[var(--color-secondary)] hover:underline">
              consórcio de imóveis
            </Link>
            ,{" "}
            <Link href="/consorcios/calculadora" className="font-semibold text-[var(--color-secondary)] hover:underline">
              calculadora de consórcio de imóveis
            </Link>
            ,{" "}
            <Link href="/seguros/fianca" className="font-semibold text-[var(--color-secondary)] hover:underline">
              seguro fiança
            </Link>{" "}
            e{" "}
            <Link
              href="/blog/lance-no-consorcio-como-funciona"
              className="font-semibold text-[var(--color-secondary)] hover:underline"
            >
              como funciona o lance no consórcio
            </Link>
            .
          </p>
        </Container>
      </section>

      <CTASection
        title="Quer sair do Japão com patrimônio no Brasil?"
        description="Me conte há quanto tempo você está no Japão e o que quer construir. Eu monto a simulação com o seu nome, em reais e em ienes, e explico tudo antes de você decidir."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
