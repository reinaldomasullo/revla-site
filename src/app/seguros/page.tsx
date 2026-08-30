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
  title: "Seguros: Vida, Auto, Residencial e Mais",
  description:
    "Trabalhamos com todos os tipos de seguro — vida, auto, residencial, empresarial, condominial, viagem, RC profissional e celular — comparando as melhores seguradoras do Brasil.",
  path: "/seguros",
});

const todosOsSeguros = [
  {
    title: "Seguro de vida",
    description:
      "Indenização para a família em caso de morte ou invalidez, com coberturas para doenças graves. Veja as modalidades logo abaixo.",
  },
  {
    title: "Seguro empresarial",
    description: "Proteção para patrimônio, faturamento e operação do seu negócio.",
    href: "/blog/seguro-empresarial-guia-completo",
    linkLabel: "Ler o guia completo",
  },
  {
    title: "Seguro residencial",
    description: "Cobertura para incêndio, roubo, danos elétricos e desastres naturais.",
    href: "/blog/seguro-residencial-o-que-cobre-quanto-custa",
    linkLabel: "O que cobre e quanto custa",
  },
  {
    title: "Seguro condominial",
    description: "Proteção para áreas comuns e responsabilidade civil do condomínio.",
  },
  {
    title: "Seguro auto",
    description: "Cobertura para colisão, roubo, furto e responsabilidade civil do veículo.",
    href: "/blog/seguro-auto-vale-a-pena",
    linkLabel: "Seguro auto vale a pena?",
  },
  {
    title: "Seguro viagem",
    description: "Assistência médica, bagagem e imprevistos em viagens nacionais e internacionais.",
  },
  {
    title: "Seguro RC profissional",
    description: "Proteção contra erros e omissões no exercício da sua atividade profissional.",
    href: "/blog/seguro-rc-profissional",
    linkLabel: "Entenda o que cobre",
  },
  {
    title: "Seguro celular",
    description: "Cobertura contra roubo, furto e quebra acidental do aparelho.",
  },
];

const tiposDeSeguro = [
  {
    title: "Seguro de vida individual",
    description:
      "Proteção financeira para você e seus beneficiários, com capital segurado definido conforme sua necessidade.",
  },
  {
    title: "Seguro de vida familiar",
    description: "Uma única apólice cobrindo o titular e dependentes, com condições facilitadas.",
  },
  {
    title: "Seguro resgatável",
    description:
      "Seguro de vida com devolução do valor pago ao final do plano, caso o segurado não utilize a cobertura.",
  },
  {
    title: "Seguro PME e estagiário",
    description: "Planos coletivos para empresas de pequeno e médio porte e para estagiários.",
  },
  {
    title: "Seguro temporário",
    description: "Cobertura por um período determinado, com prêmio reduzido.",
  },
];

const coberturas = [
  { title: "Morte natural e acidental", description: "Indenização aos beneficiários em caso de falecimento do segurado." },
  { title: "Invalidez total ou parcial", description: "Cobertura por incapacidade permanente decorrente de acidente." },
  { title: "Doenças graves", description: "Indenização antecipada em caso de diagnóstico de doenças graves cobertas." },
  { title: "DIT — Diária por Incapacidade Temporária", description: "Renda mensal enquanto o segurado está afastado do trabalho." },
  { title: "DIH — Diária de Internação Hospitalar", description: "Valor diário para cada dia de internação hospitalar." },
  { title: "Auxílio funeral", description: "Cobertura das despesas de funeral do segurado ou de dependentes." },
];

const faqItems = [
  {
    question: "A Revla trabalha com quais tipos de seguro?",
    answer:
      "Trabalhamos com todos os tipos de seguro — vida, auto, residencial, empresarial, condominial, viagem, RC profissional e celular — comparando seguradoras parceiras para encontrar a cobertura ideal para cada cliente.",
  },
  {
    question: "Qual a diferença entre seguro de vida tradicional e resgatável?",
    answer:
      "No seguro tradicional, o valor pago garante apenas a cobertura durante a vigência. No resgatável, parte ou todo o valor pago é devolvido ao segurado ao final do plano, caso a cobertura não seja utilizada.",
  },
  {
    question: "Quem pode contratar um seguro de vida?",
    answer:
      "Qualquer pessoa maior de idade pode contratar, com condições que variam conforme idade, profissão e estado de saúde declarado.",
  },
  {
    question: "O seguro de vida cobre qualquer causa de morte?",
    answer:
      "As condições variam por seguradora e produto. Nossa consultoria explica exatamente o que está e o que não está coberto antes da contratação.",
  },
  {
    question: "Quanto custa um seguro com a Revla?",
    answer:
      "O valor depende do tipo de seguro, capital segurado, coberturas escolhidas e seguradora. Fazemos uma simulação gratuita comparando opções entre parceiros para encontrar o melhor custo-benefício.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de seguros",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de seguros de vida, auto, residencial, empresarial, condominial, viagem, RC profissional e celular.",
};

export default function SegurosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }]} />
      <Hero
        eyebrow="Seguros"
        title="Seguros para proteger você, sua família e seu patrimônio"
        description="Trabalhamos com todos os tipos de seguro — vida, auto, residencial, empresarial, condominial, viagem, RC profissional e celular — comparando as melhores seguradoras do Brasil para encontrar a cobertura ideal, com simulação gratuita."
      >
        <CTAButton href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")} external>
          Cotar seguro
        </CTAButton>
      </Hero>

      <FeatureGrid
        title="Todos os tipos de seguro que trabalhamos"
        description="Cada apólice é comparada entre seguradoras parceiras para encontrar o melhor custo-benefício."
        columns={4}
        items={todosOsSeguros}
      />

      <section className="section-muted">
        <FeatureGrid
          title="Seguro de vida: conheça as modalidades"
          description="O seguro de vida é o produto mais buscado dentro do nosso portfólio — veja as principais modalidades que trabalhamos."
          columns={3}
          items={tiposDeSeguro}
        />
      </section>

      <FeatureGrid
        title="Coberturas disponíveis no seguro de vida"
        description="As coberturas podem ser combinadas conforme sua necessidade e orçamento."
        columns={3}
        items={coberturas}
      />

      <FAQ items={faqItems} />

      <CTASection
        title="Descubra qual seguro faz sentido para você"
        description="Fale com um consultor da Revla e receba uma comparação gratuita entre seguradoras."
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
        buttonLabel="Cotar agora"
      />
    </>
  );
}
