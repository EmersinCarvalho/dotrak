import express from 'express';
import healthRoutes from './health.routes.js';
import statsRoutes from './stats.routes.js';
import authRoutes from './auth.routes.js';

const router = express.Router();

// Rotas da API
router.use('/health', healthRoutes);
router.use('/stats', statsRoutes);
router.use('/auth', authRoutes);

// Rota de boas-vindas da API
router.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API Dotrak',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      stats: '/api/stats',
      auth: '/api/auth'
    }
  });
});

export default router;
