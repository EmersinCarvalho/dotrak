/**
 * Configuração do banco de dados (preparado para implementação futura)
 */

// TODO: Implementar conexão com banco de dados
// Opções: MongoDB, PostgreSQL, MySQL, etc.

export const connectDatabase = async () => {
  try {
    // const dbUrl = process.env.DATABASE_URL;
    // await database.connect(dbUrl);
    console.log('⚠️  Banco de dados ainda não configurado');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
};
