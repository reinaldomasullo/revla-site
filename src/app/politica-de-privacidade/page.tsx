import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, socialChannels, buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Política de Privacidade",
    description: `Política de privacidade da ${siteConfig.legalName}: quais dados coletamos, como usamos e seus direitos sob a LGPD.`,
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
              A {siteConfig.legalName} leva a sério a privacidade e a proteção dos dados
              pessoais de quem visita este site ou entra em contato conosco. Esta Política de
              Privacidade explica quais dados coletamos, para que os usamos, com quem podem
              ser compartilhados e quais direitos você tem sobre eles, em conformidade com a
              Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Quem é o controlador dos seus dados
            </h2>
            <p>
              O controlador dos dados pessoais tratados por meio deste site é a{" "}
              {siteConfig.legalName}, CNPJ {siteConfig.cnpj}, corretora de seguros registrada
              na Superintendência de Seguros Privados (SUSEP) sob o número {siteConfig.susep},
              com sede em {siteConfig.address.street}, {siteConfig.address.district},{" "}
              {siteConfig.address.city} - {siteConfig.address.state}, CEP{" "}
              {siteConfig.address.zip}.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Quais dados coletamos
            </h2>
            <p>
              Coletamos os dados que você nos fornece diretamente, como nome, telefone/WhatsApp,
              e-mail e informações necessárias para simulações de consórcio, seguro, plano de
              saúde ou amparo funeral (como valor de crédito desejado, idade ou tipo de
              cobertura de interesse), quando você preenche um formulário, envia uma mensagem
              pelo WhatsApp ou fala conosco por qualquer um dos nossos canais oficiais —
              incluindo nossas redes sociais (veja a lista completa em &ldquo;Nossos canais
              oficiais&rdquo;, abaixo). Também podemos coletar dados de navegação (como páginas
              visitadas e tempo de permanência) por meio de ferramentas de análise de
              audiência, para entender como o site é utilizado e melhorá-lo continuamente.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Para que usamos seus dados
            </h2>
            <p>
              Usamos os dados coletados para: responder às suas dúvidas e solicitações;
              elaborar simulações e propostas personalizadas; entrar em contato sobre os
              produtos de seu interesse; cumprir obrigações legais e regulatórias aplicáveis à
              atividade de corretagem (perante SUSEP, Banco Central do Brasil e demais órgãos
              reguladores); e melhorar continuamente a experiência de navegação neste site.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Base legal para o tratamento
            </h2>
            <p>
              O tratamento dos seus dados pessoais se baseia, conforme o caso, no seu
              consentimento, na execução de procedimentos preliminares ou de contrato do qual
              você seja parte, no cumprimento de obrigação legal ou regulatória, e no legítimo
              interesse da {siteConfig.legalName} em oferecer um atendimento consultivo
              adequado às suas necessidades.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Com quem compartilhamos seus dados
            </h2>
            <p>
              Para viabilizar cotações, simulações e contratações, podemos compartilhar seus
              dados com as seguradoras, administradoras de consórcio e operadoras de plano de
              saúde parceiras necessárias para atender à sua solicitação. Também podemos
              compartilhar dados com prestadores de serviços que apoiam nossa operação (como
              hospedagem do site, WhatsApp Business e ferramentas de comunicação), sempre
              restritos ao necessário para a prestação desses serviços.{" "}
              <strong>Não vendemos seus dados pessoais a terceiros.</strong>
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Cookies e tecnologias semelhantes
            </h2>
            <p>
              Este site pode utilizar cookies e tecnologias semelhantes para lembrar
              preferências, viabilizar funcionalidades e entender como os visitantes navegam
              pelo site. Na sua primeira visita, um aviso permite escolher entre aceitar todos
              os cookies ou apenas os essenciais; você pode revisar essa escolha a qualquer
              momento limpando os dados de navegação deste site nas configurações do seu
              navegador. Cookies essenciais (necessários para o funcionamento do site) não
              dependem dessa escolha.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Publicidade e cookies de terceiros
            </h2>
            <p>
              Este site pode exibir anúncios de terceiros, incluindo do Google. Esses
              parceiros — assim como o próprio Google — podem usar cookies para veicular
              anúncios com base em visitas anteriores suas a este e a outros sites. Você pode
              desativar a publicidade personalizada do Google visitando as{" "}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--color-primary)]/50 underline-offset-2 hover:decoration-[var(--color-primary)]"
              >
                Configurações de anúncios do Google
              </a>
              , e também pode revisar as opções de outros fornecedores de publicidade em{" "}
              <a
                href="https://www.aboutads.info/choices"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--color-primary)]/50 underline-offset-2 hover:decoration-[var(--color-primary)]"
              >
                www.aboutads.info/choices
              </a>
              .
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Por quanto tempo guardamos seus dados
            </h2>
            <p>
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas
              nesta política, respeitando os prazos exigidos por obrigações legais,
              regulatórias ou contratuais (por exemplo, a guarda de documentos relacionados à
              corretagem de seguros e consórcios). Após esse período, os dados são eliminados
              ou anonimizados.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Segurança da informação
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados
              contra acesso não autorizado, perda, alteração ou divulgação indevida. Nenhum
              sistema é totalmente livre de risco; caso identifiquemos qualquer incidente de
              segurança relevante, tomaremos as medidas cabíveis, incluindo comunicação às
              autoridades competentes quando exigido por lei.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Seus direitos como titular de dados
            </h2>
            <p>Nos termos da LGPD, você tem direito a:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>confirmar a existência de tratamento dos seus dados;</li>
              <li>acessar os dados que mantemos sobre você;</li>
              <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>solicitar a portabilidade dos seus dados a outro fornecedor;</li>
              <li>solicitar a eliminação dos dados tratados com base no seu consentimento;</li>
              <li>obter informações sobre com quem compartilhamos seus dados; e</li>
              <li>revogar seu consentimento a qualquer momento.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
              {siteConfig.lgpdEmail}, informando seu pedido. Responderemos dentro do prazo
              previsto na LGPD.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Encarregado de Dados (DPO)
            </h2>
            <p>
              Em conformidade com o art. 41 da LGPD, a {siteConfig.legalName} mantém um canal
              dedicado ao Encarregado de Proteção de Dados (Data Protection Officer), responsável
              por receber comunicações de titulares, esclarecer dúvidas sobre o tratamento de
              dados pessoais e atuar como ponto de contato com a Autoridade Nacional de Proteção
              de Dados (ANPD). Esse canal pode ser acionado pelo e-mail{" "}
              {siteConfig.lgpdEmail}.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Nossos canais oficiais
            </h2>
            <p>
              Para sua segurança, mantenha contato com a {siteConfig.name} apenas pelos canais
              abaixo. Não solicitamos senhas, dados de cartão ou pagamentos antecipados fora
              deles — desconfie de perfis ou contatos que se apresentem como{" "}
              {siteConfig.name} fora desta lista.
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
              Alterações desta política
            </h2>
            <p>
              Esta política pode ser atualizada periodicamente para refletir mudanças legais,
              regulatórias ou nas nossas práticas de tratamento de dados.
            </p>

            <h2 className="text-lg font-semibold text-[var(--color-ink)]">Contato</h2>
            <p>
              Dúvidas sobre esta Política de Privacidade podem ser enviadas para{" "}
              {siteConfig.email}.
            </p>

            <p className="text-xs text-[var(--color-ink)]/50">
              Última atualização: setembro de 2026.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
