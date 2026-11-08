import Link from "next/link";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { OPERADORAS_CONFERIDO_EM } from "@/lib/plano-de-saude-operadoras";
import { HospitalCross, HeartHand, Star, ClockCheck } from "@/components/icons";

// Termos validados no Google Ads Keyword Planner (Brasil, out/2025 a set/2026):
// "plano de saúde empresarial", "plano de saude pj", "plano de saúde mei",
// "plano de saude para empresas", "plano de saude empresa" (1 mil a 10 mil cada);
// "amil empresa" e "hapvida empresa" (10 mil a 100 mil). Sem tabela de preços.

export const metadata = buildMetadata({
  title: "Plano de Saúde Empresarial: PJ, MEI e Empresas",
  description:
    "Plano de saúde empresarial para empresas, PJ e MEI: como contratar, quantas vidas são necessárias e comparação entre Amil, Bradesco Saúde, SulAmérica, Hapvida, NotreDame e MedSênior.",
  path: "/plano-de-saude/empresarial",
});

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de cotar um plano de saúde empresarial para minha empresa.";
const CTA_LABEL = "Cotar plano empresarial";

const publico = [
  {
    title: "Empresas com CNPJ",
    description:
      "Empresas de qualquer porte podem contratar plano coletivo empresarial para sócios, funcionários e dependentes, conforme as regras de cada operadora.",
    icon: <HospitalCross />,
  },
  {
    title: "MEI e empresário individual",
    description:
      "Algumas operadoras aceitam o MEI ou o empresário individual como contratante. As exigências (tempo de CNPJ, número de vidas) variam por operadora e região, e confirmamos na cotação.",
    icon: <HeartHand />,
  },
  {
    title: "Profissionais liberais",
    description:
      "A SulAmérica tem a linha Profissões, para contratação empresarial de 3 a 29 vidas por médicos, dentistas, advogados, engenheiros, psicólogos e corretores, entre outros.",
    icon: <Star />,
  },
  {
    title: "Microempresas",
    description:
      "A Hapvida informa uma linha específica para microempresa, com regras próprias de contratação.",
    icon: <ClockCheck />,
  },
];

const comparativo = [
  {
    slug: "amil",
    nome: "Amil",
    info: "Comercializa planos para empresas, e o material da operadora cita linhas voltadas ao segmento PME.",
    obs: "Linhas e disponibilidade variam por região.",
  },
  {
    slug: "bradesco-saude",
    nome: "Bradesco Saúde",
    info: "Planos coletivos empresariais para pessoa jurídica ou empresário individual, e planos por adesão via entidades de classe.",
    obs: "Não vende plano individual ou familiar.",
  },
  {
    slug: "sulamerica",
    nome: "SulAmérica",
    info: "Linhas SulAmérica e Vital a partir de 3 vidas; linha Profissões de 3 a 29 vidas.",
    obs: "Modelos com e sem coparticipação.",
  },
  {
    slug: "hapvida",
    nome: "Hapvida",
    info: "Planos para pessoa jurídica e linha para microempresa, com rede própria de hospitais e clínicas.",
    obs: "A rede varia muito por região.",
  },
  {
    slug: "notredame",
    nome: "NotreDame",
    info: "Planos para pessoa jurídica em São Paulo e no Rio de Janeiro, marca do grupo Hapvida.",
    obs: "Oferta em reformulação; confirmamos na cotação.",
  },
  {
    slug: "medsenior",
    nome: "MedSênior",
    info: "Operadora voltada à terceira idade, com planos por localidade.",
    obs: "Indicada quando o grupo é de pessoas mais velhas.",
  },
];

const passos = [
  {
    title: "Você envia os dados",
    description: "Cidade, número de vidas, idades dos beneficiários e se há dependentes. Pode ser pelo WhatsApp.",
    icon: <ClockCheck />,
  },
  {
    title: "A Revla cota várias operadoras",
    description: "Comparamos rede, tipo de acomodação, coparticipação e condições de cada operadora para o perfil do grupo.",
    icon: <Star />,
  },
  {
    title: "Você escolhe com clareza",
    description: "Explicamos carências, reajuste e rede antes da contratação, sem prometer o que o contrato não diz.",
    icon: <HeartHand />,
  },
  {
    title: "Acompanhamos a proposta",
    description: "Cuidamos da documentação e do acompanhamento até a implantação do plano.",
    icon: <HospitalCross />,
  },
];

const faqItems = [
  {
    question: "Como funciona o plano de saúde empresarial?",
    answer:
      "É um plano coletivo contratado por uma pessoa jurídica ou empresário individual para sócios, funcionários e dependentes. O contrato é da empresa, e as regras de carência, cobertura e reajuste constam nele. A Revla cota várias operadoras e explica essas regras antes da contratação.",
  },
  {
    question: "Existe plano de saúde para MEI?",
    answer:
      "Sim, algumas operadoras aceitam o MEI como contratante de plano coletivo empresarial. As exigências, como tempo de CNPJ ativo e número de vidas, variam por operadora e por região, e eu não consigo afirmar uma regra única. Confirmamos na cotação quais operadoras aceitam o seu caso.",
  },
  {
    question: "Quantas vidas são necessárias para contratar plano de saúde empresarial?",
    answer:
      "Depende da operadora. No portal da SulAmérica, por exemplo, os planos das linhas SulAmérica e Vital partem de 3 vidas, e a linha Profissões atende de 3 a 29 vidas. As demais operadoras têm regras próprias por região. Confirmamos o mínimo de cada uma na cotação.",
  },
  {
    question: "Plano de saúde PJ e plano de saúde empresarial são a mesma coisa?",
    answer:
      "Na prática, sim. PJ (pessoa jurídica) é a forma como as operadoras chamam o plano contratado por uma empresa, e empresarial é o nome do tipo de contrato coletivo. A diferença aparece em casos como plano por adesão, que é contratado por entidade de classe e não por empresa.",
  },
  {
    question: "Quanto custa o plano de saúde empresarial por funcionário?",
    answer:
      "O valor depende da idade de cada beneficiário, da cidade, da operadora, do tipo de acomodação, do número de vidas e de a opção ter ou não coparticipação. Por isso não publicamos tabela. Envie os dados pelo WhatsApp e receba a cotação comparada entre operadoras, sem compromisso.",
  },
  {
    question: "O reajuste do plano empresarial segue o limite da ANS?",
    answer:
      "O limite de reajuste anual definido pela ANS vale para planos individuais e familiares. Nos planos coletivos, o reajuste é definido em contrato, e em contratos com menos de 30 vidas as operadoras costumam agrupá-los para calcular o reajuste. Peça sempre a regra de reajuste por escrito antes de contratar.",
  },
  {
    question: "Qual operadora escolher para a minha empresa?",
    answer:
      "Não há operadora melhor em geral. A escolha depende da cidade, da rede de hospitais que o grupo quer ter por perto, da faixa de idade e do orçamento. A Revla compara Amil, Bradesco Saúde, SulAmérica, Hapvida, NotreDame, MedSênior e Prevent Senior para o seu caso.",
  },
  {
    question: "Dá para incluir plano odontológico junto com o plano de saúde da empresa?",
    answer:
      "Amil, Bradesco, SulAmérica e Hapvida comercializam plano odontológico, que pode ser cotado junto com o plano médico. Confirmamos as condições vigentes na cotação.",
  },
  {
    question: "A Revla é registrada em algum órgão regulador?",
    answer:
      "Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº 232150320. As operadoras de plano de saúde são registradas na ANS (Agência Nacional de Saúde Suplementar).",
  },
];

export default function PlanoEmpresarialPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Corretagem de plano de saúde empresarial",
    provider: { "@type": "InsuranceAgency", name: siteConfig.legalName },
    areaServed: { "@type": "Country", name: "Brasil" },
    description:
      "Cotação e contratação de plano de saúde empresarial para empresas, PJ e MEI com a Revla Corretora de Seguros.",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Plano de Saúde", href: "/plano-de-saude" },
          { label: "Plano empresarial", href: "/plano-de-saude/empresarial" },
        ]}
      />
      <Hero
        eyebrow="Plano de Saúde · Empresarial"
        title="Plano de saúde empresarial: como contratar para sua empresa, PJ ou MEI"
        description="A Revla cota planos de saúde empresariais de várias operadoras e compara rede, coparticipação e condições para o seu grupo. Atendimento por WhatsApp, com simulação gratuita e sem compromisso."
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            O que é o plano de saúde empresarial
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/75">
            É um plano coletivo contratado por uma pessoa jurídica para sócios, funcionários e
            dependentes. O contrato é da empresa, e as regras de reajuste, carência e rede mudam
            conforme a operadora e o número de vidas, por isso a comparação importa mais do que o
            nome da marca.
          </p>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="Quem pode contratar" columns={4} items={publico} />
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
              Planos empresariais por operadora
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              Resumo do que cada operadora informa em seus canais oficiais (conferido em{" "}
              {OPERADORAS_CONFERIDO_EM}). Não publicamos preços: o valor depende de idade, cidade e
              número de vidas.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-[var(--color-muted)] text-left">
                  <th scope="col" className="px-5 py-4 font-semibold text-[var(--color-ink)]">Operadora</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-[var(--color-ink)]">Contratação empresarial</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-[var(--color-ink)]">Observação</th>
                </tr>
              </thead>
              <tbody>
                {comparativo.map((op) => (
                  <tr key={op.slug} className="border-t border-[var(--color-border)] align-top">
                    <td className="px-5 py-4 font-semibold text-[var(--color-primary)]">
                      <Link href={`/plano-de-saude/${op.slug}`} className="underline-offset-2 hover:underline">
                        {op.nome}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-[var(--color-ink)]">{op.info}</td>
                    <td className="px-5 py-4 text-[var(--color-ink)]/75">{op.obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[var(--color-ink)]/70">
            A Prevent Senior também tem plano para empresas e está na{" "}
            <Link href="/plano-de-saude" className="underline">página de plano de saúde Prevent Senior</Link>.
          </p>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="Como a Revla cota o plano da sua empresa" columns={4} items={passos} />
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Cote o plano de saúde da sua empresa"
        description="Envie o número de vidas, as idades e a cidade pelo WhatsApp e receba uma comparação gratuita entre operadoras."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
