import Link from "next/link";
import Container from "./Container";
import { posts } from "@/lib/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPreview() {
  const latest = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="py-12 sm:py-16" aria-labelledby="blog-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="blog-heading"
              className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl"
            >
              Do blog da Revla
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--color-ink)]/70">
              Conteúdo educativo sobre seguros, plano de saúde, amparo funeral e consórcio.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Ver todos os artigos →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-[var(--color-border)] transition-colors hover:border-[var(--color-primary)]"
            >
              {post.coverImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.coverImage.src}
                  alt={post.coverImage.alt}
                  width={post.coverImage.width}
                  height={post.coverImage.height}
                  loading="lazy"
                  className="aspect-[1200/630] w-full object-cover"
                />
              )}
              <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
                {post.category}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-[var(--color-ink)]">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                {post.description}
              </p>
              <time
                dateTime={post.date}
                className="mt-4 block text-xs text-[var(--color-ink)]/70"
              >
                {formatDate(post.date)}
              </time>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
