import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { planoDeSaudeCidades } from "@/lib/plano-de-saude-cidades";
import { HospitalCross, HeartHand, Star, MapPin, ClockCheck } from "@/components/icons";

// Hub de operadoras (08/11/2026). /plano-de-saude continua sendo a página da
// Prevent Senior (indexada desde setembro, mantida para não perder posição).
// Daqui saem as páginas de cada operadora, a de plano empresarial e as
// páginas de cidade da Prevent Senior. Não há tabela de preços geral: o valor depende de cada cotação.
export const metadata: Metadata = buildMetadata({
  title: "Operadoras de Plano de Saúde: Compare e Cote com a Revla",
  description:
    "Compare planos de saúde Prevent Senior, Amil, Bradesco Saúde, SulAmérica, Hapvida, NotreDame e MedSênior, para pessoa física e empresas. Cotação gratuita com a Revla, sem compromisso.",
  path: "/plano-de-saude/operadoras",
});

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de cotar um plano de saúde com a Revla.";
const CTA_LABEL = "Cotar plano de saúde";

const operadorasCards = [
  {
    title: "Prevent Senior",
    description:
      "Rede própria em São Paulo, Rio de Janeiro e Niterói, com foco na melhor idade. Tabela de preços e a regra de sem aumento por faixa etária a partir dos 44 anos.",
    href: "/plano-de-saude",
    linkLabel: "Ver planos Prevent Senior",
    icon: <HeartHand />,
  },
  {
    title: "Amil",
    description: "Linhas de entrada ao premium na mesma operadora, com planos para empresas e plano odontológico.",
    href: "/plano-de-saude/amil",
    linkLabel: "Ver plano de saúde Amil",
    icon: <HospitalCross />,
  },
  {
    title: "Bradesco Saúde",
    description: "Planos empresariais e por adesão. A operadora não vende plano individual ou familiar.",
    href: "/plano-de-saude/bradesco-saude",
    linkLabel: "Ver plano de saúde Bradesco Saúde",
    icon: <HospitalCross />,
  },
  {
    title: "SulAmérica",
    description: "Planos empresariais a partir de 3 vidas, com ou sem coparticipação, e a linha Profissões para profissionais liberais.",
    href: "/plano-de-saude/sulamerica",
    linkLabel: "Ver plano de saúde SulAmérica",
    icon: <HospitalCross />,
  },
  {
    title: "Hapvida",
    description: "Rede própria de hospitais e clínicas, com planos individual, familiar, empresarial e para microempresa.",
    href: "/plano-de-saude/hapvida",
    linkLabel: "Ver plano de saúde Hapvida",
    icon: <HospitalCross />,
  },
  {
    title: "NotreDame",
    description: "Marca do grupo Hapvida em São Paulo e no Rio de Janeiro, a antiga NotreDame Intermédica.",
    href: "/plano-de-saude/notredame",
    linkLabel: "Ver plano de saúde NotreDame",
    icon: <HospitalCross />,
  },
  {
    title: "MedSênior",
    description: "Operadora voltada à terceira idade, com unidades próprias e planos por localidade.",
    href: "/plano-de-saude/medsenior",
    linkLabel: "Ver plano de saúde MedSênior",
    icon: <HeartHand />,
  },
  {
    title: "Plano empresarial",
    description: "Plano de saúde para empresa, PJ e MEI, com comparativo entre as operadoras e as regras de contratação.",
    href: "/plano-de-saude/empresarial",
    linkLabel: "Ver plano de saúde empresarial",
    icon: <Star />,
  },
];

const criterios = [
  {
    title: "Cidade e rede",
    description: "A rede de hospitais e clínicas muda muito de cidade para cidade. O primeiro filtro é onde você mora e onde costuma se tratar.",
    icon: <MapPin />,
  },
  {
    title: "Tipo de contrato",
    description: "Individual ou familiar, empresarial ou por adesão. Cada tipo tem regras próprias de carência e de reajuste, e nem toda operadora vende todos.",
    icon: <HospitalCross />,
  },
  {
    title: "Idade e faixa etária",
    description: "O valor varia por faixa etária. Algumas operadoras têm regras próprias, como a Prevent Senior, que encerra os aumentos por idade aos 44 anos.",
    icon: <ClockCheck />,
  },
  {
    title: "Acomodação e coparticipação",
    description: "Enfermaria ou apartamento, e planos com ou sem coparticipação, mudam a mensalidade e o custo de cada uso.",
    icon: <Star />,
  },
];

const cidadesFeatures = planoDeSaudeCidades.map((cidade) => ({
  title: cidade.nome,
  description: `Plano de saúde Prevent Senior com atendimento para ${cidade.nome}.`,
  href: `/plano-de-saude/${cidade.slug}`,
  linkLabel: `Plano de saúde em ${cidade.nome}`,
  icon: <MapPin />,
}));

const faqItems = [
  {
    question: "Como escolher o melhor plano de saúde?",
    answer:
      "Não existe um plano melhor para todos. Compare a rede de hospitais na sua cidade, o tipo de contrato disponível para você, a faixa etária, a acomodação, a coparticipação e as regras de carência e reajuste. A Revla cota várias operadoras com os seus dados e explica essas diferenças antes da contratação.",
  },
  {
    question: "Quais operadoras a Revla cota?",
    answer:
      "Prevent Senior, Amil, Bradesco Saúde, SulAmérica, Hapvida, NotreDame e MedSênior, além de planos empresariais para empresas, PJ e MEI. Cada operadora tem uma página própria neste site com o que ela informa em seus canais oficiais.",
  },
  {
    question: "Qual a diferença entre plano individual, familiar, empresarial e por adesão?",
    answer:
      "O plano individual ou familiar é contratado diretamente pela pessoa física. O empresarial é contratado por uma empresa ou empresário individual para sócios, funcionários e dependentes. O plano por adesão é contratado por meio de entidade de classe, sindicato ou associação, e depende de vínculo com ela. Nem toda operadora vende todos os tipos: a Bradesco Saúde, por exemplo, só comercializa planos coletivos.",
  },
  {
    question: "Posso ter plano de saúde sendo MEI?",
    answer:
      "Algumas operadoras aceitam o MEI como contratante de plano coletivo empresarial, e as exigências variam por operadora e região. Veja a página de [plano de saúde empresarial](/plano-de-saude/empresarial) e envie seus dados para a cotação.",
  },
  {
    question: "O que é carência em plano de saúde?",
    answer:
      "É o período entre a contratação e o momento em que você pode usar determinados procedimentos. Pela legislação, urgência e emergência têm carência de 24 horas, o parto tem até 300 dias e os demais procedimentos até 180 dias. Para doenças e lesões preexistentes pode haver Cobertura Parcial Temporária de até 24 meses. Cada operadora pode ter prazos menores, e detalhamos na cotação.",
  },
  {
    question: "Quanto custa um plano de saúde?",
    answer:
      "Depende da operadora, da cidade, da idade, do tipo de contrato e da acomodação, então não existe preço único. A Prevent Senior tem [tabela de preços própria](/plano-de-saude). Para as demais operadoras, enviamos a cotação pelo WhatsApp, comparada entre operadoras e sem compromisso.",
  },
  {
    question: "Contratar plano de saúde por corretora custa mais?",
    answer:
      "Não. A comissão da corretora é paga pela operadora, não pelo beneficiário. A Revla cota, compara e acompanha a proposta até a contratação.",
  },
  {
    question: "Existe plano de saúde da Prevent Senior em quais cidades?",
    answer:
      "A Prevent Senior atende São Paulo, Santo André, São Bernardo do Campo, São Caetano do Sul, Santos, Praia Grande, Rio de Janeiro e Niterói. Temos uma página para cada uma, listadas mais acima.",
  },
  {
    question: "A Revla é registrada em algum órgão regulador?",
    answer:
      "Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº 232150320. As operadoras de plano de saúde são registradas na ANS (Agência Nacional de Saúde Suplementar).",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de plano de saúde",
  provider: { "@type": "InsuranceAgency", name: siteConfig.legalName },
  areaServed: { "@type": "Country", name: "Brasil" },
  description:
    "Cotação e contratação de planos de saúde Prevent Senior, Amil, Bradesco Saúde, SulAmérica, Hapvida, NotreDame e MedSênior, individuais, familiares, empresariais e por adesão, com a Revla Corretora de Seguros.",
};

export default function OperadorasPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Plano de Saúde", href: "/plano-de-saude" },
          { label: "Operadoras", href: "/plano-de-saude/operadoras" },
        ]}
      />
      <Hero
        eyebrow="Plano de Saúde · Operadoras"
        title="Operadoras de plano de saúde: compare e cote com a Revla"
        description="A Revla cota e contrata planos de saúde de várias operadoras e compara rede, tipo de contrato e condições para o seu perfil. Atendimento por WhatsApp e videochamada, com simulação gratuita e sem compromisso."
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <FeatureGrid
        title="Escolha a operadora"
        description="Uma página para cada operadora, com o que ela informa em seus canais oficiais e como a Revla cota o plano."
        columns={4}
        items={operadorasCards}
      />

      <section className="section-muted">
        <FeatureGrid
          title="O que comparar antes de contratar"
          description="Quatro pontos que mudam o plano certo para cada pessoa."
          columns={4}
          items={criterios}
        />
      </section>

      <FeatureGrid
        title="Plano de saúde Prevent Senior na sua cidade"
        description="Páginas com atendimento e contexto das 8 cidades onde a Prevent Senior tem rede própria."
        columns={4}
        items={cidadesFeatures}
      />

      <section className="section-muted py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Como a Revla trabalha
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/75">
            A Revla é uma corretora de seguros registrada na SUSEP sob o nº 232150320. Você envia
            sua idade, cidade e o tipo de contratação, nós cotamos as operadoras que atendem o seu
            caso e explicamos rede, carência, reajuste e acomodação de cada uma, para você escolher
            com clareza. O plano, a rede e as regras do contrato são sempre da operadora. O
            escritório fica na Avenida Paulista, em São Paulo, e o atendimento também é remoto,
            para todo o Brasil.
          </p>
        </Container>
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Compare planos de saúde sem sair de casa"
        description="Envie sua idade e cidade pelo WhatsApp e receba uma comparação gratuita entre operadoras."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
