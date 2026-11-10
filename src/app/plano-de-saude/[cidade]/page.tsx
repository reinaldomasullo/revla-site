import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import {
  planoDeSaudeCidades,
  getPlanoDeSaudeCidade,
  getPlanoDeSaudePlano,
  PRECOS_ATUALIZADO_EM,
} from "@/lib/plano-de-saude-cidades";

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
    title: `Plano de Saúde em ${c.tituloLocal ?? c.nome}`,
    description: `Plano de saúde ${planosNomes} em ${c.nome}, a partir de ${cheapest.startingPrice}/mês. Simulação gratuita e sem compromisso com a Revla.`,
    path: `/plano-de-saude/${c.slug}`,
  });
}

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
    ...c.faqs,
    {
      question: `Quanto custa o plano de saúde Prevent Senior em ${c.nome}?`,
      answer: quantoCustaAnswer,
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

      <section className="section-muted py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Hospitais e pronto-atendimentos da rede em {c.tituloLocal ?? c.nome}
          </h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-relaxed text-[var(--color-ink)]/75">
            {c.hospitais.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]/70">{c.redeNota}</p>
          <p className="mt-2 text-xs text-[var(--color-ink)]/60">
            Conferido no site oficial da Prevent Senior em novembro de 2026. A rede muda com o tempo:
            confirme na consulta oficial antes de contratar.
          </p>
        </Container>
      </section>

      <section className="py-6">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
            A regra do último aumento por faixa etária aos 44 anos, as carências e os demais diferenciais da
            operadora estão explicados na{" "}
            <Link href="/plano-de-saude" className="font-semibold text-[var(--color-primary)] underline">
              página do plano de saúde Prevent Senior
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
              Tabela de preços em {c.nome}
              <span className="ml-3 align-middle text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/70">
                Atualizada em {PRECOS_ATUALIZADO_EM}
              </span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/60">
              Valor de cada faixa na contratação, para {planosCidade.length === 2 ? "os dois planos" : "o plano MA+S"} em {c.nome}, com cobertura ambulatorial e hospitalar sem obstetrícia. A explicação da regra dos 44 anos está na página do plano.
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
            Valores sujeitos a atualização: fale com um consultor para a tabela vigente.
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
