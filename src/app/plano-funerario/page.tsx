import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { planoFunerarioCidades } from "@/lib/plano-funerario-cidades";
import {
  UserCheck,
  Flame,
  Coffee,
  Clock24,
  Dove,
  Tag,
  ShoppingBag,
  Briefcase,
  BuildingUsers,
  ShieldUsers,
  MapPin,
} from "@/components/icons";

// Plano Funerário / Amparo Funeral (Estratégia 1 — Onda 7).
// Pesquisa de palavras-chave confirmou que o termo real de busca é "plano
// funerário"/"plano funeral", não "amparo funeral" (nome da marca PASI,
// quase sem busca pública). Migrado de /amparo-funeral para /plano-funerario
// com redirect 301 obrigatório (ver next.config.ts). "Amparo Funeral"
// continua citado no conteúdo como o nome real do produto da PASI. Mantém 5
// páginas de cidade (São Paulo, Campinas, São Bernardo do Campo, Osasco,
// Guarulhos) — únicas com volume real e distinto por cidade nos dados do
// Keyword Planner.

export const metadata: Metadata = buildMetadata({
  title: "Plano Funerário PASI desde R$ 99/mês",
  description:
    "Plano funerário PASI (Amparo Funeral) a partir de R$ 99/mês: planos individual, familiar e sênior, com assistência 24h em todo o Brasil. Simulação gratuita.",
  path: "/plano-funerario",
});

type Tier = { capital: string; mensalidade: string };

type Plano = {
  title: string;
  subtitle: string;
  cobre: string;
  idade: string;
  tiers: Tier[];
  destaque?: boolean;
};

const planos: Plano[] = [
  {
    title: "Amparo Funeral Individual",
    subtitle: "Só para o titular",
    cobre: "Cobre exclusivamente o titular do plano.",
    idade: "Contratação até 75 anos · permanência ilimitada no plano",
    tiers: [
      { capital: "R$ 5.000", mensalidade: "R$ 99" },
      { capital: "R$ 7.000", mensalidade: "R$ 149" },
      { capital: "R$ 10.000", mensalidade: "R$ 199" },
    ],
  },
  {
    title: "Amparo Funeral Familiar",
    subtitle: "Titular + cônjuge + filhos",
    cobre: "Cobre titular, cônjuge/companheiro(a) e filhos.",
    idade:
      "Titular e cônjuge até 75 anos para contratar · filhos e enteados cobertos até 25 anos, 11 meses e 29 dias",
    tiers: [
      { capital: "R$ 5.000", mensalidade: "R$ 169" },
      { capital: "R$ 7.000", mensalidade: "R$ 249" },
      { capital: "R$ 10.000", mensalidade: "R$ 339" },
    ],
    destaque: true,
  },
  {
    title: "Amparo Funeral Sênior",
    subtitle: "Para quem tem de 76 a 85 anos",
    cobre: "Cobre exclusivamente o titular do plano.",
    idade:
      "Contratação de 76 a 85 anos · permanência ilimitada, desde que haja renovação ininterrupta",
    tiers: [
      { capital: "R$ 5.000", mensalidade: "R$ 299" },
      { capital: "R$ 7.000", mensalidade: "R$ 429" },
      { capital: "R$ 10.000", mensalidade: "R$ 599" },
    ],
  },
];

const diferenciais = [
  {
    title: "Sem vínculo",
    description: "Não é necessário vínculo empregatício ou institucional para contratar — venda direta ao consumidor.",
    icon: <UserCheck />,
  },
  {
    title: "Cremação",
    description: "Possibilidade de cremação conforme o plano contratado.",
    href: "/blog/amparo-funeral-vale-a-pena-custos-funeral",
    linkLabel: "Plano funerário vale a pena? Veja os custos",
    icon: <Flame />,
  },
  {
    title: "Serviço de cafeteria",
    description: "Serviço de cafeteria disponível durante o funeral presencial.",
    icon: <Coffee />,
  },
  {
    title: "Acionamento 24 horas",
    description: "A Assistência Funeral pode ser acionada 24 horas por dia, todos os dias.",
    href: "/blog/traslado-assistencia-24-horas-amparo-funeral",
    linkLabel: "Como funciona a assistência 24h",
    icon: <Clock24 />,
  },
];

const assistencias = [
  {
    title: "Assistência Funeral",
    description: "Serviços para a realização do funeral, trâmites administrativos, pagamento de taxas e organização do sepultamento.",
    href: "/blog/diferenca-amparo-funeral-seguro-de-vida-plano-funerario",
    linkLabel: "Amparo funeral x seguro de vida x plano funerário tradicional",
    icon: <Dove />,
  },
  {
    title: "Clube de Vantagens PASI",
    description: "Acesso a uma plataforma com benefícios exclusivos e descontos em produtos e serviços.",
    icon: <Tag />,
  },
  {
    title: "Assistência Alimentação",
    description: "Em caso de falecimento do titular, os beneficiários recebem R$ 300,00 para alimentação.",
    icon: <ShoppingBag />,
  },
];

const outrasModalidades = [
  {
    title: "PME – Plano Funerário Individual",
    description:
      "Amparo funeral pensado para empresas contratarem para seus colaboradores, cobrindo só o titular. Coberturas e valores são definidos conforme o porte da empresa — fale com um consultor para uma cotação personalizada.",
    icon: <Briefcase />,
  },
  {
    title: "PME – Plano Funerário Familiar",
    description:
      "Mesma lógica do plano PME Individual, estendendo a cobertura à família do colaborador. Ideal para empresas que querem oferecer esse benefício de forma mais completa. Cotação sob consulta.",
    icon: <BuildingUsers />,
  },
  {
    title: "Plano Funerário PASI Colaboradores e Dependentes",
    description:
      "Modalidade coletiva de amparo funeral para empresas segurarem colaboradores e dependentes em um único convênio. Peça uma simulação para sua empresa.",
    icon: <ShieldUsers />,
  },
];

const testimonials = [
  {
    name: "Aurencie",
    city: "Diadema",
    quote:
      "Passei por um momento muito difícil no ano passado e o amparo funeral foi acionado exatamente como contratado. A equipe da Revla esteve ao meu lado com todo o cuidado e respeito que eu precisava naquele momento.",
  },
];

const faqItems = [
  {
    question: "O que é o Plano Funerário PASI (Amparo Funeral)?",
    answer:
      "É um plano de assistência da seguradora PASI, parceira da Revla, comercializado sob o nome Amparo Funeral, que organiza e cobre as despesas do funeral do titular (e, conforme o plano, de dependentes), com uma Central de Assistência Funeral disponível 24 horas por dia.",
  },
  {
    question: "Qual a diferença entre os planos Individual, Familiar e Sênior?",
    answer:
      "O Individual cobre só o titular e pode ser contratado até 75 anos. O Familiar estende a cobertura a cônjuge/companheiro(a) e filhos até 25 anos. O Sênior é a versão do plano individual voltada a quem tem entre 76 e 85 anos, faixa que o plano Individual comum não atende mais.",
  },
  {
    question: "Quanto custa o plano funerário PASI?",
    answer:
      "Os planos individual e familiar começam em R$ 99,00 e R$ 169,00 por mês, respectivamente, para um capital de R$ 5.000,00, com opções de R$ 7.000,00 e R$ 10.000,00. O plano Sênior começa em R$ 299,00 por mês. Os valores são de planos anuais (12 meses).",
  },
  {
    question: "Preciso ter vínculo empregatício para contratar?",
    answer:
      "Não. O Amparo Funeral PASI individual, familiar e sênior são vendidos diretamente ao consumidor, sem necessidade de vínculo com empresa ou instituição.",
  },
  {
    question: "Como funciona o acionamento em caso de falecimento?",
    answer:
      "A família deve acionar a Central PASI (0800 703 6302 ou 4000-1989) *antes* de contratar os serviços funerários. Isso é essencial: se a assistência funeral não for acionada previamente, não é possível pedir reembolso das despesas depois.",
  },
  {
    question: "Existe carência?",
    answer:
      "Sim: 24 horas de carência para morte acidental e 90 dias para morte natural, em todos os planos.",
  },
  {
    question: "Qual a distância de cobertura do traslado do corpo?",
    answer:
      "O traslado é coberto em todo o Brasil, mas a distância e as condições específicas variam conforme o capital contratado — quanto maior o capital, maior a cobertura de traslado. Fale com um consultor da Revla para confirmar o alcance exato do plano que você está avaliando.",
  },
  {
    question: "A empresa pode contratar plano funerário para os colaboradores?",
    answer:
      "Sim — além dos planos individual, familiar e sênior vendidos diretamente à pessoa física, a PASI também oferece o Plano Funerário PME (individual e familiar) e o Plano Funerário PASI para Colaboradores e Dependentes, pensados para empresas. Fale com um consultor da Revla para uma cotação personalizada.",
  },
  {
    question: "A assistência funeral também pode vir dentro de um seguro de vida empresarial?",
    answer:
      "Em algumas seguradoras, sim — como cobertura adicional agregada à apólice de seguro de vida em grupo da empresa. A Revla trabalha com os dois formatos: o Plano Funerário PASI dedicado (mais completo, com Central de Assistência própria) e, quando a empresa já tem ou está montando um seguro de vida corporativo, também ajudamos a avaliar se faz mais sentido incluir a assistência funeral ali.",
  },
  {
    question: "A Revla é uma corretora regulamentada?",
    answer:
      "Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº 232150320, e o Amparo Funeral é comercializado através da seguradora parceira PASI.",
  },
  {
    question: "A Revla atende em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital e consultoria remota para todo o Brasil. Temos páginas específicas para [São Paulo](/plano-funerario/sao-paulo), [Campinas](/plano-funerario/campinas), [São Bernardo do Campo](/plano-funerario/sao-bernardo-do-campo), [Osasco](/plano-funerario/osasco) e [Guarulhos](/plano-funerario/guarulhos).",
  },
];

const cidadesFeatures = planoFunerarioCidades.map((cidade) => ({
  title: cidade.nome,
  description: `Plano funerário PASI com atendimento para ${cidade.nome}.`,
  href: `/plano-funerario/${cidade.slug}`,
  linkLabel: `Plano funerário em ${cidade.nome}`,
  icon: <MapPin />,
}));

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de plano funerário (Amparo Funeral)",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de planos de Amparo Funeral PASI individual, familiar e sênior, além de modalidades PME e para colaboradores e dependentes.",
  offers: planos.map((plano) => ({
    "@type": "Offer",
    name: plano.title,
    priceCurrency: "BRL",
    price: plano.tiers[0].mensalidade.replace("R$ ", ""),
  })),
};

export default function PlanoFunerarioPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: "Plano Funerário", href: "/plano-funerario" }]} />
      <Hero
        eyebrow="Plano Funerário · Amparo Funeral PASI"
        title="Plano Funerário PASI: tranquilidade para sua família nos momentos mais difíceis"
        description="Planos individual, familiar e sênior, a partir de R$ 99,00 por mês, com assistência funeral 24 horas, cremação e sem necessidade de vínculo empregatício. Atendimento presencial em São Paulo e consultoria remota para todo o Brasil. Compare as opções e simule gratuitamente com a Revla."
      >
        <CTAButton href={whatsappLink("Olá! Vim pelo site e gostaria de simular um plano funerário (Amparo Funeral PASI).")} external>
          Simular plano funerário
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
              Escolha o plano PASI ideal
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/70">
              Três capitais disponíveis em cada plano — quanto maior o capital contratado, maior a cobertura para despesas de funeral e traslado.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {planos.map((plano) => (
              <div
                key={plano.title}
                className={`flex flex-col rounded-2xl border p-6 ${
                  plano.destaque
                    ? "border-[var(--color-primary)] shadow-md ring-1 ring-[var(--color-primary)]/15"
                    : "border-[var(--color-border)]"
                }`}
              >
                {plano.destaque && (
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-white">
                    Mais contratado
                  </span>
                )}
                <h3 className="text-lg font-bold text-[var(--color-ink)]">{plano.title}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent-dark)]">{plano.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/70">{plano.cobre}</p>

                <div className="mt-5 divide-y divide-[var(--color-border)] rounded-xl border border-[var(--color-border)]">
                  <div className="grid grid-cols-2 bg-[var(--color-paper)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
                    <span>Capital</span>
                    <span className="text-right">Mensalidade</span>
                  </div>
                  {plano.tiers.map((tier) => (
                    <div key={tier.capital} className="grid grid-cols-2 px-4 py-3 text-sm">
                      <span className="font-medium text-[var(--color-ink)]">{tier.capital}</span>
                      <span className="text-right font-bold text-[var(--color-primary)]">
                        {tier.mensalidade}
                        <span className="font-normal text-[var(--color-ink)]/60">/mês</span>
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[var(--color-ink)]/60">{plano.idade}</p>

                <CTAButton
                  href={whatsappLink(`Olá! Vim pelo site e gostaria de contratar o ${plano.title} da PASI.`)}
                  external
                  variant={plano.destaque ? "primary" : "ghost"}
                  className="mt-5 w-full text-sm"
                >
                  Simular este plano
                </CTAButton>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[var(--color-ink)]/60">
            Valores de planos anuais (12 meses), sujeitos a confirmação na contratação. Carência: 24 horas para morte
            acidental e 90 dias para morte natural. O serviço de traslado é limitado conforme o capital contratado.
          </p>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid
          title="O que todo plano PASI inclui"
          description="Diferenciais e assistências presentes nos planos individual, familiar e sênior."
          columns={4}
          items={[...diferenciais, ...assistencias]}
        />
      </section>

      <section className="py-8 sm:py-10">
        <Container>
          <div className="rounded-2xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 p-6 sm:p-8">
            <h3 className="text-base font-bold text-[var(--color-ink)]">Atenção: acione antes de contratar os serviços</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--color-ink)]/75">
              Em caso de falecimento, é fundamental acionar a Central PASI (0800 703 6302 ou 4000-1989) <strong>antes</strong> de
              contratar a funerária ou qualquer serviço relacionado ao funeral. Se a assistência funeral não for acionada
              previamente, não é possível pedir reembolso das despesas depois.
            </p>
          </div>
        </Container>
      </section>

      <FeatureGrid
        title="Plano funerário na sua cidade"
        description="Informações e atendimento específicos para as principais cidades onde a Revla atua."
        columns={3}
        items={cidadesFeatures}
      />

      <section className="section-tint-blue">
        <FeatureGrid
          title="Plano funerário para empresas"
          description="Além dos planos vendidos diretamente à pessoa física, a PASI também oferece opções para empresas contratarem em nome de colaboradores. Em breve, cada uma dessas modalidades terá sua própria página com todos os detalhes."
          columns={3}
          items={outrasModalidades}
        />
      </section>

      <Testimonials title="Quem já contou com o Amparo Funeral da Revla" items={testimonials} accentCards />

      <FAQ items={faqItems} />

      <CTASection
        title="Garanta essa tranquilidade para quem você ama"
        description="Fale com um consultor da Revla e entenda qual plano funerário PASI faz sentido para sua família."
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla sobre o plano funerário."
        buttonLabel="Simular agora"
      />
    </>
  );
}
