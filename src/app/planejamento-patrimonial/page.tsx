import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Planejamento Patrimonial em São Paulo",
  description:
    "Planejamento patrimonial com consórcio para alavancar patrimônio, seguro para proteger seus bens e plano de saúde para proteger sua vida. Consultoria gratuita com a Revla.",
  path: "/planejamento-patrimonial",
});

const pilares = [
  {
    title: "Consórcio",
    verbo: "Alavancar patrimônio",
    description:
      "Carta de crédito sem juros para adquirir imóveis, veículos e outros bens de forma programada, com disciplina financeira e sem comprometer seu fluxo de caixa.",
    href: "/consorcios",
  },
  {
    title: "Seguro",
    verbo: "Proteger patrimônio",
    description:
      "Seguros de vida, residencial, empresarial e outros que blindam o que você já construiu contra imprevistos, sinistros e perdas financeiras.",
    href: "/seguros",
  },
  {
    title: "Plano de Saúde",
    verbo: "Proteger a vida",
    description:
      "Cobertura médica e hospitalar para você e sua família, garantindo que a saúde nunca seja o motivo de comprometer o patrimônio construído.",
    href: "/plano-de-saude",
  },
];

const beneficios = [
  {
    title: "Sem juros, com disciplina",
    description:
      "O consórcio permite construir patrimônio de forma programada, sem os encargos de um financiamento tradicional.",
  },
  {
    title: "Proteção contra imprevistos",
    description:
      "Seguros bem dimensionados evitam que um sinistro, doença ou acidente comprometa o que você levou anos para construir.",
  },
  {
    title: "Saúde em primeiro lugar",
    description:
      "Um plano de saúde adequado evita que despesas médicas inesperadas consumam reservas e patrimônio da família.",
  },
  {
    title: "Acompanhamento consultivo",
    description:
      "A Revla acompanha a estratégia ao longo do tempo, ajustando produtos conforme sua fase de vida e seus objetivos.",
  },
];

const faqItems = [
  {
    question: "O que é planejamento patrimonial?",
    answer:
      "Planejamento patrimonial é a organização estratégica de como você constrói, protege e transmite seu patrimônio ao longo da vida. Na Revla, isso é feito combinando três ferramentas: consórcio para alavancar patrimônio sem juros, seguro para proteger o que já foi construído, e plano de saúde para proteger a vida e evitar que despesas médicas consumam o patrimônio da família.",
  },
  {
    question: "Como o consórcio ajuda no planejamento patrimonial?",
    answer:
      "O consórcio funciona como uma poupança programada e sem juros, dando acesso a uma carta de crédito para imóveis, veículos ou outros bens. Isso permite planejar a formação de patrimônio com previsibilidade, sem os encargos de um financiamento tradicional.",
  },
  {
    question: "Como o seguro protege meu patrimônio?",
    answer:
      "Seguros como o de vida, residencial e empresarial funcionam como uma rede de proteção: em caso de imprevisto, a indenização evita que a família precise vender bens ou comprometer reservas para cobrir prejuízos ou dívidas.",
  },
  {
    question: "A Revla faz holding familiar ou planejamento sucessório jurídico?",
    answer:
      "Não. A Revla atua com os produtos financeiros e de proteção que sustentam o planejamento patrimonial — consórcio, seguro e plano de saúde. Para estruturas jurídicas e tributárias mais complexas, como holding familiar ou planejamento sucessório formal, recomendamos apoio de um advogado especializado.",
  },
  {
    question: "A Revla é uma consultoria de investimentos?",
    answer:
      "Não. A Revla é uma corretora de seguros registrada na SUSEP. Nosso planejamento patrimonial usa consórcio, seguro e plano de saúde como ferramentas de proteção e construção de patrimônio — não fazemos gestão de investimentos em bolsa, fundos ou renda fixa.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Planejamento patrimonial",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Planejamento patrimonial combinando consórcio (alavancagem de patrimônio), seguro (proteção de patrimônio) e plano de saúde (proteção da vida).",
};

export default function PlanejamentoPatrimonialPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[{ label: "Planejamento Patrimonial", href: "/planejamento-patrimonial" }]}
      />
      <Hero
        eyebrow="Planejamento Patrimonial"
        title="Planejamento patrimonial: proteja e construa seu patrimônio"
        description="Combinamos consórcio, seguro e plano de saúde de forma estratégica: consórcio para alavancar patrimônio, seguro para proteger o que você já construiu e plano de saúde para proteger sua vida — com consultoria gratuita da Revla."
      >
        <CTAButton
          href={whatsappLink("Olá! Quero montar um planejamento patrimonial com a Revla.")}
          external
        >
          Falar com um consultor
        </CTAButton>
        <CTAButton href="/consorcios/calculadora" variant="ghost">
          Simular consórcio
        </CTAButton>
      </Hero>

      <section className="py-12 sm:py-16" aria-labelledby="pilares-heading">
        <Container>
          <div className="max-w-2xl">
            <h2
              id="pilares-heading"
              className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl"
            >
              Os 3 pilares do planejamento patrimonial com a Revla
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              Cada produto cumpre um papel diferente na sua estratégia patrimonial.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pilares.map((pilar) => (
              <Link
                key={pilar.href}
                href={pilar.href}
                className="group rounded-2xl border border-[var(--color-border)] p-7 transition-colors hover:border-[var(--color-primary)]"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
                  {pilar.verbo}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
                  {pilar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                  {pilar.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  Saiba mais
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid
          title="Por que fazer planejamento patrimonial"
          description="Um patrimônio bem planejado é construído com disciplina e protegido contra imprevistos."
          columns={4}
          items={beneficios}
        />
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Vamos montar seu planejamento patrimonial?"
        description="Fale com um consultor da Revla e receba uma análise gratuita e sem compromisso."
        whatsappMessage="Olá! Quero montar um planejamento patrimonial com a Revla."
      />
    </>
  );
}
