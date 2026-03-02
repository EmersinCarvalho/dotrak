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
│   │   ├── routes/       # Definição de rotas
│   │   ├── controllers/  # Lógica de negócio
│   │   ├── middlewares/  # Middlewares customizados
│   │   └── config/       # Configurações
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

### Desenvolvimento - Individual

```bash
# Frontend (porta 5173)
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

## 🔧 Configuração

### Frontend

1. Copie `.env.example` para `.env`:
```bash
cd frontend
cp .env.example .env
```

2. Configure a URL da API:
```env
VITE_API_URL=http://localhost:5000/api
```

### Backend

1. Copie `.env.example` para `.env`:
```bash
cd backend
cp .env.example .env
```

2. Configure as variáveis:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

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
- ✅ Página de login completa

### Backend
- ✅ API REST estruturada
- ✅ CORS configurado
- ✅ Rotas organizadas
- ✅ Middlewares preparados
- ✅ Tratamento de erros
- ✅ Preparado para autenticação JWT
- ✅ Estrutura escalável

## 🚢 Deploy no cPanel

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
