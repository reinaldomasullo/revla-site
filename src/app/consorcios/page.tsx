import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consórcio de Imóveis e Veículos sem Juros: Simule Grátis",
  description:
    "Carta de crédito sem juros para imóveis, veículos, serviços e investimento a partir de R$ 40.000. Simulação gratuita e sem compromisso com a Revla Corretora.",
  alternates: { canonical: "/consorcios" },
};

const categorias = [
  {
    title: "Imóveis",
    description: "Para casa, apartamento, terreno ou construção, sem entrada obrigatória.",
  },
  {
    title: "Veículos",
    description: "Carros, motos e utilitários, com parcelas menores que o financiamento tradicional.",
  },
  {
    title: "Serviços",
    description: "Reformas, viagens, procedimentos estéticos ou odontológicos.",
  },
  {
    title: "Investimento",
    description: "Poupança programada sem juros, com possibilidade de lance para antecipar a contemplação.",
  },
];

const diferenciais = [
  { title: "Sem juros", description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento." },
  { title: "Parcelas reduzidas", description: "Parcelas reduzidas em até 50% durante parte do plano, conforme o grupo escolhido." },
  { title: "Lance embutido", description: "Possibilidade de usar parte da própria carta de crédito como lance para antecipar a contemplação." },
  { title: "Consultoria completa", description: "Acompanhamento da simulação até a contemplação, com suporte da Revla em todas as etapas." },
];

const etapas = [
  { title: "1. Simulação gratuita", description: "Você nos conta seu objetivo e orçamento, sem custo ou compromisso." },
  { title: "2. Escolha do grupo e prazo", description: "Apresentamos as opções disponíveis entre as administradoras parceiras autorizadas pelo Banco Central." },
  { title: "3. Pagamento das parcelas", description: "Você paga as parcelas mensais, com opção de dar lances para antecipar a contemplação." },
  { title: "4. Contemplação", description: "Por sorteio mensal ou lance — a partir daí você recebe a carta de crédito." },
];

const faqItems = [
  {
    question: "Consórcio tem juros?",
    answer:
      "Não. No consórcio você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento.",
  },
  {
    question: "Como funciona a contemplação?",
    answer:
      "A contemplação ocorre por sorteio mensal entre os participantes do grupo, ou por lance — quando você oferece antecipar parte do saldo devedor para aumentar suas chances.",
  },
  {
    question: "Posso usar a carta de crédito em qualquer coisa?",
    answer:
      "A carta deve ser usada dentro da categoria contratada (imóveis, veículos, serviços ou investimento), respeitando as regras da administradora.",
  },
  {
    question: "Qual o valor mínimo de uma carta de consórcio?",
    answer: "As cartas disponíveis começam a partir de R$ 40.000, variando conforme o grupo e a categoria.",
  },
  {
    question: "A Revla é uma administradora de consórcio?",
    answer:
      "Não. A Revla é uma corretora parceira que pesquisa entre administradoras autorizadas pelo Banco Central para encontrar o grupo mais vantajoso para você.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio de imóveis, veículos, serviços e investimento, sem juros.",
};

export default function ConsorciosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: "Consórcios", href: "/consorcios" }]} />
      <Hero
        eyebrow="Consórcios"
        title="Carta de crédito sem juros: simule seu consórcio contemplado agora"
        description="A Revla pesquisa entre administradoras autorizadas pelo Banco Central para oferecer parcelas flexíveis e suporte completo, da simulação até a contemplação."
      >
        <CTAButton href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")} external>
          Iniciar minha simulação gratuita
        </CTAButton>
        <CTAButton href="/consorcios/calculadora" variant="ghost">
          Usar a calculadora
        </CTAButton>
      </Hero>

      <FeatureGrid title="Categorias de consórcio" columns={4} items={categorias} />

      <section className="section-muted">
        <FeatureGrid title="Diferenciais da Revla" columns={4} items={diferenciais} />
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Como funciona
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((etapa) => (
              <div key={etapa.title} className="rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-base font-semibold text-[var(--color-ink)]">{etapa.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                  {etapa.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Simule sua carta de crédito agora"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
        buttonLabel="Falar com consultor"
      />
    </>
  );
}
