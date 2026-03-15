# Dotrak - Plataforma Gamer Full Stack

> Plataforma gamer e tecnológica moderna desenvolvida com React + Vite (frontend) e Node + Express (backend).

## 🎮 Sobre o Projeto

Dotrak é uma plataforma completa para gamers competitivos que oferece análise em tempo real, treinamento personalizado, torneios exclusivos e uma comunidade ativa. O projeto está organizado como monorepo com frontend e backend separados.

## 🚀 Tecnologias

### Frontend
- React 18
- JavaScript
- Vite
- React Router
- React Helmet Async
- CSS Puro

### Backend
- Node.js
- Express
- MySQL (mysql2)
- bcryptjs (hash de senhas)
- jsonwebtoken (JWT)
- uuid (IDs únicos)
- CORS
- dotenv
- Nodemon

## 📂 Estrutura do Projeto

```
dotrak/
├── frontend/               # Aplicação React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── sections/      # Seções da landing page
│   │   ├── pages/         # Páginas (Home, Login)
│   │   ├── data/          # Dados e constantes
│   │   ├── styles/        # Estilos globais
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── site.webmanifest
│   ├── package.json
│   └── vite.config.js
│
├── backend/               # API REST Node.js
│   ├── src/
│   │   ├── routes/       # Definição de rotas (auth, health, stats)
│   │   ├── controllers/  # Lógica de negócio
│   │   ├── middlewares/  # Middlewares customizados (auth JWT)
│   │   ├── models/       # Modelos de dados (User)
│   │   └── config/       # Configurações (database)
│   ├── server.js         # Arquivo principal
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── package.json          # Scripts globais
└── README.md            # Este arquivo
```

## 📦 Instalação

### Instalação Completa (Recomendado)

```bash
# Instalar todas as dependências (raiz + frontend + backend)
npm run install:all
```

### Instalação Individual

```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

## 🏃 Execução

### Desenvolvimento - Rodar Tudo Junto (Recomendado)

```bash
# Na raiz do projeto - roda backend e frontend simultaneamente
npm run dev
```

Após executar, acesse:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api

### Desenvolvimento - Individual

```bash
# Frontend (porta 3000)
npm run dev:frontend

# Backend (porta 5000)
npm run dev:backend
```

### Produção

```bash
# Build do frontend
npm run build:frontend

# Iniciar backend
npm run start:backend
```

## ⚙️ Comandos Disponíveis

### Na Raiz do Projeto

```bash
# Instalar todas as dependências (root, frontend e backend)
npm run install:all

# Iniciar frontend e backend juntos (desenvolvimento)
npm run dev

# Iniciar apenas o frontend
npm run dev:frontend

# Iniciar apenas o backend
npm run dev:backend

# Build do frontend (produção)
npm run build:frontend

# Iniciar backend em produção
npm run start:backend

# Limpar node_modules de todos os projetos
npm run clean
```

## 🔧 Configuração

### Variáveis de Ambiente

#### Frontend (.env)

1. Copie `.env.example` para `.env`:
```bash
cd frontend
cp .env.example .env
```

2. Configure a URL da API:
```env
VITE_API_URL=http://localhost:5000/api
```

#### Backend (.env)

1. Copie `.env.example` para `.env`:
```bash
cd backend
cp .env.example .env
```

2. Configure as variáveis:
```env
# Servidor
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# JWT
JWT_SECRET=sua_chave_secreta_aqui
JWT_EXPIRES_IN=7d

# MySQL Database
DB_HOST=seu_host
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=dotrak
```

**Importante:** O banco de dados e todas as tabelas necessárias serão criadas automaticamente ao iniciar o backend.

### Tabelas do Banco de Dados

O sistema cria automaticamente as seguintes tabelas ao iniciar (caso não existam):

1. **users** - Usuários da plataforma
2. **games** - Partidas dos jogadores (CS2, Valorant, etc)
3. **statistics** - Estatísticas agregadas por jogador e jogo
4. **tournaments** - Torneios da plataforma
5. **tournament_participants** - Participantes dos torneios
6. **achievements** - Conquistas disponíveis
7. **user_achievements** - Conquistas desbloqueadas pelos usuários
8. **analysis_sessions** - Sessões de análise por IA

Todas as tabelas utilizam:
- `ENGINE=InnoDB` para suporte a transações
- `CHARSET=utf8mb4` para suporte completo a emojis e caracteres especiais
- Índices otimizados para queries frequentes
- Foreign keys com `ON DELETE CASCADE` para integridade referencial

## 📡 Endpoints da API

### Health Check
```
GET /api/health
```
Verifica o status do servidor.

### Estatísticas da Comunidade
```
GET /api/stats
```
Retorna estatísticas em tempo real (jogadores ativos, partidas analisadas, etc).

### Autenticação

#### Registrar Usuário
```
POST /api/auth/register
Content-Type: application/json

{
  "nickname": "jogador123",
  "email": "jogador@email.com",
  "password": "senha123"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "jogador@email.com",
  "password": "senha123"
}
```

#### Obter Dados do Usuário (Requer autenticação)
```
GET /api/auth/me
Authorization: Bearer {token}
```

#### Logout
```
POST /api/auth/logout
Authorization: Bearer {token}
```

### Validações

- **Nickname:** 3-20 caracteres, apenas letras, números, underscore e hífen. Pode haver duplicados.
- **Email:** Formato válido e único no sistema.
- **Password:** Mínimo 6 caracteres.
- **Token JWT:** Expira em 7 dias.

## 🎨 Identidade Visual

- **Tema:** Dark com amarelo vibrante
- **Cores principais:**
  - Background: `#0b0b0f`
  - Amarelo: `#FFD000`
  - Amarelo Glow: `rgba(255, 208, 0, 0.3)`

## ✨ Recursos

### Frontend
- ✅ Design responsivo e moderno
- ✅ HTML semântico
- ✅ SEO otimizado (meta tags, Open Graph, Twitter Cards)
- ✅ Acessibilidade (ARIA labels, contraste, foco visível)
- ✅ Animações suaves
- ✅ Navbar com blur ao scroll
- ✅ Menu mobile
- ✅ Integração com API backend
- ✅ Sistema de login e registro completo
- ✅ Validação de formulários
- ✅ Gerenciamento de autenticação (localStorage)

### Backend
- ✅ API REST estruturada
- ✅ CORS configurado
- ✅ Rotas organizadas
- ✅ Middlewares de autenticação JWT
- ✅ Tratamento de erros
- ✅ Sistema de autenticação completo
- ✅ Banco de dados MySQL integrado
- ✅ Hash de senhas com bcryptjs
- ✅ Estrutura escalável
- ✅ Auto-criação de tabelas no banco

## � Troubleshooting

### Porta já em uso

Se você receber erro de porta em uso:

**Windows (PowerShell):**
```powershell
# Parar todos os processos Node.js
Get-Process -Name node | Stop-Process -Force
```

**Linux/Mac:**
```bash
# Parar processos nas portas específicas
kill $(lsof -t -i:3000)  # Frontend
kill $(lsof -t -i:5000)  # Backend
```

### Erro de conexão com o banco de dados

- Verifique se as credenciais do MySQL estão corretas no arquivo `.env`
- Confirme que o banco de dados existe e está acessível
- A tabela `users` será criada automaticamente na primeira execução

### Frontend não conecta com Backend

- Verifique se o backend está rodando na porta 5000
- Confirme que o `VITE_API_URL` no frontend está configurado corretamente
- Verifique se o CORS no backend está permitindo a origem do frontend

## �🚢 Deploy no cPanel

### Frontend

1. **Build da aplicação:**
```bash
cd frontend
npm run build
```

2. **Upload dos arquivos:**
   - Faça upload do conteúdo da pasta `frontend/dist/` para `public_html`

3. **Configurar .htaccess:**

Crie um arquivo `.htaccess` no `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Backend

1. **Preparar os arquivos:**
   - Faça upload da pasta `backend/` para **fora** do `public_html`
   - Exemplo: `/home/usuario/dotrak-api/`

2. **Configurar Node.js App no cPanel:**
   - Acesse "Setup Node.js App"
   - Node.js Version: Selecione a mais recente
   - Application Mode: Production
   - Application Root: `/home/usuario/dotrak-api`
   - Application URL: `api.seudominio.com` ou `/api`
   - Application Startup File: `server.js`

3. **Configurar variáveis de ambiente:**
```env
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://seudominio.com
```

4. **Instalar dependências e iniciar:**
```bash
cd /home/usuario/dotrak-api
npm install --production
```

5. **Restart da aplicação no painel do cPanel**

## 🔒 Segurança

- CORS configurado para origens específicas
- Variáveis de ambiente para dados sensíveis
- Preparado para implementação de JWT
- Tratamento de erros sem expor informações sensíveis

## 📝 Próximos Passos

- [ ] Implementar autenticação JWT completa
- [ ] Conectar banco de dados (MongoDB/PostgreSQL)
- [ ] Adicionar sistema de rate limiting
- [ ] Implementar registro de usuários
- [ ] Adicionar sistema de torneios
- [ ] Implementar dashboard do usuário
- [ ] Adicionar testes automatizados
- [ ] Configurar CI/CD

## 📄 Licença

MIT

---

**Desenvolvido com 💛 para a comunidade gamer**
