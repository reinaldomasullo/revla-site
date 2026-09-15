import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import {
  consorcioImoveisCities,
  getConsorcioImoveisCity,
  sharedConsorcioFaq,
} from "@/lib/city-pages/consorcio-imoveis";
import { PercentOff, CalendarDown, HandCoin, Headset } from "@/components/icons";

// Mesmos 4 diferenciais já publicados em /consorcios — fatos genéricos e
// verdadeiros do produto, não específicos de cidade, por isso reaproveitados
// literalmente em vez de reescritos por página.
const diferenciais = [
  { title: "Sem juros", description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.", icon: <PercentOff /> },
  { title: "Parcelas reduzidas", description: "Parcelas reduzidas em até 50% durante parte do plano, conforme o grupo escolhido.", icon: <CalendarDown /> },
  { title: "Lance embutido", description: "Possibilidade de usar parte da própria carta de crédito como lance para antecipar a contemplação.", icon: <HandCoin /> },
  { title: "Consultoria completa", description: "Acompanhamento da simulação até a contemplação, com suporte da Revla em todas as etapas.", icon: <Headset /> },
];

export function generateStaticParams() {
  return consorcioImoveisCities.map((c) => ({ cidade: c.citySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade } = await params;
  const city = getConsorcioImoveisCity(cidade);
  if (!city) return {};

  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/consorcios/imoveis/${city.citySlug}`,
  });
}

export default async function ConsorcioImoveisCidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade } = await params;
  const city = getConsorcioImoveisCity(cidade);
  if (!city) notFound();

  const faqItems = [...sharedConsorcioFaq, city.faqExtra];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Corretagem de consórcio de imóveis",
    provider: {
      "@type": "InsuranceAgency",
      name: siteConfig.legalName,
    },
    areaServed: {
      "@type": "City",
      name: city.cityName,
    },
    description: city.metaDescription,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: `Imóveis em ${city.cityName}`, href: `/consorcios/imoveis/${city.citySlug}` },
        ]}
      />
      <Hero eyebrow={city.eyebrow} title={city.heroTitle} description={city.heroDescription} compact>
        <CTAButton href={whatsappLink(city.whatsappMessage)} external>
          {city.ctaLabel}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            {city.introHeading}
          </h2>
          <div className="mt-4 space-y-4">
            {city.introParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-[var(--color-ink)]/75">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="Diferenciais do consórcio de imóveis com a Revla" columns={4} items={diferenciais} />
      </section>

      {city.testimonial && (
        <Testimonials
          title={city.testimonialSectionTitle ?? `Clientes reais da Revla em ${city.cityName}`}
          items={[city.testimonial]}
          accentCards
        />
      )}

      <FAQ items={faqItems} />

      <CTASection
        title={`Simule seu consórcio de imóveis em ${city.cityName}`}
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={city.whatsappMessage}
        buttonLabel={city.ctaLabel}
      />
    </>
  );
}
