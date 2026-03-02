import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './src/routes/index.js';

// Configurar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api', apiRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'Dotrak API - Plataforma Gamer',
    version: '1.0.0',
    status: 'online'
  });
});

// Tratamento de erro 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.path
  });
});

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Erro interno do servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Dotrak rodando na porta ${PORT}`);
  console.log(`📍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 CORS habilitado para: ${corsOptions.origin}`);
});

export default app;
