"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

const STORAGE_KEY = "revla-cookie-consent";
export const CONSENT_EVENT = "revla-cookie-consent-changed";

/**
 * Carrega o gtag.js do Google Analytics (GA4) + a tag do Google Ads (mesma
 * biblioteca gtag.js, um único carregamento) só depois que o visitante
 * aceita cookies analíticos no banner de consentimento (CookieConsent.tsx).
 * Escolha "Somente essenciais" = nunca carrega. Lê o valor já salvo no
 * localStorage ao montar (visitante recorrente que já aceitou antes) e
 * também escuta o evento customizado disparado pelo CookieConsent quando a
 * escolha é feita na mesma sessão, sem precisar recarregar a página.
 */
export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "all") setAllowed(true);
    } catch {
      // localStorage indisponível (ex.: modo privado) — segue sem carregar
    }

    function handleConsentChange(event: Event) {
      const detail = (event as CustomEvent<string>).detail;
      if (detail === "all") setAllowed(true);
    }

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, []);

  // Conversão "Contato Whatsapp" do Google Ads: dispara no clique de
  // qualquer link `wa.me` do site (WhatsAppButton flutuante + todos os
  // CTAButton que usam whatsappLink()), sem precisar editar cada botão um
  // por um. Delegado no document, fase de captura (roda antes de qualquer
  // outro handler dar preventDefault). Só registra depois do consentimento
  // (gtag só existe nesse ponto) e o ID + rótulo estarem configurados.
  useEffect(() => {
    if (!allowed || !siteConfig.googleAdsId || !siteConfig.googleAdsWhatsappConversionLabel) return;

    function handleWhatsAppClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest('a[href^="https://wa.me/"]');
      if (!link) return;
      const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", "conversion", {
        send_to: `${siteConfig.googleAdsId}/${siteConfig.googleAdsWhatsappConversionLabel}`,
      });
    }

    document.addEventListener("click", handleWhatsAppClick, true);
    return () => document.removeEventListener("click", handleWhatsAppClick, true);
  }, [allowed]);

  if (!allowed || (!siteConfig.gaMeasurementId && !siteConfig.googleAdsId)) return null;

  // Carrega o gtag.js usando qualquer um dos dois IDs disponíveis (a
  // biblioteca é a mesma; cada `gtag('config', ...)` abaixo ativa um produto).
  const bootstrapId = siteConfig.gaMeasurementId || siteConfig.googleAdsId;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${bootstrapId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${siteConfig.gaMeasurementId ? `gtag('config', '${siteConfig.gaMeasurementId}');` : ""}
          ${siteConfig.googleAdsId ? `gtag('config', '${siteConfig.googleAdsId}');` : ""}
          window.__gtagReady = true;`}
      </Script>
    </>
  );
}
