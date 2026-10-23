import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// /pontos (Pontos Revla Japão, 23/10/2026) é o atalho privado dos clientes:
// bloqueado em todos os grupos, porque um robô segue só o grupo com o nome
// dele e ignora o "*".
const disallow = ["/pontos"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      // Crawlers de IA liberados por padrão para GEO/AEO — ajuste se preferir bloquear.
      // Treinamento de modelos:
      { userAgent: "GPTBot", allow: "/", disallow },
      { userAgent: "ClaudeBot", allow: "/", disallow },
      { userAgent: "Google-Extended", allow: "/", disallow },
      { userAgent: "Meta-ExternalAgent", allow: "/", disallow },
      { userAgent: "Applebot-Extended", allow: "/", disallow },
      { userAgent: "CCBot", allow: "/", disallow },
      // Busca/citação em tempo real (o que aparece direto nas respostas):
      { userAgent: "OAI-SearchBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow },
      { userAgent: "Claude-SearchBot", allow: "/", disallow },
      { userAgent: "Claude-User", allow: "/", disallow },
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "Perplexity-User", allow: "/", disallow },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
