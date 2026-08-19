import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Política de Privacidade",
    description: `Política de privacidade da ${siteConfig.legalName}.`,
    path: "/politica-de-privacidade",
  }),
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
    <Breadcrumbs
      items={[{ label: "Política de Privacidade", href: "/politica-de-privacidade" }]}
    />
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-primary)]">
          Política de Privacidade
        </h1>
        <div className="prose-revla mt-8 space-y-5 text-sm leading-relaxed text-[var(--color-ink)]/80">
          <p>
            <em>
              Este é um modelo inicial — recomendamos revisão jurídica antes da publicação,
              adequando-o à Lei Geral de Proteção de Dados (LGPD) e às práticas reais de
              tratamento de dados da {siteConfig.legalName}.
            </em>
          </p>
          <p>
            A {siteConfig.legalName} respeita a privacidade dos visitantes e clientes deste
            site. Esta política descreve, em linhas gerais, como coletamos, usamos e
            protegemos as informações fornecidas por você.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Quais dados coletamos
          </h2>
          <p>
            Coletamos informações que você fornece diretamente ao entrar em contato conosco
            (por exemplo, pelo WhatsApp ou por formulários), como nome, telefone, e-mail e
            dados necessários para simulação de produtos.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Como usamos seus dados
          </h2>
          <p>
            Usamos essas informações para responder às suas solicitações, elaborar
            simulações e propostas, e para contato relacionado aos produtos de seu
            interesse.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Seus direitos
          </h2>
          <p>
            Você pode solicitar, a qualquer momento, informações sobre os dados que
            mantemos sobre você, correção, ou exclusão, entrando em contato pelo e-mail{" "}
            {siteConfig.email}.
          </p>
        </div>
      </Container>
    </section>
    </>
  );
}
