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
import { motoBrands, getMotoBrand } from "@/lib/moto-brands";
import { PercentOff, CalendarDown, HandCoin, Headset } from "@/components/icons";

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
    title: `Consórcio de Moto ${brand.name}`,
    description: `Consórcio de moto ${brand.name}: carta de crédito sem juros, parcelas flexíveis e lance para antecipar a contemplação. Simulação gratuita com a Revla.`,
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

  const faqItems = [
    brand.faqEspecifica,
    {
      question: "Consórcio de moto tem juros?",
      answer:
        "Não. No consórcio você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento.",
    },
    {
      question: "Como funciona a contemplação?",
      answer:
        "A contemplação ocorre por sorteio mensal entre os participantes do grupo, ou por lance — quando você oferece antecipar parte do saldo devedor para aumentar suas chances.",
    },
    {
      question: "Qual o valor mínimo de uma carta de consórcio de moto?",
      answer:
        "Varia conforme o grupo e a administradora — fale com um consultor da Revla para uma simulação com valores atualizados para o modelo que você quer.",
    },
    {
      question: "A Revla é uma administradora de consórcio?",
      answer:
        "Não. A Revla é uma corretora parceira que pesquisa entre administradoras autorizadas pelo Banco Central, incluindo a Ademicon, para encontrar o grupo mais vantajoso para você.",
    },
    {
      question: "Depois de contemplado, sou obrigado a comprar logo?",
      answer:
        "Não há prazo de validade para usar a carta de crédito depois da contemplação — você pode aguardar o momento certo para escolher o modelo e a concessionária.",
    },
    {
      question: `A Revla atende consórcio de moto ${brand.name} em quais cidades?`,
      answer:
        "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com o mesmo acompanhamento consultivo até a contemplação.",
    },
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
        eyebrow={`Consórcio de Moto ${brand.name} · Administradoras Parceiras da Revla`}
        title={`Consórcio de moto ${brand.name}: carta de crédito sem juros`}
        description={`Simule seu consórcio para comprar uma moto ${brand.name} sem pagar juros. Parcelas flexíveis, possibilidade de lance para antecipar a contemplação e consultoria completa da Revla do início ao fim.`}
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Consórcio para {brand.name}: como funciona
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">{brand.posicionamento}</p>
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              A Revla pesquisa entre administradoras autorizadas pelo Banco Central — incluindo a Ademicon — para
              te apresentar o grupo mais vantajoso, com o prazo e a parcela que cabem no seu orçamento. A carta de
              crédito, depois de contemplada, pode ser usada em qualquer concessionária {brand.name} autorizada.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="Diferenciais do consórcio de moto" columns={4} items={diferenciais} />
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title={`Simule seu consórcio de moto ${brand.name}`}
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
