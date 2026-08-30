import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Amparo Funeral para Você e Sua Família",
  description:
    "Assistência funeral individual, familiar e sênior, com suporte imediato à família e cobertura de despesas de funeral. Simulação gratuita com a Revla Corretora.",
  path: "/amparo-funeral",
});

const modalidades = [
  {
    title: "Amparo funeral individual",
    description: "Cobertura das despesas de funeral do titular, com assistência 24 horas para a família.",
  },
  {
    title: "Amparo funeral familiar",
    description: "Estende a cobertura a cônjuge, filhos e outros dependentes definidos na apólice.",
  },
  {
    title: "Amparo funeral sênior",
    description: "Modalidade voltada a pessoas acima de 75 anos, com condições de contratação específicas para essa faixa etária.",
  },
];

const oQueCobre = [
  { title: "Assistência imediata", description: "Acionamento 24 horas para organização do funeral no momento em que a família mais precisa." },
  { title: "Despesas de funeral", description: "Cobertura de urna, velório, sepultamento ou cremação, conforme o plano contratado." },
  { title: "Translado", description: "Traslado do corpo dentro dos limites previstos na apólice, quando aplicável." },
  { title: "Assistência à família", description: "Suporte burocrático e emocional à família durante o processo." },
];

const testimonials = [
  {
    name: "Maria Aparecida",
    quote:
      "O Amparo Funeral Sênior da Revla foi um alívio para mim e minha família. A Revla ofereceu uma solução personalizada para pessoas como eu, com idade acima dos 75 anos, com clareza em todos os detalhes.",
  },
];

const faqItems = [
  {
    question: "O que é amparo funeral?",
    answer:
      "É um plano de assistência que cobre as despesas relacionadas ao funeral do titular ou de dependentes cobertos, oferecendo suporte prático à família no momento da perda.",
  },
  {
    question: "Qual a diferença entre amparo funeral e seguro de vida?",
    answer:
      "O amparo funeral cobre especificamente as despesas e a organização do funeral. O seguro de vida paga uma indenização em dinheiro aos beneficiários, que pode ser usada para qualquer finalidade, incluindo o funeral.",
  },
  {
    question: "Pessoas acima de 75 anos podem contratar?",
    answer:
      "Sim — existe a modalidade sênior, pensada especificamente para esse público, com condições de contratação próprias.",
  },
  {
    question: "Como funciona o acionamento em caso de necessidade?",
    answer:
      "A família aciona a central de assistência informada na apólice, que organiza o atendimento conforme as coberturas contratadas.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de amparo funeral",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de planos de amparo funeral individual, familiar e sênior.",
};

export default function AmparoFuneralPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: "Amparo Funeral", href: "/amparo-funeral" }]} />
      <Hero
        eyebrow="Amparo funeral"
        title="Tranquilidade para sua família nos momentos mais difíceis"
        description="O amparo funeral organiza e cobre as despesas do funeral, com assistência imediata à família — para que ninguém precise se preocupar com burocracia ou custos num momento de luto."
      >
        <CTAButton href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")} external>
          Simular amparo funeral
        </CTAButton>
      </Hero>

      <FeatureGrid title="Modalidades disponíveis" columns={3} items={modalidades} />

      <section className="section-muted">
        <FeatureGrid
          title="O que o plano cobre"
          description="As coberturas variam conforme a modalidade e a operadora escolhida."
          columns={4}
          items={oQueCobre}
        />
      </section>

      <Testimonials title="Quem já contou com o amparo funeral da Revla" items={testimonials} />

      <FAQ items={faqItems} />

      <CTASection
        title="Garanta essa tranquilidade para quem você ama"
        description="Fale com um consultor da Revla e entenda qual modalidade de amparo funeral faz sentido para sua família."
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
        buttonLabel="Simular agora"
      />
    </>
  );
}
