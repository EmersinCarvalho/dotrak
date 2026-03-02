# Dotrak Frontend

Interface React da plataforma gamer Dotrak.

## 🚀 Tecnologias

- React 18
- JavaScript
- Vite
- React Router
- React Helmet Async
- CSS Puro

## 📦 Instalação

```bash
npm install
```

## ⚙️ Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure a URL da API:
```env
VITE_API_URL=http://localhost:5000/api
```

## 🏃 Execução

### Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:5173

### Build para Produção
```bash
npm run build
```

### Preview do Build
```bash
npm run preview
```

## 📁 Estrutura

```
frontend/
├── src/
│   ├── components/      # Componentes reutilizáveis (Header, Footer)
│   ├── sections/        # Seções da landing page
│   ├── pages/           # Páginas (Home, Login)
│   ├── data/            # Dados e constantes
│   ├── styles/          # Estilos globais
│   ├── App.jsx          # Componente raiz
│   └── main.jsx         # Entry point
├── public/
│   ├── robots.txt       # SEO
│   ├── sitemap.xml      # SEO
│   └── site.webmanifest # PWA
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Identidade Visual

- Tema dark predominante: `#0b0b0f`
- Amarelo vibrante: `#FFD000`
- Glow amarelo: `rgba(255, 208, 0, 0.3)`

## ✨ Recursos

- Design responsivo (mobile-first)
- HTML semântico
- SEO otimizado com meta tags
- Open Graph + Twitter Cards
- Acessibilidade (ARIA, contraste, foco)
- Animações suaves
- Integração com API backend
- Loading states
- Error handling

## 🚢 Deploy

### cPanel
1. Build: `npm run build`
2. Upload do conteúdo de `dist/` para `public_html`
3. Configurar `.htaccess` para SPA routing

### Vercel/Netlify
1. Conecte o repositório
2. Configure build command: `npm run build`
3. Configure output directory: `dist`
4. Configure variáveis de ambiente
