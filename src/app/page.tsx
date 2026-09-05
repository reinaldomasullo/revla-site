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
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";

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
  },
  {
    title: "Consórcio de veículos",
    description:
      "Carta de crédito para carro novo ou usado, com lance livre ou embutido para acelerar a contemplação.",
  },
  {
    title: "Consórcio de motos",
    description: "Crédito facilitado para motocicletas, com parcelas menores que um financiamento tradicional.",
  },
  {
    title: "Consórcio de investimentos",
    description:
      "Crédito para diversificar patrimônio, sem juros, aplicável em imóveis, veículos ou outros bens.",
  },
  {
    title: "Consórcio de serviços",
    description: "Crédito para contratar reformas, eventos, viagens e outros serviços.",
  },
  {
    title: "Consórcio agro",
    description: "Crédito para maquinário, insumos e investimentos do agronegócio, com carência ajustada à safra.",
  },
  {
    title: "Consórcio de máquinas",
    description: "Crédito programado para aquisição de maquinário agrícola e industrial, sem juros.",
  },
];

const segurosSubprodutos = [
  {
    title: "Seguro de vida",
    description: "Indenização para a família em caso de morte ou invalidez, com coberturas para doenças graves.",
  },
  {
    title: "Seguro empresarial",
    description: "Proteção para patrimônio, faturamento e operação do seu negócio.",
  },
  {
    title: "Seguro residencial",
    description: "Cobertura para incêndio, roubo, danos elétricos e desastres naturais.",
  },
  {
    title: "Seguro condominial",
    description: "Proteção para áreas comuns e responsabilidade civil do condomínio.",
  },
  {
    title: "Seguro auto",
    description: "Cobertura para colisão, roubo, furto e responsabilidade civil do veículo.",
  },
  {
    title: "Seguro viagem",
    description: "Assistência médica, bagagem e imprevistos em viagens nacionais e internacionais.",
  },
  {
    title: "Seguro RC profissional",
    description: "Proteção contra erros e omissões no exercício da sua atividade profissional.",
  },
  {
    title: "Seguro celular",
    description: "Cobertura contra roubo, furto e quebra acidental do aparelho.",
  },
];

const testimonials = [
  {
    name: "Lucas Oliveira",
    quote:
      "Consegui minha carta de crédito para o imóvel novo sem pagar juros. A Revla comparou as opções entre administradoras e me ajudou a escolher o melhor plano de parcelas para o meu orçamento.",
  },
  {
    name: "Gabriel Santos",
    quote:
      "O seguro de vida que contratei com a Revla trouxe paz de espírito para mim e minha família. A equipe explicou detalhadamente todas as coberturas disponíveis antes de eu decidir.",
  },
  {
    name: "Eduardo Almeida",
    quote:
      "Trocar de plano de saúde parecia complicado, mas a Revla comparou as opções e me indicou a cobertura certa para a minha idade, com um valor que cabia no orçamento.",
  },
  {
    name: "Marisa Costa",
    quote:
      "Contratar o amparo funeral foi uma decisão de cuidado com a minha família. Saber que tudo já está resolvido antecipadamente traz uma tranquilidade que não tem preço.",
  },
  {
    name: "Fernanda Ribeiro",
    quote:
      "A Revla me ajudou a enxergar consórcio, seguro e plano de saúde como parte de uma única estratégia. Hoje sei exatamente como estou construindo e protegendo meu patrimônio, não são mais decisões isoladas.",
  },
  {
    name: "Rodrigo Nascimento",
    quote:
      "Segurei minha loja e minha casa com a Revla no mesmo atendimento. Compararam seguradoras e me explicaram cada cobertura, sem eu precisar entender nada de seguro antes.",
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
        <CTAButton href="/consorcios/calculadora" variant="ghost">
          Simular consórcio
        </CTAButton>
      </Hero>

      {/* Dobra 2 — Os 4 produtos */}
      <section className="bg-[var(--color-primary)] py-10 sm:py-14" aria-labelledby="produtos-heading">
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
      <section className="section-tint-red py-10 sm:py-14" aria-labelledby="consorcio-heading">
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
            {consorcioSubprodutos.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-secondary)]/15 text-xs font-bold text-[var(--color-secondary)]"
                  aria-hidden="true"
                >
                  {i + 1}
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

      {/* Dobra 4 — Seguros e subprodutos */}
      <section className="section-tint-blue py-10 sm:py-14" aria-labelledby="seguros-heading">
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
            {segurosSubprodutos.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)]/15 text-xs font-bold text-[var(--color-accent-dark)]"
                  aria-hidden="true"
                >
                  {i + 1}
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

      <section className="bg-[var(--color-primary)] py-8 sm:py-10" aria-label="Seguradoras parceiras">
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
        muted
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
        tint="blue"
      />

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
