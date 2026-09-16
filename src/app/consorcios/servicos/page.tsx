import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { HospitalCross, Plane, Sparkle } from "@/components/icons";

// Hub de Consórcio de Serviços (Estratégia 1 — Onda 5). Escopo original
// incluía também festa de 15 anos e formatura, mas a pesquisa real no
// Keyword Planner (15/09) mostrou volume quase nulo pros dois (0–10 a
// 10–100, mesmo testando variações como "consórcio debutante" e "consórcio
// para festa de debutante") — por isso ficaram de fora das páginas de SEO.
// Os 3 serviços linkados aqui têm volume real e distinto — ver cada página.

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de simular um consórcio de serviços.";
const CTA_LABEL = "Simular consórcio de serviços";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio de Serviços: Todas as Opções",
  description:
    "Consórcio de serviços: cirurgia plástica, viagem e energia solar sem juros, com parcelas que cabem no seu orçamento. Simulação gratuita com a Revla.",
  path: "/consorcios/servicos",
});

const servicosFeatures = [
  {
    title: "Cirurgia Plástica",
    description: "Carta de crédito pra procedimentos estéticos ou reparadores em qualquer clínica.",
    href: "/consorcios/cirurgia-plastica",
    linkLabel: "Consórcio para cirurgia plástica",
    icon: <HospitalCross />,
  },
  {
    title: "Viagem",
    description: "Carta de crédito pra pacotes, passagens e hospedagem no Brasil ou no exterior.",
    href: "/consorcios/viagem",
    linkLabel: "Consórcio para viagem",
    icon: <Plane />,
  },
  {
    title: "Energia Solar",
    description: "Carta de crédito pra instalar painéis solares e economizar na conta de luz.",
    href: "/consorcios/energia-solar",
    linkLabel: "Consórcio de energia solar",
    icon: <Sparkle />,
  },
];

const faqItems = [
  {
    question: "Consórcio de serviços tem juros?",
    answer:
      "Não. Você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento.",
  },
  {
    question: "Quais serviços dá pra contratar consórcio?",
    answer:
      "Temos páginas específicas com informações detalhadas pra cirurgia plástica, viagem e energia solar. A carta de crédito também pode ser usada em outros procedimentos e serviços — fale com um consultor pra confirmar o seu caso.",
  },
  {
    question: "Como funciona a contemplação?",
    answer:
      "A contemplação ocorre por sorteio mensal entre os participantes do grupo, ou por lance — quando você oferece antecipar parte do saldo devedor para aumentar suas chances.",
  },
  {
    question: "A Revla é uma administradora de consórcio?",
    answer:
      "Não. A Revla é uma corretora parceira que pesquisa entre administradoras autorizadas pelo Banco Central, incluindo a Ademicon, para encontrar o grupo mais vantajoso para você.",
  },
  {
    question: "A Revla atende consórcio de serviços em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com o mesmo acompanhamento consultivo até a contemplação.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio de serviços",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio para cirurgia plástica, viagem e energia solar, sem juros, com administradoras parceiras autorizadas pelo Banco Central.",
};

export default function ConsorcioServicosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Serviços", href: "/consorcios/servicos" },
        ]}
      />
      <Hero
        eyebrow="Consórcio de Serviços · Administradoras Parceiras da Revla"
        title="Consórcio de serviços: carta de crédito sem juros pro que você precisar"
        description="Simule seu consórcio pra cirurgia plástica, viagem ou energia solar sem pagar juros, com liberdade de escolha e a possibilidade de dar lances para antecipar a contemplação."
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <FeatureGrid
        title="Escolha o serviço"
        description="Cada serviço tem uma página própria com informações específicas pro consórcio."
        columns={3}
        items={servicosFeatures}
      />

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu consórcio de serviços"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
