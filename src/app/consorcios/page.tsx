import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import {
  House,
  Car,
  Motorcycle,
  Truck,
  Machine,
  Plant,
  TrendingUp,
  Sparkle,
  PercentOff,
  CalendarDown,
  HandCoin,
  Headset,
} from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio de Imóveis e Veículos sem Juros",
  description:
    "Carta de crédito sem juros para imóveis, veículos, serviços e investimento a partir de R$ 40.000. Simulação gratuita e sem compromisso com a Revla Corretora.",
  path: "/consorcios",
});

const categorias = [
  {
    title: "Imóveis",
    description: "Para casa, apartamento, terreno ou construção, sem entrada obrigatória.",
    icon: <House />,
  },
  {
    title: "Veículos",
    description: "Carros e utilitários, com parcelas menores que o financiamento tradicional.",
    icon: <Car />,
  },
  {
    title: "Motos",
    description: "Motocicletas de todas as categorias, com parcelas que cabem no seu orçamento.",
    icon: <Motorcycle />,
  },
  {
    title: "Caminhões",
    description: "Caminhões e veículos pesados para renovar ou expandir a frota da sua empresa.",
    icon: <Truck />,
  },
  {
    title: "Máquinas",
    description: "Máquinas e equipamentos agrícolas, industriais ou para construção civil.",
    icon: <Machine />,
  },
  {
    title: "Agro",
    description: "Insumos, maquinário e expansão para o produtor rural, sem comprometer o caixa.",
    icon: <Plant />,
  },
  {
    title: "Investimento",
    description: "Poupança programada sem juros, com possibilidade de lance para antecipar a contemplação.",
    icon: <TrendingUp />,
  },
  {
    title: "Serviços",
    description: "Reformas, viagens, procedimentos estéticos ou odontológicos.",
    icon: <Sparkle />,
  },
];

const diferenciais = [
  { title: "Sem juros", description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.", icon: <PercentOff /> },
  { title: "Parcelas reduzidas", description: "Parcelas reduzidas em até 50% durante parte do plano, conforme o grupo escolhido.", icon: <CalendarDown /> },
  { title: "Lance embutido", description: "Possibilidade de usar parte da própria carta de crédito como lance para antecipar a contemplação.", icon: <HandCoin /> },
  { title: "Consultoria completa", description: "Acompanhamento da simulação até a contemplação, com suporte da Revla em todas as etapas.", icon: <Headset /> },
];

const etapas = [
  { title: "1. Simulação gratuita", description: "Você nos conta seu objetivo e orçamento, sem custo ou compromisso." },
  { title: "2. Escolha do grupo e prazo", description: "Apresentamos as opções disponíveis entre as administradoras parceiras autorizadas pelo Banco Central." },
  { title: "3. Pagamento das parcelas", description: "Você paga as parcelas mensais, com opção de dar lances para antecipar a contemplação." },
  { title: "4. Contemplação", description: "Por sorteio mensal ou lance — a partir daí você recebe a carta de crédito." },
];

const ademiconStats = [
  { value: "35+", label: "anos de história" },
  { value: "+675 mil", label: "clientes atendidos" },
  { value: "R$ 145,8 bi", label: "em créditos comercializados" },
];

const faqItems = [
  {
    question: "Consórcio tem juros?",
    answer:
      "Não. No consórcio você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento.",
  },
  {
    question: "Como funciona a contemplação?",
    answer:
      "A contemplação ocorre por sorteio mensal entre os participantes do grupo, ou por lance — quando você oferece antecipar parte do saldo devedor para aumentar suas chances.",
  },
  {
    question: "Posso usar a carta de crédito em qualquer coisa?",
    answer:
      "A carta deve ser usada dentro da categoria contratada (imóveis, veículos, motos, caminhões, máquinas, agro, investimento ou serviços), respeitando as regras da administradora.",
  },
  {
    question: "Qual o valor mínimo de uma carta de consórcio?",
    answer: "As cartas disponíveis começam a partir de R$ 40.000, variando conforme o grupo e a categoria.",
  },
  {
    question: "A Revla é uma administradora de consórcio?",
    answer:
      "Não. A Revla é uma corretora parceira que pesquisa entre administradoras autorizadas pelo Banco Central para encontrar o grupo mais vantajoso para você.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio de imóveis, veículos, motos, caminhões, máquinas, agro, investimento e serviços, sem juros.",
};

export default function ConsorciosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: "Consórcios", href: "/consorcios" }]} />
      <Hero
        eyebrow="Consórcios"
        title="Carta de crédito sem juros: simule seu consórcio contemplado agora"
        description="A Revla pesquisa entre administradoras autorizadas pelo Banco Central para oferecer parcelas flexíveis e suporte completo, da simulação até a contemplação."
      >
        <CTAButton href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")} external>
          Iniciar minha simulação gratuita
        </CTAButton>
        <CTAButton href="/consorcios/calculadora" variant="ghost">
          Calculadora de consórcio de imóveis
        </CTAButton>
        <CTAButton href="/consorcios/calculadora-veiculos" variant="ghost">
          Calculadora comparativa consórcio de veículos x financiamento
        </CTAButton>
        <CTAButton href="/consorcios/calculadora-financiamento" variant="ghost">
          Calculadora comparativa consórcio x financiamento
        </CTAButton>
      </Hero>

      <FeatureGrid title="Categorias de consórcio" columns={4} items={categorias} />

      <section className="section-muted">
        <FeatureGrid title="Diferenciais da Revla" columns={4} items={diferenciais} />
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Como funciona
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((etapa) => (
              <div key={etapa.title} className="rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-base font-semibold text-[var(--color-ink)]">{etapa.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                  {etapa.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] py-10 sm:py-12"
        aria-labelledby="ademicon-heading"
      >
        <Container>
          <div className="max-w-2xl">
            <h2
              id="ademicon-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Consórcio com o respaldo de quem já é referência no Brasil
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white">
              A Revla trabalha com a Ademicon, uma das maiores administradoras de consórcio do
              país, regulamentada pelo Banco Central.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {ademiconStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/30 p-6"
              >
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-2 rounded-2xl bg-white px-5 py-4 text-xs leading-relaxed text-[var(--color-ink)]/70 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <span className="font-semibold text-[var(--color-accent-dark)]">
              Regulamentada pelo Banco Central do Brasil — Lei nº 11.795/2008 (Sistema de
              Consórcios)
            </span>
            <span>
              Fonte: dados institucionais da Ademicon, administradora parceira da Revla para
              consórcios.
            </span>
          </div>
        </Container>
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Simule sua carta de crédito agora"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
        buttonLabel="Falar com consultor"
      />
    </>
  );
}
