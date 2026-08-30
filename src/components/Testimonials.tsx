import Container from "./Container";

export type Testimonial = {
  name: string;
  quote: string;
};

export default function Testimonials({
  title = "Quem confia na Revla",
  items,
  accentCards = false,
  darkBg = false,
}: {
  title?: string;
  items: Testimonial[];
  /** Opt-in only: adds a colored top border to each card. Defaults to false
   *  so existing pages (ex.: /amparo-funeral) keep their current look. */
  accentCards?: boolean;
  /** Opt-in only: navy section background with white heading. Defaults to
   *  false so existing pages (ex.: /amparo-funeral) keep their current look. */
  darkBg?: boolean;
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
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
