import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Plano de Saúde com a Prevent Senior",
  description:
    "Planos de saúde Prevent Senior individuais, familiares e empresariais, com rede própria e parceria com a Sancta Maggiore. Simulação gratuita e sem compromisso.",
  path: "/plano-de-saude",
});

const modalidades = [
  {
    title: "Individual/Familiar",
    description: "Contratação direta para você e seus dependentes, sem necessidade de vínculo empregatício ou associativo.",
  },
  {
    title: "PME (empresarial)",
    description: "Planos para empresas de pequeno e médio porte, com condições diferenciadas por número de vidas.",
  },
  {
    title: "Por adesão",
    description: "Contratação através de sindicatos, associações ou conselhos de classe, geralmente com preços mais competitivos.",
  },
  {
    title: "Odontológico",
    description: "Planos odontológicos individuais, familiares e empresariais, avulsos ou combinados ao plano de saúde.",
  },
];

const comoEscolher = [
  { title: "Rede credenciada", description: "Verificamos se os hospitais e laboratórios que você usa fazem parte da rede da operadora." },
  { title: "Abrangência geográfica", description: "Municipal, estadual ou nacional — conforme sua rotina e viagens frequentes." },
  { title: "Carência", description: "Explicamos os prazos de carência de cada operadora antes da contratação." },
  { title: "Coparticipação", description: "Comparamos planos com e sem coparticipação para equilibrar mensalidade e uso." },
];

const faqItems = [
  {
    question: "Qual a diferença entre plano individual e por adesão?",
    answer:
      "O plano individual é contratado diretamente pela pessoa física. O plano por adesão exige vínculo com um sindicato, associação ou conselho de classe, e costuma ter mensalidades mais competitivas.",
  },
  {
    question: "O que é carência e como funciona?",
    answer:
      "Carência é o período entre a contratação do plano e o momento em que você pode usar determinados procedimentos. Os prazos variam por operadora e tipo de procedimento — detalhamos isso na simulação.",
  },
  {
    question: "Posso ter plano de saúde sendo MEI?",
    answer:
      "Sim. Como microempreendedor individual, você pode contratar planos PME com mensalidades geralmente mais baixas que os planos individuais, dependendo da operadora.",
  },
  {
    question: "Quanto custa um plano de saúde?",
    answer:
      "O valor varia por faixa etária, abrangência e modalidade. Os planos Prevent Senior partem de R$ 759,84/mês (referência, sujeita a faixa etária e atualização mensal) — fale com um consultor para a tabela vigente.",
  },
  {
    question: "A Revla trabalha só com a Prevent Senior?",
    answer:
      "A Prevent Senior é nossa parceira principal em plano de saúde, com rede própria e parceria com a Sancta Maggiore. Para necessidades específicas, também ajudamos a avaliar outras operadoras — fale com um consultor para entender a melhor opção para seu caso.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de plano de saúde",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de planos de saúde Prevent Senior individuais, familiares, empresariais e por adesão.",
};

export default function PlanoDeSaudePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: "Plano de Saúde", href: "/plano-de-saude" }]} />
      <Hero
        eyebrow="Plano de saúde"
        title="Plano de saúde Prevent Senior, com rede própria em São Paulo"
        description="Trabalhamos com os planos de saúde da Prevent Senior — individuais, familiares e empresariais — com rede própria e parceria com a Sancta Maggiore, cobertura ambulatorial e hospitalar e carência reduzida para doenças preexistentes. Simulação gratuita e sem compromisso."
      >
        <CTAButton href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")} external>
          Simular plano de saúde
        </CTAButton>
      </Hero>

      <FeatureGrid
        title="Modalidades disponíveis"
        columns={4}
        items={modalidades}
      />

      <section className="section-muted">
        <FeatureGrid
          title="O que avaliamos na sua simulação"
          description="Ajudamos você a comparar o que realmente importa antes de contratar."
          columns={4}
          items={comoEscolher}
        />
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Compare planos de saúde sem sair de casa"
        description="Envie sua idade e cidade pelo WhatsApp e receba uma comparação gratuita entre operadoras."
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
        buttonLabel="Simular agora"
      />
    </>
  );
}
