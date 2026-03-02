import express from 'express';
import { getCommunityStats } from '../controllers/stats.controller.js';

const router = express.Router();

// GET /api/stats - Obter estatísticas da comunidade
router.get('/', getCommunityStats);

export default router;
