import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculadoraVeiculos from "@/components/calculadora-veiculos/CalculadoraVeiculos";
import { buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Calculadora: Consórcio de Veículo x Financiamento",
  description:
    "Compare o custo total de comprar um veículo pelo consórcio ou pelo financiamento tradicional (Tabela Price). Simule parcelas, juros e o valor total pago em cada opção. Ferramenta gratuita da Revla Corretora.",
  path: "/consorcios/calculadora-veiculos",
});

const faqItems = [
  {
    question: "Como a calculadora compara consórcio e financiamento de veículo?",
    answer:
      "Ela projeta o total pago no consórcio ao longo dos 90 meses (parcela reduzida até o mês 24 ou até a contemplação, taxa administrativa de 16% e correção do crédito pelo índice informado) e compara com o total pago no financiamento tradicional, calculado pela Tabela Price com a taxa de juros e o prazo que você informar.",
  },
  {
    question: "Por que a parcela reduzida do consórcio de veículo só vale até o mês 24?",
    answer:
      "É uma regra do próprio consórcio: a redução da parcela (que incide só sobre a parte do crédito, nunca sobre a taxa administrativa) é permitida apenas nos primeiros 24 meses ou até a contemplação, o que ocorrer primeiro. Depois disso, se ainda não contemplou, a parcela volta a ser cheia até a contemplação.",
  },
  {
    question: "A taxa de juros do financiamento sugerida é a mesma para qualquer banco?",
    answer:
      "Não. É só uma referência de mercado (Banco Central, financiamento de veículos 0km). Cada banco e cada perfil de crédito tem uma taxa diferente — o ideal é preencher a taxa que você conseguiu na sua simulação bancária real para uma comparação precisa.",
  },
  {
    question: "Os resultados da calculadora são garantidos?",
    answer:
      "Não. É uma simulação educativa baseada nos números que você informa. O mês da contemplação no consórcio depende do comportamento do grupo (sorteio ou lance) e não é garantido; a taxa de juros do financiamento depende da aprovação de crédito de cada instituição.",
  },
];

export default function CalculadoraVeiculosPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Calculadora de veículos", href: "/consorcios/calculadora-veiculos" },
        ]}
      />
      <Hero
        eyebrow="Consórcios"
        title="Consórcio de veículo x financiamento"
        description="Compare quanto você paga no total comprando seu veículo pelo consórcio ou pelo financiamento tradicional — parcelas, juros e o valor final de cada opção lado a lado."
      />

      <section className="pb-12 sm:pb-16">
        <Container>
          <CalculadoraVeiculos />
        </Container>
      </section>

      <FAQ items={faqItems} />
    </>
  );
}
