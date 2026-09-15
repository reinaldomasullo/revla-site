import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

// Data da última revisão de conteúdo das páginas estáticas do site.
// Atualize manualmente quando o conteúdo de uma dessas páginas mudar.
const STATIC_PAGES_LAST_MODIFIED = new Date("2026-09-08");

// Data de publicação/reestruturação das páginas da Estratégia 1 de SEO/GEO.
// Onda 1 (15/09): Consórcio de Imóveis deixou de ser 4 páginas por cidade e
// virou uma página nacional única — sem sinal real de busca diferenciado por
// cidade nos dados do Keyword Planner (diferente do que se viu depois em
// Amparo Funeral/Plano Funerário, que manteve páginas de cidade por ter
// sinal real).
const STRATEGY1_LAST_MODIFIED = new Date("2026-09-15");

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

  const strategy1Routes = [
    {
      url: `${siteConfig.url}/consorcios/imoveis`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/consorcios/emprestimo-garantia-imovel`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/consorcios/emprestimo-garantia-veiculo`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/consorcios/e-confiavel`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  return [...staticRoutes, ...postRoutes, ...strategy1Routes];
}
