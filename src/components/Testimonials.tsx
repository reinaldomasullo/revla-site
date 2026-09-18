import Container from "./Container";
import { Star } from "./icons";

export type Testimonial = {
  name: string;
  quote: string;
  /** Opcional — cidade do cliente, exibida junto ao nome quando informada.
   *  Reforça sinais de SEO local (menções reais de cidades atendidas). */
  city?: string;
};

export type GoogleRating = {
  /** Nota média (0-5). */
  rating: number;
  /** Número real de avaliações no Google Meu Negócio. */
  count: number;
  /** Link direto pra ficha do Google (avaliações reais), não pro funil de pedido de avaliação. */
  url: string;
};

export default function Testimonials({
  title = "Quem confia na Revla",
  items,
  accentCards = false,
  darkBg = false,
  googleRating,
}: {
  title?: string;
  items: Testimonial[];
  /** Opt-in only: adds a colored top border to each card. Defaults to false
   *  so existing pages (ex.: /amparo-funeral) keep their current look. */
  accentCards?: boolean;
  /** Opt-in only: navy section background with white heading. Defaults to
   *  false so existing pages (ex.: /amparo-funeral) keep their current look. */
  darkBg?: boolean;
  /** Opcional — selo com a nota real do Google Meu Negócio, exibido abaixo
   *  do título. Só passado explicitamente nas páginas onde faz sentido (ex.:
   *  home) — ver auditoria de 18/09/2026 (achado: nota do Google não
   *  aparecia em lugar nenhum do site como prova social). */
  googleRating?: GoogleRating;
}) {
  // Evita "sobrar" espaço vazio quando o número de depoimentos não fecha
  // uma linha de 3 colunas (ex.: 1, 2 ou 4 itens deixariam um card órfão).
  const gridClass =
    items.length === 1
      ? "max-w-md mx-auto grid-cols-1"
      : items.length === 2
        ? "max-w-3xl mx-auto sm:grid-cols-2"
        : items.length % 3 === 0
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2";

  return (
    <section
      className={`py-12 sm:py-16 ${darkBg ? "bg-[var(--color-primary)]" : "section-muted"}`}
      aria-labelledby="depoimentos-heading"
    >
      <Container>
        <h2
          id="depoimentos-heading"
          className={`text-2xl font-bold tracking-tight sm:text-3xl ${
            darkBg ? "text-white" : "text-[var(--color-primary)]"
          }`}
        >
          {title}
        </h2>
        {googleRating && (
          <a
            href={googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              darkBg
                ? "bg-white/10 text-white hover:bg-white/15"
                : "bg-[var(--color-paper)] text-[var(--color-primary)] border border-[var(--color-border)] hover:bg-white"
            }`}
          >
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  fill="currentColor"
                  stroke="none"
                  className="h-4 w-4 text-amber-400"
                />
              ))}
            </span>
            <span>
              {googleRating.rating.toFixed(1).replace(".", ",")} no Google
              <span className={darkBg ? "text-white/70" : "text-[var(--color-ink)]/60"}>
                {" "}
                · {googleRating.count}{" "}
                {googleRating.count === 1 ? "avaliação" : "avaliações"}
              </span>
            </span>
          </a>
        )}
        <div className={`mt-9 grid gap-6 ${gridClass}`}>
          {items.map((t) => (
            <figure
              key={t.name}
              className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-6 shadow-sm ${
                accentCards ? "border-t-4 border-t-[var(--color-blue-gradient)]" : ""
              }`}
            >
              <blockquote className="text-sm leading-relaxed text-[var(--color-ink)]/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-[var(--color-primary)]">
                {t.name}
                {t.city && <span className="font-normal text-[var(--color-ink)]/60">, {t.city}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
