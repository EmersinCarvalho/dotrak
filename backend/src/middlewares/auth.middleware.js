/**
 * Middleware de autenticação (preparado para implementação futura)
 */

export const authenticateToken = (req, res, next) => {
  // TODO: Implementar verificação de JWT
  // const token = req.headers['authorization']?.split(' ')[1];
  
  // Por enquanto, apenas passa adiante
  next();
};

export const checkRole = (roles) => {
  return (req, res, next) => {
    // TODO: Implementar verificação de roles
    // if (!req.user || !roles.includes(req.user.role)) {
    //   return res.status(403).json({ error: 'Acesso negado' });
    // }
    
    next();
  };
};
