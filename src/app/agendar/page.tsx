import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import AgendadorForm from "@/components/AgendadorForm";
import { siteConfig, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Agendar uma conversa",
    description: `Agende um horário com a ${siteConfig.name} sobre consórcio, seguro ou plano de saúde. Escolha o melhor dia e horário, de segunda a sexta.`,
    path: "/agendar",
  }),
  robots: { index: true, follow: true },
};

export default function AgendarPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Agendar", href: "/agendar" }]} />
      <section className="py-12 sm:py-16">
        <Container className="max-w-md">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-3xl">
              Agendar uma conversa
            </h1>
            <p className="mt-2 text-sm text-[var(--color-ink)]/70">
              Conte um pouco sobre o que você precisa e escolha o melhor
              horário — de segunda a sexta, das 9h às 12h e das 14h às 18h.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
            <AgendadorForm />
          </div>
        </Container>
      </section>
    </>
  );
}
