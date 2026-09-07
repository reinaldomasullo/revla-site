import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculadoraFinanciamento from "@/components/calculadora-financiamento/CalculadoraFinanciamento";
import { buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Calculadora: Consórcio de Imóvel x Financiamento SFH",
  description:
    "Compare o custo total de comprar um imóvel pelo consórcio ou pelo financiamento tradicional do SFH, nos sistemas SAC e SACRE. Simule parcelas, juros e o valor total pago em cada opção. Ferramenta gratuita da Revla Corretora.",
  path: "/consorcios/calculadora-financiamento",
});

const faqItems = [
  {
    question: "Como a calculadora compara o consórcio com o financiamento SFH?",
    answer:
      "Ela projeta o total pago no consórcio até a quitação (parcela reduzida até a contemplação, taxa administrativa de 24,2% e correção do crédito pelo índice informado) e compara com o total pago no financiamento pelo SFH, nos sistemas SAC e SACRE, considerando entrada de 20%, prazo de 35 anos e a taxa de juros + TR que você informar.",
  },
  {
    question: "Qual a diferença entre os sistemas SAC e SACRE?",
    answer:
      "No SAC (Sistema de Amortização Constante), a amortização é fixa todo mês e a parcela cai mês a mês. No SACRE (usado pela Caixa), a parcela é recalculada uma vez por ano, no aniversário do contrato, e fica praticamente estável durante os 12 meses seguintes, caindo em degraus — o custo total costuma ficar entre o SAC (mais barato) e a Tabela Price (mais cara).",
  },
  {
    question: "Por que a entrada e o prazo do financiamento são fixos?",
    answer:
      "São as regras padrão do SFH (Sistema Financeiro de Habitação): entrada mínima de 20% do valor do imóvel (financia-se até 80%) e prazo máximo de 420 meses (35 anos). A taxa de juros e a TR variam por banco e por período, por isso ficam livres para você preencher com a condição real da sua simulação.",
  },
  {
    question: "Os resultados da calculadora são garantidos?",
    answer:
      "Não. É uma simulação educativa baseada nos números que você informa. O mês da contemplação no consórcio depende do comportamento do grupo (sorteio ou lance) e não é garantido; a taxa de juros e a TR do financiamento dependem da aprovação de crédito e das condições vigentes em cada instituição.",
  },
];

export default function CalculadoraFinanciamentoPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Calculadora de financiamento", href: "/consorcios/calculadora-financiamento" },
        ]}
      />
      <Hero
        eyebrow="Consórcios"
        title="Consórcio de imóvel x financiamento SFH"
        description="Compare quanto você paga no total comprando seu imóvel pelo consórcio ou pelo financiamento tradicional (SAC e SACRE) — parcelas, juros e o valor final de cada opção lado a lado."
      />

      <section className="pb-12 sm:pb-16">
        <Container>
          <CalculadoraFinanciamento />
        </Container>
      </section>

      <FAQ items={faqItems} />
    </>
  );
}
