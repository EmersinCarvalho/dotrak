# Dotrak Backend

API REST para a plataforma gamer Dotrak com sistema de autenticação completo.

## 🚀 Tecnologias

- Node.js
- Express
- MySQL (mysql2)
- bcryptjs (hash de senhas)
- jsonwebtoken (JWT)
- uuid (IDs únicos)
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

2. Configure as variáveis de ambiente no arquivo `.env`:
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

**Importante:** O banco de dados e a tabela de usuários será criada automaticamente ao iniciar o servidor.

### Tabela do Banco de Dados

O sistema cria automaticamente a tabela ao iniciar (caso não exista):

**users** - Usuários da plataforma
- `id` - UUID único
- `nickname` - Nome de exibição (3-20 caracteres, pode ter duplicados)
- `email` - Email único para login
- `password` - Senha hasheada com bcryptjs (salt rounds: 10)
- `created_at` - Data de criação
- `updated_at` - Data de atualização

📄 Arquivo de configuração: `src/config/createTables.js`

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

## 📁 Estrutura

```
backend/
├── src/
│   ├── routes/          # Definição de rotas
│   ├── controllers/     # Lógica de negócio
│   ├── models/          # Modelos de dados (User)
│   ├── middlewares/     # Middlewares (auth JWT)
│   └── config/          # Configurações (database)
├── server.js            # Arquivo principal
├── package.json
├── .env.example
└── README.md
```

## 🔒 Segurança

- CORS configurado para origens específicas
- Senhas hasheadas com bcryptjs (salt rounds: 10)
- Autenticação JWT com expiração configurável
- Validações de entrada rigorosas
- Middleware de autenticação para rotas protegidas
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
