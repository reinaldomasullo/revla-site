import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts } from "@/lib/posts";
import { buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Conteúdo sobre seguros, planos de saúde, consórcios, amparo funeral e planejamento patrimonial, escrito pela equipe da Revla Corretora.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <Hero
        eyebrow="Blog"
        title="Conteúdo sobre seguros, saúde e planejamento patrimonial"
        description="Artigos escritos pela equipe da Revla para ajudar você a tomar decisões mais informadas sobre proteção e patrimônio."
      />

      <section className="pb-12 sm:pb-16">
        <Container>
          {posts.length === 0 ? (
            <p className="text-sm text-[var(--color-ink)]/60">
              Em breve, novos artigos por aqui.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] transition-colors hover:border-[var(--color-primary)]"
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
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
                      {post.category}
                    </span>
                    <h2 className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink)]/70">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                      Ler artigo
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
