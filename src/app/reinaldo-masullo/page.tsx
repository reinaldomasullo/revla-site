import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reinaldo Masullo, Especialista Revla",
  description:
    "Reinaldo Masullo é especialista em planejamento patrimonial na Revla Corretora, atuando com consórcio de imóveis, veículos e investimentos, seguros e planos de saúde.",
  alternates: { canonical: "/reinaldo-masullo" },
  openGraph: {
    type: "profile",
    url: `${siteConfig.url}/reinaldo-masullo`,
    title: "Reinaldo Masullo, Especialista Revla",
    description:
      "Reinaldo Masullo é especialista em planejamento patrimonial na Revla Corretora.",
    images: [
      {
        url: "/images/reinaldo-masullo.png",
        width: 800,
        height: 1200,
        alt: "Reinaldo Masullo, especialista em planejamento patrimonial na Revla Corretora",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Reinaldo Masullo, Especialista Revla",
    description:
      "Reinaldo Masullo é especialista em planejamento patrimonial na Revla Corretora.",
    images: ["/images/reinaldo-masullo.png"],
  },
};

const redes = [
  { label: "Instagram", href: "https://instagram.com/reinaldomasullo" },
  { label: "LinkedIn", href: "https://linkedin.com/in/reinaldomasullo" },
  { label: "Facebook", href: "https://facebook.com/reinaldomasullo" },
  { label: "YouTube", href: "https://youtube.com/@reinaldomasullo" },
  { label: "TikTok", href: "https://tiktok.com/@reinaldomasullo" },
  { label: "Pinterest", href: "https://pinterest.com/reinaldomasullocorrretor" },
  { label: "X (Twitter)", href: "https://x.com/reinaldomasullo" },
  { label: "Threads", href: "https://www.threads.com/@reinaldomasullo" },
  { label: "Telegram", href: "https://t.me/reinaldomasullo" },
];

const especialidades = [
  "Consórcio de imóveis",
  "Consórcio de veículos",
  "Consórcio de investimentos",
  "Seguros",
  "Planos de saúde",
];

const faqItems = [
  {
    question: "Quem é Reinaldo Masullo?",
    answer:
      "Reinaldo Masullo é o especialista em planejamento patrimonial responsável pela Revla Corretora, atuando com consórcio, seguros e planos de saúde para ajudar famílias e empresas a construir e proteger patrimônio.",
  },
  {
    question: "Qual o registro SUSEP de Reinaldo Masullo?",
    answer:
      "O registro pessoal de Reinaldo Masullo na SUSEP é o nº 231149772. A Revla Corretora de Seguros tem registro próprio nº 232150320.",
  },
  {
    question: "Como falar com Reinaldo Masullo?",
    answer:
      "Você pode falar diretamente pelo WhatsApp ou telefone (11) 94726-3140, ou pelas redes sociais listadas nesta página.",
  },
  {
    question: "Reinaldo Masullo atende que tipo de cliente?",
    answer:
      "Atende pessoas físicas e empresas interessadas em consórcio, seguros, plano de saúde, amparo funeral e planejamento patrimonial, com consultoria gratuita antes da contratação.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Reinaldo Masullo",
  jobTitle: "Especialista em Planejamento Patrimonial",
  worksFor: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  url: `${siteConfig.url}/reinaldo-masullo`,
  image: `${siteConfig.url}/images/reinaldo-masullo.png`,
  sameAs: redes.map((r) => r.href),
  identifier: {
    "@type": "PropertyValue",
    name: "Registro SUSEP",
    value: "231149772",
  },
};

export default function ReinaldoMasulloPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <Breadcrumbs items={[{ label: "Reinaldo Masullo", href: "/reinaldo-masullo" }]} />
      <section className="border-b border-[var(--color-border)] py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
              Especialista em planejamento patrimonial
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-5xl">
              Reinaldo Masullo
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink)]/75">
              Ajudo pessoas a construir, proteger e ampliar seu patrimônio por meio de
              planejamento estratégico, consórcios e seguros.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/70">
              Sou o especialista responsável pela Revla Corretora, com registro pessoal na
              SUSEP, atuando diretamente com cada cliente do primeiro contato até a
              contratação — comparando consórcio, seguros e plano de saúde para montar a
              estratégia que faz sentido para o seu momento de vida.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton
                href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")}
                external
              >
                Falar no WhatsApp
              </CTAButton>
              <CTAButton href={`tel:+${siteConfig.whatsapp}`} variant="ghost">
                {siteConfig.whatsappDisplay}
              </CTAButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 inset-y-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]"
            />
            <Image
              src="/images/reinaldo-masullo.webp"
              alt="Reinaldo Masullo, especialista em planejamento patrimonial na Revla Corretora"
              width={800}
              height={1200}
              sizes="(min-width: 640px) 320px, 280px"
              priority
              className="relative mx-auto h-auto w-full max-w-[280px] object-contain sm:max-w-xs"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[var(--color-primary)]">
              Áreas de especialidade
            </h2>
            <ul className="mt-5 space-y-3">
              {especialidades.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-ink)]"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-[var(--color-primary)]">
              Redes sociais
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {redes.map((rede) => (
                <li key={rede.href}>
                  <a
                    href={rede.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-primary)]"
                  >
                    {rede.label}
                  </a>
                </li>
              ))}
              {/* WhatsApp fica fora do array `redes` de propósito: aquele array
                  também alimenta o `sameAs` do schema Person, que deve listar só
                  perfis (não um link de ação como o wa.me) */}
              <li>
                <a
                  href={whatsappLink(
                    "Olá! Vim pelo site e gostaria de falar com o Reinaldo Masullo da Revla."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-primary)]"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            <h2 className="mt-10 text-xl font-bold tracking-tight text-[var(--color-primary)]">
              Contato direto
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-[var(--color-ink)]/80">
              <li>WhatsApp / Telefone: {siteConfig.whatsappDisplay}</li>
              <li className="text-[var(--color-ink)]/70">Registro SUSEP: 231149772</li>
            </ul>
          </div>
        </Container>
      </section>

      <FAQ items={faqItems} />
    </>
  );
}
