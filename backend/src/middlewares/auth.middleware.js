import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dotrak_secret_key_change_in_production';

/**
 * Middleware de autenticação
 * Verifica se o token JWT é válido
 */
export const authenticateToken = (req, res, next) => {
  try {
    // Obter token do header Authorization
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    // Verificar se token foi fornecido
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Token de autenticação não fornecido'
      });
    }

    // Verificar e decodificar token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          error: 'Token inválido ou expirado'
        });
      }

      // Adicionar ID do usuário ao request
      req.userId = decoded.id;
      next();
    });

  } catch (error) {
    console.error('Erro no middleware de autenticação:', error);
    res.status(500).json({
      success: false,
      error: 'Erro ao verificar autenticação'
    });
  }
};

/**
 * Middleware para verificar roles (preparado para implementação futura)
 */
export const checkRole = (roles) => {
  return (req, res, next) => {
    // TODO: Implementar verificação de roles quando sistema de roles estiver pronto
    // if (!req.user || !roles.includes(req.user.role)) {
    //   return res.status(403).json({ error: 'Acesso negado' });
    // }
    
    next();
  };
};
