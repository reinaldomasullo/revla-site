import Link from "next/link";
import Container from "./Container";
import { mainNav, siteConfig } from "@/lib/site-config";

const legalLinks = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: (
      <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.5.5.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77A4.9 4.9 0 0 1 5.46 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2Zm0 1.8c-2.65 0-2.98.01-4.02.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.51.6-.67 1.02-.12.31-.26.78-.3 1.65C4.29 8.54 4.28 8.87 4.28 12s.01 3.46.06 4.5c.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.51 1.02.67.31.12.78.26 1.65.3 1.04.05 1.37.06 4.02.06s2.98-.01 4.02-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.51-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.04.06-1.37.06-4.5s-.01-3.46-.06-4.5c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.67-1.02 2.7 2.7 0 0 0-1.02-.67c-.31-.12-.78-.26-1.65-.3C14.98 3.81 14.65 3.8 12 3.8Zm0 3.15a5.05 5.05 0 1 1 0 10.1 5.05 5.05 0 0 1 0-10.1Zm0 1.8a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm5.25-2a1.18 1.18 0 1 1 0 2.35 1.18 1.18 0 0 1 0-2.35Z" />
    ),
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: (
      <path d="M13.5 21.9v-8.1h2.72l.41-3.15h-3.13V8.65c0-.91.25-1.53 1.56-1.53h1.66V4.3c-.29-.04-1.27-.12-2.42-.12-2.39 0-4.03 1.46-4.03 4.14v2.31H7.55v3.15h2.72v8.1h3.23Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: (
      <path d="M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.45 20.4h-3.37v-6.06c0-1.44-.03-3.3-2.01-3.3-2 0-2.31 1.57-2.31 3.2v6.16H9.4V8.5h3.24v1.63h.05c.45-.86 1.56-1.77 3.2-1.77 3.43 0 4.56 2.26 4.56 5.2v6.84Z" />
    ),
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    icon: (
      <path d="M21.58 7.2a2.7 2.7 0 0 0-1.9-1.92C18.02 4.8 12 4.8 12 4.8s-6.02 0-7.68.48A2.7 2.7 0 0 0 2.42 7.2 28.6 28.6 0 0 0 1.94 12c0 1.6.16 3.21.48 4.8a2.7 2.7 0 0 0 1.9 1.92c1.66.48 7.68.48 7.68.48s6.02 0 7.68-.48a2.7 2.7 0 0 0 1.9-1.92c.32-1.59.48-3.2.48-4.8 0-1.6-.16-3.21-.48-4.8ZM9.86 15.14V8.86L15.5 12l-5.64 3.14Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-primary)] text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/revla-horizontal-footer.svg"
            alt={siteConfig.name}
            width={2190}
            height={548}
            className="h-9 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm text-white/70">
            {siteConfig.description}
          </p>
          <ul className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} no ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/reinaldo-masullo" className="text-sm text-white/85 hover:text-white">
                Reinaldo Masullo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Contato
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            <li>{siteConfig.address.street}</li>
            <li>
              {siteConfig.address.district}, {siteConfig.address.city} -{" "}
              {siteConfig.address.state}
            </li>
            <li>CEP {siteConfig.address.zip}</li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp: {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Institucional
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-1 text-white/60">
              {siteConfig.susep
                ? `SUSEP: ${siteConfig.susep}`
                : "Registro SUSEP a inserir"}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos os direitos
            reservados.
          </p>
          <p>CNPJ {siteConfig.cnpj}</p>
        </Container>
      </div>
    </footer>
  );
}
