import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import {
  getOperadora,
  OPERADORAS_CONFERIDO_EM,
  type OperadoraSlug,
} from "@/lib/plano-de-saude-operadoras";
import { HospitalCross, HeartHand, Star, ClockCheck } from "@/components/icons";

const icons = [<HospitalCross key="a" />, <HeartHand key="b" />, <Star key="c" />, <ClockCheck key="d" />];

export function operadoraMetadata(slug: OperadoraSlug): Metadata {
  const op = getOperadora(slug);
  return buildMetadata({
    title: op.metaTitle,
    description: op.metaDescription,
    path: `/plano-de-saude/${op.slug}`,
  });
}

export default function OperadoraPage({ slug }: { slug: OperadoraSlug }) {
  const op = getOperadora(slug);
  const message = `Olá! Vim pelo site e gostaria de cotar um plano de saúde ${op.nome}.`;
  const cta = `Cotar plano ${op.nome}`;

  const faqItems = [
    ...op.faq,
    {
      question: `Quem regula a ${op.nome} e a Revla?`,
      answer: `A ${op.nome} é uma operadora regulada pela ANS (Agência Nacional de Saúde Suplementar). A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº 232150320. O plano, a rede e as regras do contrato são da operadora, e a Revla intermedeia a cotação e a contratação.`,
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Corretagem de plano de saúde",
    provider: { "@type": "InsuranceAgency", name: siteConfig.legalName },
    areaServed: { "@type": "Country", name: "Brasil" },
    description: `Cotação e contratação de plano de saúde ${op.nome} com a Revla Corretora de Seguros.`,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Plano de Saúde", href: "/plano-de-saude" },
          { label: op.nome, href: `/plano-de-saude/${op.slug}` },
        ]}
      />
      <Hero eyebrow={`Plano de Saúde · ${op.nome}`} title={op.heroTitle} description={op.heroDescription} compact>
        <CTAButton href={whatsappLink(message)} external>
          {cta}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Sobre a {op.nome}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/75">{op.sobre}</p>
          <p className="mt-3 text-xs text-[var(--color-ink)]/60">
            Informações conferidas nos canais oficiais da operadora em {OPERADORAS_CONFERIDO_EM}.
          </p>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid
          title={`Tipos de plano ${op.nome}`}
          columns={3}
          items={op.tipos.map((t, i) => ({ ...t, icon: icons[i % icons.length] }))}
        />
      </section>

      <FeatureGrid
        title={`Diferenciais da ${op.nome}`}
        columns={3}
        items={op.diferenciais.map((t, i) => ({ ...t, icon: icons[(i + 1) % icons.length] }))}
      />

      <section className="section-muted py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Para quem é o plano {op.nome}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/75">{op.paraQuem}</p>
        </Container>
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title={op.ctaTitulo}
        description={op.ctaDescricao}
        whatsappMessage={message}
        buttonLabel={cta}
      />
    </>
  );
}
