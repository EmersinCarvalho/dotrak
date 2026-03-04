import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './TermsOfService.css';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - Dotrak</title>
        <meta 
          name="description" 
          content="Termos de Uso da Dotrak. Conheça as regras e condições para utilizar nossa plataforma." 
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
            <h1>Termos de Uso</h1>
            <p className="last-updated">Última atualização: 4 de março de 2026</p>
          </div>

          <div className="legal-content">
            <section>
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Bem-vindo à Dotrak! Estes Termos de Uso ("Termos") constituem um acordo legal entre você 
                e a Dotrak. Ao acessar ou usar nossa plataforma, você concorda em cumprir e estar vinculado 
                a estes Termos.
              </p>
              <p>
                Se você não concorda com estes Termos, por favor, não use nossos serviços. Podemos atualizar 
                estes Termos periodicamente, e seu uso contínuo da plataforma após as alterações constitui 
                aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2>2. Descrição do Serviço</h2>
              <p>
                A Dotrak é uma plataforma de tecnologia e análise para jogadores competitivos que oferece:
              </p>
              <ul>
                <li>Análise de gameplay com inteligência artificial</li>
                <li>Estatísticas detalhadas e métricas de performance</li>
                <li>Ferramentas de treinamento e melhoria de habilidades</li>
                <li>Organização e participação em torneios</li>
                <li>Comunidade de jogadores e recursos sociais</li>
                <li>Integrações com jogos populares (CS2, Valorant, League of Legends, Dota 2)</li>
                <li>Sistema de ranking e progressão</li>
              </ul>
            </section>

            <section>
              <h2>3. Elegibilidade e Cadastro</h2>
              <h3>3.1 Requisitos de Idade</h3>
              <p>
                Você deve ter pelo menos 13 anos de idade para usar a Dotrak. Usuários entre 13 e 18 anos 
                devem ter permissão dos pais ou responsáveis legais. Ao criar uma conta, você declara que 
                possui a idade mínima exigida ou a permissão necessária.
              </p>

              <h3>3.2 Informações de Cadastro</h3>
              <p>
                Você concorda em fornecer informações precisas, atuais e completas durante o processo de 
                cadastro e manter essas informações atualizadas. Você é responsável por:
              </p>
              <ul>
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
              </ul>
            </section>

            <section>
              <h2>4. Conduta do Usuário</h2>
              <h3>4.1 Uso Aceitável</h3>
              <p>Você concorda em usar a Dotrak apenas para fins legais e de acordo com estes Termos. Você NÃO deve:</p>
              <ul>
                <li>Violar qualquer lei local, estadual, nacional ou internacional</li>
                <li>Transmitir conteúdo ofensivo, difamatório, obsceno ou ilegal</li>
                <li>Assediar, intimidar, ameaçar ou discriminar outros usuários</li>
                <li>Usar linguagem de ódio, discurso de incitação à violência ou conteúdo discriminatório</li>
                <li>Fazer-se passar por outra pessoa ou entidade</li>
                <li>Usar bots, scripts ou automação não autorizada</li>
                <li>Tentar hackear, descompilar ou realizar engenharia reversa da plataforma</li>
                <li>Coletar informações de outros usuários sem consentimento</li>
                <li>Distribuir malware, vírus ou código malicioso</li>
                <li>Interferir com a operação adequada da plataforma</li>
                <li>Usar a plataforma para spam ou publicidade não autorizada</li>
                <li>Trapacear, usar exploits ou obter vantagens injustas</li>
              </ul>

              <h3>4.2 Conteúdo do Usuário</h3>
              <p>
                Você é responsável por todo o conteúdo que publica, compartilha ou transmite através da 
                Dotrak. Ao enviar conteúdo, você declara que possui os direitos necessários e concede à 
                Dotrak uma licença mundial, não exclusiva, livre de royalties para usar, reproduzir e 
                exibir esse conteúdo.
              </p>
            </section>

            <section>
              <h2>5. Propriedade Intelectual</h2>
              <h3>5.1 Direitos da Dotrak</h3>
              <p>
                Todos os direitos, títulos e interesses na Dotrak, incluindo tecnologia, software, design, 
                conteúdo, marcas comerciais e logotipos, são propriedade exclusiva da Dotrak ou de seus 
                licenciadores. Você não pode:
              </p>
              <ul>
                <li>Copiar, modificar ou criar obras derivadas da plataforma</li>
                <li>Vender, revender ou explorar comercialmente qualquer parte da plataforma</li>
                <li>Remover avisos de direitos autorais ou marcas registradas</li>
                <li>Usar nossas marcas comerciais sem permissão expressa por escrito</li>
              </ul>

              <h3>5.2 Integração com Jogos</h3>
              <p>
                A Dotrak integra-se com jogos de terceiros através de APIs públicas. Todos os direitos 
                sobre esses jogos pertencem aos seus respectivos criadores. Marcas de jogos mencionadas 
                são propriedade de seus respectivos proprietários.
              </p>
            </section>

            <section>
              <h2>6. Assinaturas e Pagamentos</h2>
              <h3>6.1 Planos Pagos</h3>
              <p>
                A Dotrak oferece serviços gratuitos e planos de assinatura pagos. Os preços e recursos 
                estão descritos em nossa página de planos e podem ser alterados com aviso prévio.
              </p>

              <h3>6.2 Cobrança e Renovação</h3>
              <ul>
                <li>As assinaturas são cobradas com base no plano escolhido (mensal ou anual)</li>
                <li>As assinaturas renovam automaticamente a menos que canceladas</li>
                <li>Você é responsável por manter informações de pagamento atualizadas</li>
                <li>Todos os pagamentos são processados por provedores terceiros seguros</li>
                <li>Os preços são mostrados na moeda local aplicável</li>
              </ul>

              <h3>6.3 Reembolsos</h3>
              <p>
                Oferecemos reembolsos em casos específicos, conforme nossa Política de Reembolso. 
                Geralmente, não oferecemos reembolsos para serviços já prestados, exceto quando exigido por lei.
              </p>

              <h3>6.4 Cancelamento</h3>
              <p>
                Você pode cancelar sua assinatura a qualquer momento através das configurações da conta. 
                O cancelamento será efetivo no final do período de cobrança atual, e você manterá acesso 
                aos recursos pagos até essa data.
              </p>
            </section>

            <section>
              <h2>7. Privacidade e Dados</h2>
              <p>
                Sua privacidade é importante para nós. O uso de suas informações pessoais é regido por 
                nossa <Link to="/privacidade">Política de Privacidade</Link>, que faz parte integrante 
                destes Termos. Por favor, leia-a cuidadosamente.
              </p>
            </section>

            <section>
              <h2>8. Comunidade e Torneios</h2>
              <h3>8.1 Participação em Torneios</h3>
              <p>
                Ao participar de torneios na Dotrak, você concorda com:
              </p>
              <ul>
                <li>As regras específicas de cada torneio</li>
                <li>Não usar trapaças, hacks ou exploits</li>
                <li>Respeitar outros competidores e organizadores</li>
                <li>Aceitar as decisões de moderação e arbitragem</li>
                <li>Permitir a transmissão ou gravação de suas partidas</li>
              </ul>

              <h3>8.2 Prêmios</h3>
              <p>
                Prêmios de torneios estão sujeitos a regras específicas e podem estar sujeitos a 
                impostos ou outras obrigações legais. A Dotrak não é responsável por questões tributárias 
                relacionadas a prêmios ganhos.
              </p>
            </section>

            <section>
              <h2>9. Suspensão e Encerramento</h2>
              <h3>9.1 Por Você</h3>
              <p>
                Você pode encerrar sua conta a qualquer momento através das configurações. O encerramento 
                resultará na exclusão de seus dados conforme nossa Política de Privacidade.
              </p>

              <h3>9.2 Pela Dotrak</h3>
              <p>
                Reservamos o direito de suspender ou encerrar sua conta se:
              </p>
              <ul>
                <li>Você violar estes Termos de Uso</li>
                <li>Seu comportamento for prejudicial à comunidade</li>
                <li>Houver suspeita de atividade fraudulenta</li>
                <li>Você usar trapaças ou violar regras de fair play</li>
                <li>Você realizar atividades que coloquem em risco a segurança da plataforma</li>
              </ul>
              <p>
                Em casos de violação grave, o encerramento pode ser imediato e sem aviso prévio. 
                Não oferecemos reembolsos para contas encerradas por violação dos Termos.
              </p>
            </section>

            <section>
              <h2>10. Isenção de Garantias</h2>
              <p>
                A DOTRAK É FORNECIDA "COMO ESTÁ" E "CONFORME DISPONÍVEL", SEM GARANTIAS DE QUALQUER TIPO, 
                EXPRESSAS OU IMPLÍCITAS. NÃO GARANTIMOS QUE:
              </p>
              <ul>
                <li>A plataforma estará sempre disponível ou livre de erros</li>
                <li>Os defeitos serão corrigidos</li>
                <li>A plataforma está livre de vírus ou outros componentes prejudiciais</li>
                <li>Os resultados de análises serão sempre precisos</li>
                <li>Integrações com jogos de terceiros funcionarão continuamente</li>
              </ul>
            </section>

            <section>
              <h2>11. Limitação de Responsabilidade</h2>
              <p>
                NA EXTENSÃO MÁXIMA PERMITIDA POR LEI, A DOTRAK NÃO SERÁ RESPONSÁVEL POR:
              </p>
              <ul>
                <li>Danos indiretos, incidentais, especiais, consequenciais ou punitivos</li>
                <li>Perda de lucros, receitas, dados ou uso</li>
                <li>Interrupções de serviço ou perda de acesso</li>
                <li>Ações de terceiros, incluindo outros usuários</li>
                <li>Problemas com jogos de terceiros ou suas APIs</li>
                <li>Decisões tomadas com base em análises ou estatísticas fornecidas</li>
              </ul>
              <p>
                NOSSA RESPONSABILIDADE TOTAL NÃO EXCEDERÁ O VALOR QUE VOCÊ PAGOU À DOTRAK NOS ÚLTIMOS 12 MESES.
              </p>
            </section>

            <section>
              <h2>12. Indenização</h2>
              <p>
                Você concorda em indenizar e isentar a Dotrak, seus diretores, funcionários e parceiros 
                de quaisquer reclamações, danos, perdas, responsabilidades e despesas (incluindo honorários 
                advocatícios) decorrentes de:
              </p>
              <ul>
                <li>Seu uso da plataforma</li>
                <li>Violação destes Termos</li>
                <li>Violação de direitos de terceiros</li>
                <li>Conteúdo que você enviar ou compartilhar</li>
              </ul>
            </section>

            <section>
              <h2>13. Resolução de Disputas</h2>
              <h3>13.1 Lei Aplicável</h3>
              <p>
                Estes Termos são regidos pelas leis do Brasil, sem considerar conflitos de disposições legais.
              </p>

              <h3>13.2 Arbitragem</h3>
              <p>
                Quaisquer disputas decorrentes destes Termos serão resolvidas por arbitragem vinculativa, 
                exceto quando proibido por lei. Você renuncia ao direito de participar de ações coletivas.
              </p>
            </section>

            <section>
              <h2>14. Disposições Gerais</h2>
              <h3>14.1 Alterações aos Termos</h3>
              <p>
                Podemos modificar estes Termos a qualquer momento. Notificaremos você sobre mudanças 
                significativas através de e-mail ou aviso na plataforma. Seu uso contínuo após as 
                alterações constitui aceitação dos novos termos.
              </p>

              <h3>14.2 Independência das Cláusulas</h3>
              <p>
                Se qualquer disposição destes Termos for considerada inválida ou inexequível, as 
                demais disposições permanecerão em pleno vigor e efeito.
              </p>

              <h3>14.3 Acordo Integral</h3>
              <p>
                Estes Termos, juntamente com nossa Política de Privacidade, constituem o acordo integral 
                entre você e a Dotrak sobre o uso de nossos serviços.
              </p>

              <h3>14.4 Cessão</h3>
              <p>
                Você não pode transferir ou ceder seus direitos sob estes Termos sem nosso consentimento 
                prévio por escrito. Podemos ceder nossos direitos a qualquer momento.
              </p>

              <h3>14.5 Renúncia</h3>
              <p>
                Nossa falha em fazer cumprir qualquer disposição destes Termos não constituirá renúncia 
                a essa ou qualquer outra disposição.
              </p>
            </section>

            <section>
              <h2>15. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <ul className="contact-info">
                <li><strong>E-mail:</strong> emerson.carvalhoo5525@gmail.com</li>
                <li><strong>Suporte:</strong> emerson.carvalhoo5525@gmail.com</li>
                <li><strong>Website:</strong> <a href="https://dotrak.com">dotrak.com</a></li>
              </ul>
            </section>

            <section className="acceptance-notice">
              <p>
                <strong>AO USAR A DOTRAK, VOCÊ RECONHECE QUE LEU, COMPREENDEU E CONCORDA EM ESTAR 
                VINCULADO A ESTES TERMOS DE USO.</strong>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
