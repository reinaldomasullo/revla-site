import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Disclaimer",
    description: `Avisos legais e limitações de responsabilidade da ${siteConfig.legalName}.`,
    path: "/disclaimer",
  }),
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <>
    <Breadcrumbs items={[{ label: "Disclaimer", href: "/disclaimer" }]} />
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-primary)]">
          Disclaimer
        </h1>
        <div className="prose-revla mt-8 space-y-5 text-sm leading-relaxed text-[var(--color-ink)]/80">
          <p>
            <em>
              Este é um modelo inicial — recomendamos revisão jurídica antes da publicação,
              adequando-o à realidade operacional e regulatória da {siteConfig.legalName}.
            </em>
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Natureza informativa do conteúdo
          </h2>
          <p>
            As informações disponíveis neste site — incluindo textos sobre seguros, planos de
            saúde, amparo funeral e consórcios, além de simulações e calculadoras — têm
            finalidade exclusivamente educativa e informativa. Elas não constituem
            recomendação, consultoria financeira, jurídica, tributária ou de investimentos, e
            não substituem o atendimento consultivo individualizado de um corretor.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Simulações e resultados
          </h2>
          <p>
            Os resultados apresentados em simuladores e calculadoras (incluindo a calculadora
            de consórcio) são estimativas baseadas nos dados informados pelo usuário e em
            premissas de mercado (como índices de correção, valorização e rendimento) que
            podem não se confirmar. Eles não representam garantia de contemplação, rentabilidade,
            valorização de bens ou qualquer resultado futuro. Condições reais de contratação,
            prazos e valores dependem de análise específica junto às seguradoras, administradoras
            de consórcio e operadoras de saúde parceiras.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Produtos de terceiros
          </h2>
          <p>
            A {siteConfig.legalName} atua como corretora, intermediando produtos de seguradoras,
            administradoras de consórcio e operadoras de planos de saúde parceiras. Condições
            gerais, coberturas, carências, exclusões e valores finais são definidos pelas
            respectivas seguradoras/administradoras/operadoras e estão sujeitos às normas da
            SUSEP, ANS e demais órgãos reguladores aplicáveis.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Regulação e registro
          </h2>
          <p>
            A {siteConfig.legalName} (CNPJ {siteConfig.cnpj}) é registrada na SUSEP sob o
            número {siteConfig.susep}. A atuação como corretor de seguros está sujeita à
            fiscalização da Superintendência de Seguros Privados (SUSEP).
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">Sem garantias</h2>
          <p>
            Este site é fornecido &ldquo;como está&rdquo;, sem garantias de qualquer tipo quanto à
            precisão, integridade ou atualidade das informações. Antes de tomar qualquer
            decisão financeira, recomendamos falar diretamente com um de nossos consultores.
          </p>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">Contato</h2>
          <p>Dúvidas podem ser enviadas para {siteConfig.email}.</p>
        </div>
      </Container>
    </section>
    </>
  );
}
