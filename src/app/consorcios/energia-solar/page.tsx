import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { Sparkle, TrendingUp, Building, PercentShield } from "@/components/icons";

// Consórcio de Energia Solar (Estratégia 1, Onda 5, 15/09): "consórcio de
// energia solar" tem volume real (100–1 mil), reforçado por várias
// variantes de banco (BB, Santander, Sicredi) que também aparecem com
// volume próprio — sinal de que o produto já é buscado por administradora.
// Queda de 90% no ano registrada numa das variantes — citada como contexto,
// não como bloqueio, já que o volume final ainda é comparável ao usado
// pra RC Profissional/Condominial/Bicicleta na Onda 8.

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de simular um consórcio de energia solar.";
const CTA_LABEL = "Simular consórcio de energia solar";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio de Energia Solar",
  description:
    "Consórcio de energia solar sem juros: carta de crédito para instalar painéis solares e economizar na conta de luz. Simulação gratuita com a Revla.",
  path: "/consorcios/energia-solar",
});

const diferenciais = [
  {
    title: "Sem juros",
    description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento solar tradicional.",
    icon: <PercentShield />,
  },
  {
    title: "Economia na conta de luz",
    description: "O sistema instalado gera créditos de energia que reduzem sua conta de luz mês a mês, ajudando a compensar o investimento.",
    icon: <TrendingUp />,
  },
  {
    title: "Residencial ou empresarial",
    description: "A carta de crédito pode ser usada tanto pra instalação na sua casa quanto no seu negócio.",
    icon: <Building />,
  },
  {
    title: "Escolha o instalador que quiser",
    description: "Sem rede credenciada obrigatória — use a carta com a empresa de instalação de sua preferência.",
    icon: <Sparkle />,
  },
];

const faqItems = [
  {
    question: "O consórcio de energia solar serve pra imóvel comercial?",
    answer:
      "Sim. A carta de crédito pode ser usada tanto em instalações residenciais quanto comerciais ou industriais, dentro do valor contratado.",
  },
  {
    question: "Em quanto tempo o sistema solar se paga?",
    answer:
      "Varia bastante conforme o tamanho do sistema, seu consumo de energia e a região — por isso não trabalhamos com prazo fixo. Um instalador especializado consegue te dar essa estimativa específica pro seu caso.",
  },
  {
    question: "Preciso escolher o instalador no momento da contratação?",
    answer:
      "Não é obrigatório — você contrata pelo valor da carta de crédito, e escolhe a empresa de instalação e o projeto depois de contemplado.",
  },
  {
    question: "Consórcio de energia solar tem juros?",
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
  {
    question: "A Revla atende consórcio de energia solar em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com o mesmo acompanhamento consultivo até a contemplação.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio de energia solar",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio para instalação de energia solar residencial ou comercial, sem juros, com administradoras parceiras autorizadas pelo Banco Central.",
};

export default function ConsorcioEnergiaSolarPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Energia Solar", href: "/consorcios/energia-solar" },
        ]}
      />
      <Hero
        eyebrow="Consórcio de Energia Solar · Administradoras Parceiras da Revla"
        title="Consórcio de energia solar: carta de crédito sem juros pra instalar seus painéis"
        description="Simule seu consórcio para instalar energia solar sem pagar juros, com liberdade pra escolher o instalador, e a possibilidade de dar lances para antecipar a contemplação."
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <FeatureGrid title="Por que fazer consórcio de energia solar" columns={4} items={diferenciais} />

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu consórcio de energia solar"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
