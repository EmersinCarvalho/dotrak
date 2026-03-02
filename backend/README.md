# Dotrak Backend

API REST para a plataforma gamer Dotrak.

## 🚀 Tecnologias

- Node.js
- Express
- CORS
- dotenv
- Nodemon (desenvolvimento)

## 📦 Instalação

```bash
npm install
```

## ⚙️ Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente no arquivo `.env`

## 🏃 Execução

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

O servidor estará disponível em `http://localhost:5000`

## 📡 Endpoints

### Health Check
```
GET /api/health
```
Retorna o status do servidor.

### Estatísticas da Comunidade
```
GET /api/stats
```
Retorna estatísticas da plataforma (jogadores ativos, partidas analisadas, etc.)

### Raiz da API
```
GET /api
```
Informações sobre a API e endpoints disponíveis.

## 📁 Estrutura

```
backend/
├── src/
│   ├── routes/          # Definição de rotas
│   ├── controllers/     # Lógica de negócio
│   ├── middlewares/     # Middlewares customizados
│   └── config/          # Configurações
├── server.js            # Arquivo principal
├── package.json
├── .env.example
└── README.md
```

## 🔒 Segurança

- CORS configurado para origens específicas
- Preparado para implementação de JWT
- Tratamento de erros centralizado

## 🚢 Deploy

### cPanel
1. Faça upload dos arquivos para fora da pasta `public_html`
2. Configure o Node.js App no cPanel
3. Configure as variáveis de ambiente
4. Inicie a aplicação

## 📝 TODO

- [ ] Implementar autenticação JWT
- [ ] Conectar banco de dados
- [ ] Adicionar rate limiting
- [ ] Implementar logging avançado
- [ ] Adicionar testes automatizados
