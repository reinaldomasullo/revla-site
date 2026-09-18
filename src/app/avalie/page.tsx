import type { Metadata } from "next";
import Container from "@/components/Container";
import RedirectTo from "@/components/RedirectTo";
import { buildMetadata } from "@/lib/site-config";

// /avalie: link curto de avaliação pra compartilhar com clientes (WhatsApp
// principalmente). Existe só por causa de um detalhe de UX: o link direto
// de avaliação do Google (g.page/r/.../review) tem um preview fixo em
// inglês ("would love your feedback...") quando compartilhado, que o
// Google não deixa customizar. Esta página tem seu próprio title/description
// em português (usados no preview do WhatsApp) e redireciona de verdade pro
// link do Google assim que carrega no navegador do visitante — ver
// RedirectTo.tsx. `noindex` porque não é conteúdo, é só um redirecionador.
const GOOGLE_REVIEW_URL = "https://g.page/r/CStAgxMUfJxFEBM/review";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Avalie a Revla no Google ⭐",
    description:
      "Sua opinião ajuda outras pessoas a encontrar a Revla. Deixe uma avaliação rápida no Google — leva menos de 1 minuto.",
    path: "/avalie",
  }),
  robots: { index: false, follow: false },
};

export default function AvaliePage() {
  return (
    <>
      <RedirectTo url={GOOGLE_REVIEW_URL} />
      <section className="flex min-h-[60vh] items-center py-16">
        <Container>
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-[var(--color-primary)]">
              Redirecionando para o Google…
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              Se a página não abrir sozinha em alguns segundos, clique no
              link abaixo pra deixar sua avaliação.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              className="mt-6 inline-block rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Avaliar a Revla no Google
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
