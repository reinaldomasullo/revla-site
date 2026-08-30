import { ReactNode } from "react";
import Container from "./Container";

export default function Hero({
  eyebrow,
  title,
  description,
  children,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
  /** Opt-in only: tightens padding/spacing so the CTAs land in the first fold.
   *  Defaults to false so existing pages (ex.: /consorcios) keep their current look. */
  compact?: boolean;
}) {
  return (
    <section
      className={`border-b border-[var(--color-border)] bg-[var(--color-paper)] ${
        compact ? "py-8 sm:py-10" : "py-12 sm:py-16"
      }`}
    >
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-extrabold leading-tight tracking-tight text-[var(--color-primary)] ${
              compact
                ? "mt-2 text-3xl sm:text-4xl lg:text-5xl"
                : "mt-3 text-4xl sm:text-5xl"
            }`}
          >
            {title}
          </h1>
          <p
            className={`max-w-2xl leading-relaxed text-[var(--color-ink)]/75 ${
              compact ? "mt-3 text-base sm:text-lg" : "mt-5 text-lg"
            }`}
          >
            {description}
          </p>
          {children && (
            <div className={`flex flex-wrap gap-4 ${compact ? "mt-6" : "mt-8"}`}>
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
