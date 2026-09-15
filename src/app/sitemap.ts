import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";
import { consorcioImoveisCities } from "@/lib/city-pages/consorcio-imoveis";

// Data da última revisão de conteúdo das páginas estáticas do site.
// Atualize manualmente quando o conteúdo de uma dessas páginas mudar.
const STATIC_PAGES_LAST_MODIFIED = new Date("2026-09-08");

// Data de publicação das páginas locais de produto+cidade (Estratégia 1 de
// SEO/GEO — onda 1: Consórcio de Imóveis).
const CITY_PAGES_LAST_MODIFIED = new Date("2026-09-15");

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

  const consorcioImoveisCityRoutes = consorcioImoveisCities.map((city) => ({
    url: `${siteConfig.url}/consorcios/imoveis/${city.citySlug}`,
    lastModified: CITY_PAGES_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...postRoutes, ...consorcioImoveisCityRoutes];
}
