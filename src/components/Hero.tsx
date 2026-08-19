import { ReactNode } from "react";
import Container from "./Container";

export default function Hero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-12 sm:py-16">
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/75">
            {description}
          </p>
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
