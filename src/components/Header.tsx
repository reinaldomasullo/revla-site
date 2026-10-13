"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import CTAButton from "./CTAButton";
import { siteConfig, whatsappLink } from "@/lib/site-config";

type SubItem = { label: string; href: string };
type SubGrupo = { titulo?: string; itens: SubItem[] };
type Produto = {
  label: string;
  href: string;
  navLabel?: string;
  submenu?: { grupos: SubGrupo[]; verTodos: string };
};

// Submenus: só os produtos principais de cada categoria (4 a 6 itens) e um
// "Ver todos" que leva à página da categoria. Páginas de cidade e de marca
// ficam fora do menu — elas recebem links das páginas de produto.
const produtos: Produto[] = [
  {
    label: "Consórcios",
    href: "/consorcios",
    submenu: {
      grupos: [
        {
          itens: [
            { label: "Consórcio de imóveis", href: "/consorcios/imoveis" },
            { label: "Consórcio de carro", href: "/consorcios/carro" },
            { label: "Consórcio de motos", href: "/consorcios/motos" },
            { label: "Brasileiros no Japão", href: "/consorcios/brasileiros-no-japao" },
          ],
        },
        {
          titulo: "Calculadoras",
          itens: [
            { label: "Simulador de consórcio de imóveis", href: "/consorcios/calculadora" },
            { label: "Consórcio de veículo x financiamento", href: "/consorcios/calculadora-veiculos" },
            { label: "Consórcio de imóvel x financiamento", href: "/consorcios/calculadora-financiamento" },
          ],
        },
      ],
      verTodos: "Ver todos os consórcios",
    },
  },
  {
    label: "Seguros",
    href: "/seguros",
    submenu: {
      grupos: [
        {
          itens: [
            { label: "Seguro de vida", href: "/seguros/vida" },
            { label: "Seguro auto", href: "/seguros/auto" },
            { label: "Seguro residencial", href: "/seguros/residencial" },
            { label: "Seguro fiança", href: "/seguros/fianca" },
            { label: "Seguro empresarial", href: "/seguros/empresarial" },
          ],
        },
      ],
      verTodos: "Ver todos os seguros",
    },
  },
  {
    label: "Plano de Saúde",
    href: "/plano-de-saude",
  },
  {
    label: "Plano Funerário",
    href: "/plano-funerario",
  },
  {
    label: "Planejamento Patrimonial",
    href: "/planejamento-patrimonial",
    navLabel: "Planejamento",
  },
];

const Chevron = ({ aberto }: { aberto: boolean }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
    className={`transition-transform ${aberto ? "rotate-180" : ""}`}
  >
    <path d="M1.5 3.5L5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Submenu aberto no computador (href da categoria) e no celular.
  const [aberto, setAberto] = useState<string | null>(null);
  const [mobileAberto, setMobileAberto] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const inicioAtivo = pathname === "/";
  const blogAtivo = pathname === "/blog" || pathname?.startsWith("/blog/");
  const categoriaAtiva = (href: string) => pathname === href || (pathname?.startsWith(`${href}/`) ?? false);

  // Fecha os menus ao navegar (ajuste de estado durante a renderização,
  // evitando o refluxo extra de fazer isso em um efeito)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setAberto(null);
    setMobileAberto(null);
  }

  // Fecha o submenu ao clicar fora ou pressionar Esc.
  useEffect(() => {
    if (!aberto) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setAberto(null);
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [aberto]);

  const navLinkClass = (active: boolean) =>
    `whitespace-nowrap text-sm font-medium transition-colors hover:text-[var(--color-primary)] ${
      active ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
    }`;

  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-md focus-visible:bg-[var(--color-primary)] focus-visible:px-4 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-paper)]/95 backdrop-blur">
        <Container className="flex h-18 items-center justify-between gap-4 py-3">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} — página inicial`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/revla-horizontal.svg"
              alt={siteConfig.name}
              width={2190}
              height={548}
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav ref={navRef} className="hidden items-center gap-4 lg:flex xl:gap-5" aria-label="Navegação principal">
            <Link
              href="/"
              aria-current={inicioAtivo ? "page" : undefined}
              className={navLinkClass(inicioAtivo)}
            >
              Início
            </Link>

            {produtos.map((produto) => {
              const ativo = categoriaAtiva(produto.href);
              if (!produto.submenu) {
                return (
                  <Link
                    key={produto.href}
                    href={produto.href}
                    aria-current={pathname === produto.href ? "page" : undefined}
                    className={navLinkClass(ativo)}
                  >
                    {produto.navLabel ?? produto.label}
                  </Link>
                );
              }
              const estaAberto = aberto === produto.href;
              const idMenu = `submenu${produto.href.replace(/\//g, "-")}`;
              return (
                <div
                  key={produto.href}
                  className="relative flex items-center gap-1"
                  onMouseEnter={() => setAberto(produto.href)}
                  onMouseLeave={() => setAberto((atual) => (atual === produto.href ? null : atual))}
                >
                  <Link
                    href={produto.href}
                    aria-current={pathname === produto.href ? "page" : undefined}
                    className={navLinkClass(ativo)}
                  >
                    {produto.navLabel ?? produto.label}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={estaAberto}
                    aria-controls={idMenu}
                    aria-label={`Abrir submenu de ${produto.label}`}
                    onClick={() => setAberto(estaAberto ? null : produto.href)}
                    className={`flex h-6 w-5 items-center justify-center ${navLinkClass(ativo)}`}
                  >
                    <Chevron aberto={estaAberto} />
                  </button>

                  {/* Os links ficam sempre no HTML (escondidos com "hidden") para
                      que buscadores e IAs encontrem as páginas de produto. */}
                  <div
                    id={idMenu}
                    hidden={!estaAberto}
                    className="absolute left-0 top-full z-10 w-80 pt-2"
                  >
                    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-paper)] p-2 shadow-lg">
                      {produto.submenu.grupos.map((grupo, i) => (
                        <div key={grupo.titulo ?? i} className={i > 0 ? "mt-1 border-t border-[var(--color-border)] pt-1" : ""}>
                          {grupo.titulo && (
                            <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/70">
                              {grupo.titulo}
                            </p>
                          )}
                          {grupo.itens.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setAberto(null)}
                              aria-current={pathname === item.href ? "page" : undefined}
                              className={`block rounded-lg px-3 py-2 text-sm font-medium hover:bg-[var(--color-muted)] ${
                                pathname === item.href ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link
                        href={produto.href}
                        onClick={() => setAberto(null)}
                        className="mt-1 block rounded-lg border-t border-[var(--color-border)] px-3 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                      >
                        {produto.submenu.verTodos} →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              href="/blog"
              aria-current={blogAtivo ? "page" : undefined}
              className={navLinkClass(blogAtivo)}
            >
              Blog
            </Link>
          </nav>

          <div className="hidden shrink-0 lg:block">
            <CTAButton
              href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")}
              variant="secondary"
              external
              className="px-5 py-2.5 text-sm"
            >
              Falar no WhatsApp
            </CTAButton>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-border)] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M2.5 5h15M2.5 10h15M2.5 15h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </Container>

        {mobileOpen && (
          <div id="mobile-menu" className="border-t border-[var(--color-border)] lg:hidden">
            <nav aria-label="Navegação principal (mobile)">
            <Container className="flex flex-col gap-1 py-4">
              <Link
                href="/"
                aria-current={inicioAtivo ? "page" : undefined}
                className={`rounded-md px-2 py-2.5 text-base font-medium hover:bg-[var(--color-muted)] ${
                  inicioAtivo ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                }`}
              >
                Início
              </Link>

              <p className="mt-2 px-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/70">
                Produtos
              </p>
              {produtos.map((produto) => {
                const classeItem = `rounded-md px-2 py-2.5 text-base font-medium hover:bg-[var(--color-muted)] ${
                  pathname === produto.href ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                }`;
                if (!produto.submenu) {
                  return (
                    <Link
                      key={produto.href}
                      href={produto.href}
                      aria-current={pathname === produto.href ? "page" : undefined}
                      className={classeItem}
                    >
                      {produto.label}
                    </Link>
                  );
                }
                const estaAberto = mobileAberto === produto.href;
                const idMenu = `submenu-mobile${produto.href.replace(/\//g, "-")}`;
                return (
                  <div key={produto.href}>
                    <div className="flex items-center">
                      <Link
                        href={produto.href}
                        aria-current={pathname === produto.href ? "page" : undefined}
                        className={`flex-1 ${classeItem}`}
                      >
                        {produto.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={estaAberto}
                        aria-controls={idMenu}
                        aria-label={`${estaAberto ? "Fechar" : "Abrir"} submenu de ${produto.label}`}
                        onClick={() => setMobileAberto(estaAberto ? null : produto.href)}
                        className="flex h-11 w-11 items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-muted)]"
                      >
                        <Chevron aberto={estaAberto} />
                      </button>
                    </div>
                    <div id={idMenu} hidden={!estaAberto} className="mb-1 ml-3 border-l border-[var(--color-border)] pl-3">
                      {produto.submenu.grupos.map((grupo, i) => (
                        <div key={grupo.titulo ?? i}>
                          {grupo.titulo && (
                            <p className="px-2 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/70">
                              {grupo.titulo}
                            </p>
                          )}
                          {grupo.itens.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              aria-current={pathname === item.href ? "page" : undefined}
                              className={`block rounded-md px-2 py-2.5 text-[15px] hover:bg-[var(--color-muted)] ${
                                pathname === item.href ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link
                        href={produto.href}
                        className="block rounded-md px-2 py-2.5 text-[15px] font-semibold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                      >
                        {produto.submenu.verTodos} →
                      </Link>
                    </div>
                  </div>
                );
              })}

              <Link
                href="/blog"
                aria-current={blogAtivo ? "page" : undefined}
                className={`mt-2 rounded-md px-2 py-2.5 text-base font-medium hover:bg-[var(--color-muted)] ${
                  blogAtivo ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                }`}
              >
                Blog
              </Link>

              <CTAButton
                href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")}
                variant="secondary"
                external
                className="mt-3 w-full"
              >
                Falar no WhatsApp
              </CTAButton>
              <a
                href={`tel:+${siteConfig.whatsapp}`}
                className="mt-1 px-2 py-2 text-center text-sm text-[var(--color-ink)]/70"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </Container>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
