import Container from "./Container";
import CTAButton from "./CTAButton";
import { whatsappLink } from "@/lib/site-config";

export default function ProductTeaser({
  id,
  eyebrow,
  title,
  description,
  highlights,
  note,
  ctaHref,
  ctaLabel = "Saiba mais",
  whatsappMessage,
  reverse = false,
  muted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  note?: string;
  ctaHref: string;
  ctaLabel?: string;
  whatsappMessage: string;
  reverse?: boolean;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 ${muted ? "section-muted" : ""}`}
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        <div
          className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
              {eyebrow}
            </p>
            <h2
              id={`${id}-heading`}
              className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-ink)]/75">
              {description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton
                href={whatsappLink(whatsappMessage)}
                external
                className="px-5 py-3 text-sm"
              >
                Falar com um consultor
              </CTAButton>
              <CTAButton href={ctaHref} variant="ghost" className="px-5 py-3 text-sm">
                {ctaLabel}
              </CTAButton>
            </div>
            {note && (
              <p className="mt-4 text-xs leading-relaxed text-[var(--color-ink)]/70">{note}</p>
            )}
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-paper)] px-4 py-3.5 text-sm leading-relaxed text-[var(--color-ink)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
