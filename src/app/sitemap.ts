import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

// Data da última revisão de conteúdo das páginas estáticas do site.
// Atualize manualmente quando o conteúdo de uma dessas páginas mudar.
const STATIC_PAGES_LAST_MODIFIED = new Date("2026-09-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/seguros",
    "/plano-de-saude",
    "/amparo-funeral",
    "/consorcios",
    "/consorcios/calculadora",
    "/consorcios/calculadora-veiculos",
    "/consorcios/calculadora-financiamento",
    "/planejamento-patrimonial",
    "/sobre-a-revla",
    "/reinaldo-masullo",
    "/blog",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/disclaimer",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: STATIC_PAGES_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority:
      path === ""
        ? 1
        : ["/politica-de-privacidade", "/termos-de-uso", "/disclaimer"].includes(path)
          ? 0.3
          : 0.7,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
