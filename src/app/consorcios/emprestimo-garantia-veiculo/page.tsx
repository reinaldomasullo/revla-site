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
import { HandCoin, ClockShort, Car, Headset } from "@/components/icons";

// Empréstimo com Garantia de Veículo (Estratégia 1 — SEO/GEO, Onda 2).
// Produto real da Ademicon, confirmado com o usuário. Pesquisa de palavras-
// chave (Google Ads Keyword Planner, 15/09) mostrou "empréstimo com garantia
// de veículo" muito mais forte (10 mil–100 mil, Alta) que o termo em inglês
// "car equity" (100–1 mil, Média) — mesmo padrão do Empréstimo com Garantia
// de Imóvel e do Plano Funerário. Título/H1/URL lideram com o termo em
// português; "car equity" fica só no conteúdo, como o nome técnico do
// produto no mercado financeiro. Sem depoimento (nenhum cliente real
// confirmado ainda para este produto específico).

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de simular um empréstimo com garantia de veículo.";
const CTA_LABEL = "Simular empréstimo com garantia de veículo";

export const metadata: Metadata = buildMetadata({
  title: "Empréstimo com Garantia de Veículo",
  description:
    "Empréstimo com garantia de veículo: taxas menores, prazos longos, e você continua dirigindo normalmente. Simulação gratuita com a Revla.",
  path: "/consorcios/emprestimo-garantia-veiculo",
});

const diferenciais = [
  {
    title: "Taxas menores",
    description:
      "Por ter um veículo como garantia, as taxas de juros costumam ser menores que as de um empréstimo pessoal sem garantia.",
    icon: <HandCoin />,
  },
  {
    title: "Prazos mais longos",
    description: "Prazos de pagamento mais longos, com parcelas que cabem melhor no seu orçamento.",
    icon: <ClockShort />,
  },
  {
    title: "Você continua dirigindo normalmente",
    description:
      "O veículo continua sendo seu e você continua usando normalmente durante todo o período de pagamento.",
    icon: <Car />,
  },
  {
    title: "Consultoria completa",
    description: "Acompanhamento da simulação até a liberação do crédito, com suporte da Revla em todas as etapas.",
    icon: <Headset />,
  },
];

const faqItems = [
  {
    question: "O que é empréstimo com garantia de veículo (car equity)?",
    answer:
      "É uma modalidade de crédito em que você oferece um veículo próprio, quitado ou já financiado, como garantia, em troca de taxas de juros menores e prazos mais longos do que um empréstimo sem garantia. No mercado financeiro, esse produto também é conhecido pelo termo em inglês \"car equity\".",
  },
  {
    question: "Eu perco o veículo?",
    answer:
      "Não, enquanto as parcelas forem pagas em dia. O veículo funciona como garantia do contrato, mas continua sendo seu e você continua dirigindo normalmente durante todo o período de pagamento.",
  },
  {
    question: "Preciso de análise de crédito?",
    answer:
      "Sim. Como em qualquer operação de crédito, a contratação é sujeita a análise e aprovação de crédito pela instituição financeira parceira.",
  },
  {
    question: "Quanto tempo demora para liberar o crédito?",
    answer:
      "O prazo varia conforme a análise de crédito e a documentação do veículo. Fale com um consultor da Revla para uma simulação com prazos e condições específicas para o seu caso.",
  },
  {
    question: "A Revla é quem empresta o dinheiro?",
    answer:
      "Não. A Revla é uma corretora parceira que intermedia a contratação junto a instituições financeiras autorizadas, como a Ademicon, buscando as condições mais vantajosas para o seu caso.",
  },
  {
    question: "A Revla atende empréstimo com garantia de veículo em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com a mesma consultoria completa.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Empréstimo com garantia de veículo (car equity)",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de empréstimo com garantia de veículo (car equity): taxas menores e prazos mais longos, sujeito a análise de crédito.",
};

export default function EmprestimoGarantiaVeiculoPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Empréstimo com Garantia de Veículo", href: "/consorcios/emprestimo-garantia-veiculo" },
        ]}
      />
      <Hero
        eyebrow="Empréstimo com Garantia de Veículo · Crédito com a Ademicon"
        title="Empréstimo com garantia de veículo: crédito com taxas menores usando seu veículo como garantia"
        description="Transforme o valor do seu veículo em crédito, com taxas de juros menores que as de um empréstimo sem garantia e prazos mais longos para pagar — sem precisar vender ou parar de usar o veículo. Consultoria completa com a Revla, sujeito a análise de crédito."
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Como funciona o empréstimo com garantia de veículo
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              Você oferece um veículo próprio, quitado ou já financiado, como garantia de um contrato de crédito
              junto a uma instituição financeira parceira da Revla, como a Ademicon. Em troca, costuma conseguir
              taxas de juros menores e prazos mais longos do que num empréstimo pessoal sem garantia.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              O veículo continua sendo seu durante todo o contrato — você não precisa vender ou parar de usar. A
              contratação é sujeita a análise e aprovação de crédito, e as condições (taxa, prazo, valor liberado)
              variam conforme o seu perfil e o veículo oferecido em garantia.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="Diferenciais do empréstimo com garantia de veículo" columns={4} items={diferenciais} />
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu empréstimo com garantia de veículo"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso, sujeita a análise de crédito."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
