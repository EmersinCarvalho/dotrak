# 🚀 Como Rodar o Projeto Localmente

## Instalação Rápida

### 1️⃣ Instalar Dependências

Na raiz do projeto, execute:

```bash
# Instala dependências da raiz, frontend e backend
npm run install:all
```

**OU instale manualmente:**

```bash
# Raiz (para o script concurrently)
npm install

# Frontend
cd frontend
npm install
cd ..

# Backend
cd backend
npm install
cd ..
```

---

## 🏃 Executar o Projeto

### Opção 1: Rodar Tudo Junto (Recomendado)

Na raiz do projeto:

```bash
npm run dev
```

Isso irá iniciar:
- **Backend** em `http://localhost:5000`
- **Frontend** em `http://localhost:5173`

### Opção 2: Rodar Separadamente

**Terminal 1 - Backend:**
```bash
npm run dev:backend
# OU
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
# OU
cd frontend
npm run dev
```

---

## 🧪 Testar a Aplicação

### Frontend
Abra o navegador em: `http://localhost:5173`

### Backend (API)

**Health Check:**
```bash
curl http://localhost:5000/api/health
```

**Estatísticas:**
```bash
curl http://localhost:5000/api/stats
```

**Ou acesse direto no navegador:**
- http://localhost:5000
- http://localhost:5000/api/health
- http://localhost:5000/api/stats

---

## 📁 Estrutura de Pastas

```
dotrak/
├── frontend/               ← Aplicação React
│   ├── src/
│   │   ├── components/    ← Header, Footer
│   │   ├── sections/      ← Hero, About, Features, etc
│   │   ├── pages/         ← Home, Login
│   │   ├── data/          ← Constantes
│   │   ├── styles/        ← CSS global
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── .env               ← Configuração local
│   ├── package.json
│   └── vite.config.js
│
├── backend/               ← API Node.js
│   ├── src/
│   │   ├── routes/       ← Rotas da API
│   │   ├── controllers/  ← Lógica de negócio
│   │   ├── middlewares/  ← Middlewares
│   │   └── config/       ← Configurações
│   ├── .env              ← Configuração local
│   ├── server.js         ← Arquivo principal
│   └── package.json
│
├── package.json          ← Scripts globais
├── README.md             ← Documentação principal
├── DEPLOY.md             ← Guia de deploy
└── COMO-RODAR.md         ← Este arquivo
```

---

## ⚙️ Configuração

### Frontend (.env)

Arquivo: `frontend/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

### Backend (.env)

Arquivo: `backend/.env`

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

---

## 🔨 Build para Produção

### Frontend
```bash
cd frontend
npm run build
```
Os arquivos prontos estarão em `frontend/dist/`

### Backend
```bash
cd backend
npm start
```

---

## 📡 Endpoints da API

| Método | Endpoint       | Descrição                    |
|--------|----------------|------------------------------|
| GET    | /              | Informações da API           |
| GET    | /api/health    | Status do servidor           |
| GET    | /api/stats     | Estatísticas da comunidade   |

---

## 🎯 Páginas do Frontend

| Rota    | Descrição           |
|---------|---------------------|
| /       | Landing page        |
| /login  | Página de login     |

---

## 🛠️ Scripts Disponíveis

### Raiz do Projeto
```bash
npm run install:all      # Instala todas as dependências
npm run dev              # Roda frontend + backend juntos
npm run dev:frontend     # Roda apenas frontend
npm run dev:backend      # Roda apenas backend
npm run build:frontend   # Build do frontend
npm run start:backend    # Inicia backend em produção
npm run clean            # Remove node_modules
```

### Frontend
```bash
npm run dev              # Servidor de desenvolvimento
npm run build            # Build para produção
npm run preview          # Preview do build
```

### Backend
```bash
npm run dev              # Servidor com nodemon (auto-reload)
npm start                # Servidor em produção
```

---

## 🐛 Troubleshooting

### Porta já em uso

**Backend (porta 5000):**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

**Frontend (porta 5173):**
- O Vite automaticamente escolhe outra porta
- Ou force a porta no `vite.config.js`

### Backend não conecta com Frontend

1. Verifique se o backend está rodando
2. Confirme a URL no `.env` do frontend
3. Verifique o console do navegador para erros CORS

### Mudanças não aparecem

**Frontend:**
- Vite tem hot reload, deve atualizar automaticamente
- Force refresh: `Ctrl + Shift + R` ou `Cmd + Shift + R`

**Backend:**
- Se usou `npm run dev`, nodemon reinicia automaticamente
- Senão, pare e inicie novamente

---

## 📝 Próximos Passos

1. ✅ Rode o projeto localmente
2. ✅ Teste todas as funcionalidades
3. ✅ Faça suas modificações
4. ✅ Leia o `DEPLOY.md` para fazer deploy

---

**Pronto para desenvolver! 💻**

Para deploy em produção, consulte o arquivo `DEPLOY.md`
