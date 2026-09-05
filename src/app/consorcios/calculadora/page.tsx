import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import Calculadora from "@/components/calculadora/Calculadora";
import { buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Calculadora de Consórcio: Simule Ganhos com Venda ou Alavancagem",
  description:
    "Simule o lucro de vender sua carta de consórcio contemplada com ágio, ou de usar o consórcio para alavancagem patrimonial com renda de aluguel. Ferramenta gratuita da Revla Corretora.",
  path: "/consorcios/calculadora",
});

const faqItems = [
  {
    question: "Como a calculadora estima o lucro da venda da carta contemplada?",
    answer:
      "Ela corrige o valor do crédito pelo índice informado até o mês de contemplação, aplica o ágio de venda e compara o resultado com o total pago até aquele momento — e também com o que essas mesmas parcelas renderiam em uma aplicação comparativa.",
  },
  {
    question: "O que é alavancagem patrimonial com consórcio?",
    answer:
      "É a estratégia de usar a carta contemplada para adquirir um imóvel e, em seguida, alugá-lo — usando parte ou toda a renda do aluguel para ajudar a pagar as parcelas restantes do consórcio.",
  },
  {
    question: "Os resultados da calculadora são garantidos?",
    answer:
      "Não. É uma simulação educativa baseada nos números que você informa. Fatores como disponibilidade de contemplação, mercado imobiliário e vacância de aluguel não são garantidos.",
  },
];

export default function CalculadoraPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Calculadora", href: "/consorcios/calculadora" },
        ]}
      />
      <Hero
        eyebrow="Consórcios"
        title="Calculadora de consórcio"
        description="Compare o resultado de vender sua carta contemplada com ágio, ou de usar o consórcio como estratégia de alavancagem patrimonial com renda de aluguel."
      />

      <section className="pb-12 sm:pb-16">
        <Container>
          <Calculadora />
        </Container>
      </section>

      <FAQ items={faqItems} />
    </>
  );
}
