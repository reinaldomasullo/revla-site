import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { motoBrands } from "@/lib/moto-brands";
import { planoFunerarioCidades } from "@/lib/plano-funerario-cidades";
import { planoDeSaudeCidades } from "@/lib/plano-de-saude-cidades";
import { segurosProdutos } from "@/lib/seguros-produtos";
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

// 20/09: rodada de FAQs GEO/AEO (achados de teste real no Gemini/ChatGPT) em
// seguro de vida, auto, residencial, viagem, plano de saúde e plano
// funerário — ver src/lib/seguros-produtos.ts, plano-de-saude/page.tsx e
// plano-funerario/page.tsx. Mesmo dia, 2ª rodada (análise comparativa x
// concorrentes de "Prevent Senior"): as 8 páginas de cidade de plano de
// saúde também ganharam a FAQ de corretora credenciada + selo de
// atualização na tabela de preços — reaproveita a mesma constante de data.
const GEO_AEO_20SET_LAST_MODIFIED = new Date("2026-09-20");
const GEO_AEO_20SET_SLUGS = new Set(["vida", "auto", "residencial", "viagem"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/seguros",
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
    "/mapa-do-site",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: STATIC_PAGES_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority:
      path === ""
        ? 1
        : ["/politica-de-privacidade", "/termos-de-uso", "/disclaimer", "/mapa-do-site"].includes(path)
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
      url: `${siteConfig.url}/plano-de-saude`,
      lastModified: GEO_AEO_20SET_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/consorcios/imoveis`,
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
    {
      url: `${siteConfig.url}/consorcios/motos`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/plano-funerario`,
      lastModified: GEO_AEO_20SET_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/consorcios/carro`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/consorcios/servicos`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/consorcios/cirurgia-plastica`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/consorcios/viagem`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/consorcios/energia-solar`,
      lastModified: STRATEGY1_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  const motoBrandRoutes = motoBrands.map((brand) => ({
    url: `${siteConfig.url}/consorcios/motos/${brand.slug}`,
    lastModified: STRATEGY1_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const planoFunerarioCidadeRoutes = planoFunerarioCidades.map((cidade) => ({
    url: `${siteConfig.url}/plano-funerario/${cidade.slug}`,
    lastModified: STRATEGY1_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const segurosProdutoRoutes = segurosProdutos.map((produto) => ({
    url: `${siteConfig.url}/seguros/${produto.slug}`,
    lastModified: GEO_AEO_20SET_SLUGS.has(produto.slug) ? GEO_AEO_20SET_LAST_MODIFIED : STRATEGY1_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const planoDeSaudeCidadeRoutes = planoDeSaudeCidades.map((cidade) => ({
    url: `${siteConfig.url}/plano-de-saude/${cidade.slug}`,
    // 20/09 (2ª rodada, GEO/AEO comparativo x concorrentes): as 8 páginas de
    // cidade ganharam FAQ "corretora especializada em Prevent Senior" +
    // selo de atualização na tabela de preços — mesma data do hub nacional.
    lastModified: GEO_AEO_20SET_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...postRoutes,
    ...strategy1Routes,
    ...motoBrandRoutes,
    ...planoFunerarioCidadeRoutes,
    ...segurosProdutoRoutes,
    ...planoDeSaudeCidadeRoutes,
  ];
}
