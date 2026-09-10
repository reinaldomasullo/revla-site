"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

const STORAGE_KEY = "revla-cookie-consent";
export const CONSENT_EVENT = "revla-cookie-consent-changed";

/**
 * Carrega o gtag.js do Google Analytics (GA4) só depois que o visitante
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

  if (!allowed || !siteConfig.gaMeasurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.gaMeasurementId}');`}
      </Script>
    </>
  );
}
