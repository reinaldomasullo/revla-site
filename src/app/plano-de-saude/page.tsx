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

export const metadata: Metadata = buildMetadata({
  title: "Plano de Saúde com a Prevent Senior",
  description:
    "Planos de saúde Prevent Senior individuais, familiares e empresariais, com rede própria e parceria com a Sancta Maggiore. Simulação gratuita e sem compromisso.",
  path: "/plano-de-saude",
});

// A Prevent Senior trabalha com apenas duas opções de acomodação (linha
// 1025) — usado tanto na seção de planos quanto na tabela de preços abaixo.
const planos = [
  {
    title: "Prevent Senior 1025 — Enfermaria",
    description:
      "ANS nº 505.407/25-9. Cobertura ambulatorial e hospitalar, internação em quarto coletivo, a partir de R$ 759,84/mês.",
  },
  {
    title: "Prevent Senior 1025 — Apartamento",
    description:
      "ANS nº 505.408/25-7. Cobertura ambulatorial e hospitalar, internação em quarto individual, a partir de R$ 907,73/mês.",
  },
];

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

const diferenciais1 = [
  {
    title: "Sem reajuste por faixa etária a partir dos 44 anos",
    description: "A partir dos 44 anos, a mensalidade deixa de sofrer reajuste por mudança de faixa etária — só a atualização anual prevista em contrato.",
  },
  {
    title: "Cuidado especializado para a melhor idade",
    description: "Equipe e protocolos pensados para as necessidades específicas de quem tem mais de 60 anos, com acompanhamento próximo.",
  },
  {
    title: "Única operadora do mundo com unidades temáticas",
    description: "A Prevent Senior é a única operadora do mundo com hospitais e unidades temáticas, pensadas para tornar o atendimento mais humano.",
  },
  {
    title: "Estruturas modernas e acolhedoras",
    description: "Hospitais, prontos-socorros e unidades ambulatoriais com estrutura própria, projetados para o conforto de quem os utiliza.",
  },
];

const diferenciais2 = [
  {
    title: "Cobertura completa em São Paulo e região",
    description: "Rede própria em São Paulo, Santo André, São Bernardo do Campo, São Caetano do Sul, Santos e Praia Grande.",
  },
  {
    title: "Carências reduzidas",
    description: "Em novas adesões, a carência para lesões e doenças preexistentes cai de 730 para 180 dias.",
  },
  {
    title: "Tecnologia e telemedicina",
    description: "Consultas por telemedicina e ferramentas digitais para agendar consultas, acompanhar exames e falar com a operadora sem sair de casa.",
  },
  {
    title: "Experiências que encantam",
    description: "Clube de benefícios com vantagens e experiências exclusivas para os beneficiários Prevent Senior.",
  },
];

const pricingRows = [
  { faixa: "Até 43 anos", enfermaria: "R$ 759,84", apartamento: "R$ 907,73" },
  { faixa: "44 a 58 anos", enfermaria: "R$ 999,84", apartamento: "R$ 1.195,06" },
  { faixa: "59 anos em diante", enfermaria: "R$ 1.315,59", apartamento: "R$ 1.572,45" },
];

const faqItems = [
  {
    question: "Qual a diferença entre plano individual e por adesão?",
    answer:
      "O plano individual é contratado diretamente pela pessoa física. O plano por adesão exige vínculo com um sindicato, associação ou conselho de classe, e costuma ter mensalidades mais competitivas.",
  },
  {
    question: "Qual a diferença entre os planos Enfermaria e Apartamento?",
    answer:
      "A diferença está na acomodação em internações: no plano Enfermaria, a internação é em quarto coletivo; no plano Apartamento, em quarto individual. A cobertura ambulatorial e hospitalar é a mesma nos dois planos — a escolha é uma questão de conforto e orçamento.",
  },
  {
    question: "O que é carência e como funciona?",
    answer:
      "Carência é o período entre a contratação do plano e o momento em que você pode usar determinados procedimentos. Nos planos Prevent Senior, a carência para lesões e doenças preexistentes em novas adesões caiu de 730 para 180 dias — os demais prazos variam por procedimento e detalhamos na simulação.",
  },
  {
    question: "Posso ter plano de saúde sendo MEI?",
    answer:
      "Sim. Como microempreendedor individual, você pode contratar planos PME com mensalidades geralmente mais baixas que os planos individuais, dependendo da operadora.",
  },
  {
    question: "Quanto custa um plano de saúde?",
    answer:
      "Os planos Prevent Senior 1025 partem de R$ 759,84/mês (Enfermaria) e R$ 907,73/mês (Apartamento) para beneficiários de até 43 anos, com valores por faixa etária — veja a tabela de preços completa acima ou fale com um consultor para a tabela vigente.",
  },
  {
    question: "A Revla trabalha só com a Prevent Senior?",
    answer:
      "A Prevent Senior é nossa parceira oficial em plano de saúde, com rede própria e parceria com a Sancta Maggiore, e trabalhamos com os dois planos da linha 1025 (Enfermaria e Apartamento). Para necessidades específicas, também ajudamos a avaliar outras operadoras — fale com um consultor para entender a melhor opção para seu caso.",
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
    "Corretagem de planos de saúde Prevent Senior — linha 1025, planos Enfermaria e Apartamento — individuais, familiares, empresariais e por adesão.",
};

export default function PlanoDeSaudePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: "Plano de Saúde", href: "/plano-de-saude" }]} />
      <Hero
        eyebrow="Parceria oficial"
        title="Revla e Prevent Senior: dois planos com rede própria em São Paulo"
        description="A Revla é corretora parceira oficial da Prevent Senior, operadora com rede própria e parceria com a Sancta Maggiore. Trabalhamos com os dois planos da linha 1025 — Enfermaria e Apartamento —, com cobertura ambulatorial e hospitalar em São Paulo e região. Simulação gratuita e sem compromisso."
      >
        <CTAButton
          href={whatsappLink(
            "Olá! Vim pelo site e gostaria de falar com um consultor da Revla sobre o plano de saúde Prevent Senior."
          )}
          external
        >
          Simular plano de saúde
        </CTAButton>
      </Hero>

      <section
        className="bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] py-12 sm:py-16"
        aria-labelledby="prevent-senior-heading"
      >
        <Container>
          <div className="max-w-2xl">
            <h2
              id="prevent-senior-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Parceria Revla + Prevent Senior
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white">
              A Prevent Senior é referência em cuidado para a melhor idade no Brasil, com rede
              própria e parceria com a Sancta Maggiore. A Revla é corretora parceira oficial e
              ajuda você a escolher entre os dois planos disponíveis.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/30 p-6">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">2</p>
              <p className="mt-2 text-sm text-white">planos com rede própria: Enfermaria e Apartamento</p>
            </div>
            <div className="rounded-2xl border border-white/30 p-6">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">6</p>
              <p className="mt-2 text-sm text-white">cidades atendidas na Grande São Paulo e Baixada Santista</p>
            </div>
            <div className="rounded-2xl border border-white/30 p-6">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">180 dias</p>
              <p className="mt-2 text-sm text-white">de carência para preexistências em novas adesões (antes, 730)</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 rounded-2xl bg-white px-5 py-4 text-xs leading-relaxed text-[var(--color-ink)]/70 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <span className="font-semibold text-[var(--color-accent-dark)]">
              Operadora registrada na Agência Nacional de Saúde Suplementar (ANS)
            </span>
            <span>
              Planos: Prevent Senior 1025 Enfermaria (ANS 505.407/25-9) e Apartamento
              (ANS 505.408/25-7).
            </span>
          </div>
        </Container>
      </section>

      <FeatureGrid
        title="Os 2 planos Prevent Senior"
        description="A Prevent Senior trabalha com apenas duas opções de acomodação — escolha a que faz sentido para você."
        columns={2}
        items={planos}
      />

      <section className="section-muted">
        <FeatureGrid
          title="Formas de contratação"
          description="Qualquer um dos dois planos pode ser contratado nos seguintes formatos."
          columns={4}
          items={modalidades}
        />
      </section>

      <FeatureGrid
        title="Diferenciais Prevent Senior"
        description="Oito motivos pelos quais famílias escolhem a Prevent Senior."
        columns={4}
        items={diferenciais1}
      />

      <section className="section-muted">
        <FeatureGrid title="Mais diferenciais Prevent Senior" columns={4} items={diferenciais2} />
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
              Tabela de preços
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              Valores de referência para os planos Prevent Senior 1025, cobertura ambulatorial e
              hospitalar sem obstetrícia, para São Paulo, Santo André, São Bernardo do Campo, São
              Caetano do Sul, Santos e Praia Grande.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-[var(--color-muted)] text-left">
                  <th scope="col" className="px-5 py-4 font-semibold text-[var(--color-ink)]">
                    Faixa etária
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold text-[var(--color-ink)]">
                    Enfermaria
                    <span className="block text-xs font-normal text-[var(--color-ink)]/60">
                      ANS 505.407/25-9
                    </span>
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold text-[var(--color-ink)]">
                    Apartamento
                    <span className="block text-xs font-normal text-[var(--color-ink)]/60">
                      ANS 505.408/25-7
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.faixa} className="border-t border-[var(--color-border)]">
                    <td className="px-5 py-4 text-[var(--color-ink)]">{row.faixa}</td>
                    <td className="px-5 py-4 font-semibold tabular-nums text-[var(--color-primary)]">
                      {row.enfermaria}
                      <span className="font-normal text-[var(--color-ink)]/60">/mês</span>
                    </td>
                    <td className="px-5 py-4 font-semibold tabular-nums text-[var(--color-primary)]">
                      {row.apartamento}
                      <span className="font-normal text-[var(--color-ink)]/60">/mês</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-[var(--color-ink)]/70">
            Valores de referência, sujeitos a atualização e à faixa etária vigente na data da
            contratação — fale com um consultor para a tabela atualizada. Para beneficiários de 0
            a 18 anos, a adesão passa por entrevista qualificada, conforme a Resolução Normativa
            ANS nº 558/2022.
          </p>
        </Container>
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
