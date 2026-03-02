# 🚀 Guia de Deploy - Dotrak

## Deploy no cPanel (Hospedagem Compartilhada)

### ⚙️ Pré-requisitos
- Acesso ao cPanel
- Node.js habilitado na hospedagem
- Acesso FTP ou File Manager
- Domínio ou subdomínio configurado

---

## 📦 FRONTEND (React)

### 1️⃣ Build da Aplicação

No seu computador local:

```bash
cd frontend
npm install
npm run build
```

Isso criará a pasta `frontend/dist/` com os arquivos otimizados.

### 2️⃣ Upload dos Arquivos

**Opção A: Via FTP**
- Conecte ao servidor via FTP (FileZilla, WinSCP, etc)
- Acesse a pasta `public_html` do seu domínio
- Faça upload de **todo o conteúdo** da pasta `dist/`
- NÃO faça upload da pasta `dist/` em si, apenas o conteúdo

**Opção B: Via File Manager do cPanel**
- Acesse File Manager no cPanel
- Navegue até `public_html`
- Faça upload dos arquivos da pasta `dist/`

### 3️⃣ Configurar .htaccess

Crie um arquivo `.htaccess` dentro de `public_html` com o seguinte conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirecionar HTTP para HTTPS (opcional)
  # RewriteCond %{HTTPS} off
  # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # SPA Routing - Redirecionar todas as rotas para index.html
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Cache Control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 4️⃣ Atualizar URL da API

Se você ainda não tiver feito, atualize a variável de ambiente:

No arquivo `.env` do frontend (antes do build):
```env
VITE_API_URL=https://api.seudominio.com/api
```

Ou crie um subdomínio para a API.

---

## 🖥️ BACKEND (Node.js + Express)

### 1️⃣ Preparar os Arquivos

No seu computador:

```bash
cd backend
# Criar um arquivo zip com todos os arquivos
# OU prepare para upload via FTP
```

### 2️⃣ Upload para o Servidor

**IMPORTANTE:** Faça upload da pasta backend para **FORA** do `public_html`

Estrutura recomendada:
```
/home/seu_usuario/
├── public_html/          # Frontend (dist/)
└── dotrak-api/          # Backend (todos os arquivos)
    ├── src/
    ├── server.js
    ├── package.json
    └── .env
```

**Via FTP ou File Manager:**
- Crie a pasta `dotrak-api` em `/home/seu_usuario/`
- Faça upload de todos os arquivos do backend

### 3️⃣ Configurar Node.js App no cPanel

1. **Acesse "Setup Node.js App" no cPanel**

2. **Clique em "CREATE APPLICATION"**

3. **Configure:**
   - **Node.js version:** Selecione a mais recente disponível (18.x ou superior)
   - **Application mode:** Production
   - **Application root:** `/home/seu_usuario/dotrak-api`
   - **Application URL:** 
     - Opção 1: Subdomínio `api.seudominio.com`
     - Opção 2: Diretório `/api`
   - **Application startup file:** `server.js`
   - **Passenger log file:** (deixe padrão)

4. **Clique em CREATE**

### 4️⃣ Configurar Variáveis de Ambiente

Na mesma tela do Node.js App:

1. Role até a seção **"Environment Variables"**
2. Adicione as variáveis:

```
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://seudominio.com
```

3. Clique em **"Save"** para cada variável

### 5️⃣ Instalar Dependências

O cPanel geralmente fornece um comando para entrar no ambiente Node.js.

**Via Terminal SSH (se disponível):**

```bash
cd /home/seu_usuario/dotrak-api
source /home/seu_usuario/nodevenv/dotrak-api/18/bin/activate
npm install --production
```

**Via cPanel (Node.js App):**
- Copie o comando "Run NPM Install" que aparece na interface
- Execute no Terminal do cPanel ou via SSH

### 6️⃣ Restart da Aplicação

No painel "Setup Node.js App":
- Clique em **"RESTART"** ou **"Stop App"** e depois **"Start App"**

### 7️⃣ Verificar Logs

Se houver problemas:
- Na tela do Node.js App, verifique os logs
- Ou acesse via terminal: `tail -f /home/seu_usuario/logs/dotrak-api-error.log`

---

## 🌐 Configurar CORS (Se usar subdomínio)

Se você configurou a API em um subdomínio diferente (ex: `api.seudominio.com`):

1. **Atualize o .env do backend:**
```env
FRONTEND_URL=https://seudominio.com
```

2. **Verifique se o CORS está configurado corretamente no `server.js`**

---

## ✅ Testar a Aplicação

### Frontend
Acesse: `https://seudominio.com`

### Backend (API)
Acesse: `https://api.seudominio.com/api/health`

Deve retornar:
```json
{
  "status": "ok",
  "timestamp": "...",
  "message": "Servidor Dotrak funcionando perfeitamente"
}
```

---

## 🔧 Troubleshooting

### Frontend não carrega as rotas
- Verifique se o `.htaccess` foi criado corretamente
- Verifique se o mod_rewrite está habilitado

### Backend não inicia
- Verifique os logs no cPanel
- Confirme que o Node.js está na versão correta
- Verifique se todas as variáveis de ambiente estão configuradas
- Verifique as permissões dos arquivos

### Erro de CORS
- Verifique se `FRONTEND_URL` no backend corresponde ao domínio do frontend
- Confirme que as variáveis de ambiente foram salvas

### 502 Bad Gateway na API
- O Node.js App pode não ter iniciado corretamente
- Verifique os logs de erro
- Tente fazer restart da aplicação

---

## 🔄 Atualizações Futuras

### Atualizar Frontend:
```bash
cd frontend
npm run build
# Fazer upload do conteúdo de dist/ para public_html
```

### Atualizar Backend:
```bash
# Fazer upload dos arquivos alterados via FTP
# No cPanel, acessar Node.js App e clicar em RESTART
```

---

## 📱 Domínios Recomendados

- **Frontend:** `https://dotrak.com` ou `https://www.dotrak.com`
- **Backend:** `https://api.dotrak.com`

---

## 🔒 Checklist de Segurança

- [ ] HTTPS habilitado (SSL instalado)
- [ ] Variáveis de ambiente configuradas
- [ ] CORS configurado corretamente
- [ ] Backend fora do public_html
- [ ] .env não commitado no Git
- [ ] Logs sendo monitorados

---

## 💡 Dicas Extras

1. **Use um subdomínio para a API** (facilita configuração e manutenção)
2. **Ative o cache** para arquivos estáticos no frontend
3. **Monitore os logs** regularmente
4. **Configure backups automáticos** no cPanel
5. **Use CloudFlare** para CDN e proteção DDoS (opcional)

---

**Deploy realizado com sucesso? 🎉**

Qualquer problema, revise os logs e as configurações das variáveis de ambiente!
