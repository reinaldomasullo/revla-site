import Link from "next/link";
import Container from "./Container";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/lib/site-config";

export type Crumb = {
  label: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems = [{ label: "Início", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-[var(--color-border)]">
      <JsonLd data={schema} />
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-xs text-[var(--color-ink)]/60">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span aria-hidden="true" className="text-[var(--color-ink)]/35">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-[var(--color-ink)]/80">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-[var(--color-primary)]">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
