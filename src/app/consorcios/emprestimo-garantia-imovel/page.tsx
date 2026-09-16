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
import { HandCoin, ClockShort, HouseKey, Headset } from "@/components/icons";

// Empréstimo com Garantia de Imóvel (Estratégia 1 — SEO/GEO, Onda 2).
// Produto real da Ademicon, confirmado com o usuário. Pesquisa de palavras-
// chave (Google Ads Keyword Planner, 15/09) mostrou "empréstimo com garantia
// de imóvel" muito mais forte (10 mil–100 mil) que o termo em inglês "home
// equity" (1 mil–10 mil) — mesmo padrão encontrado no Plano Funerário. Título/
// H1/URL lideram com o termo em português; "home equity" fica só no conteúdo,
// como o nome técnico do produto no mercado financeiro. Sem depoimento
// (nenhum cliente real confirmado ainda para este produto específico).

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de simular um empréstimo com garantia de imóvel.";
const CTA_LABEL = "Simular empréstimo com garantia de imóvel";

export const metadata: Metadata = buildMetadata({
  title: "Empréstimo com Garantia de Imóvel",
  description:
    "Empréstimo com garantia de imóvel: taxas menores que o crédito sem garantia, prazos longos e você continua usando o imóvel. Simulação gratuita com a Revla.",
  path: "/consorcios/emprestimo-garantia-imovel",
});

const diferenciais = [
  {
    title: "Taxas menores",
    description:
      "Por ter um imóvel como garantia, as taxas de juros costumam ser menores que as de um empréstimo pessoal sem garantia.",
    icon: <HandCoin />,
  },
  {
    title: "Prazos mais longos",
    description: "Prazos de pagamento mais longos, com parcelas que cabem melhor no seu orçamento.",
    icon: <ClockShort />,
  },
  {
    title: "Você continua usando o imóvel",
    description:
      "O imóvel continua sendo seu e você continua usando normalmente durante todo o período de pagamento.",
    icon: <HouseKey />,
  },
  {
    title: "Consultoria completa",
    description: "Acompanhamento da simulação até a liberação do crédito, com suporte da Revla em todas as etapas.",
    icon: <Headset />,
  },
];

const faqItems = [
  {
    question: "O que é empréstimo com garantia de imóvel (home equity)?",
    answer:
      "É uma modalidade de crédito em que você oferece um imóvel próprio como garantia, em troca de taxas de juros menores e prazos mais longos do que um empréstimo sem garantia. No mercado financeiro, esse produto também é conhecido pelo termo em inglês \"home equity\".",
  },
  {
    question: "Eu perco o imóvel?",
    answer:
      "Não, enquanto as parcelas forem pagas em dia. O imóvel funciona como garantia do contrato, mas continua sendo seu e você continua usando normalmente durante todo o período de pagamento.",
  },
  {
    question: "Preciso de análise de crédito?",
    answer:
      "Sim. Como em qualquer operação de crédito, a contratação é sujeita a análise e aprovação de crédito pela instituição financeira parceira.",
  },
  {
    question: "Quanto tempo demora para liberar o crédito?",
    answer:
      "O prazo varia conforme a análise de crédito e a documentação do imóvel. Fale com um consultor da Revla para uma simulação com prazos e condições específicas para o seu caso.",
  },
  {
    question: "A Revla é quem empresta o dinheiro?",
    answer:
      "Não. A Revla é uma corretora parceira que intermedia a contratação junto a instituições financeiras autorizadas, como a Ademicon, buscando as condições mais vantajosas para o seu caso.",
  },
  {
    question: "A Revla atende empréstimo com garantia de imóvel em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com a mesma consultoria completa.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Empréstimo com garantia de imóvel (home equity)",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de empréstimo com garantia de imóvel (home equity): taxas menores e prazos mais longos, sujeito a análise de crédito.",
};

export default function EmprestimoGarantiaImovelPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Empréstimo com Garantia de Imóvel", href: "/consorcios/emprestimo-garantia-imovel" },
        ]}
      />
      <Hero
        eyebrow="Empréstimo com Garantia de Imóvel · Crédito com a Ademicon"
        title="Empréstimo com garantia de imóvel: crédito com taxas menores usando seu imóvel como garantia"
        description="Transforme o valor do seu imóvel em crédito, com taxas de juros menores que as de um empréstimo sem garantia e prazos mais longos para pagar — sem precisar vender ou desocupar o imóvel. Consultoria completa com a Revla, sujeito a análise de crédito."
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Como funciona o empréstimo com garantia de imóvel
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              Você oferece um imóvel próprio, quitado ou já financiado, como garantia de um contrato de crédito junto
              a uma instituição financeira parceira da Revla, como a Ademicon. Em troca, costuma conseguir taxas de
              juros menores e prazos mais longos do que num empréstimo pessoal sem garantia.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              O imóvel continua sendo seu durante todo o contrato — você não precisa vender, alugar ou desocupar. A
              contratação é sujeita a análise e aprovação de crédito, e as condições (taxa, prazo, valor liberado)
              variam conforme o seu perfil e o imóvel oferecido em garantia.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="Diferenciais do empréstimo com garantia de imóvel" columns={4} items={diferenciais} />
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu empréstimo com garantia de imóvel"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso, sujeita a análise de crédito."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
