import express from 'express';
import healthRoutes from './health.routes.js';
import statsRoutes from './stats.routes.js';

const router = express.Router();

// Rotas da API
router.use('/health', healthRoutes);
router.use('/stats', statsRoutes);

// Rota de boas-vindas da API
router.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API Dotrak',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      stats: '/api/stats'
    }
  });
});

export default router;
