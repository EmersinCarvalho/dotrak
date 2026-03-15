import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Documentation.css';

export default function Documentation() {
  const pages = [
    {
      name: 'Home',
      path: '/',
      description: 'Página principal do site com todas as seções integradas',
      sections: ['Hero', 'About', 'Features', 'Community', 'Contact'],
      technologies: ['React', 'React Helmet', 'Scroll Animation Hook'],
      features: [
        'SEO otimizado com Schema.org',
        'Lazy loading de componentes',
        'Animações de scroll',
        'Responsivo mobile-first'
      ]
    },
    {
      name: 'Login',
      path: '/login',
      description: 'Página de autenticação de usuários com sistema completo de login e registro',
      sections: [],
      technologies: ['React', 'React Router', 'Form Validation', 'JWT', 'LocalStorage'],
      features: [
        'Formulário de login e registro',
        'Validação completa de campos',
        'Integração com API backend',
        'Autenticação JWT',
        'Mensagens de erro/sucesso',
        'Estado de loading',
        'Armazenamento de token',
        'Layout sem Header/Footer'
      ]
    },
    {
      name: 'Política de Privacidade',
      path: '/privacidade',
      description: 'Termos de privacidade e proteção de dados',
      sections: [],
      technologies: ['React', 'React Helmet'],
      features: [
        'Conteúdo legal completo',
        'SEO otimizado',
        'Navegação estruturada',
        'Conformidade LGPD/GDPR'
      ]
    },
    {
      name: 'Termos de Serviço',
      path: '/termos',
      description: 'Termos de uso da plataforma',
      sections: [],
      technologies: ['React', 'React Helmet'],
      features: [
        'Termos detalhados',
        'SEO otimizado',
        'Estrutura clara',
        'Informações legais'
      ]
    }
  ];

  const sections = [
    {
      name: 'Hero',
      file: 'Hero.jsx',
      description: 'Seção inicial com CTA principal e destaque visual',
      features: [
        'Design impactante',
        'Call-to-action destacado',
        'Imagens otimizadas',
        'Animações suaves'
      ],
      technologies: ['React', 'CSS Grid/Flexbox', 'OptimizedImage']
    },
    {
      name: 'About',
      file: 'About.jsx',
      description: 'Apresentação da plataforma Dotrak',
      features: [
        'Informações sobre o projeto',
        'Missão e valores',
        'Diferenciais da plataforma',
        'Layout responsivo'
      ],
      technologies: ['React', 'CSS Animations']
    },
    {
      name: 'Features',
      file: 'Features.jsx',
      description: 'Principais funcionalidades da plataforma',
      features: [
        'Grid de características',
        'Ícones e descrições',
        'Hover effects',
        'Layout em cards'
      ],
      technologies: ['React', 'CSS Grid', 'Icon Library']
    },
    {
      name: 'Community',
      file: 'Community.jsx',
      description: 'Seção de comunidade e redes sociais',
      features: [
        'Links para redes sociais',
        'Estatísticas da comunidade',
        'Call-to-action Discord',
        'Integração social'
      ],
      technologies: ['React', 'External Links', 'Social Icons']
    },
    {
      name: 'Contact',
      file: 'Contact.jsx',
      description: 'Formulário de contato e informações',
      features: [
        'Formulário funcional',
        'Validação de campos',
        'Integração com backend',
        'Feedback visual'
      ],
      technologies: ['React', 'Form Handling', 'API Integration']
    },
    {
      name: 'FAQ',
      file: 'FAQ.jsx',
      description: 'Perguntas frequentes sobre a plataforma',
      features: [
        'Accordion interativo',
        'Perguntas categorizadas',
        'Busca de perguntas',
        'Respostas detalhadas'
      ],
      technologies: ['React', 'useState Hook', 'Accordion Pattern']
    },
    {
      name: 'Roadmap',
      file: 'Roadmap.jsx',
      description: 'Timeline de desenvolvimento e futuras features',
      features: [
        'Timeline visual',
        'Marcos do projeto',
        'Features em desenvolvimento',
        'Progresso visual'
      ],
      technologies: ['React', 'CSS Timeline', 'Progress Indicators']
    }
  ];

  const components = [
    {
      name: 'Header',
      file: 'Header.jsx',
      description: 'Cabeçalho de navegação principal',
      features: [
        'Navegação responsiva',
        'Menu mobile hamburger',
        'Scroll detection',
        'Logo otimizado',
        'Smooth scroll para seções'
      ],
      technologies: ['React Router', 'useState/useEffect', 'CSS Transitions']
    },
    {
      name: 'Footer',
      file: 'Footer.jsx',
      description: 'Rodapé com links e informações',
      features: [
        'Links úteis',
        'Redes sociais',
        'Copyright',
        'Links legais'
      ],
      technologies: ['React Router', 'Link Component']
    },
    {
      name: 'OptimizedImage',
      file: 'OptimizedImage.jsx',
      description: 'Componente para otimização de imagens',
      features: [
        'Lazy loading',
        'WebP support',
        'Loading placeholder',
        'Alt text automático',
        'Performance otimizada'
      ],
      technologies: ['React', 'Intersection Observer', 'WebP/AVIF']
    }
  ];

  const technologies = [
    { name: 'React 18', description: 'Framework JavaScript principal' },
    { name: 'React Router', description: 'Navegação entre páginas' },
    { name: 'React Helmet Async', description: 'Gerenciamento de SEO e meta tags' },
    { name: 'Vite', description: 'Build tool e dev server' },
    { name: 'CSS3', description: 'Estilização e animações' },
    { name: 'Node.js + Express', description: 'Backend API' },
    { name: 'JWT (jsonwebtoken)', description: 'Autenticação com tokens' },
    { name: 'Bcrypt.js', description: 'Hash seguro de senhas' }
  ];

  return (
    <>
      <Helmet>
        <title>Documentação - Dotrak</title>
        <meta name="description" content="Documentação técnica completa da plataforma Dotrak. Lista de páginas, componentes e detalhes de implementação." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="documentation-page">
        <div className="container">
          <header className="doc-header">
            <h1>📚 Documentação do Site</h1>
            <p className="doc-subtitle">
              Visão geral completa de todas as páginas, seções e componentes da plataforma Dotrak
            </p>
          </header>

          {/* Stack Tecnológica */}
          <section className="doc-section">
            <h2>🛠️ Stack Tecnológica</h2>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-card">
                  <h3>{tech.name}</h3>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Páginas */}
          <section className="doc-section">
            <h2>📄 Páginas</h2>
            <div className="cards-grid">
              {pages.map((page, index) => (
                <div key={index} className="doc-card">
                  <div className="card-header">
                    <h3>{page.name}</h3>
                    <Link to={page.path} className="page-link">
                      Ver Página →
                    </Link>
                  </div>
                  <p className="card-description">{page.description}</p>
                  <div className="card-detail">
                    <strong>Rota:</strong> <code>{page.path}</code>
                  </div>
                  {page.sections.length > 0 && (
                    <div className="card-detail">
                      <strong>Seções incluídas:</strong>
                      <ul className="feature-list">
                        {page.sections.map((section, idx) => (
                          <li key={idx}>{section}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="card-detail">
                    <strong>Tecnologias:</strong>
                    <div className="tech-tags">
                      {page.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="card-detail">
                    <strong>Características:</strong>
                    <ul className="feature-list">
                      {page.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seções */}
          <section className="doc-section">
            <h2>🧩 Seções (Componentes da Home)</h2>
            <div className="cards-grid">
              {sections.map((section, index) => (
                <div key={index} className="doc-card">
                  <div className="card-header">
                    <h3>{section.name}</h3>
                    <code className="file-path">{section.file}</code>
                  </div>
                  <p className="card-description">{section.description}</p>
                  <div className="card-detail">
                    <strong>Localização:</strong> <code>/src/sections/{section.file}</code>
                  </div>
                  <div className="card-detail">
                    <strong>Tecnologias:</strong>
                    <div className="tech-tags">
                      {section.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="card-detail">
                    <strong>Recursos:</strong>
                    <ul className="feature-list">
                      {section.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Componentes */}
          <section className="doc-section">
            <h2>⚙️ Componentes Globais</h2>
            <div className="cards-grid">
              {components.map((component, index) => (
                <div key={index} className="doc-card">
                  <div className="card-header">
                    <h3>{component.name}</h3>
                    <code className="file-path">{component.file}</code>
                  </div>
                  <p className="card-description">{component.description}</p>
                  <div className="card-detail">
                    <strong>Localização:</strong> <code>/src/components/{component.file}</code>
                  </div>
                  <div className="card-detail">
                    <strong>Tecnologias:</strong>
                    <div className="tech-tags">
                      {component.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="card-detail">
                    <strong>Funcionalidades:</strong>
                    <ul className="feature-list">
                      {component.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sistema de Autenticação */}
          <section className="doc-section">
            <h2>🔐 Sistema de Autenticação</h2>
            
            <div className="auth-intro">
              <p>Sistema completo de login e registro de usuários com autenticação JWT (JSON Web Token).</p>
            </div>

            <div className="doc-card">
              <h3>📋 Endpoints da API</h3>
              
              <div className="endpoint-block">
                <div className="endpoint-header">
                  <span className="http-method post">POST</span>
                  <code>/api/auth/register</code>
                  <span className="access-badge public">Público</span>
                </div>
                <p><strong>Descrição:</strong> Registrar novo usuário</p>
                <p><strong>Body (JSON):</strong></p>
                <pre>{`{
  "nickname": "string (3-20 caracteres)",
  "email": "string (formato válido)",
  "password": "string (mínimo 6 caracteres)"
}`}</pre>
                <p><strong>Resposta de Sucesso (201):</strong></p>
                <pre>{`{
  "success": true,
  "message": "Conta criada com sucesso!",
  "data": {
    "user": {
      "id": "...",
      "nickname": "...",
      "email": "...",
      "createdAt": "...",
      "updatedAt": "..."
    },
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}`}</pre>
                <p><strong>Erros Possíveis:</strong></p>
                <ul className="feature-list">
                  <li><code>400</code> - Campos obrigatórios não preenchidos</li>
                  <li><code>400</code> - Nickname inválido (formato incorreto)</li>
                  <li><code>400</code> - Email inválido</li>
                  <li><code>400</code> - Senha muito curta</li>
                  <li><code>409</code> - Email já cadastrado</li>
                </ul>
              </div>

              <div className="endpoint-block">
                <div className="endpoint-header">
                  <span className="http-method post">POST</span>
                  <code>/api/auth/login</code>
                  <span className="access-badge public">Público</span>
                </div>
                <p><strong>Descrição:</strong> Login de usuário</p>
                <p><strong>Body (JSON):</strong></p>
                <pre>{`{
  "email": "string (email válido)",
  "password": "string"
}`}</pre>
                <p><strong>Resposta de Sucesso (200):</strong></p>
                <pre>{`{
  "success": true,
  "message": "Login realizado com sucesso!",
  "data": {
    "user": { ... },
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}`}</pre>
                <p><strong>Erros Possíveis:</strong></p>
                <ul className="feature-list">
                  <li><code>400</code> - Campos obrigatórios não preenchidos</li>
                  <li><code>400</code> - Email inválido</li>
                  <li><code>401</code> - Email ou senha incorretos</li>
                </ul>
              </div>

              <div className="endpoint-block">
                <div className="endpoint-header">
                  <span className="http-method get">GET</span>
                  <code>/api/auth/me</code>
                  <span className="access-badge private">Privado</span>
                </div>
                <p><strong>Descrição:</strong> Obter dados do usuário autenticado</p>
                <p><strong>Headers:</strong></p>
                <pre>{`Authorization: Bearer <token>`}</pre>
                <p><strong>Resposta de Sucesso (200):</strong></p>
                <pre>{`{
  "success": true,
  "data": {
    "user": {
      "id": "...",
      "nickname": "...",
      "email": "...",
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
}`}</pre>
                <p><strong>Erros Possíveis:</strong></p>
                <ul className="feature-list">
                  <li><code>401</code> - Token não fornecido</li>
                  <li><code>403</code> - Token inválido ou expirado</li>
                  <li><code>404</code> - Usuário não encontrado</li>
                </ul>
              </div>

              <div className="endpoint-block">
                <div className="endpoint-header">
                  <span className="http-method post">POST</span>
                  <code>/api/auth/logout</code>
                  <span className="access-badge private">Privado</span>
                </div>
                <p><strong>Descrição:</strong> Logout de usuário</p>
                <p><strong>Headers:</strong></p>
                <pre>{`Authorization: Bearer <token>`}</pre>
                <p><strong>Resposta de Sucesso (200):</strong></p>
                <pre>{`{
  "success": true,
  "message": "Logout realizado com sucesso"
}`}</pre>
              </div>
            </div>

            <div className="doc-card">
              <h3>👤 Modelo de Usuário</h3>
              <p>Estrutura de dados do usuário no sistema:</p>
              <pre>{`{
  id: string,           // ID único gerado automaticamente
  nickname: string,     // 3-20 caracteres (a-z, A-Z, 0-9, _, -)
  email: string,        // Email único no formato válido
  password: string,     // Hash bcrypt (não retornado nas APIs)
  createdAt: Date,      // Data de criação da conta
  updatedAt: Date       // Data da última atualização
}`}</pre>
            </div>

            <div className="doc-card">
              <h3>✅ Validações Implementadas</h3>
              
              <div className="validation-section">
                <h4>Backend (API):</h4>
                <ul className="feature-list">
                  <li><strong>Nickname:</strong> 3-20 caracteres, apenas letras, números, underscore (_) e hífen (-). Pode ser duplicado (vários jogadores podem ter o mesmo nome)</li>
                  <li><strong>Email:</strong> Formato válido conforme RFC 5322</li>
                  <li><strong>Senha:</strong> Mínimo 6 caracteres</li>
                  <li><strong>Unicidade:</strong> Apenas o email deve ser único no sistema</li>
                  <li><strong>Segurança:</strong> Senhas hasheadas com bcrypt (salt rounds: 10)</li>
                  <li><strong>Token JWT:</strong> Expiração de 7 dias</li>
                  <li><strong>Login:</strong> Aceita apenas email e senha (não aceita nickname)</li>
                </ul>
              </div>

              <div className="validation-section">
                <h4>Frontend (UI):</h4>
                <ul className="feature-list">
                  <li>Validação em tempo real dos campos</li>
                  <li>Confirmação de senha no registro</li>
                  <li>Mensagens de erro específicas por campo</li>
                  <li>Estado de loading durante requisições</li>
                  <li>Desabilitar formulário enquanto processa</li>
                  <li>Feedback visual com alertas de erro/sucesso</li>
                </ul>
              </div>
            </div>

            <div className="doc-card">
              <h3>🔄 Fluxo de Autenticação</h3>
              
              <div className="flow-section">
                <h4>1. Registro de Usuário:</h4>
                <ol className="feature-list">
                  <li>Usuário preenche formulário (nickname, email, senha)</li>
                  <li>Frontend valida confirmação de senha</li>
                  <li>Envia POST para <code>/api/auth/register</code></li>
                  <li>Backend valida dados e verifica duplicados</li>
                  <li>Cria usuário com senha hasheada</li>
                  <li>Gera token JWT</li>
                  <li>Retorna dados do usuário + token</li>
                  <li>Frontend armazena token e dados no localStorage</li>
                  <li>Redireciona para página inicial</li>
                </ol>
              </div>

              <div className="flow-section">
                <h4>2. Login de Usuário:</h4>
                <ol className="feature-list">
                  <li>Usuário preenche email e senha</li>
                  <li>Envia POST para <code>/api/auth/login</code></li>
                  <li>Backend busca usuário por email</li>
                  <li>Compara senha fornecida com hash armazenado</li>
                  <li>Gera novo token JWT se senha correta</li>
                  <li>Retorna dados do usuário + token</li>
                  <li>Frontend armazena token e dados no localStorage</li>
                  <li>Redireciona para página inicial</li>
                </ol>
              </div>

              <div className="flow-section">
                <h4>3. Autenticação em Rotas Protegidas:</h4>
                <ol className="feature-list">
                  <li>Frontend envia token no header Authorization: Bearer &lt;token&gt;</li>
                  <li>Middleware verifica validade do token</li>
                  <li>Decodifica token e extrai ID do usuário</li>
                  <li>Adiciona userId ao objeto request</li>
                  <li>Permite acesso ao endpoint</li>
                </ol>
              </div>
            </div>

            <div className="doc-card">
              <h3>💾 Armazenamento Local</h3>
              <p>Dados armazenados no <code>localStorage</code> após login/registro:</p>
              <pre>{`// Token JWT
localStorage.setItem('dotrak_token', token);

// Dados do usuário
localStorage.setItem('dotrak_user', JSON.stringify(user));`}</pre>
              
              <p><strong>Uso do Token em Requisições:</strong></p>
              <pre>{`const token = localStorage.getItem('dotrak_token');

fetch('/api/auth/me', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
});`}</pre>
            </div>

            <div className="doc-card">
              <h3>🛡️ Segurança</h3>
              <ul className="feature-list">
                <li><strong>Bcrypt:</strong> Hash de senhas com salt rounds = 10</li>
                <li><strong>JWT:</strong> Tokens assinados com chave secreta</li>
                <li><strong>CORS:</strong> Configurado para aceitar apenas origens permitidas</li>
                <li><strong>Middleware:</strong> Proteção de rotas privadas</li>
                <li><strong>Validação:</strong> Inputs sanitizados e validados</li>
                <li><strong>HTTP Only:</strong> Recomendado para cookies em produção</li>
              </ul>
            </div>

            <div className="doc-card">
              <h3>📦 Dependências Backend</h3>
              <div className="tech-tags">
                <span className="tech-tag">bcryptjs</span>
                <span className="tech-tag">jsonwebtoken</span>
                <span className="tech-tag">express</span>
                <span className="tech-tag">cors</span>
                <span className="tech-tag">dotenv</span>
              </div>
            </div>

            <div className="doc-card">
              <h3>⚠️ Observações Importantes</h3>
              <div className="warning-box">
                <p><strong>Armazenamento Temporário:</strong> Atualmente, os usuários são armazenados em memória. Quando o servidor reinicia, todos os dados são perdidos. Para produção, é necessário integrar com um banco de dados (MongoDB, PostgreSQL, etc.).</p>
                <p><strong>JWT_SECRET:</strong> Em produção, use uma chave secreta forte e única no arquivo .env. Nunca commite credenciais no repositório.</p>
                <p><strong>HTTPS:</strong> Em produção, sempre use HTTPS para proteger tokens em trânsito.</p>
              </div>
            </div>

            <div className="doc-card">
              <h3>🔮 Próximos Passos</h3>
              <ul className="feature-list">
                <li>Integração com banco de dados (MongoDB/PostgreSQL)</li>
                <li>Sistema de recuperação de senha</li>
                <li>Verificação de email</li>
                <li>Refresh tokens</li>
                <li>Login social (Steam, Discord)</li>
                <li>Rate limiting</li>
                <li>Blacklist de tokens (logout real)</li>
                <li>Two-factor authentication (2FA)</li>
                <li>Sistema de perfis de usuário</li>
              </ul>
            </div>
          </section>

          {/* Estrutura de Arquivos */}
          <section className="doc-section">
            <h2>📁 Estrutura de Arquivos</h2>
            <div className="file-structure">
              <pre>{`
frontend/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   └── Documentation.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Community.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   └── Roadmap.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── OptimizedImage.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── styles/
│   │   └── global.css
│   ├── assets/
│   ├── data/
│   │   └── constants.js
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
└── package.json

backend/
├── src/
│   ├── models/
│   │   └── user.model.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── health.controller.js
│   │   └── stats.controller.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── health.routes.js
│   │   ├── stats.routes.js
│   │   └── index.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   └── config/
│       └── database.js
├── server.js
└── package.json
              `}</pre>
            </div>
          </section>

          {/* Informações Adicionais */}
          <section className="doc-section">
            <h2>ℹ️ Informações Adicionais</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>🚀 Performance</h3>
                <ul>
                  <li>Lazy loading de rotas</li>
                  <li>Code splitting automático</li>
                  <li>Imagens otimizadas (WebP/AVIF)</li>
                  <li>CSS minificado</li>
                  <li>Vite para build rápido</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>🔍 SEO</h3>
                <ul>
                  <li>React Helmet para meta tags</li>
                  <li>Schema.org markup</li>
                  <li>Sitemap.xml configurado</li>
                  <li>Robots.txt otimizado</li>
                  <li>URLs semânticas</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>📱 Responsividade</h3>
                <ul>
                  <li>Mobile-first design</li>
                  <li>Breakpoints consistentes</li>
                  <li>Touch-friendly UI</li>
                  <li>Menu mobile hamburger</li>
                  <li>Testado em múltiplos devices</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>♿ Acessibilidade</h3>
                <ul>
                  <li>Aria labels configurados</li>
                  <li>Navegação por teclado</li>
                  <li>Contraste adequado</li>
                  <li>Alt text em imagens</li>
                  <li>Semântica HTML5</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
