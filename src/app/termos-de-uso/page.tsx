import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, socialChannels, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Termos de Uso",
    description: `Termos de uso do site da ${siteConfig.legalName}: regras de utilização, responsabilidades e condições para contratar pelo site.`,
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
              Ao acessar e utilizar o site {siteConfig.url}, você concorda com os termos e
              condições descritos a seguir. Caso não concorde com algum destes termos, pedimos
              que não utilize este site.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">Sobre a empresa</h2>
            <p>
              Este site é operado pela {siteConfig.legalName}, CNPJ {siteConfig.cnpj}, corretora
              de seguros devidamente registrada na Superintendência de Seguros Privados (SUSEP)
              sob o registro {siteConfig.susep}, com sede em {siteConfig.address.street},{" "}
              {siteConfig.address.district}, {siteConfig.address.city} -{" "}
              {siteConfig.address.state}.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Natureza da nossa atividade
            </h2>
            <p>
              A {siteConfig.legalName} atua como corretora, intermediando a contratação de
              produtos entre você e seguradoras, administradoras de consórcio e operadoras de
              plano de saúde parceiras. Não somos uma seguradora, administradora de consórcio
              ou operadora de plano de saúde — não emitimos apólices, cotas ou planos
              diretamente, e as condições finais de contratação são sempre definidas pela
              instituição parceira responsável pelo produto.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Nossos canais oficiais
            </h2>
            <p>
              Para sua segurança, o atendimento da {siteConfig.name} acontece apenas pelos
              canais abaixo. Não realizamos cobranças ou solicitamos dados sensíveis fora
              deles, e não nos responsabilizamos por contato feito através de perfis ou
              números que não constam nesta lista:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Site: {siteConfig.url}</li>
              <li>WhatsApp: {siteConfig.whatsappDisplay}</li>
              <li>E-mail: {siteConfig.email}</li>
              {socialChannels.map((social) => (
                <li key={social.label}>
                  {social.label}: {social.href}
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Cadastro e comunicação
            </h2>
            <p>
              Ao preencher um formulário ou nos enviar uma mensagem pelo WhatsApp ou por
              qualquer um dos nossos canais oficiais, você concorda em ser contatado por um de
              nossos consultores para dar continuidade ao seu atendimento, simulação ou
              proposta. Você pode solicitar o encerramento desse contato a qualquer momento.
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
              personalizadas, fale com um de nossos consultores pelos canais oficiais acima.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Condutas proibidas
            </h2>
            <p>Ao usar este site, você concorda em não:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>utilizá-lo para qualquer finalidade ilegal ou não autorizada;</li>
              <li>
                tentar acessar áreas restritas, interferir no funcionamento do site ou
                introduzir vírus, malware ou outro código malicioso;
              </li>
              <li>
                copiar, extrair ou reproduzir conteúdo do site por meios automatizados
                (scraping) sem autorização prévia; ou
              </li>
              <li>se passar por outra pessoa ou fornecer informações falsas em formulários.</li>
            </ul>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Links e redes sociais de terceiros
            </h2>
            <p>
              Este site pode conter links para as redes sociais da {siteConfig.name} e para
              sites de parceiros (seguradoras, administradoras de consórcio e operadoras de
              plano de saúde). Não nos responsabilizamos pelo conteúdo, políticas ou práticas
              de sites e perfis de terceiros, mesmo quando vinculados a partir daqui.
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
              Lei aplicável e foro
            </h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Fica
              eleito o foro da comarca de São Paulo - SP para dirimir eventuais controvérsias,
              com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Alterações destes termos
            </h2>
            <p>
              Estes termos podem ser atualizados periodicamente, sem aviso prévio, para
              refletir mudanças legais, regulatórias ou operacionais. Recomendamos revisitar
              esta página regularmente.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">Contato</h2>
            <p>Dúvidas sobre estes termos podem ser enviadas para {siteConfig.email}.</p>

            <p className="text-xs text-[var(--color-ink)]/50">
              Última atualização: setembro de 2026.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
