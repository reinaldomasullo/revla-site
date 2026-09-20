import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
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
  CompareArrows,
} from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio em São Paulo: Imóveis e Veículos",
  description:
    "Consórcio sem juros: a Revla compara Ademicon, Porto Seguro e Rodobens para imóveis, veículos e mais, a partir de R$ 40.000. Simulação grátis em SP.",
  path: "/consorcios",
});

const categorias = [
  {
    title: "Imóveis",
    description: "Para casa, apartamento, terreno ou construção, sem entrada obrigatória.",
    href: "/consorcios/imoveis",
    linkLabel: "Consórcio de imóveis para a casa própria",
    icon: <House />,
  },
  {
    title: "Carro",
    description: "Carros novos, usados ou elétricos, com parcelas menores que o financiamento tradicional.",
    href: "/consorcios/carro",
    linkLabel: "Consórcio de carro sem juros",
    icon: <Car />,
  },
  {
    title: "Motos",
    description: "Motocicletas de todas as categorias, com parcelas que cabem no seu orçamento.",
    href: "/consorcios/motos",
    linkLabel: "Consórcio de moto por marca",
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
    description: "Cirurgia plástica, viagem e energia solar, com parcelas que cabem no seu orçamento.",
    href: "/consorcios/servicos",
    linkLabel: "Consórcio de serviços",
    icon: <Sparkle />,
  },
];

const diferenciais = [
  { title: "Comparação entre administradoras", description: "Somos corretora homologada na Ademicon, Porto Seguro e Rodobens — comparamos as opções entre elas para indicar o grupo mais vantajoso pro seu perfil.", icon: <CompareArrows /> },
  { title: "Sem juros", description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.", icon: <PercentOff /> },
  { title: "Parcelas reduzidas", description: "Parcelas reduzidas em até 50% durante parte do plano, conforme o grupo escolhido.", icon: <CalendarDown /> },
  { title: "Lance embutido", description: "Possibilidade de usar parte da própria carta de crédito como lance para antecipar a contemplação.", href: "/blog/lance-no-consorcio-como-funciona", linkLabel: "Como funciona o lance no consórcio", icon: <HandCoin /> },
  { title: "Consultoria completa", description: "Acompanhamento da simulação até a contemplação, com suporte da Revla em todas as etapas.", icon: <Headset /> },
];

const etapas = [
  { title: "1. Simulação gratuita", description: "Você nos conta seu objetivo e orçamento, sem custo ou compromisso." },
  { title: "2. Escolha do grupo e prazo", description: "Apresentamos as opções disponíveis entre as administradoras parceiras autorizadas pelo Banco Central." },
  { title: "3. Pagamento das parcelas", description: "Você paga as parcelas mensais, com opção de dar lances para antecipar a contemplação." },
  { title: "4. Contemplação", description: "Por sorteio mensal ou lance — a partir daí você recebe a carta de crédito." },
];

const depoimento = {
  name: "Ginaldo",
  city: "São Caetano do Sul",
  quote:
    "Pesquisei sozinho antes e me perdi entre tantas administradoras. A Revla comparou as opções pra mim e me mostrou o grupo com o prazo que fazia sentido pro meu bolso, sem pressa nenhuma.",
};

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
  {
    question: "Com quais administradoras de consórcio a Revla trabalha?",
    answer:
      "A Revla é homologada em três administradoras de consórcio: Ademicon, Porto Seguro e Rodobens. Comparamos as opções entre elas — taxa de administração, prazo e histórico de lances do grupo — para indicar a que faz mais sentido pro seu objetivo.",
  },
  {
    question: "O que é fundo de reserva no consórcio?",
    answer:
      "É um percentual cobrado junto com a parcela para cobrir eventuais inadimplências do grupo e garantir a saúde financeira do plano. Ele integra o custo total do consórcio, junto com a taxa de administração — sempre pedimos pra administradora detalhar os dois antes de você fechar.",
  },
  {
    question: "O que é lance embutido e lance livre?",
    answer:
      "Lance embutido é quando você usa uma parte da própria carta de crédito como lance, sem precisar desembolsar recursos extras — reduz o valor final da carta. Lance livre é um valor à parte, pago do seu bolso, que aumenta as chances de contemplação sem reduzir o crédito.",
  },
  {
    question: "Posso usar o FGTS para dar lance no consórcio de imóvel?",
    answer:
      "Sim, em consórcios de imóvel residencial é possível usar o saldo do FGTS como lance ou para complementar o pagamento após a contemplação, seguindo as regras do FGTS e da administradora escolhida. Explicamos as condições específicas na sua simulação.",
  },
  {
    question: "O que acontece depois que eu sou contemplado?",
    answer:
      "A Revla acompanha a etapa pós-contemplação: envio de documentação, avaliação do bem (imóvel ou veículo) e liberação do pagamento direto ao vendedor pela administradora. Você não fica sozinho nessa parte burocrática.",
  },
  {
    question: "A Revla tem registro na SUSEP?",
    answer:
      `Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº ${siteConfig.susep}, órgão federal que regula e fiscaliza a atividade de corretagem no Brasil.`,
  },
  {
    question: "A Revla atende em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital e consultoria remota para todo o Brasil. Já atendemos clientes em São Paulo e em cidades da região do ABC, como Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema e Mauá.",
  },
  {
    question: "Tem consórcio perto de mim?",
    answer:
      "Se você está em São Paulo, sim — nosso escritório fica na Avenida Paulista, com atendimento presencial na capital. Se estiver em outra cidade, atendemos do mesmo jeito consultivo pelo telefone e WhatsApp, sem você precisar se deslocar até um escritório físico.",
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
        eyebrow="Consórcios em São Paulo"
        title="Consórcio sem juros: simule sua carta de crédito contemplada agora"
        description="A Revla é corretora homologada em três das maiores administradoras do Brasil — Ademicon, Porto Seguro e Rodobens — e compara as opções entre elas para oferecer parcelas flexíveis e suporte completo, da simulação até a contemplação. Atendimento presencial em São Paulo e consultoria remota para todo o Brasil."
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
          <div className="mt-6">
            <Link
              href="/consorcios/e-confiavel"
              className="inline-flex text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              A Ademicon é confiável? Veja a resposta completa →
            </Link>
          </div>
        </Container>
      </section>

      <Testimonials title="Quem já fez consórcio com a Revla" items={[depoimento]} accentCards />

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
