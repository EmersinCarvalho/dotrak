/**
 * Controller para verificação de saúde do servidor
 */

export const getHealth = (req, res) => {
  const healthData = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    message: 'Servidor Dotrak funcionando perfeitamente'
  };

  res.status(200).json(healthData);
};
