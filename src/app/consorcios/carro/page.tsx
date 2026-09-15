import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { Car, HandCoin, CalendarDown, CompareArrows, Sparkle, Globe, PercentShield } from "@/components/icons";

// Consórcio de Carro (Estratégia 1, Onda 5, 15/09): pesquisa real no Keyword
// Planner mostrou "consórcio de carro"/"consórcio carro" com 10 mil–100 mil
// buscas/mês — 10x mais que "consórcio de veículos" (1 mil–10 mil) e bem à
// frente de "consórcio automóvel" (100–1 mil). Por isso título/H1/URL
// lideram com "carro", não "veículos" (mesma lógica do Plano Funerário).
// A seção de carro elétrico tem sinal real e consistente: "consórcio carro
// elétrico" e "consórcio de carro elétrico" empatados em 100–1 mil.

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de simular um consórcio de carro.";
const CTA_LABEL = "Simular consórcio de carro";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio de Carro: Sem Juros",
  description:
    "Consórcio de carro sem juros: carta de crédito para carro novo, usado ou elétrico, com parcelas menores que o financiamento. Simulação grátis.",
  path: "/consorcios/carro",
});

const diferenciais = [
  {
    title: "Sem juros",
    description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.",
    icon: <PercentShield />,
  },
  {
    title: "Qualquer marca ou modelo",
    description: "A carta de crédito pode ser usada em qualquer concessionária, marca ou modelo, dentro do valor contratado.",
    icon: <Car />,
  },
  {
    title: "Parcelas que cabem no orçamento",
    description: "Prazos e valores de parcela flexíveis, ajustados conforme o grupo e o valor da carta escolhidos.",
    icon: <CalendarDown />,
  },
  {
    title: "Lance para antecipar",
    description: "Possibilidade de dar lances para antecipar a contemplação, sem esperar o prazo total do grupo.",
    icon: <HandCoin />,
  },
];

const eletricoFeatures = [
  {
    title: "Mesma mecânica, carta maior",
    description: "O consórcio de carro elétrico funciona exatamente como o consórcio tradicional — só ajustamos o valor da carta de crédito ao preço do modelo elétrico ou híbrido escolhido.",
    icon: <Sparkle />,
  },
  {
    title: "Sustentabilidade sem abrir mão do planejamento",
    description: "Uma alternativa sem juros para quem quer migrar para um veículo elétrico ou híbrido sem comprometer o orçamento de uma vez.",
    icon: <Globe />,
  },
  {
    title: "Compare com o financiamento",
    description: "Sem juros embutidos nas parcelas, o custo total tende a ficar mais baixo que financiar um carro elétrico — fale com um consultor pra simular o seu caso.",
    icon: <CompareArrows />,
  },
];

const faqItems = [
  {
    question: "Consórcio de carro tem juros?",
    answer:
      "Não. Você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento tradicional.",
  },
  {
    question: "Preciso escolher a marca do carro no momento da contratação?",
    answer:
      "Não é obrigatório — você contrata pelo valor da carta de crédito, e escolhe a marca, o modelo (novo ou usado) e a concessionária no momento de usar a carta, depois de contemplado.",
  },
  {
    question: "O consórcio de carro elétrico funciona diferente do consórcio comum?",
    answer:
      "Não, a mecânica é a mesma — sorteio ou lance para contemplação, parcelas sem juros. A diferença é só o valor da carta de crédito, geralmente maior pra acompanhar o preço de veículos elétricos e híbridos.",
  },
  {
    question: "Preciso dar entrada para contratar?",
    answer:
      "Não. Diferente do financiamento, o consórcio não exige entrada — você começa a pagar as parcelas mensais normalmente a partir da contratação.",
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
  serviceType: "Corretagem de consórcio de carro",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio para compra de carro novo, usado ou elétrico, sem juros, com administradoras parceiras autorizadas pelo Banco Central.",
};

export default function ConsorcioCarroPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Carro", href: "/consorcios/carro" },
        ]}
      />
      <Hero
        eyebrow="Consórcio de Carro · Administradoras Parceiras da Revla"
        title="Consórcio de carro: carta de crédito sem juros pro carro que você quer"
        description="Simule seu consórcio para comprar um carro novo, usado ou elétrico sem pagar juros, com parcelas flexíveis e a possibilidade de dar lances para antecipar a contemplação."
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <FeatureGrid title="Por que fazer consórcio de carro" columns={4} items={diferenciais} />

      <section className="section-muted">
        <FeatureGrid
          title="Consórcio de carro elétrico"
          description="A busca por consórcio pra carro elétrico já é real e crescente — e o produto funciona exatamente como o consórcio de carro tradicional. A diferença fica só no valor da carta de crédito, dimensionada pro preço do modelo elétrico ou híbrido que você quer."
          columns={3}
          items={eletricoFeatures}
        />
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu consórcio de carro"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
