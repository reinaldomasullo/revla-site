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
import { motoBrands } from "@/lib/moto-brands";
import { Motorcycle } from "@/components/icons";

// Hub de Consórcio de Moto (Estratégia 1 — Onda 4). Âncora real: "consórcio
// de moto" tem 1 mil–10 mil buscas/mês (Keyword Planner, 15/09). As 9 marcas
// linkadas aqui têm cada uma sua própria página com volume de busca real e
// distinto — ver src/lib/moto-brands.ts para a pesquisa completa.

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de simular um consórcio de moto.";
const CTA_LABEL = "Simular consórcio de moto";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio de Moto: Todas as Marcas",
  description:
    "Consórcio de moto sem juros: carta de crédito para Honda, Yamaha, BMW e outras marcas. Parcelas flexíveis e consultoria completa com a Revla.",
  path: "/consorcios/motos",
});

const marcasFeatures = motoBrands.map((brand) => ({
  title: brand.name,
  description: `Simule seu consórcio de moto ${brand.name} sem juros.`,
  href: `/consorcios/motos/${brand.slug}`,
  linkLabel: `Consórcio ${brand.name}`,
  icon: <Motorcycle />,
}));

const faqItems = [
  {
    question: "Consórcio de moto tem juros?",
    answer:
      "Não. No consórcio você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento.",
  },
  {
    question: "Preciso escolher a marca da moto no momento da contratação?",
    answer:
      "Não é obrigatório — você contrata pelo valor da carta de crédito, e escolhe o modelo e a marca no momento de usar a carta, depois de contemplado. Ainda assim, se já sabe qual marca quer, vale simular o valor certo com um consultor.",
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
    question: "Quais marcas de moto vocês atendem?",
    answer:
      "A carta de crédito do consórcio pode ser usada em qualquer marca e concessionária autorizada. Temos páginas dedicadas com informações específicas para Honda, Yamaha, BMW Motorrad, Royal Enfield, Suzuki, Kawasaki, Harley-Davidson, Dafra e Shineray.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio de moto",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio para compra de moto de qualquer marca, sem juros, com administradoras parceiras autorizadas pelo Banco Central.",
};

export default function ConsorcioMotosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Motos", href: "/consorcios/motos" },
        ]}
      />
      <Hero
        eyebrow="Consórcio de Moto · Administradoras Parceiras da Revla"
        title="Consórcio de moto: carta de crédito sem juros para a moto que você quer"
        description="Simule seu consórcio para comprar uma moto nova sem pagar juros, com parcelas flexíveis e a possibilidade de dar lances para antecipar a contemplação. Veja informações específicas para cada marca ou fale direto com um consultor."
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <FeatureGrid
        title="Escolha a marca da sua moto"
        description="Cada marca tem uma página própria com informações específicas para o consórcio."
        columns={3}
        items={marcasFeatures}
      />

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu consórcio de moto"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
