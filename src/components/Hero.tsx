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
      className={`border-b border-[var(--color-border)] bg-[var(--color-paper)] pt-6 sm:pt-8 ${
        compact ? "pb-8 sm:pb-10" : "pb-9 sm:pb-11"
      }`}
    >
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 font-extrabold leading-tight tracking-tight text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--color-ink)]/75 text-base sm:text-lg">
            {description}
          </p>
          {children && (
            <div className="mt-6 flex flex-wrap gap-4">{children}</div>
          )}
        </div>
      </Container>
    </section>
  );
}
