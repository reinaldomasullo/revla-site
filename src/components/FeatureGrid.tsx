import Link from "next/link";
import Container from "./Container";

export type Feature = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export default function FeatureGrid({
  title,
  description,
  items,
  columns = 3,
}: {
  title: string;
  description?: string;
  items: Feature[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              {description}
            </p>
          )}
        </div>
        <div className={`mt-10 grid gap-6 ${cols}`}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--color-border)] p-6"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)]/15 text-sm font-bold text-[var(--color-accent-dark)]"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                {item.description}
              </p>
              {item.href && (
                <Link
                  href={item.href}
                  className="mt-3 inline-flex text-sm font-semibold text-[var(--color-secondary)] hover:underline"
                >
                  {item.linkLabel ?? `Saiba mais sobre ${item.title.toLowerCase()}`} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
