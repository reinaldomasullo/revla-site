import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a Revla Corretora",
  description:
    "Conheça a Revla Corretora: atendimento consultivo em consórcios, seguros, plano de saúde, amparo funeral e planejamento patrimonial, com sede em São Paulo e atuação em todo o Brasil.",
  path: "/sobre-a-revla",
});

const diferenciais = [
  {
    title: "Atendimento consultivo",
    description:
      "Entendemos seu objetivo antes de sugerir qualquer produto — sem pressa e sem pressão para fechar.",
  },
  {
    title: "Comparação entre parceiros",
    description:
      "Pesquisamos entre seguradoras, administradoras de consórcio e operadoras de saúde parceiras para encontrar a opção mais vantajosa para você.",
  },
  {
    title: "Transparência total",
    description:
      "Explicamos com clareza taxas, carências, coberturas e condições — sem letra miúda escondida.",
  },
  {
    title: "Suporte pelo WhatsApp",
    description:
      "Tire dúvidas, peça uma simulação ou acione um sinistro diretamente pelo WhatsApp, com resposta ágil.",
  },
];

const produtos = [
  { title: "Consórcios", description: "Imóveis, veículos, motos, caminhões, máquinas, agro, investimento e serviços, sem juros.", href: "/consorcios" },
  { title: "Seguros", description: "Vida, auto, residencial, empresarial, responsabilidade civil e outras coberturas.", href: "/seguros" },
  { title: "Plano de Saúde", description: "Planos individuais, PME e para a melhor idade, com a Prevent Senior.", href: "/plano-de-saude" },
  { title: "Amparo Funeral", description: "Assistência funeral completa, com traslado e apoio 24 horas, pela PASI.", href: "/amparo-funeral" },
  { title: "Planejamento Patrimonial", description: "Estratégias para proteger e organizar seu patrimônio ao longo da vida.", href: "/planejamento-patrimonial" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre a Revla Corretora",
  url: `${siteConfig.url}/sobre-a-revla`,
  mainEntity: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.social),
  },
};

export default function SobreARevlaPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <Breadcrumbs items={[{ label: "Sobre a Revla", href: "/sobre-a-revla" }]} />
      <Hero
        eyebrow="Sobre a Revla"
        title="Uma corretora consultiva, não uma vitrine de produtos"
        description="A Revla Corretora ajuda famílias e empresas a proteger patrimônio e planejar o futuro com consórcios, seguros, plano de saúde, amparo funeral e planejamento patrimonial — comparando entre parceiros regulados para encontrar a opção certa para cada pessoa."
      >
        <CTAButton href={whatsappLink("Olá! Vim pelo site e gostaria de conhecer melhor a Revla.")} external>
          Falar com um consultor
        </CTAButton>
        <CTAButton href="/reinaldo-masullo" variant="ghost">
          Conhecer o fundador
        </CTAButton>
      </Hero>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Nossa missão
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/80">
            Com sede na Avenida Paulista, em São Paulo, e atendimento remoto para todo o
            Brasil, a {siteConfig.legalName} nasceu para simplificar decisões financeiras que
            costumam ser complicadas: qual consórcio escolher, quanto de seguro contratar, como
            comparar planos de saúde ou organizar o patrimônio da família. Em vez de vender um
            único produto de uma única empresa, pesquisamos entre administradoras de consórcio,
            seguradoras e operadoras de plano de saúde parceiras — todas regulamentadas pela
            SUSEP, pelo Banco Central do Brasil ou pela ANS, conforme o produto — para apresentar
            a opção que melhor se encaixa no seu momento e no seu orçamento.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/80">
            À frente da Revla está{" "}
            <Link href="/reinaldo-masullo" className="font-medium text-[var(--color-primary)] hover:underline">
              Reinaldo Masullo
            </Link>
            , corretor registrado na SUSEP, que também assina os conteúdos educativos publicados
            no{" "}
            <Link href="/blog" className="font-medium text-[var(--color-primary)] hover:underline">
              blog da Revla
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="Por que escolher a Revla" columns={4} items={diferenciais} />
      </section>

      <FeatureGrid
        title="O que oferecemos"
        description="Cinco frentes de proteção e planejamento, sempre com o mesmo atendimento consultivo."
        columns={3}
        items={produtos.map((p) => ({ ...p, linkLabel: `Conhecer ${p.title.toLowerCase()}` }))}
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Registro e regulação
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/80">
            A {siteConfig.legalName} (CNPJ {siteConfig.cnpj}) é registrada na Superintendência
            de Seguros Privados (SUSEP) sob o número {siteConfig.susep}. Os consórcios ofertados
            são administrados por administradoras autorizadas pelo Banco Central do Brasil (Lei
            nº 11.795/2008) — a Revla atua como corretora parceira, não como administradora. Para
            mais detalhes sobre nossos avisos legais, consulte o{" "}
            <Link href="/disclaimer" className="font-medium text-[var(--color-primary)] hover:underline">
              Disclaimer
            </Link>
            .
          </p>
        </Container>
      </section>

      <CTASection
        title="Quer conversar com a Revla?"
        description="Fale com um consultor e entenda qual solução faz mais sentido para o seu momento, sem compromisso."
        whatsappMessage="Olá! Vim pelo site e gostaria de conhecer melhor a Revla."
      />
    </>
  );
}
