import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import PostContent from "@/components/blog/PostContent";
import { getPostBySlug, posts } from "@/lib/posts";
import { siteConfig, truncateForTitleTag } from "@/lib/site-config";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: truncateForTitleTag(post.title),
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: "Reinaldo Masullo", url: `${siteConfig.url}/reinaldo-masullo` }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [`${siteConfig.url}/reinaldo-masullo`],
      images: post.coverImage
        ? [
            {
              url: post.coverImage.src,
              width: post.coverImage.width,
              height: post.coverImage.height,
              alt: post.coverImage.alt,
            },
          ]
        : undefined,
    },
    twitter: post.coverImage
      ? {
          card: "summary_large_image",
          title: post.title,
          description: post.description,
          images: [
            {
              url: post.coverImage.src,
              alt: post.coverImage.alt,
            },
          ],
        }
      : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: post.coverImage
      ? [
          {
            "@type": "ImageObject",
            url: `${siteConfig.url}${post.coverImage.src}`,
            width: post.coverImage.width,
            height: post.coverImage.height,
          },
        ]
      : undefined,
    author: {
      "@type": "Person",
      name: "Reinaldo Masullo",
      url: `${siteConfig.url}/reinaldo-masullo`,
      jobTitle: "Especialista em Planejamento Patrimonial",
      image: `${siteConfig.url}/images/reinaldo-avatar.jpg`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/revla-horizontal.svg`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <article className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <Link href="/reinaldo-masullo" aria-hidden="true" tabIndex={-1}>
              <Image
                src="/images/reinaldo-avatar.jpg"
                alt=""
                width={40}
                height={40}
                sizes="40px"
                className="h-10 w-10 rounded-full object-cover"
              />
            </Link>
            <p className="text-sm text-[var(--color-ink)]/70">
              Por{" "}
              <Link
                href="/reinaldo-masullo"
                className="font-medium text-[var(--color-primary)] hover:underline"
              >
                Reinaldo Masullo
              </Link>{" "}
              · Publicado em{" "}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
            {post.updated && post.updated !== post.date && (
              <>
                {" "}
                · Atualizado em{" "}
                <time dateTime={post.updated}>
                  {new Date(post.updated).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </>
            )}
            </p>
          </div>

          {post.coverImage && (
            <div className="mt-8">
              <Image
                src={post.coverImage.src}
                alt={post.coverImage.alt}
                width={post.coverImage.width}
                height={post.coverImage.height}
                sizes="(min-width: 768px) 768px, 100vw"
                priority
                className="w-full rounded-2xl border border-[var(--color-border)]"
              />
            </div>
          )}

          <div className="mt-8">
            <PostContent blocks={post.content} />
          </div>
        </Container>
      </article>

      {post.faq && post.faq.length > 0 && (
        <FAQ title="Perguntas frequentes sobre este assunto" items={post.faq} />
      )}

      <CTASection
        title="Quer uma orientação personalizada?"
        description="Fale com um consultor da Revla e tire suas dúvidas sem compromisso."
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
      />
    </>
  );
}
