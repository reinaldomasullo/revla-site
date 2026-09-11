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
  // Canal do Encarregado de Dados (DPO), exigido pelo art. 41 da LGPD —
  // usado na Política de Privacidade para pedidos relacionados a dados
  // pessoais (acesso, correção, exclusão etc.), separado do e-mail geral.
  lgpdEmail: "lgpd@revlacorretora.com.br",
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
  // App ID do projeto "Revla Corretora" no Cusdis (sistema de comentários do
  // blog, moderado, sem exigir login do visitante) — painel em cusdis.com.
  cusdisAppId: "47fc127f-a05b-441b-bbdb-b5f72b8300e8",
  // ID de métricas do Google Analytics 4 (propriedade "Revla Corretora").
  // Carregado só depois que o visitante aceita cookies analíticos no banner
  // de consentimento (CookieConsent.tsx) — ver GoogleAnalytics.tsx.
  gaMeasurementId: "G-RE8BLMM9NF",
  // ID da tag do Google Ads (conta "Revla Corretora", Central de dados >
  // Tag do Google). Mesmo carregamento consent-gated do GA4 — ver
  // GoogleAnalytics.tsx. Ativa remarketing/observação de conversões; eventos
  // de conversão específicos (ex.: clique no WhatsApp) usam esse ID + um
  // rótulo de conversão criado à parte no Google Ads.
  googleAdsId: "AW-11443702133",
  // Rótulo da ação de conversão "Contato Whatsapp" (Google Ads > Conversões).
  // Disparado no clique de qualquer link `wa.me` do site — ver
  // GoogleAnalytics.tsx (listener de clique global, delegado no document).
  googleAdsWhatsappConversionLabel: "ep5PCP7Iu_McEPWS5NAq",
  // ID do Meta Pixel (Business Manager "revlacorretora" > Conjuntos de dados >
  // "Revla Corretora - Site Principal"). Já existia e tinha rodado no site
  // antigo em WordPress até a migração pro Next.js, quando ficou "órfão"
  // (parou de receber eventos). Reinstalado aqui no mesmo padrão
  // consent-gated do GA4/Google Ads — ver MetaPixel.tsx. Sem relação com a
  // campanha de Meta Ads que usa Formulário Instantâneo nativo + WhatsApp
  // (esse fluxo roda inteiro dentro do Meta, nunca passa pelo site).
  metaPixelId: "944350138689081",
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
    "Junto",
    "Suhai",
    "Prevent Senior",
  ],
};

// Depoimentos reais de clientes (copy redigida a partir do relato de cada
// um, aprovada por eles antes de publicar). Fonte única: usada tanto na
// seção visual "Quem confia na Revla" (home) quanto no schema de avaliação
// (layout.tsx) — nota 5/5 confirmada pela Revla para todos.
export const testimonials = [
  {
    name: "Leonardo",
    quote:
      "Eu não sabia que dava pra usar consórcio como estratégia de investimento até conversar com a Revla. Me explicaram tudo com calma, sem empurrar nada, e hoje entendo exatamente como funciona cada parcela.",
  },
  {
    name: "Ginaldo",
    quote:
      "Pesquisei sozinho antes e me perdi entre tantas administradoras. A Revla comparou as opções pra mim e me mostrou o grupo com o prazo que fazia sentido pro meu bolso, sem pressa nenhuma.",
  },
  {
    name: "Paulo",
    quote:
      "Eu tinha interesse em uma cobertura específica, diária por incapacidade temporária, caso precisasse ficar afastado do trabalho por algum motivo. A Revla montou meu seguro de vida já incluindo essa cobertura, e me explicaram cada detalhe com muita paciência.",
  },
  {
    name: "Aurencie",
    quote:
      "Passei por um momento muito difícil no ano passado e o amparo funeral foi acionado exatamente como contratado. A equipe da Revla esteve ao meu lado com todo o cuidado e respeito que eu precisava naquele momento.",
  },
  {
    name: "Vinicius",
    quote:
      "Toda vez que tive dúvida sobre o meu consórcio de imóvel, fui respondido rápido pelo WhatsApp, sem enrolação. Isso fez toda diferença pra eu me sentir seguro na decisão.",
  },
  {
    name: "Walmir",
    quote:
      "O que mais me chamou atenção foi a transparência: me mostraram exatamente quanto era taxa de administração e quanto ia pro crédito, sem letra miúda. Isso me deu confiança pra fechar.",
  },
];

// Lista simples (rótulo + link) dos canais oficiais de redes sociais —
// usada nas páginas institucionais/legais (Política de Privacidade, Termos
// de Uso, Disclaimer) para orientar o usuário sobre onde nos encontrar de
// verdade e alertar contra perfis falsos. O Footer usa sua própria lista
// (com ícones SVG); esta é a versão só de texto.
export const socialChannels = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "YouTube", href: siteConfig.social.youtube },
];

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
