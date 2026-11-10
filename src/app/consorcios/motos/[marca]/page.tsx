import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { motoBrands, getMotoBrand, type FaqGenericaKey } from "@/lib/moto-brands";
import { PercentOff, CalendarDown, HandCoin, Headset, Motorcycle } from "@/components/icons";

export function generateStaticParams() {
  return motoBrands.map((b) => ({ marca: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ marca: string }>;
}): Promise<Metadata> {
  const { marca } = await params;
  const brand = getMotoBrand(marca);
  if (!brand) return {};

  return buildMetadata({
    title: brand.metaTitle ?? `Consórcio de Moto ${brand.name}`,
    description:
      brand.metaDescription ??
      `Consórcio de moto ${brand.name}: carta de crédito sem juros, parcelas flexíveis e lance para antecipar a contemplação. Simulação gratuita com a Revla.`,
    path: `/consorcios/motos/${brand.slug}`,
  });
}

const diferenciais = [
  {
    title: "Sem juros",
    description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.",
    icon: <PercentOff />,
  },
  {
    title: "Parcelas reduzidas",
    description: "Parcelas reduzidas em até 50% durante parte do plano, conforme o grupo escolhido.",
    icon: <CalendarDown />,
  },
  {
    title: "Lance embutido",
    description: "Possibilidade de usar parte da própria carta de crédito como lance para antecipar a contemplação.",
    icon: <HandCoin />,
  },
  {
    title: "Consultoria completa",
    description: "Acompanhamento da simulação até a contemplação, com suporte da Revla em todas as etapas.",
    icon: <Headset />,
  },
];

export default async function MotoBrandPage({
  params,
}: {
  params: Promise<{ marca: string }>;
}) {
  const { marca } = await params;
  const brand = getMotoBrand(marca);
  if (!brand) notFound();

  const WHATSAPP_MESSAGE = `Olá! Vim pelo site e gostaria de simular um consórcio de moto ${brand.name}.`;
  const CTA_LABEL = `Simular consórcio ${brand.name}`;

  const faqsGenericas: { key: FaqGenericaKey; question: string; answer: string }[] = [
    {
      key: "juros",
      question: "Consórcio de moto tem juros?",
      answer:
        "Não. No consórcio você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento.",
    },
    {
      key: "contemplacao",
      question: "Como funciona a contemplação?",
      answer:
        "A contemplação ocorre por sorteio mensal entre os participantes do grupo, ou por lance — quando você oferece antecipar parte do saldo devedor para aumentar suas chances.",
    },
    {
      key: "valorMinimo",
      question: "Qual o valor mínimo de uma carta de consórcio de moto?",
      answer:
        "Varia conforme o grupo e a administradora — fale com um consultor da Revla para uma simulação com valores atualizados para o modelo que você quer.",
    },
    {
      key: "administradorasMarca",
      question: `Com quais administradoras de consórcio de moto ${brand.name} a Revla trabalha?`,
      answer:
        "A Revla trabalha com administradoras de consórcio autorizadas pelo Banco Central. Comparamos as opções entre elas — taxa de administração, prazo e histórico de lances do grupo — para indicar a que faz mais sentido pra sua moto.",
    },
    {
      key: "susep",
      question: "A Revla tem registro na SUSEP?",
      answer:
        `Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº ${siteConfig.susep}, órgão federal que regula e fiscaliza a atividade de corretagem no Brasil.`,
    },
    {
      key: "obrigado",
      question: "Depois de contemplado, sou obrigado a comprar logo?",
      answer:
        "Não há prazo de validade para usar a carta de crédito depois da contemplação — você pode aguardar o momento certo para escolher o modelo e a concessionária.",
    },
    {
      key: "cidades",
      question: `A Revla atende consórcio de moto ${brand.name} em quais cidades?`,
      answer:
        "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com o mesmo acompanhamento consultivo até a contemplação.",
    },
    {
      key: "pertoDeMim",
      question: `Tem consórcio de moto ${brand.name} perto de mim?`,
      answer:
        "Se você está em São Paulo, sim — nosso escritório fica na Avenida Paulista, com atendimento presencial na capital. Se estiver em outra cidade, atendemos do mesmo jeito consultivo pelo telefone e WhatsApp, sem você precisar se deslocar até um escritório físico.",
    },
  ];

  const faqItems = [
    brand.faqEspecifica,
    ...(brand.faqsExtras ?? []),
    ...faqsGenericas
      .filter((f) => !brand.faqGenericas || brand.faqGenericas.includes(f.key))
      .map(({ question, answer }) => ({ question, answer })),
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Corretagem de consórcio de moto ${brand.name}`,
    provider: {
      "@type": "InsuranceAgency",
      name: siteConfig.legalName,
    },
    areaServed: "BR",
    description: `Corretagem de cartas de consórcio para compra de moto ${brand.name}, sem juros, com administradoras parceiras autorizadas pelo Banco Central.`,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Motos", href: "/consorcios/motos" },
          { label: brand.name, href: `/consorcios/motos/${brand.slug}` },
        ]}
      />
      <Hero
        eyebrow={brand.eyebrow ?? `Consórcio de Moto ${brand.name} · Administradoras Parceiras da Revla`}
        title={brand.h1 ?? `Consórcio de moto ${brand.name}: carta de crédito sem juros`}
        description={
          brand.heroDescription ??
          `Simule seu consórcio para comprar uma moto ${brand.name} sem pagar juros. Parcelas flexíveis, possibilidade de lance para antecipar a contemplação e consultoria completa da Revla do início ao fim.`
        }
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            {brand.comoFuncionaTitulo ?? `Consórcio para ${brand.name}: como funciona`}
          </h2>
          <div className="mt-4 space-y-4">
            {brand.comoFuncionaParagrafos ? (
              brand.comoFuncionaParagrafos.map((paragrafo) => (
                <p key={paragrafo} className="text-base leading-relaxed text-[var(--color-ink)]/75">
                  {paragrafo}
                </p>
              ))
            ) : (
              <>
                <p className="text-base leading-relaxed text-[var(--color-ink)]/75">{brand.posicionamento}</p>
                <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
                  A Revla trabalha com administradoras de consórcio autorizadas pelo Banco Central e
                  compara as opções entre elas para te apresentar o grupo mais vantajoso, com o prazo e a parcela que
                  cabem no seu orçamento. A carta de crédito, depois de contemplada, pode ser usada em qualquer
                  concessionária {brand.name} autorizada.
                </p>
              </>
            )}
          </div>
        </Container>
      </section>

      {brand.secoes?.map((secao) => (
        <section key={secao.title} className="pb-10 sm:pb-12">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
              {secao.title}
            </h2>
            <div className="mt-4 space-y-4">
              {secao.paragraphs.map((paragrafo) => (
                <p key={paragrafo} className="text-base leading-relaxed text-[var(--color-ink)]/75">
                  {paragrafo}
                </p>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {brand.modelos && (
        <FeatureGrid
          title={brand.modelos.title}
          description={brand.modelos.intro}
          columns={brand.modelos.columns ?? 3}
          items={brand.modelos.items.map((m) => ({
            title: m.name,
            description: m.description,
            icon: <Motorcycle />,
          }))}
        />
      )}

      {!brand.ocultarDiferenciais && (
        <section className="section-muted">
          <FeatureGrid title="Diferenciais do consórcio de moto" columns={4} items={diferenciais} />
        </section>
      )}

      <FAQ items={faqItems} />

      <CTASection
        title={brand.ctaTitulo ?? `Simule seu consórcio de moto ${brand.name}`}
        description={brand.ctaDescricao ?? "Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."}
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
