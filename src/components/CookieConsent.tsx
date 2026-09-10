"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CONSENT_EVENT } from "@/components/GoogleAnalytics";

const STORAGE_KEY = "revla-cookie-consent";

function buildMailto(subject: string) {
  return `mailto:${siteConfig.lgpdEmail}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Banner de cookies/privacidade — aparece na primeira visita (guardado em
 * localStorage) e sempre dá acesso aos 3 pedidos obrigatórios da LGPD
 * (acesso, correção e exclusão de dados), via e-mail pronto para o canal do
 * Encarregado de Dados. Sem biblioteca externa de propósito: componente
 * cliente simples, `position: fixed` (não desloca o resto da página, não
 * afeta CLS) e renderiza `null` até confirmar no `useEffect` que ainda não
 * houve consentimento salvo, evitando qualquer peso extra no carregamento
 * inicial ou impacto no PageSpeed.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage indisponível (ex.: modo privado) — não bloqueia a navegação
    }
  }, []);

  function saveConsent(value: "all" | "essential") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // segue sem salvar — o banner pode reaparecer na próxima visita, sem problema
    }
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
    setVisible(false);
    setShowPrefs(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies e privacidade"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--color-border)] bg-[var(--color-paper)] px-4 py-4 shadow-[0_-4px_20px_rgba(10,31,68,0.15)] sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        {!showPrefs ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="text-sm leading-relaxed text-[var(--color-ink)]/80">
              Usamos cookies para melhorar sua experiência neste site e entender como ele é
              utilizado. Você pode aceitar todos os cookies, usar apenas os essenciais, ou ver
              suas opções de privacidade.{" "}
              <Link
                href="/politica-de-privacidade"
                className="font-semibold text-[var(--color-secondary)] hover:underline"
              >
                Saiba mais
              </Link>
            </p>
            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setShowPrefs(true)}
                className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-muted)]"
              >
                Preferências e meus dados
              </button>
              <button
                type="button"
                onClick={() => saveConsent("essential")}
                className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-muted)]"
              >
                Somente essenciais
              </button>
              <button
                type="button"
                onClick={() => saveConsent("all")}
                className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-[var(--color-primary)]">
                  Preferências de privacidade
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink)]/70">
                  Cookies essenciais mantêm o site funcionando e estão sempre ativos. Cookies
                  analíticos nos ajudam a entender o uso do site e só são usados com sua
                  permissão.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPrefs(false)}
                aria-label="Fechar preferências"
                className="shrink-0 text-2xl leading-none text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]"
              >
                ×
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--color-border)] p-4">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  Cookies essenciais
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink)]/60">
                  Necessários para o funcionamento do site. Sempre ativos.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] p-4">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  Cookies analíticos
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink)]/60">
                  Nos ajudam a entender como o site é utilizado, para melhorá-lo.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => saveConsent("essential")}
                className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-muted)]"
              >
                Somente essenciais
              </button>
              <button
                type="button"
                onClick={() => saveConsent("all")}
                className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                Aceitar todos
              </button>
            </div>

            <div className="border-t border-[var(--color-border)] pt-4">
              <p className="text-sm font-semibold text-[var(--color-ink)]">
                Seus dados, seus direitos (LGPD)
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink)]/60">
                Cada opção abaixo abre um e-mail pronto para {siteConfig.lgpdEmail}, nosso canal
                do Encarregado de Dados.
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                <a
                  href={buildMailto("Solicitação de acesso aos meus dados")}
                  className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-muted)]"
                >
                  Quero saber quais dados tenho armazenados
                </a>
                <a
                  href={buildMailto("Solicitação de correção de dados")}
                  className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-muted)]"
                >
                  Quero corrigir meus dados
                </a>
                <a
                  href={buildMailto("Solicitação de exclusão dos meus dados")}
                  className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-muted)]"
                >
                  Quero excluir meus dados
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
