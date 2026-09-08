import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import ProductTeaser from "@/components/ProductTeaser";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { siteConfig, whatsappLink, buildMetadata, testimonials } from "@/lib/site-config";
import {
  House,
  Car,
  Motorcycle,
  TrendingUp,
  Sparkle,
  Plant,
  Machine,
  Heart,
  Briefcase,
  Building,
  Plane,
  Scale,
  Phone,
  Backpack,
  Handshake,
  BuildingUsers,
  ClockShort,
  Pill,
  ShoppingBag,
  VideoCall,
  ClipboardCheck,
  Ribbon,
  Tooth,
  Wrench,
  Brain,
  PawPrint,
} from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio, Seguros, Saúde e Patrimônio",
  description:
    "Corretora de consórcio, seguros, plano de saúde, amparo funeral e planejamento patrimonial em São Paulo. Compare as melhores opções com consultoria gratuita da Revla.",
  path: "/",
});

const products = [
  {
    title: "Consórcios",
    description:
      "Cartas de crédito para imóveis, veículos, motos, caminhões, máquinas, investimentos, serviços e agro, sem juros, com simulação gratuita.",
    href: "/consorcios",
    accent: "var(--color-secondary)",
  },
  {
    title: "Seguros",
    description:
      "Trabalhamos com todos os tipos de seguro — vida, auto, residencial, empresarial, condominial, viagem, RC profissional e celular — comparando as melhores seguradoras do Brasil.",
    href: "/seguros",
    accent: "var(--color-accent)",
  },
  {
    title: "Plano de Saúde",
    description:
      "Planos de saúde individuais, familiares e empresariais com a Prevent Senior, com rede própria e cobertura em São Paulo e região.",
    href: "/plano-de-saude",
    accent: "var(--color-blue-gradient)",
  },
  {
    title: "Amparo Funeral",
    description:
      "Assistência funeral individual, familiar e sênior com a PASI, com suporte imediato à família nos momentos mais difíceis.",
    href: "/amparo-funeral",
    accent: "var(--color-steel)",
  },
  {
    title: "Planejamento Patrimonial",
    description:
      "Estratégia que une consórcio para alavancar patrimônio, seguro para proteger seu patrimônio e plano de saúde para proteger sua vida, com acompanhamento consultivo.",
    href: "/planejamento-patrimonial",
    accent: "var(--color-accent-gradient)",
  },
];

const consorcioSubprodutos = [
  {
    title: "Consórcio de imóveis",
    description:
      "Crédito para comprar imóvel residencial ou comercial, sem juros, com parcelas ajustadas ao seu orçamento.",
    icon: <House />,
  },
  {
    title: "Consórcio de veículos",
    description:
      "Carta de crédito para carro novo ou usado, com lance livre ou embutido para acelerar a contemplação.",
    icon: <Car />,
  },
  {
    title: "Consórcio de motos",
    description: "Crédito facilitado para motocicletas, com parcelas menores que um financiamento tradicional.",
    icon: <Motorcycle />,
  },
  {
    title: "Consórcio de investimentos",
    description:
      "Crédito para diversificar patrimônio, sem juros, aplicável em imóveis, veículos ou outros bens.",
    icon: <TrendingUp />,
  },
  {
    title: "Consórcio de serviços",
    description: "Crédito para contratar reformas, eventos, viagens e outros serviços.",
    icon: <Sparkle />,
  },
  {
    title: "Consórcio agro",
    description: "Crédito para maquinário, insumos e investimentos do agronegócio, com carência ajustada à safra.",
    icon: <Plant />,
  },
  {
    title: "Consórcio de máquinas",
    description: "Crédito programado para aquisição de maquinário agrícola e industrial, sem juros.",
    icon: <Machine />,
  },
];

const segurosSubprodutos = [
  {
    title: "Seguro de vida",
    description: "Indenização para a família em caso de morte ou invalidez, com coberturas para doenças graves.",
    icon: <Heart />,
  },
  {
    title: "Seguro empresarial",
    description: "Proteção para patrimônio, faturamento e operação do seu negócio.",
    icon: <Briefcase />,
  },
  {
    title: "Seguro residencial",
    description: "Cobertura para incêndio, roubo, danos elétricos e desastres naturais.",
    icon: <House />,
  },
  {
    title: "Seguro condominial",
    description: "Proteção para áreas comuns e responsabilidade civil do condomínio.",
    icon: <Building />,
  },
  {
    title: "Seguro auto",
    description: "Cobertura para colisão, roubo, furto e responsabilidade civil do veículo.",
    icon: <Car />,
  },
  {
    title: "Seguro viagem",
    description: "Assistência médica, bagagem e imprevistos em viagens nacionais e internacionais.",
    icon: <Plane />,
  },
  {
    title: "Seguro RC profissional",
    description: "Proteção contra erros e omissões no exercício da sua atividade profissional.",
    icon: <Scale />,
  },
  {
    title: "Seguro celular",
    description: "Cobertura contra roubo, furto e quebra acidental do aparelho.",
    icon: <Phone />,
  },
  {
    title: "Agrovida",
    description: "Seguro de vida da PASI para produtores rurais e colaboradores do agronegócio, com coberturas específicas do setor.",
    icon: <Plant />,
  },
  {
    title: "Seguro Estagiários",
    description: "Seguro obrigatório por lei para estagiários, com planos Básico e Plus da PASI, cobrindo morte acidental e invalidez.",
    icon: <Backpack />,
  },
  {
    title: "Convenções Coletivas (CCT)",
    description: "Seguro de vida em grupo negociado por sindicato, com indenização rápida e sem limite de idade para o ativo.",
    icon: <Handshake />,
  },
  {
    title: "Seguro para PME",
    description: "Seguro de vida em grupo da PASI para micro, pequenas e médias empresas, a partir de 1 colaborador.",
    icon: <BuildingUsers />,
  },
  {
    title: "AP Temporário",
    description: "Seguro de acidentes pessoais por prazo determinado, ideal para viagens, eventos ou períodos específicos.",
    icon: <ClockShort />,
  },
];

// Demais produtos e benefícios PASI que ainda não são "seguro" no sentido
// clássico (são assistências/benefícios agregados) — cada um vai ganhar
// página própria depois; por ora só damos visibilidade na home.
const solucoesPasi = [
  {
    title: "Medicamento Garantido",
    description: "Crédito mensal via Pix para compra de medicamentos com receita, em qualquer farmácia do Brasil.",
    icon: <Pill />,
  },
  {
    title: "PASI Farma",
    description: "Compra de medicamentos, vitaminas e suplementos a preço de custo, sem teto de uso, com entrega em casa.",
    icon: <ShoppingBag />,
  },
  {
    title: "Telemedicina PASI",
    description: "9 modalidades de consulta médica remota, com pronto atendimento, especialidades e descontos em farmácia e exames.",
    icon: <VideoCall />,
  },
  {
    title: "PASI NR-1",
    description: "Solução de compliance para a Norma Regulamentadora 1, com gestão de riscos psicossociais para empresas.",
    icon: <ClipboardCheck />,
  },
  {
    title: "Amparo Oncológico",
    description: "Produtos dermocosméticos de apoio ao tratamento oncológico para o segurado em tratamento.",
    icon: <Ribbon />,
  },
  {
    title: "Sorriso PASI",
    description: "Plano odontológico da PASI, com rede credenciada para tratamentos preventivos e corretivos.",
    icon: <Tooth />,
  },
  {
    title: "Assistência Residencial",
    description: "Suporte para emergências domésticas, como problemas elétricos, hidráulicos e chaveiro.",
    icon: <Wrench />,
  },
  {
    title: "Assistência Empresarial",
    description: "Suporte para emergências no imóvel da empresa, com a mesma lógica da assistência residencial.",
    icon: <Building />,
  },
  {
    title: "Amparo Psicossocial",
    description: "Atendimento online com psicologia, psiquiatria, nutrição, neurologia, geriatria e educação física.",
    icon: <Brain />,
  },
  {
    title: "PASI PET",
    description: "Plano de cuidados para o seu animal de estimação, dentro do ecossistema de benefícios PASI.",
    icon: <PawPrint />,
  },
];

const faqItems = [
  {
    question: "A Revla é uma seguradora ou uma corretora?",
    answer:
      "A Revla é uma corretora de seguros registrada na SUSEP. Comparamos opções entre seguradoras e administradoras parceiras — como Ademicon, Porto Seguro, Icatu, MAG Mongeral, AZOS, PASI, Tokio Marine e Prevent Senior — para encontrar a que melhor atende cada cliente, sem custo pela consultoria.",
  },
  {
    question: "Quanto custa falar com um consultor da Revla?",
    answer:
      "A simulação e a consultoria inicial são gratuitas e sem compromisso. Você só contrata se decidir que o produto apresentado faz sentido para você.",
  },
  {
    question: "A Revla atende em quais regiões?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, e atendemos clientes de todo o Brasil por telefone, WhatsApp e videochamada. Alguns produtos, como os planos de saúde Prevent Senior, têm cobertura regional — fale com um consultor para confirmar a disponibilidade na sua cidade.",
  },
  {
    question: "Quais produtos a Revla oferece?",
    answer:
      "Seguros de todos os tipos (vida, auto, residencial, empresarial, condominial, viagem, RC profissional e celular), plano de saúde, amparo funeral, consórcios de imóveis, veículos, motos, investimentos, serviços, agro e máquinas, e planejamento patrimonial — a estratégia que une consórcio, seguro e plano de saúde.",
  },
  {
    question: "A Revla tem registro na SUSEP?",
    answer: `Sim. A Revla Corretora tem registro SUSEP nº ${siteConfig.susep}, e Reinaldo Masullo, responsável técnico, tem registro pessoal nº 231149772.`,
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: product.title,
      description: product.description,
      url: `${siteConfig.url}${product.href}`,
      provider: {
        "@type": "InsuranceAgency",
        name: siteConfig.legalName,
      },
    },
  })),
};

export default function HomePage() {
  return (
    <>
      {/* Dobra 1 — Hero */}
      <Hero
        compact
        eyebrow="Corretora de consórcio e planejamento patrimonial em São Paulo"
        title="Consórcio, seguros, plano de saúde e planejamento patrimonial para você e sua família"
        description="A Revla Corretora compara e contrata consórcio, seguros, plano de saúde, amparo funeral e planejamento patrimonial — unindo proteção e construção de patrimônio, com consultoria gratuita do início ao fim."
      >
        <CTAButton
          href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")}
          external
        >
          Falar com um consultor
        </CTAButton>
        <CTAButton href="/consorcios" variant="ghost">
          Simular consórcio
        </CTAButton>
      </Hero>

      {/* Dobra 2 — Os 4 produtos */}
      <section className="bg-[var(--color-primary)] py-8 sm:py-10" aria-labelledby="produtos-heading">
        <JsonLd data={servicesSchema} />
        <Container>
          <h2
            id="produtos-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Consórcio, seguros, plano de saúde, amparo funeral e planejamento patrimonial
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderTopWidth: 4, borderTopColor: product.accent }}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: product.accent }}
                  aria-hidden="true"
                >
                  {product.title.charAt(0)}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-ink)]">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                  {product.description}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)]"
                >
                  Saiba mais
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Dobra 3 — Consórcio e subprodutos */}
      <section className="section-tint-red py-8 sm:py-10" aria-labelledby="consorcio-heading">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
              Consórcios
            </p>
            <h2
              id="consorcio-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl"
            >
              Consórcio sem juros para alavancar seu patrimônio
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              A Revla trabalha com consórcio de imóveis, veículos, motos, investimentos,
              serviços, agro e máquinas — uma carta de crédito sem juros, com disciplina
              financeira, que também é uma das ferramentas do{" "}
              <Link href="/planejamento-patrimonial" className="underline hover:no-underline">
                planejamento patrimonial
              </Link>{" "}
              da Revla.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {consorcioSubprodutos.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-silver)] text-[var(--color-primary)] [&>svg]:h-4.5 [&>svg]:w-4.5"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton
              href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")}
              external
              className="px-5 py-3 text-sm"
            >
              Iniciar simulação gratuita
            </CTAButton>
            <CTAButton href="/consorcios" variant="ghost" className="px-5 py-3 text-sm">
              Ver todos os consórcios
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Dobra 3.5 — Consórcio x financiamento (comparativo) */}
      <ProductTeaser
        id="consorcio-x-financiamento"
        eyebrow="Consórcio de Imóveis x Financiamento"
        title="Consórcio ou financiamento: qual compensa mais para comprar seu imóvel?"
        description="Os dois caminhos levam ao mesmo imóvel, mas o custo total até a quitação pode ser bem diferente. Nossa calculadora compara o consórcio com o financiamento pelo SFH, nos sistemas SAC e SACRE, simulando parcelas, juros e o valor final de cada opção lado a lado — com números, não achismo."
        highlights={[
          "Consórcio sem juros — só taxa administrativa",
          "Financiamento SFH: entrada de 20%, taxa + TR",
          "Compare o total pago até a quitação em cada opção",
          "Simulação gratuita, leva menos de 1 minuto",
        ]}
        ctaHref="/consorcios/calculadora-financiamento"
        ctaLabel="Usar a calculadora comparativa"
        whatsappMessage="Olá! Vim pelo site e quero entender se o consórcio ou o financiamento compensa mais para comprar meu imóvel."
      />

      {/* Dobra 3.6 — Consórcio de veículos x financiamento (comparativo) */}
      <ProductTeaser
        id="consorcio-veiculos-x-financiamento"
        eyebrow="Consórcio de Veículo x Financiamento"
        title="Consórcio ou financiamento: qual compensa mais para comprar seu veículo?"
        description="No consórcio de veículo, a parcela pode ser reduzida nos primeiros 24 meses e não há juros — só taxa administrativa. Já no financiamento tradicional (Tabela Price) o crédito sai na hora, mas com juros embutidos em cada parcela. Nossa calculadora simula os dois lado a lado para você comparar o total pago em cada opção."
        highlights={[
          "Consórcio sem juros — só taxa administrativa de 16%",
          "Parcela reduzida nos primeiros 24 meses do consórcio",
          "Financiamento tradicional simulado pela Tabela Price",
          "Compare o total pago em cada opção, simulação gratuita",
        ]}
        ctaHref="/consorcios/calculadora-veiculos"
        ctaLabel="Usar a calculadora comparativa"
        whatsappMessage="Olá! Vim pelo site e quero entender se o consórcio ou o financiamento compensa mais para comprar meu veículo."
        reverse
        muted
      />

      {/* Dobra 4 — Seguros e subprodutos */}
      <section className="py-8 sm:py-10" aria-labelledby="seguros-heading">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
              Seguros
            </p>
            <h2
              id="seguros-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl"
            >
              Seguros para proteger você, sua família e seu patrimônio
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              Trabalhamos com todos os tipos de seguro, comparando as melhores seguradoras do
              Brasil para encontrar a cobertura certa para você, sua família ou sua empresa —
              o seguro certo é a base da proteção patrimonial dentro do{" "}
              <Link href="/planejamento-patrimonial" className="underline hover:no-underline">
                planejamento patrimonial
              </Link>
              .
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {segurosSubprodutos.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-silver)] text-[var(--color-primary)] [&>svg]:h-4.5 [&>svg]:w-4.5"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton
              href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")}
              external
              className="px-5 py-3 text-sm"
            >
              Cotar seguro
            </CTAButton>
            <CTAButton href="/seguros" variant="ghost" className="px-5 py-3 text-sm">
              Ver todos os seguros
            </CTAButton>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-primary)] py-6 sm:py-8" aria-label="Seguradoras parceiras">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-white/60">
            Seguradoras e administradoras parceiras
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {siteConfig.partners.map((partner) => (
              <span key={partner} className="text-sm font-medium text-white/85">
                {partner}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Dobra 5 — Plano de Saúde */}
      <ProductTeaser
        id="plano-de-saude"
        eyebrow="Plano de Saúde"
        title="Plano de saúde Prevent Senior, com rede própria em São Paulo"
        description="Trabalhamos com os planos de saúde da Prevent Senior, individuais, familiares e empresariais, com rede própria e parceria com a Sancta Maggiore. Cobertura ambulatorial e hospitalar, com carência reduzida para doenças preexistentes — proteger a vida é também proteger o patrimônio da família contra despesas médicas inesperadas."
        highlights={[
          "Rede própria Prevent Senior + Sancta Maggiore",
          "Cobertura em São Paulo, ABC, Baixada Santista e região",
          "Carência de 180 dias para doenças preexistentes",
          "Teleconsulta incluída no plano",
        ]}
        note="Valores a partir de R$ 759,84/mês (referência, sujeito a faixa etária e atualização mensal) — fale com um consultor para a tabela vigente."
        ctaHref="/plano-de-saude"
        ctaLabel="Saiba mais sobre plano de saúde"
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
        tint="blue"
      />

      {/* Dobra 6 — Amparo Funeral */}
      <ProductTeaser
        id="amparo-funeral"
        eyebrow="Amparo Funeral"
        title="Amparo funeral PASI, sem necessidade de vínculo"
        description="Trabalhamos com o Amparo Funeral da PASI — também conhecido como assistência funeral ou plano funeral — com três modalidades de contratação e suporte imediato à família nos momentos mais difíceis, em qualquer lugar do Brasil."
        highlights={[
          "3 modalidades: Individual, Familiar e Sênior (até 85 anos)",
          "Capitais de R$ 5.000, R$ 7.000 ou R$ 10.000",
          "Traslado, urna e trâmites administrativos inclusos",
          "Atendimento 24 horas em todo o Brasil",
        ]}
        ctaHref="/amparo-funeral"
        ctaLabel="Saiba mais sobre amparo funeral"
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
        reverse
      />

      {/* Dobra 6.5 — Mais soluções PASI (benefícios/assistências, além do amparo funeral) */}
      <section className="section-tint-silver py-8 sm:py-10" aria-labelledby="pasi-heading">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">
              Soluções PASI
            </p>
            <h2
              id="pasi-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl"
            >
              Mais soluções PASI para você e sua empresa
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              Além do amparo funeral, a PASI oferece um catálogo de produtos e assistências para
              pessoas físicas e empresas. Em breve, cada um vai ganhar sua própria página com
              todos os detalhes — por enquanto, fale com um consultor para saber mais.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solucoesPasi.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-muted)] text-[var(--color-primary)] [&>svg]:h-4.5 [&>svg]:w-4.5"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton
              href={whatsappLink("Olá! Vim pelo site e gostaria de saber mais sobre as soluções PASI.")}
              external
              className="px-5 py-3 text-sm"
            >
              Falar sobre soluções PASI
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Dobra 7 — Depoimentos */}
      <Testimonials items={testimonials} accentCards darkBg />

      {/* Dobra 8 — FAQ genérico */}
      <FAQ items={faqItems} />

      {/* Dobra 9 — Blog */}
      <BlogPreview />

      <CTASection
        title="Quer alavancar patrimônio ou deseja proteger o que importa?"
        description="Fale agora com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
      />
    </>
  );
}
