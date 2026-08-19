export const siteConfig = {
  name: "Revla Corretora",
  legalName: "Revla Corretora de Seguros",
  description:
    "Corretora de seguros, planos de saúde, consórcios e planejamento patrimonial em São Paulo. Seguro de vida, plano de saúde, amparo funeral e consórcio com atendimento consultivo.",
  url: "https://revlacorretora.com.br",
  ogImage: "/og-image.jpg",
  whatsapp: "5511947263140",
  whatsappDisplay: "(11) 94726-3140",
  phoneDisplay: "(11) 98980-3819",
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
  social: {
    instagram: "https://instagram.com/revlacorretora",
    facebook: "https://facebook.com/revlacorretora",
    linkedin: "https://linkedin.com/company/revlacorretora",
    youtube: "https://youtube.com/@revlacorretora",
  },
  partners: [
    "Porto Seguro",
    "Icatu",
    "MAG Mongeral",
    "AZOS",
    "PASI",
    "Tokio Marine",
    "Capemisa",
  ],
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

/**
 * Shortens a long, fully-descriptive page title (used for the H1 and for
 * social sharing) down to something that fits a SERP <title> tag alongside
 * the " | Revla Corretora" template suffix, cutting at a word boundary.
 * Only meant for the <title> tag — og:title/H1 should keep the full text.
 */
export function truncateForTitleTag(title: string, maxLength = 58): string {
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
  { label: "Seguros", href: "/seguros" },
  { label: "Plano de Saúde", href: "/plano-de-saude" },
  { label: "Amparo Funeral", href: "/amparo-funeral" },
  { label: "Consórcios", href: "/consorcios" },
  { label: "Planejamento Patrimonial", href: "/planejamento-patrimonial" },
  { label: "Blog", href: "/blog" },
];
