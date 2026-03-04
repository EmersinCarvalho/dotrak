import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Dotrak</title>
        <meta 
          name="description" 
          content="Política de Privacidade da Dotrak. Saiba como coletamos, usamos e protegemos seus dados pessoais." 
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="legal-page">
        <div className="container">
          <div className="legal-header">
            <Link to="/" className="back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Voltar
            </Link>
            <h1>Política de Privacidade</h1>
            <p className="last-updated">Última atualização: 4 de março de 2026</p>
          </div>

          <div className="legal-content">
            <section>
              <h2>1. Introdução</h2>
              <p>
                Bem-vindo à Dotrak. Esta Política de Privacidade explica como coletamos, usamos, 
                compartilhamos e protegemos suas informações pessoais quando você usa nossa plataforma.
              </p>
              <p>
                Ao utilizar a Dotrak, você concorda com a coleta e uso de informações de acordo com 
                esta política. Se você não concorda com nossos termos e políticas, por favor, não use nossos serviços.
              </p>
            </section>

            <section>
              <h2>2. Informações que Coletamos</h2>
              <h3>2.1 Informações Fornecidas por Você</h3>
              <ul>
                <li><strong>Dados de Cadastro:</strong> Nome, e-mail, nome de usuário, senha, data de nascimento</li>
                <li><strong>Dados de Perfil:</strong> Foto, biografia, preferências de jogos, informações de contato</li>
                <li><strong>Dados de Jogos:</strong> Contas de jogos vinculadas (Steam, Riot Games, etc.), estatísticas de gameplay</li>
                <li><strong>Comunicações:</strong> Mensagens, comentários, feedbacks e solicitações de suporte</li>
                <li><strong>Dados de Pagamento:</strong> Informações de cobrança (processadas por terceiros seguros)</li>
              </ul>

              <h3>2.2 Informações Coletadas Automaticamente</h3>
              <ul>
                <li><strong>Dados de Uso:</strong> Páginas visitadas, tempo de uso, funcionalidades utilizadas</li>
                <li><strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional, dispositivo</li>
                <li><strong>Cookies:</strong> Identificadores únicos, preferências de configuração, histórico de navegação</li>
                <li><strong>Dados de Performance:</strong> Métricas de jogos, análises de partidas, estatísticas</li>
              </ul>
            </section>

            <section>
              <h2>3. Como Usamos suas Informações</h2>
              <p>Utilizamos suas informações para:</p>
              <ul>
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Personalizar sua experiência e conteúdo</li>
                <li>Processar transações e enviar confirmações</li>
                <li>Enviar atualizações, newsletters e comunicações de marketing (com seu consentimento)</li>
                <li>Responder a comentários, perguntas e solicitações de suporte</li>
                <li>Analisar padrões de uso e otimizar a plataforma</li>
                <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Desenvolver análises com IA e machine learning para melhorar suas habilidades no jogo</li>
              </ul>
            </section>

            <section>
              <h2>4. Compartilhamento de Informações</h2>
              <p>Podemos compartilhar suas informações com:</p>
              <ul>
                <li><strong>Prestadores de Serviços:</strong> Empresas que nos ajudam a operar a plataforma (hospedagem, análise, pagamentos)</li>
                <li><strong>Parceiros de Jogos:</strong> Desenvolvedores e publishers de jogos para integração de APIs e estatísticas</li>
                <li><strong>Comunidade:</strong> Informações públicas do perfil visíveis para outros usuários</li>
                <li><strong>Autoridades:</strong> Quando exigido por lei ou para proteger direitos e segurança</li>
                <li><strong>Parceiros de Negócios:</strong> Em caso de fusão, aquisição ou venda de ativos</li>
              </ul>
              <p>
                <strong>Não vendemos suas informações pessoais para terceiros.</strong>
              </p>
            </section>

            <section>
              <h2>5. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
              </p>
              <ul>
                <li>Criptografia SSL/TLS para transmissão de dados</li>
                <li>Armazenamento seguro com criptografia</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Testes de penetração regulares</li>
                <li>Conformidade com padrões de segurança da indústria</li>
              </ul>
              <p>
                No entanto, nenhum método de transmissão pela internet é 100% seguro. Encorajamos você a 
                usar senhas fortes e proteger suas credenciais de acesso.
              </p>
            </section>

            <section>
              <h2>6. Seus Direitos e Escolhas</h2>
              <p>Você tem os seguintes direitos sobre suas informações pessoais:</p>
              <ul>
                <li><strong>Acesso:</strong> Solicitar uma cópia dos dados que temos sobre você</li>
                <li><strong>Correção:</strong> Atualizar ou corrigir informações incorretas</li>
                <li><strong>Exclusão:</strong> Solicitar a exclusão de suas informações pessoais</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado e transferível</li>
                <li><strong>Objeção:</strong> Opor-se ao processamento de suas informações em certas circunstâncias</li>
                <li><strong>Retirada de Consentimento:</strong> Cancelar inscrições de marketing e comunicações</li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato conosco através de <strong>emerson.carvalhoo5525@gmail.com</strong>
              </p>
            </section>

            <section>
              <h2>7. Cookies e Tecnologias Semelhantes</h2>
              <p>
                Usamos cookies e tecnologias similares para melhorar sua experiência. Você pode controlar 
                cookies através das configurações do seu navegador. Para mais informações, consulte nossa 
                <Link to="/cookies"> Política de Cookies</Link>.
              </p>
            </section>

            <section>
              <h2>8. Retenção de Dados</h2>
              <p>
                Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos 
                nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
              <p>
                Após a exclusão da conta, podemos reter certas informações para cumprir obrigações legais, 
                resolver disputas e fazer cumprir nossos acordos.
              </p>
            </section>

            <section>
              <h2>9. Transferências Internacionais</h2>
              <p>
                Suas informações podem ser transferidas e mantidas em servidores localizados fora do seu país 
                de residência. Garantimos proteções adequadas para essas transferências em conformidade com 
                as leis aplicáveis.
              </p>
            </section>

            <section>
              <h2>10. Menores de Idade</h2>
              <p>
                Nossos serviços não são destinados a menores de 13 anos. Não coletamos intencionalmente 
                informações pessoais de crianças. Se você acredita que coletamos dados de um menor, 
                entre em contato conosco imediatamente.
              </p>
              <p>
                Usuários entre 13 e 18 anos devem ter permissão dos pais ou responsáveis para usar nossos serviços.
              </p>
            </section>

            <section>
              <h2>11. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
                mudanças significativas através de e-mail ou aviso na plataforma. O uso contínuo dos 
                serviços após as alterações constitui aceitação da nova política.
              </p>
            </section>

            <section>
              <h2>12. Contato</h2>
              <p>
                Se você tiver dúvidas, preocupações ou solicitações sobre esta Política de Privacidade 
                ou nossas práticas de dados, entre em contato conosco:
              </p>
              <ul className="contact-info">
                <li><strong>E-mail:</strong> emerson.carvalhoo5525@gmail.com</li>
                <li><strong>Suporte:</strong> emerson.carvalhoo5525@gmail.com</li>
                <li><strong>Website:</strong> <a href="https://dotrak.com">dotrak.com</a></li>
              </ul>
            </section>

            <section>
              <h2>13. Lei Geral de Proteção de Dados (LGPD)</h2>
              <p>
                Para usuários brasileiros, esta política está em conformidade com a Lei Geral de Proteção 
                de Dados (Lei nº 13.709/2018). Você tem direitos adicionais sob a LGPD, incluindo o direito 
                de contatar a Autoridade Nacional de Proteção de Dados (ANPD).
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
