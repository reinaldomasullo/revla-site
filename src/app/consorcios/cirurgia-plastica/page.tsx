import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { HospitalCross, ClipboardCheck, Sparkle, UserCheck } from "@/components/icons";

// Consórcio para Cirurgia Plástica (Estratégia 1, Onda 5, 15/09): pesquisa
// real mostrou "consórcio cirurgia plástica" e "consórcio para cirurgia
// plástica" empatados em 1 mil–10 mil buscas/mês — bem à frente de
// "consórcio de cirurgia plástica" (100–1 mil). Por isso título/H1 lideram
// sem o "de". "Consórcio silicone"/"consórcio de silicone" também têm
// volume real (100–1 mil) — citado no conteúdo como exemplo de procedimento
// coberto, sem virar página própria.

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de simular um consórcio para cirurgia plástica.";
const CTA_LABEL = "Simular consórcio de cirurgia plástica";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio para Cirurgia Plástica",
  description:
    "Consórcio para cirurgia plástica sem juros: carta de crédito para procedimentos estéticos em qualquer clínica. Simulação gratuita com a Revla.",
  path: "/consorcios/cirurgia-plastica",
});

const diferenciais = [
  {
    title: "Sem juros",
    description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.",
    icon: <ClipboardCheck />,
  },
  {
    title: "Qualquer clínica ou médico",
    description: "A carta de crédito pode ser usada na clínica e com o médico de sua escolha, sem rede credenciada obrigatória.",
    icon: <UserCheck />,
  },
  {
    title: "Diversos procedimentos",
    description: "Rinoplastia, lipoaspiração, prótese de silicone e outros procedimentos estéticos ou reparadores.",
    icon: <HospitalCross />,
  },
  {
    title: "Parcelas que cabem no orçamento",
    description: "Prazos e valores de parcela flexíveis, ajustados conforme o grupo e o valor da carta escolhidos.",
    icon: <Sparkle />,
  },
];

const faqItems = [
  {
    question: "Posso usar o consórcio de cirurgia plástica pra colocar prótese de silicone?",
    answer:
      "Sim. A carta de crédito cobre qualquer procedimento estético ou reparador, incluindo prótese de silicone, desde que dentro do valor contratado.",
  },
  {
    question: "Preciso escolher o procedimento no momento da contratação?",
    answer:
      "Não é obrigatório — você contrata pelo valor da carta de crédito, e decide o procedimento, a clínica e o médico depois de contemplado.",
  },
  {
    question: "Posso usar em qualquer clínica ou hospital?",
    answer:
      "Sim. Diferente de um plano ou convênio, o consórcio não tem rede credenciada — você escolhe livremente onde fazer o procedimento.",
  },
  {
    question: "Consórcio para cirurgia plástica tem juros?",
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
  serviceType: "Corretagem de consórcio para cirurgia plástica",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio para procedimentos de cirurgia plástica, sem juros, com administradoras parceiras autorizadas pelo Banco Central.",
};

export default function ConsorcioCirurgiaPlasticaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Cirurgia Plástica", href: "/consorcios/cirurgia-plastica" },
        ]}
      />
      <Hero
        eyebrow="Consórcio para Cirurgia Plástica · Administradoras Parceiras da Revla"
        title="Consórcio para cirurgia plástica: carta de crédito sem juros"
        description="Simule seu consórcio para procedimentos estéticos ou reparadores sem pagar juros, com liberdade pra escolher clínica e médico, e a possibilidade de dar lances para antecipar a contemplação."
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <FeatureGrid title="Por que fazer consórcio para cirurgia plástica" columns={4} items={diferenciais} />

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu consórcio para cirurgia plástica"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
