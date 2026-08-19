import type { ReactNode } from "react";
import Link from "next/link";

// Suporte a um markdown bem simples: [texto](url).
// Links internos (começando com "/") usam next/link; externos abrem em nova aba.
export function renderInline(text: string): ReactNode[] {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    const isExternal = /^https?:\/\//.test(href);
    parts.push(
      isExternal ? (
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[var(--color-accent)]/50 underline-offset-2 hover:decoration-[var(--color-accent)]"
        >
          {label}
        </a>
      ) : (
        <Link
          key={key++}
          href={href}
          className="underline decoration-[var(--color-primary)]/50 underline-offset-2 hover:decoration-[var(--color-primary)]"
        >
          {label}
        </Link>
      )
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

// Remove a sintaxe [texto](url), mantendo só o texto — usado em campos
// estruturados (JSON-LD, meta description) onde markdown não faz sentido.
export function stripInlineMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
