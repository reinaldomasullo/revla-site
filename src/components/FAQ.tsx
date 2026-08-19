import Container from "./Container";
import JsonLd from "./JsonLd";
import { renderInline, stripInlineMarkdown } from "@/lib/inline-markdown";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({
  title = "Perguntas frequentes",
  items,
}: {
  title?: string;
  items: FAQItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripInlineMarkdown(item.answer),
      },
    })),
  };

  return (
    <section className="py-12 sm:py-16" aria-labelledby="faq-heading">
      <JsonLd data={schema} />
      <Container>
        <h2
          id="faq-heading"
          className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--color-ink)]">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-[var(--color-primary)] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-ink)]/75">
                {renderInline(item.answer)}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
