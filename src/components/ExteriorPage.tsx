import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import {
  INDEXAR,
  EXTERIOR_PUBLICADO,
  EXTERIOR_ATUALIZADO,
  EXTERIOR_ATUALIZADO_LABEL,
  getExteriorPais,
  type ExteriorSlug,
} from "@/lib/consorcio-exterior";

const CTA_LABEL = "Falar com o Reinaldo no WhatsApp";
const h2 = "text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl";
const lead = "mt-4 text-lg leading-relaxed text-[var(--color-ink)]";
const body = "mt-4 text-base leading-relaxed text-[var(--color-ink)]/75";

export function exteriorMetadata(slug: ExteriorSlug): Metadata {
  const p = getExteriorPais(slug);
  const base = buildMetadata({ title: p.metaTitle, description: p.metaDescription, path: p.path });
  return INDEXAR ? base : { ...base, robots: { index: false, follow: true } };
}

const etapas = [
  {
    titulo: "Você entra no grupo, de onde estiver",
    texto:
      "Eu faço o seu cadastro no sistema da administradora, online, com o seu endereço no exterior, e você passa a ter uma cota num grupo.",
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
      "Se o seu plano mudar, a carta contemplada pode ser vendida. A própria administradora faz uma oferta à vista, conforme a avaliação no momento.",
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

export default function ExteriorPage({ slug }: { slug: ExteriorSlug }) {
  const p = getExteriorPais(slug);
  const wa = whatsappLink(p.whatsapp);

  const resumo = [
    `Brasileiro que mora ${p.em} pode contratar consórcio de imóvel no Brasil, de forma online, com o endereço do exterior.`,
    "A análise de renda é feita na contemplação, quando você vai usar a carta para comprar o imóvel.",
    "A parcela pode ser paga com cartão de crédito internacional, com cobrança automática todo mês, sem conta no Brasil.",
    "Exemplo: carta de R$ 100 mil, parcela reduzida de cerca de R$ 337 até a contemplação, em reais; o valor em " +
      p.moeda +
      " muda com o câmbio.",
    "Depois da contemplação, o crédito fica aplicado, rendendo cerca de 100% do CDI, enquanto você escolhe o imóvel.",
    "Ninguém pode dizer em que mês você será contemplado. Desconfie de qualquer corretor ou pessoa que prometer.",
  ];

  const comoComecar = [
    "Você me chama no WhatsApp e conta o que quer construir no Brasil.",
    `Eu faço a simulação com o valor que cabe no seu mês, em reais e em ${p.moeda}.`,
    "Fazemos o cadastro online, com o seu endereço no exterior.",
  ];

  const faqItems = [
    {
      question: `Morando ${p.em}, posso fazer consórcio de imóvel no Brasil?`,
      answer: `Sim. Na Ademicon, administradora com que a Revla trabalha, o brasileiro que mora no exterior contrata o consórcio online, com o endereço do país onde vive, e paga a parcela de lá. Quando for contemplado, usa o crédito para comprar um imóvel no Brasil.`,
    },
    {
      question: "Preciso voltar ao Brasil para contratar?",
      answer: `Não. A contratação é feita online, com assinatura eletrônica do contrato e pagamento da primeira parcela a partir de onde você mora.`,
    },
    {
      question: "Preciso comprovar renda para entrar no grupo?",
      answer:
        "A análise de renda é feita na contemplação, quando você for usar a carta para comprar o imóvel. A regra vale igual para quem mora no Brasil ou em qualquer outro país.",
    },
    {
      question: `Como pago a parcela recebendo em ${p.moeda}?`,
      answer: `Com cartão de crédito internacional, com cobrança automática todo mês, sem precisar de conta no Brasil, e eu te ajudo a cadastrar o cartão. Se preferir, também pode receber o boleto por e-mail. A primeira parcela pode ser paga por boleto, Pix ou cartão; as seguintes, por boleto ou no cartão. Para boleto ou Pix, é preciso ter conta no Brasil, que pode ser aberta em um banco digital pelo celular. A parcela é em reais, e o valor em ${p.moeda} muda com o câmbio.`,
    },
    {
      question: `Quais documentos servem para comprovar renda morando ${p.em}?`,
      answer: `Na contemplação, a Ademicon aceita um documento real de renda emitido no país onde você mora, com tradução juramentada e sem apostila de Haia. Extratos bancários servem só como complemento. Eu te digo, para o seu caso, qual documento usar antes de você contratar.`,
    },
    {
      question: "Fui contemplado e moro fora. Preciso voltar para comprar o imóvel?",
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
        "A Revla é homologada na Ademicon, na Porto Seguro e na Rodobens. As regras desta página para quem mora no exterior são as da Ademicon, a administradora com que a Revla atende esse público hoje.",
    },
    {
      question: "Outras pessoas vão saber do meu consórcio?",
      answer:
        "Não. O atendimento é individual, direto com o Reinaldo, e as informações do seu consórcio ficam entre você, quem você escolher e a administradora.",
    },
    {
      question: `Posso usar o dinheiro que já guardei ${p.em} para começar?`,
      answer:
        "Sim. Uma transferência internacional para o Brasil pode virar a primeira parcela ou um lance livre com recursos próprios, aumentando sua carta ou suas chances na contemplação. Fora isso, não é preciso fazer remessa todo mês: a parcela normal é cobrada direto no seu cartão de crédito internacional.",
    },
    {
      question: "Ainda não sei quando vou voltar para o Brasil. Faz sentido começar agora?",
      answer:
        "Faz. A contemplação não tem data certa de qualquer forma: ela depende de sorteio ou lance, não de quando você decide usar o crédito. Enquanto isso, você paga a parcela normalmente; depois de contemplado, pode deixar o crédito aplicado, rendendo, até decidir o que fazer.",
    },
    {
      question: "O que acontece com o consórcio se eu voltar para o Brasil antes de ser contemplado?",
      answer:
        "Nada muda no consórcio em si: você continua pagando a parcela normalmente, só que agora com endereço no Brasil. A contemplação continua acontecendo por sorteio ou lance, do mesmo jeito.",
    },
    {
      question: "Consórcio é melhor que financiamento para quem mora fora do Brasil?",
      answer:
        "Depende do seu momento. O consórcio não cobra juros (só taxa de administração) e a contemplação acontece por sorteio ou lance; o financiamento tem juros durante todo o contrato, mas entrega o crédito logo após a aprovação, exigindo entrada e comprovação de renda já na contratação. Para quem não precisa de uma data certa, o consórcio costuma pesar menos no orçamento mensal.",
    },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${p.path}#webpage`,
    url: `${siteConfig.url}${p.path}`,
    name: `Consórcio de imóvel no Brasil para brasileiros que moram ${p.em}`,
    description: p.metaDescription,
    inLanguage: "pt-BR",
    datePublished: EXTERIOR_PUBLICADO,
    dateModified: EXTERIOR_ATUALIZADO,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    author: {
      "@type": "Person",
      name: "Reinaldo Masullo",
      url: `${siteConfig.url}/reinaldo-masullo`,
      jobTitle: "Corretor de seguros e consultor de consórcios",
      worksFor: { "@type": "InsuranceAgency", name: siteConfig.legalName, url: siteConfig.url },
    },
    publisher: { "@type": "InsuranceAgency", name: siteConfig.legalName, url: siteConfig.url },
    mentions: [{ "@type": "Organization", name: "Ademicon", url: "https://www.ademicon.com.br" }],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Corretagem de consórcio de imóveis para brasileiros residentes ${p.em}`,
    provider: { "@type": "InsuranceAgency", name: siteConfig.legalName, url: siteConfig.url },
    areaServed: [{ "@type": "Place", name: p.nome }, { "@type": "Country", name: "Brasil" }],
    audience: { "@type": "Audience", audienceType: `Brasileiros que moram ${p.em}` },
    availableChannel: { "@type": "ServiceChannel", serviceUrl: `${siteConfig.url}${p.path}`, availableLanguage: "pt-BR" },
  };

  const SectionCTA = ({ label = CTA_LABEL }: { label?: string }) => (
    <div className="mt-8">
      <CTAButton href={wa} variant="secondary" external>
        {label}
      </CTAButton>
    </div>
  );

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: `Brasileiros ${p.em}`, href: p.path },
        ]}
      />

      <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] pb-10 pt-4 sm:pb-14 sm:pt-6">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
              Consórcio para brasileiros {p.em}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              {p.h1}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/80 sm:text-lg">
              Sim. Você contrata online, com o seu endereço no exterior, e paga a parcela com cartão de crédito
              internacional. A comprovação de renda é feita na contemplação, quando você vai usar o crédito, e o crédito
              fica rendendo enquanto você escolhe o imóvel no Brasil.
            </p>
            <div className="mt-6">
              <CTAButton href={wa} variant="secondary" external>
                {CTA_LABEL}
              </CTAButton>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm text-[var(--color-ink)]/80" aria-label="Destaques">
              {[
                "Contratação 100% online",
                "Endereço no exterior aceito",
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
                <time dateTime={EXTERIOR_ATUALIZADO}>{EXTERIOR_ATUALIZADO_LABEL}</time>
              </p>
            </div>
          </div>
        </Container>
      </section>

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

      <section className="section-muted py-10 sm:py-12" aria-labelledby="quem-pode-heading">
        <Container className="max-w-3xl">
          <h2 id="quem-pode-heading" className={h2}>
            Quem pode fazer consórcio no Brasil morando {p.em}?
          </h2>
          <p className={lead}>
            Qualquer brasileiro que mora {p.em}, há pouco tempo ou há décadas, com CPF regular, pode contratar consórcio
            de imóvel na Ademicon.
          </p>
          <p className={body}>
            O cadastro é feito com o seu endereço no exterior. A análise de renda acontece na contemplação, quando você
            for usar a carta para comprar o imóvel, e a regra é a mesma para quem mora no Brasil ou em qualquer outro
            país.
          </p>
          <p className={body}>
            A Revla não é administradora: é a corretora que explica, contrata com você e acompanha o seu consórcio do
            primeiro ao último mês. O dinheiro fica no grupo da administradora, autorizada e fiscalizada pelo Banco
            Central.
          </p>
          <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-6">
            <p className="text-base font-semibold text-[var(--color-primary)]">Como começar, morando {p.em}</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed text-[var(--color-ink)]/75">
              {comoComecar.map((passo) => (
                <li key={passo}>{passo}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]/75">
              Atendimento pelo WhatsApp todos os dias, inclusive sábado e domingo, {p.horario}.
            </p>
            <div className="mt-5">
              <CTAButton href={wa} variant="secondary" external>
                {CTA_LABEL}
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12" aria-labelledby="como-funciona-heading">
        <Container>
          <div className="max-w-3xl">
            <h2 id="como-funciona-heading" className={h2}>
              Como funciona, {p.nome === "Europa" ? "da Europa" : "dos Estados Unidos"} até o imóvel no Brasil
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

      <section className="section-tint-blue py-10 sm:py-12" aria-labelledby="custo-heading">
        <Container className="max-w-3xl">
          <h2 id="custo-heading" className={h2}>
            Quanto custa?
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
          <p className={body}>
            A parcela é sempre em reais, então o valor em {p.moeda} muda com o câmbio. Deixe uma folga no orçamento para
            a variação do câmbio e para o reajuste anual. Me conte quanto você consegue guardar por mês, em {p.moeda},
            que eu te mostro qual carta encaixa.
          </p>
          <SectionCTA label="Quero a simulação com o meu nome" />
        </Container>
      </section>

      <section className="py-10 sm:py-12" aria-labelledby="caminhos-heading">
        <Container>
          <div className="max-w-3xl">
            <h2 id="caminhos-heading" className={h2}>
              Consórcio, financiamento ou juntar o dinheiro?
            </h2>
            <p className={lead}>Três caminhos para comprar o imóvel no Brasil, e o que cada um pede de você.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {caminhos.map((c) => (
              <div key={c.caminho} className="rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-base font-semibold text-[var(--color-ink)]">{c.caminho}</h3>
                <dl className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-ink)]/75">
                  <div>
                    <dt className="font-semibold">Juros</dt>
                    <dd>{c.juros}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Quando você tem o imóvel</dt>
                    <dd>{c.quando}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Atenção</dt>
                    <dd>{c.atencao}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-muted py-10 sm:py-12" aria-labelledby="quem-atende-heading">
        <Container className="max-w-3xl">
          <h2 id="quem-atende-heading" className={h2}>
            Quem vai te atender
          </h2>
          <p className={lead}>
            Eu, Reinaldo Masullo. Sou consultor autorizado da Ademicon e explico tudo antes, respondo a todas as
            perguntas e acompanho cada cliente do primeiro ao último mês do consórcio.
          </p>
          <p className={body}>
            O atendimento é individual e discreto: as informações do seu consórcio ficam entre você, quem você escolher
            e a administradora. Meu pai saiu da Itália com 18 anos, fugindo da guerra, e construiu tudo aqui no Brasil.
            Eu sei o que é construir a vida longe de casa.
          </p>
          <p className={body}>
            <strong>Atendimento todos os dias, inclusive sábado e domingo.</strong> Pelo WhatsApp, {p.horario}. Eu sei
            que a rotina de quem vive fora é puxada e que, muitas vezes, o único tempo livre para pensar no futuro é o
            fim de semana. Por isso o atendimento também funciona aos sábados e domingos.
          </p>
          <SectionCTA />
        </Container>
      </section>

      <FAQ title={`Perguntas frequentes de quem mora ${p.em}`} items={faqItems} />

      <section className="pb-10 sm:pb-12">
        <Container className="max-w-3xl">
          <p className="text-sm leading-relaxed text-[var(--color-ink)]/70">
            Veja também:{" "}
            <Link href="/consorcios/brasileiros-no-japao" className="font-semibold text-[var(--color-secondary)] hover:underline">
              consórcio para brasileiros no Japão
            </Link>
            ,{" "}
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
        title="Quer ter patrimônio no Brasil, morando fora?"
        description={`Me conte há quanto tempo você mora ${p.em} e o que quer construir. Eu monto a simulação com o seu nome e explico tudo antes de você decidir.`}
        whatsappMessage={p.whatsapp}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
