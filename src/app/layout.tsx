import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MetaPixel from "@/components/MetaPixel";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Consórcios, Seguros e Planos de Saúde em São Paulo`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} — Consórcios, Seguros e Planos de Saúde`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Consórcio, Seguros, Plano de Saúde e Planejamento Patrimonial`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: siteConfig.legalName,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: siteConfig.whatsappDisplay,
  email: siteConfig.email,
  identifier: {
    "@type": "PropertyValue",
    name: "Registro SUSEP",
    value: siteConfig.susep,
  },
  taxID: siteConfig.cnpj,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.address.geo.lat,
    longitude: siteConfig.address.geo.lng,
  },
  // Raio de atendimento em torno do escritório — cobre a Grande São Paulo e
  // o ABC (cidades citadas nos depoimentos reais abaixo: Santo André, São
  // Caetano, São Bernardo, Diadema, Mauá), sem cravar uma lista fixa de
  // cidades que precisaria ser mantida manualmente.
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.lat,
      longitude: siteConfig.address.geo.lng,
    },
    geoRadius: "60000",
  },
  sameAs: Object.values(siteConfig.social),
  // Removido (18/09, auditoria SEO): review/aggregateRating "self-serving"
  // (a própria empresa avaliando a si mesma) para Organization/InsuranceAgency
  // não só é ignorado pelo Google pra rich snippet, como pode ser lido como
  // spam de dado estruturado numa revisão manual. Estrelas de verdade vêm só
  // das avaliações reais no Google Meu Negócio. Depoimentos seguem exibidos
  // normalmente como conteúdo visível (componente Testimonials), só saíram
  // do JSON-LD.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema} />
        <Header />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  );
}
