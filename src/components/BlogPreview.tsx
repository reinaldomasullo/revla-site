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

// Mesma ordem usada nos outros blocos da home (produtos, header, footer):
// Consórcios, Seguros, Plano de Saúde, Amparo Funeral, Planejamento Patrimonial.
const CATEGORY_ORDER = [
  "Consórcios",
  "Seguros",
  "Plano de Saúde",
  "Amparo Funeral",
  "Planejamento Patrimonial",
];

export default function BlogPreview() {
  // Um post por categoria (o mais recente de cada), na ordem oficial —
  // evita mostrar 3 posts da mesma categoria só porque têm a mesma data.
  const latest = CATEGORY_ORDER.map((category) =>
    [...posts]
      .filter((post) => post.category === category)
      .sort((a, b) => (a.date < b.date ? 1 : -1))[0]
  ).filter((post): post is (typeof posts)[number] => Boolean(post));

  if (latest.length === 0) return null;

  return (
    <section
      className="section-tint-red pb-10 pt-6 sm:pb-14 sm:pt-8"
      aria-labelledby="blog-heading"
    >
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
              className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {post.coverImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.coverImage.src}
                  alt={post.coverImage.alt}
                  width={post.coverImage.width}
                  height={post.coverImage.height}
                  className="aspect-[1200/630] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
              <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-blue-gradient)]">
                {post.category}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-white">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {post.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <time dateTime={post.date} className="text-xs text-white/60">
                  {formatDate(post.date)}
                </time>
                <span className="text-xs font-semibold text-[var(--color-blue-gradient)] opacity-0 transition-opacity group-hover:opacity-100">
                  Ler mais →
                </span>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
