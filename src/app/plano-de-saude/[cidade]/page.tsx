import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import {
  planoDeSaudeCidades,
  getPlanoDeSaudeCidade,
  getPlanoDeSaudePlano,
} from "@/lib/plano-de-saude-cidades";
import { PercentShield, HeartHand, Star, ClockCheck } from "@/components/icons";

export function generateStaticParams() {
  return planoDeSaudeCidades.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade } = await params;
  const c = getPlanoDeSaudeCidade(cidade);
  if (!c) return {};

  const planosNomes = c.planos.map((codigo) => getPlanoDeSaudePlano(codigo).nome).join(" e ");
  const cheapest = getPlanoDeSaudePlano(c.planos.includes("1025") ? "1025" : "maes");

  return buildMetadata({
    title: `Plano de Saúde em ${c.nome}`,
    description: `Plano de saúde ${planosNomes} em ${c.nome}, a partir de ${cheapest.startingPrice}/mês. Simulação gratuita e sem compromisso com a Revla.`,
    path: `/plano-de-saude/${c.slug}`,
  });
}

const diferenciais = [
  {
    title: "Sem reajuste por faixa etária a partir dos 44 anos",
    description: "A partir dos 44 anos, a mensalidade deixa de sofrer reajuste por mudança de faixa etária — só a atualização anual prevista em contrato.",
    icon: <PercentShield />,
  },
  {
    title: "Cuidado especializado para a melhor idade",
    description: "Equipe e protocolos pensados para as necessidades específicas de quem tem mais de 60 anos, com acompanhamento próximo.",
    icon: <HeartHand />,
  },
  {
    title: "Única operadora do mundo com unidades temáticas",
    description: "A Prevent Senior é a única operadora do mundo com hospitais e unidades temáticas, pensadas para tornar o atendimento mais humano.",
    icon: <Star />,
  },
  {
    title: "Carências reduzidas",
    description: "Em novas adesões, a carência para lesões e doenças preexistentes cai de 730 para 180 dias.",
    icon: <ClockCheck />,
  },
];

export default async function PlanoDeSaudeCidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade } = await params;
  const c = getPlanoDeSaudeCidade(cidade);
  if (!c) notFound();

  const planosCidade = c.planos.map((codigo) => getPlanoDeSaudePlano(codigo));
  const cheapest = planosCidade.reduce((min, p) =>
    parseFloat(p.startingPrice.replace("R$ ", "").replace(".", "").replace(",", ".")) <
    parseFloat(min.startingPrice.replace("R$ ", "").replace(".", "").replace(",", "."))
      ? p
      : min
  );
  const planosNomes = planosCidade.map((p) => p.nome).join(" e ");

  const WHATSAPP_MESSAGE = `Olá! Vim pelo site e gostaria de simular um plano de saúde Prevent Senior em ${c.nome}.`;
  const CTA_LABEL = "Simular plano de saúde";

  const quantoCustaAnswer =
    planosCidade.length === 2
      ? `Os planos Prevent Senior em ${c.nome} partem de ${planosCidade.find((p) => p.codigo === "1025")?.startingPrice}/mês (1025 Enfermaria) e ${planosCidade.find((p) => p.codigo === "maes")?.startingPrice}/mês (MA+S Enfermaria) para beneficiários de até 43 anos, com valores por faixa etária — fale com um consultor para a tabela vigente.`
      : `O plano Prevent Senior ${planosCidade[0].nome} em ${c.nome} parte de ${planosCidade[0].startingPrice}/mês (Enfermaria) para beneficiários de até 43 anos, com valores por faixa etária — fale com um consultor para a tabela vigente.`;

  const faqItems = [
    c.faqEspecifica,
    ...(planosCidade.length === 2
      ? [
          {
            question: "Qual a diferença entre os planos MA+S e 1025?",
            answer:
              "A principal diferença é a área de abrangência: o MA+S atende também Rio de Janeiro e Niterói, além de São Paulo e região; o 1025 atende só a região de São Paulo e Baixada Santista. A cobertura ambulatorial e hospitalar é equivalente nos dois.",
          },
        ]
      : []),
    {
      question: "Quanto custa um plano de saúde?",
      answer: quantoCustaAnswer,
    },
    {
      question: "A Revla trabalha só com a Prevent Senior?",
      answer:
        "A Prevent Senior é nossa parceira oficial em plano de saúde. Para necessidades específicas, também ajudamos a avaliar outras operadoras — fale com um consultor para entender a melhor opção para o seu caso.",
    },
    {
      question: "A Revla é registrada em algum órgão regulador?",
      answer:
        "Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº 232150320. A Prevent Senior, nossa parceira em plano de saúde, é operadora registrada na ANS (Agência Nacional de Saúde Suplementar).",
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
    areaServed: {
      "@type": "City",
      name: c.nome,
    },
    description: `Corretagem de plano de saúde Prevent Senior (${planosNomes}) em ${c.nome}, individual, familiar, empresarial e por adesão.`,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Plano de Saúde", href: "/plano-de-saude" },
          { label: c.nome, href: `/plano-de-saude/${c.slug}` },
        ]}
      />
      <Hero
        eyebrow={`Plano de Saúde em ${c.nome} · Prevent Senior`}
        title={`Plano de saúde Prevent Senior em ${c.nome}: a partir de ${cheapest.startingPrice} por mês`}
        description={`A Revla é corretora parceira oficial da Prevent Senior em ${c.nome}, com cobertura ambulatorial e hospitalar${planosCidade.length === 2 ? " nos dois planos disponíveis, 1025 e MA+S" : ", através do plano MA+S"}. Simulação gratuita e sem compromisso.`}
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Plano de saúde em {c.nome}: como funciona o atendimento
          </h2>
          <div className="mt-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">{c.contexto}</p>
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="Diferenciais Prevent Senior" columns={4} items={diferenciais} />
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
              Tabela de preços em {c.nome}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              Valores de referência, cobertura ambulatorial e hospitalar sem obstetrícia.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {planosCidade.map((plan) => (
              <div key={plan.codigo}>
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">{plan.nome}</h3>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                  <table className="w-full min-w-[560px] border-collapse text-sm">
                    <thead>
                      <tr className="bg-[var(--color-muted)] text-left">
                        <th scope="col" className="px-5 py-4 font-semibold text-[var(--color-ink)]">
                          Faixa etária
                        </th>
                        <th scope="col" className="px-5 py-4 font-semibold text-[var(--color-ink)]">
                          Enfermaria
                          <span className="block text-xs font-normal text-[var(--color-ink)]/60">
                            ANS {plan.ansEnfermaria}
                          </span>
                        </th>
                        <th scope="col" className="px-5 py-4 font-semibold text-[var(--color-ink)]">
                          Apartamento
                          <span className="block text-xs font-normal text-[var(--color-ink)]/60">
                            ANS {plan.ansApartamento}
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {plan.rows.map((row) => (
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
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-[var(--color-ink)]/70">
            Valores de referência, sujeitos a atualização e à faixa etária vigente na data da
            contratação — fale com um consultor para a tabela atualizada. Para beneficiários de 0
            a 18 anos, a adesão passa por entrevista qualificada, conforme a Resolução Normativa
            ANS nº 558/2022.
          </p>
        </Container>
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title={`Compare planos de saúde em ${c.nome} sem sair de casa`}
        description="Envie sua idade pelo WhatsApp e receba uma comparação gratuita entre operadoras."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
