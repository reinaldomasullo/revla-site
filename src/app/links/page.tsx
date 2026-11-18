import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reinaldo Masullo | Links",
  description:
    "Fale com Reinaldo Masullo pelo WhatsApp e siga as redes sociais — consórcios, seguros e plano de saúde pela Revla Corretora.",
  alternates: { canonical: "/links" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: `${siteConfig.url}/links`,
    title: "Reinaldo Masullo | Links",
    description:
      "Fale com Reinaldo Masullo pelo WhatsApp e siga as redes sociais — consórcios, seguros e plano de saúde pela Revla Corretora.",
    images: [
      {
        url: "/images/reinaldo-masullo.png",
        width: 800,
        height: 1200,
        alt: "Reinaldo Masullo, especialista em planejamento patrimonial na Revla Corretora",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Reinaldo Masullo | Links",
    description:
      "Fale com Reinaldo Masullo pelo WhatsApp e siga as redes sociais da Revla Corretora.",
    images: ["/images/reinaldo-masullo.png"],
  },
};

type LinkItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const redes: LinkItem[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/reinaldomasullo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.3" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/reinaldomasullo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM.5 8.5h8.9V23H.5V8.5zm15.3 0h-8.6V23h8.6v-7.5c0-2 1.5-2.3 2-2.3s1.9.4 1.9 2.3V23H23v-8.5c0-4.5-3-5.3-4.9-5.3-2.2 0-3.6 1.1-4.3 2.3V8.5z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/reinaldomasullo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@reinaldomasullo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 12s0-3.6-.5-5.3c-.3-1-1.1-1.8-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.4.6c-1 .3-1.8 1.1-2.1 2.1C1 8.4 1 12 1 12s0 3.6.5 5.3c.3 1 1.1 1.8 2.1 2.1C5.3 20 12 20 12 20s6.7 0 8.4-.6c1-.3 1.8-1.1 2.1-2.1.5-1.7.5-5.3.5-5.3zM9.8 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@reinaldomasullo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 3c.5 2 1.8 3.4 3.9 3.6v2.7c-1.4.1-2.8-.3-3.9-1.1v6.8c0 3.3-2.6 5.9-5.9 5.9S4.8 18.3 4.8 15c0-3.2 2.5-5.7 5.6-5.9v2.8c-1.6.2-2.8 1.6-2.8 3.1 0 1.7 1.4 3.1 3.1 3.1s3.2-1.3 3.2-3.1V3h2.7z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/reinaldomasullo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.4 22H1.3l8.2-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 4H5.6l12.1 16z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@reinaldomasullo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2c-5.5 0-9 3.8-9 10s3.5 10 9 10c4.3 0 7.4-2.2 7.9-6.1.4-2.8-.9-4.7-3.3-5.6-.2-2.6-1.8-4.1-4.3-4.1-1.8 0-3.2.8-4 2.1" />
        <path d="M15.5 12.2c0 2.6-1.4 4.3-3.8 4.3-1.6 0-2.7-.8-2.7-2.1 0-1.5 1.4-2.3 3.9-2.3.9 0 1.8.1 2.6.3" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/reinaldomasullo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 3.5L2.9 11c-1.2.5-1.2 1.2-.2 1.5l4.9 1.5 1.9 5.8c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.8l3-14c.3-1.3-.4-1.8-1.7-1.1zM8.5 13.8l9.3-5.9c.5-.3.9-.1.5.2l-7.9 7.3-.3 3.2-1.4-4.8z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://br.pinterest.com/reinaldomasullocorretor/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.4-5.9 1.4-5.9s-.4-.7-.4-1.8c0-1.7.9-2.9 2.1-2.9 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-1 3.8-.3 1.1.6 2.1 1.7 2.1 2 0 3.6-2.1 3.6-5.3 0-2.8-2-4.7-4.8-4.7-3.3 0-5.2 2.5-5.2 5 0 1 .4 2.1.9 2.6.1.1.1.2.1.4-.1.4-.3 1.1-.3 1.3-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.2 0 7.4 3 7.4 6.9 0 4.1-2.6 7.5-6.2 7.5-1.2 0-2.4-.6-2.8-1.4 0 0-.6 2.4-.8 3-.3 1-1 2.3-1.5 3.1 1.1.3 2.3.5 3.5.5 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
    ),
  },
];

export default function LinksPage() {
  return (
    <div className="relative flex min-h-screen justify-center overflow-hidden bg-[#061227] px-5 pb-10 pt-14 text-white">
      {/* Glow de fundo (mesmas cores da marca: azul e verde-petróleo) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_900px_520px_at_50%_-8%,rgba(26,132,200,0.30),transparent_60%),radial-gradient(ellipse_700px_500px_at_85%_15%,rgba(15,122,107,0.22),transparent_55%),linear-gradient(180deg,var(--color-primary)_0%,#061227_55%,#050c1a_100%)]"
      />

      <div className="relative z-10 flex w-full max-w-[460px] flex-col items-center">
        <div className="mb-7 flex items-center gap-2 opacity-90">
          <Image src="/icon.png" alt="" width={20} height={20} className="rounded-[4px]" />
          <span className="text-[13px] font-bold tracking-[0.14em] text-[#f4f1ea] uppercase">
            Revla Corretora
          </span>
        </div>

        <div className="relative mb-5 h-[148px] w-[148px]">
          <div className="absolute -inset-[6px] rounded-full bg-[conic-gradient(from_210deg,#4fa3dc,#16a38c,#4fa3dc)]" />
          <div className="relative h-[148px] w-[148px] overflow-hidden rounded-full border-[3px] border-[#061227] bg-[var(--color-primary)] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)]">
            <Image
              src="/images/reinaldo-masullo.png"
              alt="Reinaldo Masullo"
              width={296}
              height={444}
              priority
              className="h-full w-full object-cover object-[center_18%]"
            />
          </div>
        </div>

        <h1 className="mb-1.5 text-center text-[27px] font-semibold text-balance text-white">
          Reinaldo Masullo
        </h1>
        <p className="mb-3.5 text-[11.5px] font-bold tracking-[0.12em] text-[#16a38c] uppercase">
          Especialista em Planejamento Patrimonial
        </p>
        <p className="mb-6 max-w-[360px] text-center text-[14.5px] leading-relaxed text-[rgba(244,241,234,0.68)]">
          Consórcios, seguros e plano de saúde — comparando as melhores opções para proteger e
          ampliar o seu patrimônio, do primeiro contato até a contratação.
        </p>
        <p className="mb-6 text-[11.5px] tracking-wide text-[rgba(244,241,234,0.45)]">
          Registro pessoal SUSEP: 231149772
        </p>

        <a
          href={whatsappLink("Olá! Vim pelo link e gostaria de falar com o Reinaldo Masullo da Revla.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3.5 flex w-full items-center justify-center gap-2.5 rounded-[14px] bg-gradient-to-br from-[#16a38c] to-[var(--color-whatsapp)] px-5 py-[15px] text-[15.5px] font-bold text-white shadow-[0_14px_30px_-10px_rgba(15,122,107,0.55)] transition-transform hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0">
            <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4-.1-.1-.3-.2-.5-.3z" />
            <path d="M20.5 3.5A11.8 11.8 0 0012 .1 11.9 11.9 0 00.3 12a11.8 11.8 0 001.6 6L0 24l6.2-1.6A12 12 0 0012 23.9 11.9 11.9 0 0023.9 12a11.8 11.8 0 00-3.4-8.5zM12 21.9c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 01-1.5-5.3A10 10 0 0112 2a9.9 9.9 0 017 2.9 9.8 9.8 0 012.9 7A10 10 0 0112 21.9z" />
          </svg>
          Falar no WhatsApp
        </a>

        <div className="mb-8 flex w-full flex-col gap-[11px]">
          {redes.map((rede) => (
            <a
              key={rede.label}
              href={rede.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-3.5 rounded-[13px] border border-white/10 bg-white/[0.055] px-[17px] py-[13px] text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#4fa3dc]/55 hover:bg-white/[0.09]"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-white/[0.08] [&>svg]:h-[18px] [&>svg]:w-[18px]">
                {rede.icon}
              </span>
              <span className="flex-1 text-[14.5px] font-semibold">{rede.label}</span>
              <svg
                className="h-4 w-4 flex-shrink-0 opacity-40 transition group-hover:opacity-80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
          ))}
        </div>

        <footer className="text-center">
          <div className="mb-2 flex items-center justify-center gap-[7px] opacity-80">
            <Image src="/icon.png" alt="" width={16} height={16} className="rounded-[3px]" />
            <span className="text-[11px] font-bold tracking-[0.1em] text-[rgba(244,241,234,0.68)] uppercase">
              Revla Corretora
            </span>
          </div>
          <p className="text-[11.5px] text-[rgba(244,241,234,0.4)]">
            SUSEP 231149772 · <a href={siteConfig.url} className="underline">revlacorretora.com.br</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
