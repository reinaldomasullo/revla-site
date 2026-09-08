import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { Compass } from "@/components/icons";
import { mainNav, whatsappLink } from "@/lib/site-config";

// Página 404 personalizada (Next.js já entregaria uma genérica por padrão,
// sem header/footer/marca — essa aqui usa o layout normal do site, já que
// not-found.tsx é renderizado dentro do RootLayout automaticamente). O
// Next.js já responde com status HTTP 404 de verdade nessa rota, então não
// precisa de nenhum ajuste extra de `robots` — mecanismos de busca tratam
// como "não existe", que é o comportamento correto.
export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página que você tentou acessar não existe ou foi movida. Veja os principais links do site da Revla Corretora.",
};

export default function NotFound() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-silver)]">
          <Compass className="h-8 w-8 text-[var(--color-primary)]" aria-hidden="true" />
        </span>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
          Erro 404
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-ink)]/70">
          O link pode estar desatualizado ou o endereço foi digitado errado. Vamos te ajudar a
          encontrar o que você precisa.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CTAButton href="/">Voltar para o início</CTAButton>
          <CTAButton
            href={whatsappLink("Olá! Cheguei numa página que não existe mais no site e gostaria de ajuda.")}
            external
            variant="secondary"
          >
            Falar com um consultor
          </CTAButton>
        </div>

        <div className="mt-14 w-full max-w-lg border-t border-[var(--color-border)] pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/65">
            Ou navegue direto para
          </p>
          <nav aria-label="Links principais" className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-primary)] hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
