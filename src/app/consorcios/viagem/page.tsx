import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { Plane, Globe, Compass, CalendarDown } from "@/components/icons";

// Consórcio para Viagem (Estratégia 1, Onda 5, 15/09): pesquisa real mostrou
// "consórcio viagem" e "consórcio para viagem" empatados em 1 mil–10 mil
// buscas/mês — bem à frente de "consórcio de viagem" (100–1 mil). Por isso
// título/H1 lideram sem o "de". "Consórcio de viagem internacional" também
// aparece (10–100), citado no conteúdo.

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de simular um consórcio para viagem.";
const CTA_LABEL = "Simular consórcio de viagem";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio para Viagem Sem Juros",
  description:
    "Consórcio para viagem sem juros: carta de crédito para pacotes, passagens e hospedagem no Brasil ou no exterior. Simulação gratuita com a Revla.",
  path: "/consorcios/viagem",
});

const diferenciais = [
  {
    title: "Sem juros",
    description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.",
    icon: <CalendarDown />,
  },
  {
    title: "Nacional ou internacional",
    description: "A carta de crédito pode ser usada em pacotes, passagens e hospedagem em qualquer destino, no Brasil ou no exterior.",
    icon: <Globe />,
  },
  {
    title: "Escolha a agência que quiser",
    description: "Sem rede credenciada obrigatória — use a carta com a agência de viagens ou plataforma de sua preferência.",
    icon: <Compass />,
  },
  {
    title: "Planeje com antecedência",
    description: "Parcele hoje e use a carta quando for viajar, com prazos flexíveis conforme o grupo escolhido.",
    icon: <Plane />,
  },
];

const faqItems = [
  {
    question: "Posso usar a carta de crédito pra viagem internacional?",
    answer:
      "Sim. A carta de crédito do consórcio de viagem pode ser usada tanto em destinos nacionais quanto internacionais, dentro do valor contratado.",
  },
  {
    question: "Preciso decidir o destino no momento da contratação?",
    answer:
      "Não é obrigatório — você contrata pelo valor da carta de crédito, e decide o destino, a data e o pacote depois de contemplado.",
  },
  {
    question: "Dá pra usar a carta em qualquer agência de viagens?",
    answer:
      "Sim. Diferente de um pacote fechado, a carta de crédito não tem agência ou plataforma obrigatória — você escolhe livremente onde comprar sua viagem.",
  },
  {
    question: "Consórcio para viagem tem juros?",
    answer:
      "Não. Você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento tradicional.",
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
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio para viagem",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio para pacotes, passagens e hospedagem no Brasil ou no exterior, sem juros, com administradoras parceiras autorizadas pelo Banco Central.",
};

export default function ConsorcioViagemPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Viagem", href: "/consorcios/viagem" },
        ]}
      />
      <Hero
        eyebrow="Consórcio para Viagem · Administradoras Parceiras da Revla"
        title="Consórcio para viagem: carta de crédito sem juros pra sua próxima viagem"
        description="Simule seu consórcio para pacotes, passagens e hospedagem sem pagar juros, com liberdade pra escolher o destino e a agência, e a possibilidade de dar lances para antecipar a contemplação."
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <FeatureGrid title="Por que fazer consórcio para viagem" columns={4} items={diferenciais} />

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu consórcio para viagem"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
