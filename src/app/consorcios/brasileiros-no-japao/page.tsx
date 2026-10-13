import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import SimuladorJapao from "@/components/japao/SimuladorJapao";
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
const LAST_UPDATED = "2026-10-13";
const LAST_UPDATED_LABEL = "13 de outubro de 2026";

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

const resumo = [
  "Brasileiro que mora no Japão pode contratar consórcio de imóvel no Brasil, de forma online, com o endereço do Japão.",
  "Na Ademicon, não é exigida comprovação de renda para entrar no grupo. A renda só é analisada na contemplação, para usar a carta.",
  "A parcela pode ser paga com cartão de crédito internacional, no débito automático, sem conta no Brasil.",
  "Exemplo: carta de R$ 100 mil, parcela reduzida de cerca de R$ 337 até a contemplação, perto de ¥ 10.800 no câmbio de ¥ 32 por real.",
  "Depois da contemplação, o crédito fica aplicado, rendendo cerca de 100% do CDI, enquanto você escolhe o imóvel.",
  "Ninguém pode dizer em que mês você será contemplado. Desconfie de quem disser.",
];

const etapas = [
  {
    titulo: "Você contrata do Japão",
    texto: "Online, com o seu endereço no Japão e sem comprovar renda para entrar no grupo.",
  },
  {
    titulo: "Paga a parcela todo mês",
    texto: "Com cartão de crédito internacional no débito automático, ou por boleto.",
  },
  {
    titulo: "Concorre em todas as assembleias",
    texto: "Por sorteio e, se fizer sentido para o seu plano, por lance. Eu acompanho cada assembleia com você.",
  },
  {
    titulo: "É contemplado e o crédito rende",
    texto: "O crédito fica aplicado, rendendo cerca de 100% do CDI, enquanto você escolhe o imóvel.",
  },
  {
    titulo: "Compra o imóvel no Brasil",
    texto: "À vista para o vendedor, com contratos que aceitam assinatura digital válida.",
  },
  {
    titulo: "Mora ou aluga",
    texto: "Você usa quando voltar, ou aluga e o aluguel ajuda a pagar a parcela até lá.",
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
      "Não na Ademicon. A comprovação de renda só é pedida depois da contemplação, quando você for usar a carta para comprar o imóvel. A regra vale igual para quem mora no Brasil, no Japão ou em outro país.",
  },
  {
    question: "Como pago a parcela recebendo em ienes?",
    answer:
      "Na Ademicon, você pode cadastrar um cartão de crédito internacional para o débito automático da parcela, sem precisar de conta no Brasil. O cartão tem taxa de até 3,13% por parcela; o boleto não tem taxa. A parcela é em reais, e o valor em ienes muda com o câmbio.",
  },
  {
    question: "Quais documentos do Japão servem para comprovar renda?",
    answer:
      "Na contemplação, para quem mora fora do Brasil, a Ademicon pede a declaração de rendimentos do país onde você mora. Os documentos japoneses vão com tradução juramentada, sem apostila de Haia, e extratos bancários servem só como complemento. Exemplos: comprovante anual de rendimentos (gensen chōshūhyō) e certidão de renda da prefeitura (kazei shōmeisho).",
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
      "Consulte o nome ou o CNPJ da administradora no site do Banco Central e pague sempre em nome da administradora, nunca a uma pessoa física. Desconfie de quem diz em que mês você vai ser contemplado.",
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

const h2 = "text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl";
const lead = "mt-4 text-lg leading-relaxed text-[var(--color-ink)]";
const body = "mt-4 text-base leading-relaxed text-[var(--color-ink)]/75";

export default function BrasileirosNoJapaoPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
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
              Sim. Na Ademicon, administradora com que a Revla trabalha, você contrata online, com o seu endereço no
              Japão, sem comprovar renda para entrar no grupo, e paga a parcela com cartão de crédito internacional. Quando
              for contemplado, o crédito fica rendendo enquanto você escolhe o imóvel no Brasil.
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
                "Sem comprovar renda para entrar",
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
        <Container className="max-w-3xl">
          <h2 id="quem-pode-heading" className={h2}>
            Quem pode fazer consórcio no Brasil morando no Japão?
          </h2>
          <p className={lead}>
            Qualquer brasileiro que mora no Japão, com CPF regular, pode contratar consórcio de imóvel na Ademicon.
          </p>
          <p className={body}>
            O cadastro é feito com o seu endereço no Japão. Para entrar no grupo, não é exigida comprovação de renda, e
            a regra é a mesma para quem mora no Brasil ou em qualquer outro país. A renda só é analisada depois da
            contemplação, quando você for usar a carta para comprar o imóvel.
          </p>
          <p className={body}>
            A Revla não é administradora: é a corretora que explica, contrata com você e acompanha o seu consórcio do
            primeiro ao último mês. O dinheiro fica no grupo da administradora, autorizada e fiscalizada pelo Banco
            Central.
          </p>
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
              <li key={etapa.titulo} className="rounded-2xl border border-[var(--color-border)] p-6">
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
        <Container className="max-w-3xl">
          <h2 id="pagamento-heading" className={h2}>
            Como pagar a parcela recebendo em ienes?
          </h2>
          <p className={lead}>
            Com cartão de crédito internacional, no débito automático, sem precisar de conta no Brasil.
          </p>
          <p className={body}>
            Você mesmo cadastra o cartão no aplicativo da administradora, e a parcela é cobrada todo mês perto do
            vencimento. O cartão tem uma taxa de até 3,13% por parcela; o boleto não tem taxa. A parcela é sempre em
            reais, então o valor em ienes muda com o câmbio: com o real mais caro, você gasta mais ienes; com o real
            mais barato, menos.
          </p>
          <p className={body}>
            Um cuidado prático: deixe uma folga no orçamento para a variação do câmbio e para o reajuste anual da
            parcela. Eu te mostro o cálculo em ienes antes de você decidir.
          </p>
        </Container>
      </section>

      {/* Renda */}
      <section className="section-muted py-10 sm:py-12" aria-labelledby="renda-heading">
        <Container className="max-w-3xl">
          <h2 id="renda-heading" className={h2}>
            Como comprovar renda trabalhando no Japão?
          </h2>
          <p className={lead}>
            Só na contemplação, e só se você for usar a carta para comprar o imóvel. Para entrar no grupo, não precisa.
          </p>
          <p className={body}>
            Para quem mora fora do Brasil, a política de crédito da Ademicon pede a declaração de rendimentos do país
            onde você mora. Extratos bancários
            servem apenas como complemento, e o aluguel de um imóvel conta como renda quando vem com o contrato de
            locação e o extrato do recebimento.
          </p>
          <p className={body}>Exemplos de documentos japoneses de renda:</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-[var(--color-ink)]/75">
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
        </Container>
      </section>

      {/* Contemplação no Japão */}
      <section className="py-10 sm:py-12" aria-labelledby="contemplado-heading">
        <Container className="max-w-3xl">
          <h2 id="contemplado-heading" className={h2}>
            Fui contemplado e moro no Japão. E agora?
          </h2>
          <p className={lead}>
            Você pode comprar o imóvel na hora ou deixar o crédito aplicado, rendendo cerca de 100% do CDI, enquanto
            escolhe com calma.
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
        </Container>
      </section>

      {/* Aluguel */}
      <section className="section-muted py-10 sm:py-12" aria-labelledby="aluguel-heading">
        <Container className="max-w-3xl">
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
            contrata o{" "}
            <Link href="/seguros/fianca" className="font-semibold text-[var(--color-secondary)] hover:underline">
              seguro fiança
            </Link>
            , pago pelo inquilino: se ele atrasar, a seguradora paga os aluguéis devidos, conforme as condições da
            apólice.
          </p>
          <p className={body}>
            Se a conta fecha depende do imóvel escolhido, do valor do aluguel e do momento da contemplação. Por isso eu
            analiso cada opção com você, com números, antes da compra.
          </p>
        </Container>
      </section>

      {/* Golpe e solidez */}
      <section className="py-10 sm:py-12" aria-labelledby="golpe-heading">
        <Container className="max-w-4xl">
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
            <li>O pagamento é sempre em nome da administradora, nunca para uma pessoa física.</li>
            <li>Desconfie de quem diz em que mês você vai ser contemplado.</li>
          </ol>
          <div className="mt-8 rounded-2xl border border-[var(--color-border)] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">A administradora: Ademicon</h3>
            <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-5">
              {ademiconNumeros.map((n) => (
                <div key={n.rotulo} className="flex flex-col">
                  <dt className="text-sm text-[var(--color-ink)]/70">{n.rotulo}</dt>
                  <dd className="order-first text-2xl font-bold text-[var(--color-primary)]">{n.valor}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-[var(--color-ink)]/75">
              A Ademicon afirma ser a única administradora de consórcios do Brasil com dois fundos de private equity na
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
              <p className="mt-4 text-sm text-[var(--color-ink)]/70">
                Atendimento pelo WhatsApp de segunda a sexta, das 8h às 19h de Brasília (20h às 7h no Japão), e aos
                sábados, das 8h às 13h de Brasília (20h à 1h no Japão).
              </p>
              <SectionCTA />
            </div>
          </div>
        </Container>
      </section>

      <FAQ title="Perguntas frequentes de quem mora no Japão" items={faqItems} />

      <section className="pb-10 sm:pb-12">
        <Container className="max-w-3xl">
          <p className="text-sm leading-relaxed text-[var(--color-ink)]/70">
            Veja também:{" "}
            <Link href="/consorcios/imoveis" className="font-semibold text-[var(--color-secondary)] hover:underline">
              consórcio de imóveis
            </Link>
            ,{" "}
            <Link href="/consorcios/calculadora" className="font-semibold text-[var(--color-secondary)] hover:underline">
              calculadora de consórcio de imóveis
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
