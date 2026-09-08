import Link from "next/link";

/**
 * Bloco de "espaço de anúncio" reservado no fluxo do conteúdo (dimensões
 * fixas, evita layout shift quando um anúncio real do Google AdSense
 * carregar). Por enquanto exibe uma peça promocional própria da Revla
 * (nenhum script de terceiro rodando ainda) — quando a conta AdSense for
 * aprovada, basta trocar o conteúdo interno de cada <HouseAd> pela unidade
 * real (<ins class="adsbygoogle">), mantendo o mesmo contêiner/rótulo.
 *
 * Rótulo "Publicidade": item já pensado para condizer com a exigência do
 * Google de que unidades de anúncio só podem ser rotuladas como "Anúncios"
 * ou "Links patrocinados" — aqui é conteúdo próprio, então usamos um rótulo
 * neutro que já deixa claro que é um espaço promocional, não conteúdo
 * editorial do artigo.
 */

export type HouseAdProduct = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export const HOUSE_AD_PRODUCTS: Record<string, HouseAdProduct> = {
  consorcios: {
    eyebrow: "Consórcios Revla",
    title: "Carta de crédito sem juros, a partir de R$ 40.000",
    description:
      "Imóveis, veículos, motos, máquinas e mais — sem juros, só taxa de administração. Simulação gratuita.",
    ctaLabel: "Simular meu consórcio",
    href: "/consorcios",
  },
  seguros: {
    eyebrow: "Seguros Revla",
    title: "Compare seguros entre seguradoras parceiras",
    description:
      "Vida, auto, residencial e empresarial — a Revla pesquisa entre parceiras reguladas pela SUSEP para achar a cobertura certa pra você.",
    ctaLabel: "Ver opções de seguro",
    href: "/seguros",
  },
  "plano-de-saude": {
    eyebrow: "Plano de Saúde Revla",
    title: "Plano de saúde com a Prevent Senior",
    description:
      "Planos individuais e para a melhor idade, com rede credenciada e atendimento consultivo da Revla.",
    ctaLabel: "Ver planos de saúde",
    href: "/plano-de-saude",
  },
  "amparo-funeral": {
    eyebrow: "Amparo Funeral Revla",
    title: "Amparo funeral com traslado e apoio 24 horas",
    description:
      "Assistência completa em um momento difícil, pela PASI — planos individuais, familiares e sênior.",
    ctaLabel: "Conhecer o amparo funeral",
    href: "/amparo-funeral",
  },
  "planejamento-patrimonial": {
    eyebrow: "Planejamento Patrimonial Revla",
    title: "Organize e proteja seu patrimônio",
    description:
      "Estratégias combinando consórcio, seguro e sucessão para proteger o que você constrói.",
    ctaLabel: "Falar sobre planejamento patrimonial",
    href: "/planejamento-patrimonial",
  },
};

const PRODUCT_KEYS = Object.keys(HOUSE_AD_PRODUCTS);

/** Escolhe um produto de forma estável a partir de uma string (slug do post
 *  + índice do bloco), pra variar entre os posts sem precisar configurar
 *  manualmente cada um. */
export function pickHouseAdProduct(seed: string): HouseAdProduct {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const key = PRODUCT_KEYS[hash % PRODUCT_KEYS.length];
  return HOUSE_AD_PRODUCTS[key];
}

export default function HouseAd({
  product,
  variant = "rectangle",
}: {
  product: HouseAdProduct;
  variant?: "rectangle" | "banner";
}) {
  const minHeight = variant === "rectangle" ? "min-h-[250px]" : "min-h-[120px]";

  return (
    <aside
      aria-label="Publicidade"
      className={`flex ${minHeight} flex-col justify-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-muted)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6`}
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-ink)]/40">
          Publicidade
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
          {product.eyebrow}
        </p>
        <h3 className="mt-1 text-lg font-bold tracking-tight text-[var(--color-primary)]">
          {product.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-ink)]/70">
          {product.description}
        </p>
      </div>
      <Link
        href={product.href}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
      >
        {product.ctaLabel}
      </Link>
    </aside>
  );
}
