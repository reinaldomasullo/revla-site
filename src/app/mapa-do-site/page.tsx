import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/site-config";
import { motoBrands } from "@/lib/moto-brands";
import { segurosProdutos } from "@/lib/seguros-produtos";
import { planoDeSaudeCidades } from "@/lib/plano-de-saude-cidades";
import { planoFunerarioCidades } from "@/lib/plano-funerario-cidades";
import { posts } from "@/lib/posts";

// Mapa do Site (/mapa-do-site): página de navegação HTML com todos os links
// reais do site, agrupados por categoria. Não substitui o sitemap.xml (que é
// pra buscador) — complementa o footer, que só linka os hubs principais.
// Toda página programática (marca de moto, produto de seguro, cidade de
// plano de saúde/funerário) fica alcançável em 2 cliques a partir de
// qualquer lugar do site, em vez de só via o hub específico. Gerado a partir
// das mesmas fontes de dados usadas nas páginas reais — nunca lista hardcoded
// à parte, pra nunca ficar desatualizado quando uma onda nova for publicada.

export const metadata: Metadata = buildMetadata({
  title: "Mapa do Site",
  description:
    "Todas as páginas do site da Revla: consórcios, seguros, plano de saúde, plano funerário, calculadoras, blog e institucional.",
  path: "/mapa-do-site",
});

type LinkItem = { label: string; href: string };

const institucional: LinkItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre a Revla", href: "/sobre-a-revla" },
  { label: "Reinaldo Masullo", href: "/reinaldo-masullo" },
  { label: "Planejamento Patrimonial", href: "/planejamento-patrimonial" },
  { label: "Blog", href: "/blog" },
];

const consorcios: LinkItem[] = [
  { label: "Consórcios (hub)", href: "/consorcios" },
  { label: "Consórcio de Imóveis", href: "/consorcios/imoveis" },
  { label: "Consórcio de Carro", href: "/consorcios/carro" },
  { label: "Consórcio de Motos (hub)", href: "/consorcios/motos" },
  ...motoBrands.map((b) => ({ label: `Consórcio de Moto ${b.name}`, href: `/consorcios/motos/${b.slug}` })),
  { label: "Consórcio de Serviços (hub)", href: "/consorcios/servicos" },
  { label: "Consórcio para Cirurgia Plástica", href: "/consorcios/cirurgia-plastica" },
  { label: "Consórcio para Viagem", href: "/consorcios/viagem" },
  { label: "Consórcio de Energia Solar", href: "/consorcios/energia-solar" },
  { label: "A Ademicon é confiável?", href: "/consorcios/e-confiavel" },
  { label: "Calculadora de Consórcio de Imóveis", href: "/consorcios/calculadora" },
  { label: "Calculadora Consórcio x Financiamento de Veículos", href: "/consorcios/calculadora-veiculos" },
  { label: "Calculadora Consórcio x Financiamento", href: "/consorcios/calculadora-financiamento" },
];

const seguros: LinkItem[] = [
  { label: "Seguros (hub)", href: "/seguros" },
  ...segurosProdutos.map((p) => ({ label: p.nome, href: `/seguros/${p.slug}` })),
];

const planoDeSaude: LinkItem[] = [
  { label: "Plano de Saúde (hub)", href: "/plano-de-saude" },
  ...planoDeSaudeCidades.map((c) => ({ label: `Plano de Saúde em ${c.nome}`, href: `/plano-de-saude/${c.slug}` })),
];

const planoFunerario: LinkItem[] = [
  { label: "Plano Funerário (hub)", href: "/plano-funerario" },
  ...planoFunerarioCidades.map((c) => ({ label: `Plano Funerário em ${c.nome}`, href: `/plano-funerario/${c.slug}` })),
];

const legal: LinkItem[] = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const grupos: { title: string; items: LinkItem[] }[] = [
  { title: "Institucional", items: institucional },
  { title: "Consórcios", items: consorcios },
  { title: "Seguros", items: seguros },
  { title: "Plano de Saúde", items: planoDeSaude },
  { title: "Plano Funerário", items: planoFunerario },
  { title: "Legal", items: legal },
];

export default function MapaDoSitePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Mapa do Site", href: "/mapa-do-site" }]} />

      <section className="py-10 sm:py-12">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-4xl">
            Mapa do site
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-ink)]/70">
            Todas as páginas do site da Revla Corretora, agrupadas por categoria. Se você não
            encontrou o que procurava, também pode{" "}
            <Link href="/" className="font-semibold text-[var(--color-primary)] underline underline-offset-2">
              voltar para o início
            </Link>{" "}
            ou falar direto com um consultor.
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {grupos.map((grupo) => (
              <div key={grupo.title}>
                <h2 className="text-base font-bold uppercase tracking-wide text-[var(--color-primary)]">
                  {grupo.title}
                </h2>
                <ul className="mt-4 space-y-2.5 border-l border-[var(--color-border)] pl-4">
                  {grupo.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-[var(--color-ink)]/75 transition-colors hover:text-[var(--color-primary)] hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-base font-bold uppercase tracking-wide text-[var(--color-primary)]">
                Blog
              </h2>
              <ul className="mt-4 space-y-2.5 border-l border-[var(--color-border)] pl-4">
                <li>
                  <Link
                    href="/blog"
                    className="text-sm font-semibold text-[var(--color-ink)]/90 transition-colors hover:text-[var(--color-primary)] hover:underline"
                  >
                    Ver todos os {posts.length} artigos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
