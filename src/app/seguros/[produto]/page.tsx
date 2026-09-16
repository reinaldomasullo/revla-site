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
import { segurosProdutos, getSeguroProduto, type CoberturaIcon } from "@/lib/seguros-produtos";
import {
  Flame,
  ShieldCheck,
  Wrench,
  Globe,
  Scale,
  Truck,
  Key,
  Receipt,
  TrendingUp,
  DocumentCheck,
  LockDocument,
  Sparkle,
  HospitalCross,
  Backpack,
  Plane,
  Heart,
  ShieldUsers,
  ClockShort,
} from "@/components/icons";

const coberturaIcons: Record<CoberturaIcon, React.ReactNode> = {
  Flame: <Flame />,
  ShieldCheck: <ShieldCheck />,
  Wrench: <Wrench />,
  Globe: <Globe />,
  Scale: <Scale />,
  Truck: <Truck />,
  Key: <Key />,
  Receipt: <Receipt />,
  TrendingUp: <TrendingUp />,
  DocumentCheck: <DocumentCheck />,
  LockDocument: <LockDocument />,
  Sparkle: <Sparkle />,
  HospitalCross: <HospitalCross />,
  Backpack: <Backpack />,
  Plane: <Plane />,
  Heart: <Heart />,
  ShieldUsers: <ShieldUsers />,
  ClockShort: <ClockShort />,
};

export function generateStaticParams() {
  return segurosProdutos.map((p) => ({ produto: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ produto: string }>;
}): Promise<Metadata> {
  const { produto } = await params;
  const p = getSeguroProduto(produto);
  if (!p) return {};

  return buildMetadata({
    title: p.tituloMeta,
    description: p.descricaoMeta,
    path: `/seguros/${p.slug}`,
  });
}

export default async function SeguroProdutoPage({
  params,
}: {
  params: Promise<{ produto: string }>;
}) {
  const { produto } = await params;
  const p = getSeguroProduto(produto);
  if (!p) notFound();

  const WHATSAPP_MESSAGE = `Olá! Vim pelo site e gostaria de cotar um ${p.nome.toLowerCase()}.`;
  const CTA_LABEL = `Cotar ${p.nome.toLowerCase()}`;

  const coberturaItems = p.coberturas.map((c) => ({
    title: c.title,
    description: c.description,
    icon: coberturaIcons[c.icon],
  }));

  const faqItems = [
    ...p.faqEspecifica,
    {
      question: "Como funciona a contratação com a Revla?",
      answer:
        "Você fala com um consultor da Revla, que compara as opções entre seguradoras parceiras e monta uma simulação gratuita e sem compromisso, ajustada ao seu perfil e orçamento.",
    },
    {
      question: "A Revla é uma corretora regulamentada?",
      answer:
        "Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº 232150320, órgão federal que regula e fiscaliza a atividade de corretagem de seguros no Brasil.",
    },
    {
      question: `Quanto custa contratar ${p.nome.toLowerCase()}?`,
      answer:
        "O valor depende do perfil, da cobertura escolhida e da seguradora. Fazemos uma simulação gratuita comparando opções entre parceiros para encontrar o melhor custo-benefício.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Corretagem de ${p.nome.toLowerCase()}`,
    provider: {
      "@type": "InsuranceAgency",
      name: siteConfig.legalName,
    },
    areaServed: "BR",
    description: p.descricaoMeta,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Seguros", href: "/seguros" },
          { label: p.nome, href: `/seguros/${p.slug}` },
        ]}
      />
      <Hero eyebrow={p.heroEyebrow} title={p.heroTitle} description={p.heroDescription}>
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            {p.nome}: como funciona
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">{p.introParagrafo}</p>
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">{p.seguradorasTexto}</p>
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="O que o seguro cobre" columns={3} items={coberturaItems} />
      </section>

      {p.testemunho && (
        <Testimonials
          title={`Quem já fez ${p.nome.toLowerCase()} com a Revla`}
          items={[p.testemunho]}
          accentCards
        />
      )}

      <FAQ items={faqItems} />

      <CTASection
        title={`Simule seu ${p.nome.toLowerCase()} agora`}
        description="Fale com um consultor da Revla e receba uma comparação gratuita entre seguradoras."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
