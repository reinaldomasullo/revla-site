"use client";

import { useEffect } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import { useConsent } from "@/components/useConsent";

// Reexportado para compatibilidade com imports antigos.
export { CONSENT_EVENT } from "@/lib/consent";

/**
 * Carrega o gtag.js (biblioteca única do Google) e ativa cada produto só com
 * a permissão da categoria correspondente no banner (CookieConsent.tsx):
 * - Google Analytics (GA4) -> cookies analíticos
 * - Tag do Google Ads (remarketing + conversão "Contato Whatsapp") -> cookies
 *   de publicidade
 * "Somente essenciais" = nunca carrega. Cada `gtag('config', ...)` fica num
 * <Script> com id próprio, para que aceitar a segunda categoria depois, na
 * mesma sessão, ative o outro produto sem recarregar a página.
 */
export default function GoogleAnalytics() {
  const { analytics, ads } = useConsent();
  const gaOn = analytics && Boolean(siteConfig.gaMeasurementId);
  const adsOn = ads && Boolean(siteConfig.googleAdsId);

  // Conversão "Contato Whatsapp" do Google Ads: dispara no clique de
  // qualquer link `wa.me` do site (WhatsAppButton flutuante + todos os
  // CTAButton que usam whatsappLink()). Delegado no document, fase de
  // captura. Só com consentimento de publicidade e ID + rótulo configurados.
  useEffect(() => {
    if (!adsOn || !siteConfig.googleAdsWhatsappConversionLabel) return;

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
  }, [adsOn]);

  if (!gaOn && !adsOn) return null;

  const bootstrapId = gaOn ? siteConfig.gaMeasurementId : siteConfig.googleAdsId;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${bootstrapId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){dataLayer.push(arguments);};
          gtag('js', new Date());
          window.__gtagReady = true;`}
      </Script>
      {gaOn && (
        <Script id="gtag-config-ga4" strategy="afterInteractive">
          {`gtag('config', '${siteConfig.gaMeasurementId}');`}
        </Script>
      )}
      {adsOn && (
        <Script id="gtag-config-ads" strategy="afterInteractive">
          {`gtag('config', '${siteConfig.googleAdsId}');`}
        </Script>
      )}
    </>
  );
}
