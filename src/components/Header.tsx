"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import CTAButton from "./CTAButton";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const produtos = [
  {
    label: "Consórcios",
    href: "/consorcios",
  },
  {
    label: "Seguros",
    href: "/seguros",
  },
  {
    label: "Plano de Saúde",
    href: "/plano-de-saude",
  },
  {
    label: "Amparo Funeral",
    href: "/amparo-funeral",
  },
  {
    label: "Planejamento Patrimonial",
    href: "/planejamento-patrimonial",
    navLabel: "Planejamento",
  },
];

const calculadoras = [
  { label: "Calculadora de consórcio de imóveis", href: "/consorcios/calculadora" },
  { label: "Calculadora comparativa consórcio de veículos x financiamento", href: "/consorcios/calculadora-veiculos" },
  { label: "Calculadora comparativa consórcio x financiamento", href: "/consorcios/calculadora-financiamento" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const calcRef = useRef<HTMLDivElement>(null);

  const inicioAtivo = pathname === "/";
  const blogAtivo = pathname === "/blog" || pathname?.startsWith("/blog/");
  const calculadorasAtivo = pathname?.startsWith("/consorcios/calculadora") ?? false;

  // Fecha o menu mobile ao navegar (ajuste de estado durante a renderização,
  // evitando o refluxo extra de fazer isso em um efeito)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setCalcOpen(false);
  }

  // Fecha o dropdown "Calculadoras" ao clicar fora ou pressionar Esc.
  useEffect(() => {
    if (!calcOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (calcRef.current && !calcRef.current.contains(e.target as Node)) {
        setCalcOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCalcOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [calcOpen]);

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

          <nav className="hidden items-center gap-4 lg:flex xl:gap-5" aria-label="Navegação principal">
            <Link
              href="/"
              aria-current={inicioAtivo ? "page" : undefined}
              className={navLinkClass(inicioAtivo)}
            >
              Início
            </Link>

            {produtos.map((produto) => (
              <Link
                key={produto.href}
                href={produto.href}
                aria-current={pathname === produto.href ? "page" : undefined}
                className={navLinkClass(pathname === produto.href)}
              >
                {produto.navLabel ?? produto.label}
              </Link>
            ))}

            <div
              className="relative"
              ref={calcRef}
              onMouseEnter={() => setCalcOpen(true)}
              onMouseLeave={() => setCalcOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={calcOpen}
                onClick={() => setCalcOpen(true)}
                className={`flex items-center gap-1 ${navLinkClass(calculadorasAtivo)}`}
              >
                Calculadoras
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform ${calcOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1.5 3.5L5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {calcOpen && (
                <div className="absolute left-0 top-full z-10 mt-2 w-64 rounded-xl border border-[var(--color-border)] bg-[var(--color-paper)] p-2 shadow-lg">
                  {calculadoras.map((calc) => (
                    <Link
                      key={calc.href}
                      href={calc.href}
                      onClick={() => setCalcOpen(false)}
                      aria-current={pathname === calc.href ? "page" : undefined}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-[var(--color-muted)] ${
                        pathname === calc.href ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                      }`}
                    >
                      {calc.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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

              <p className="mt-2 px-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/50">
                Produtos
              </p>
              {produtos.map((produto) => (
                <Link
                  key={produto.href}
                  href={produto.href}
                  aria-current={pathname === produto.href ? "page" : undefined}
                  className={`rounded-md px-2 py-2.5 text-base font-medium hover:bg-[var(--color-muted)] ${
                    pathname === produto.href
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-ink)]"
                  }`}
                >
                  {produto.label}
                </Link>
              ))}

              <p className="mt-2 px-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/50">
                Calculadoras
              </p>
              {calculadoras.map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  aria-current={pathname === calc.href ? "page" : undefined}
                  className={`rounded-md px-2 py-2.5 text-base font-medium hover:bg-[var(--color-muted)] ${
                    pathname === calc.href ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                  }`}
                >
                  {calc.label}
                </Link>
              ))}

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
