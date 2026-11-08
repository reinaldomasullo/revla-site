"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  FULL_CONSENT,
  NO_CONSENT,
  readConsent,
  saveConsent,
  type ConsentState,
} from "@/lib/consent";

/** Evento que reabre o banner nas preferências (ver CookiePreferencesButton). */
export const OPEN_COOKIE_PREFS_EVENT = "revla-open-cookie-preferences";

function buildMailto(subject: string) {
  return `mailto:${siteConfig.lgpdEmail}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Banner de cookies/privacidade (LGPD) — aparece na primeira visita
 * (guardado em localStorage, formato em src/lib/consent.ts) e dá acesso aos
 * pedidos de acesso, correção e exclusão de dados via e-mail pronto para o
 * canal do Encarregado de Dados.
 *
 * Três categorias, com consentimento SEPARADO para as duas opcionais:
 * - essenciais (sempre ativos)
 * - analíticos: Google Analytics e Microsoft Clarity
 * - publicidade: Meta Pixel (Facebook/Instagram) e tag do Google Ads
 *
 * Sem biblioteca externa de propósito: componente cliente simples,
 * `position: fixed` (não desloca a página, não afeta CLS) e renderiza
 * `null` até confirmar no `useEffect` que ainda não houve consentimento.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [choice, setChoice] = useState<ConsentState>(NO_CONSENT);

  useEffect(() => {
    const stored = readConsent();
    if (!stored) setVisible(true);
    else setChoice(stored);

    function handleOpen() {
      setChoice(readConsent() ?? NO_CONSENT);
      setShowPrefs(true);
      setVisible(true);
    }

    window.addEventListener(OPEN_COOKIE_PREFS_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_COOKIE_PREFS_EVENT, handleOpen);
  }, []);

  function confirm(state: ConsentState) {
    const previous = readConsent();
    saveConsent(state);
    setChoice(state);
    setVisible(false);
    setShowPrefs(false);
    // Scripts de terceiros já carregados não "descarregam": se a pessoa
    // retirou uma permissão que tinha dado, recarrega para parar de vez.
    const revoked =
      previous && ((previous.analytics && !state.analytics) || (previous.ads && !state.ads));
    if (revoked) window.location.reload();
  }

  if (!visible) return null;

  const secondaryButton =
    "rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-muted)]";
  const primaryButton =
    "rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]";

  return (
    <div
      role="region"
      aria-label="Aviso de cookies e privacidade"
      className="fixed inset-x-0 bottom-0 z-[60] max-h-[90vh] overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-paper)] px-4 py-4 shadow-[0_-4px_20px_rgba(10,31,68,0.15)] sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        {!showPrefs ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="text-sm leading-relaxed text-[var(--color-ink)]/80">
              Usamos cookies essenciais para o site funcionar e, com a sua permissão, cookies
              analíticos (para entender como o site é usado) e de publicidade (Meta e Google,
              para medir e exibir nossos anúncios). Você escolhe cada um.{" "}
              <Link
                href="/politica-de-privacidade"
                className="font-semibold text-[var(--color-secondary)] hover:underline"
              >
                Saiba mais
              </Link>
            </p>
            <div className="flex flex-wrap gap-2.5">
              <button type="button" onClick={() => setShowPrefs(true)} className={secondaryButton}>
                Preferências e meus dados
              </button>
              <button type="button" onClick={() => confirm(NO_CONSENT)} className={secondaryButton}>
                Somente essenciais
              </button>
              <button type="button" onClick={() => confirm(FULL_CONSENT)} className={primaryButton}>
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
                  Cookies essenciais mantêm o site funcionando e estão sempre ativos. Os
                  analíticos e os de publicidade só são usados com a sua permissão, e você pode
                  aceitar um sem o outro.
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

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--color-border)] p-4">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  Cookies essenciais
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink)]/60">
                  Necessários para o funcionamento do site. Sempre ativos.
                </p>
              </div>
              <label className="flex cursor-pointer gap-3 rounded-xl border border-[var(--color-border)] p-4">
                <input
                  type="checkbox"
                  checked={choice.analytics}
                  onChange={(e) => setChoice({ ...choice, analytics: e.target.checked })}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                />
                <span>
                  <span className="block text-sm font-semibold text-[var(--color-ink)]">
                    Cookies analíticos
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-[var(--color-ink)]/60">
                    Google Analytics e Microsoft Clarity: mostram como o site é usado, para
                    melhorá-lo.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer gap-3 rounded-xl border border-[var(--color-border)] p-4">
                <input
                  type="checkbox"
                  checked={choice.ads}
                  onChange={(e) => setChoice({ ...choice, ads: e.target.checked })}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                />
                <span>
                  <span className="block text-sm font-semibold text-[var(--color-ink)]">
                    Cookies de publicidade
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-[var(--color-ink)]/60">
                    Meta Pixel (Facebook e Instagram) e Google Ads: medem nossos anúncios e
                    permitem mostrar anúncios da Revla a quem visitou o site.
                  </span>
                </span>
              </label>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <button type="button" onClick={() => confirm(NO_CONSENT)} className={secondaryButton}>
                Somente essenciais
              </button>
              <button type="button" onClick={() => confirm(choice)} className={secondaryButton}>
                Salvar minhas escolhas
              </button>
              <button type="button" onClick={() => confirm(FULL_CONSENT)} className={primaryButton}>
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
