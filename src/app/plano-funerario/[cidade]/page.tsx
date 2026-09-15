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
import { planoFunerarioCidades, getPlanoFunerarioCidade } from "@/lib/plano-funerario-cidades";
import { UserCheck, Flame, Clock24 } from "@/components/icons";

export function generateStaticParams() {
  return planoFunerarioCidades.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade } = await params;
  const c = getPlanoFunerarioCidade(cidade);
  if (!c) return {};

  return buildMetadata({
    title: `Plano Funerário em ${c.nome}`,
    description: `Plano funerário PASI (Amparo Funeral) em ${c.nome} a partir de R$ 99/mês, com assistência 24h. Simulação gratuita com a Revla.`,
    path: `/plano-funerario/${c.slug}`,
  });
}

const diferenciais = [
  {
    title: "Sem vínculo",
    description: "Não é necessário vínculo empregatício ou institucional para contratar — venda direta ao consumidor.",
    icon: <UserCheck />,
  },
  {
    title: "Cremação",
    description: "Possibilidade de cremação conforme o plano contratado.",
    icon: <Flame />,
  },
  {
    title: "Acionamento 24 horas",
    description: "A Assistência Funeral pode ser acionada 24 horas por dia, todos os dias.",
    icon: <Clock24 />,
  },
];

export default async function PlanoFunerarioCidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade } = await params;
  const c = getPlanoFunerarioCidade(cidade);
  if (!c) notFound();

  const WHATSAPP_MESSAGE = `Olá! Vim pelo site e gostaria de simular um plano funerário (Amparo Funeral PASI) em ${c.nome}.`;
  const CTA_LABEL = "Simular plano funerário";

  const faqItems = [
    c.faqEspecifica,
    {
      question: "Quanto custa o plano funerário PASI?",
      answer:
        "Os planos individual e familiar começam em R$ 99,00 e R$ 169,00 por mês, respectivamente, para um capital de R$ 5.000,00, com opções de R$ 7.000,00 e R$ 10.000,00. O plano Sênior (76 a 85 anos) começa em R$ 299,00 por mês.",
    },
    {
      question: "Preciso ter vínculo empregatício para contratar?",
      answer:
        "Não. O Amparo Funeral PASI individual, familiar e sênior são vendidos diretamente ao consumidor, sem necessidade de vínculo com empresa ou instituição.",
    },
    {
      question: "Como funciona o acionamento em caso de falecimento?",
      answer:
        "A família deve acionar a Central PASI (0800 703 6302 ou 4000-1989) *antes* de contratar os serviços funerários — é essencial pra garantir a cobertura.",
    },
    {
      question: "A Revla é uma corretora regulamentada?",
      answer:
        "Sim. A Revla Corretora de Seguros é registrada na SUSEP sob o nº 232150320, e o Amparo Funeral é comercializado através da seguradora parceira PASI.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Corretagem de plano funerário (Amparo Funeral)",
    provider: {
      "@type": "InsuranceAgency",
      name: siteConfig.legalName,
    },
    areaServed: {
      "@type": "City",
      name: c.nome,
    },
    description: `Corretagem de planos de Amparo Funeral PASI individual, familiar e sênior em ${c.nome}.`,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Plano Funerário", href: "/plano-funerario" },
          { label: c.nome, href: `/plano-funerario/${c.slug}` },
        ]}
      />
      <Hero
        eyebrow={`Plano Funerário em ${c.nome} · Amparo Funeral PASI`}
        title={`Plano funerário PASI em ${c.nome}: a partir de R$ 99,00 por mês`}
        description={`Planos individual, familiar e sênior, com assistência funeral 24 horas, cremação e sem necessidade de vínculo empregatício. Simulação gratuita e consultoria completa com a Revla.`}
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Plano funerário em {c.nome}: como funciona o atendimento
          </h2>
          <div className="mt-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">{c.contexto}</p>
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="O que o plano inclui" columns={3} items={diferenciais} />
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title={`Garanta essa tranquilidade para sua família em ${c.nome}`}
        description="Fale com um consultor da Revla e entenda qual plano funerário PASI faz sentido para você."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
