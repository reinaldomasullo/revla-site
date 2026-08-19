import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Termos de Uso",
    description: `Termos de uso do site da ${siteConfig.legalName}.`,
    path: "/termos-de-uso",
  }),
  robots: { index: true, follow: true },
};

export default function TermosDeUsoPage() {
  return (
    <>
    <Breadcrumbs items={[{ label: "Termos de Uso", href: "/termos-de-uso" }]} />
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-primary)]">
          Termos de Uso
        </h1>
        <div className="prose-revla mt-8 space-y-5 text-sm leading-relaxed text-[var(--color-ink)]/80">
          <p>
            <em>
              Este é um modelo inicial — recomendamos revisão jurídica antes da publicação,
              adequando-o à realidade operacional e regulatória da {siteConfig.legalName}.
            </em>
          </p>
          <p>
            Ao acessar e utilizar o site {siteConfig.url}, você concorda com os termos e
            condições descritos a seguir. Caso não concorde com algum destes termos, pedimos
            que não utilize este site.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">Sobre a empresa</h2>
          <p>
            Este site é operado pela {siteConfig.legalName}, CNPJ {siteConfig.cnpj}, corretora
            de seguros devidamente registrada na Superintendência de Seguros Privados (SUSEP)
            sob o registro {siteConfig.susep}.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">Uso do conteúdo</h2>
          <p>
            Todo o conteúdo publicado neste site — textos, simulações, imagens e marca — é de
            propriedade da {siteConfig.legalName} ou de seus licenciadores, e não pode ser
            reproduzido, distribuído ou utilizado comercialmente sem autorização prévia por
            escrito.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Simulações e conteúdo informativo
          </h2>
          <p>
            As simulações, calculadoras e conteúdos disponíveis neste site têm caráter
            exclusivamente educativo e informativo, não constituindo oferta, proposta
            comercial ou consultoria individualizada. Para informações e propostas
            personalizadas, fale com um de nossos consultores.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Limitação de responsabilidade
          </h2>
          <p>
            Envidamos esforços para manter as informações deste site atualizadas e corretas,
            mas não garantimos a ausência total de erros, omissões ou indisponibilidades
            temporárias. O uso do site é de responsabilidade do usuário.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Alterações destes termos
          </h2>
          <p>
            Estes termos podem ser atualizados periodicamente, sem aviso prévio, para refletir
            mudanças legais, regulatórias ou operacionais. Recomendamos revisitar esta página
            regularmente.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">Contato</h2>
          <p>
            Dúvidas sobre estes termos podem ser enviadas para {siteConfig.email}.
          </p>
        </div>
      </Container>
    </section>
    </>
  );
}
