export const siteConfig = {
  name: "Revla Corretora",
  legalName: "Revla Corretora de Seguros",
  description:
    "Corretora de consórcios, seguros, plano de saúde e planejamento patrimonial em São Paulo, com atendimento consultivo em todo o Brasil.",
  // Versão institucional mais longa (mesmo texto usado no Google Meu Negócio e
  // nas redes sociais) — usada no parágrafo visível do rodapé, não na meta tag
  // de SEO (que fica curta de propósito para não ser cortada no Google).
  longDescription:
    "Corretora especializada em Consórcios (Imóveis, Veículos, Motos, Caminhões, Máquinas, Agro, Investimento e Serviços) e Planejamento Patrimonial — alternativas inteligentes ao financiamento, sem juros, para investir, formar patrimônio, comprar um imóvel ou expandir o negócio. Também oferecemos Previdência Privada, Seguro de Vida, Seguro de Vida Resgatável, Seguro Empresarial, Seguro Residencial, Seguro Auto, Seguro Moto, Seguro Fiança, Planos de Saúde e Odontológicos para famílias, empresas e melhor idade. Atendimento consultivo presencial em São Paulo e remoto para todo o Brasil.",
  url: "https://revlacorretora.com.br",
  ogImage: "/og-image.jpg",
  whatsapp: "5511947263140",
  whatsappDisplay: "(11) 94726-3140",
  email: "contato@revlacorretora.com.br",
  address: {
    street: "Avenida Paulista, 1471 - Conj. 511",
    district: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    zip: "01311-927",
    country: "BR",
  },
  susep: "232150320",
  cnpj: "52.139.303/0001-93",
  businessHoursDisplay: "Seg. a sex., 8h às 19h · Sáb., 8h às 13h",
  social: {
    instagram: "https://instagram.com/revlacorretora",
    facebook: "https://facebook.com/revlacorretora",
    linkedin: "https://linkedin.com/company/revlacorretora",
    youtube: "https://youtube.com/@revlacorretora",
  },
  partners: [
    "Ademicon",
    "Porto Seguro",
    "Icatu",
    "MAG Mongeral",
    "AZOS",
    "PASI",
    "Tokio Marine",
    "Prevent Senior",
  ],
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

/**
 * Shortens a long, fully-descriptive page title (used for the H1 and for
 * social sharing) down to something that fits a SERP <title> tag alongside
 * the " | Revla Corretora" template suffix (18 chars), cutting at a word
 * boundary. Budget: 40 chars here + 18 for the suffix ≈ 58-60 chars total,
 * within Google/Bing's recommended title length (avoids "title too long"
 * warnings in Bing Webmaster Tools' site audit).
 * Only meant for the <title> tag — og:title/H1 should keep the full text.
 */
export function truncateForTitleTag(title: string, maxLength = 40): string {
  if (title.length <= maxLength) return title;
  const cut = title.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 30 ? lastSpace : maxLength).trimEnd()}…`;
}

/**
 * Builds consistent per-page metadata (title, description, canonical,
 * Open Graph and Twitter Card) so every route gets its own accurate
 * og:url/og:title/og:description instead of silently inheriting the
 * root layout's values.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}) {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      locale: "pt_BR",
      siteName: siteConfig.name,
      url,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
  };
}

export const mainNav = [
  { label: "Início", href: "/" },
  { label: "Consórcios", href: "/consorcios" },
  { label: "Seguros", href: "/seguros" },
  { label: "Plano de Saúde", href: "/plano-de-saude" },
  { label: "Amparo Funeral", href: "/amparo-funeral" },
  { label: "Planejamento Patrimonial", href: "/planejamento-patrimonial" },
  { label: "Blog", href: "/blog" },
];
