"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import CTAButton from "./CTAButton";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const produtos = [
  {
    label: "Seguros",
    href: "/seguros",
    description: "Vida, auto, residencial, empresarial e mais",
  },
  {
    label: "Plano de Saúde",
    href: "/plano-de-saude",
    description: "Prevent Senior, com rede própria em São Paulo",
  },
  {
    label: "Amparo Funeral",
    href: "/amparo-funeral",
    description: "Assistência funeral PASI, sem vínculo",
  },
  {
    label: "Consórcios",
    href: "/consorcios",
    description: "Imóveis, veículos, motos e mais, sem juros",
  },
  {
    label: "Planejamento Patrimonial",
    href: "/planejamento-patrimonial",
    description: "Consórcio, seguro e plano de saúde juntos",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
    >
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProdutosOpen, setMobileProdutosOpen] = useState(false);
  const [desktopProdutosOpen, setDesktopProdutosOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const produtoAtivo = produtos.some((p) => pathname === p.href);
  const inicioAtivo = pathname === "/";
  const blogAtivo = pathname === "/blog" || pathname?.startsWith("/blog/");

  // Fecha os menus ao navegar (ajuste de estado durante a renderização,
  // evitando o refluxo extra de fazer isso em um efeito)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setMobileProdutosOpen(false);
    setDesktopProdutosOpen(false);
  }

  // Fecha o dropdown ao clicar fora ou pressionar Esc; devolve o foco ao gatilho
  useEffect(() => {
    function handlePointer(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopProdutosOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopProdutosOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinkClass = (active: boolean) =>
    `text-sm font-medium transition-colors hover:text-[var(--color-primary)] ${
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
        <Container className="flex h-18 items-center justify-between py-3">
          <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} — página inicial`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/revla-horizontal.svg"
              alt={siteConfig.name}
              width={2190}
              height={548}
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
            <Link
              href="/"
              aria-current={inicioAtivo ? "page" : undefined}
              className={navLinkClass(inicioAtivo)}
            >
              Início
            </Link>

            <div ref={dropdownRef} className="relative">
              <button
                ref={triggerRef}
                type="button"
                aria-haspopup="true"
                aria-expanded={desktopProdutosOpen}
                aria-controls="menu-produtos"
                onClick={() => setDesktopProdutosOpen((v) => !v)}
                className={`flex items-center gap-1.5 ${navLinkClass(produtoAtivo)}`}
              >
                Produtos
                <ChevronIcon open={desktopProdutosOpen} />
              </button>

              <div
                id="menu-produtos"
                role="menu"
                aria-label="Produtos Revla"
                inert={!desktopProdutosOpen}
                className={`absolute left-1/2 top-full z-20 mt-3 w-[22rem] -translate-x-1/2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-2 shadow-xl transition-all duration-150 ${
                  desktopProdutosOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                {produtos.map((produto) => (
                  <Link
                    key={produto.href}
                    href={produto.href}
                    role="menuitem"
                    aria-current={pathname === produto.href ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 transition-colors hover:bg-[var(--color-muted)] ${
                      pathname === produto.href ? "bg-[var(--color-muted)]" : ""
                    }`}
                  >
                    <span className="block text-sm font-semibold text-[var(--color-ink)]">
                      {produto.label}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-[var(--color-ink)]/60">
                      {produto.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              aria-current={blogAtivo ? "page" : undefined}
              className={navLinkClass(blogAtivo)}
            >
              Blog
            </Link>
          </nav>

          <div className="hidden lg:block">
            <CTAButton
              href={whatsappLink("Olá! Quero falar com um consultor da Revla.")}
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

              <button
                type="button"
                aria-expanded={mobileProdutosOpen}
                aria-controls="mobile-menu-produtos"
                onClick={() => setMobileProdutosOpen((v) => !v)}
                className={`flex items-center justify-between rounded-md px-2 py-2.5 text-left text-base font-medium hover:bg-[var(--color-muted)] ${
                  produtoAtivo ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                }`}
              >
                Produtos
                <ChevronIcon open={mobileProdutosOpen} />
              </button>

              {mobileProdutosOpen && (
                <div
                  id="mobile-menu-produtos"
                  className="ml-2 flex flex-col gap-0.5 border-l border-[var(--color-border)] pl-3"
                >
                  {produtos.map((produto) => (
                    <Link
                      key={produto.href}
                      href={produto.href}
                      aria-current={pathname === produto.href ? "page" : undefined}
                      className={`rounded-md px-2 py-2 text-sm font-medium hover:bg-[var(--color-muted)] ${
                        pathname === produto.href
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-ink)]/85"
                      }`}
                    >
                      {produto.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/blog"
                aria-current={blogAtivo ? "page" : undefined}
                className={`rounded-md px-2 py-2.5 text-base font-medium hover:bg-[var(--color-muted)] ${
                  blogAtivo ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                }`}
              >
                Blog
              </Link>

              <CTAButton
                href={whatsappLink("Olá! Quero falar com um consultor da Revla.")}
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
