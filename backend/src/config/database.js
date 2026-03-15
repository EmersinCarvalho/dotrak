import mysql from 'mysql2/promise';

/**
 * Configuração do banco de dados MySQL
 */

let pool;

/**
 * Criar pool de conexões
 */
export const createPool = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0
    });
  }
  return pool;
};

/**
 * Obter pool de conexões
 */
export const getPool = () => {
  if (!pool) {
    return createPool();
  }
  return pool;
};

/**
 * Conectar ao banco de dados e criar tabelas necessárias
 */
export const connectDatabase = async () => {
  try {
    const pool = createPool();
    
    // Testar conexão
    const connection = await pool.getConnection();
    console.log('✅ Conectado ao banco de dados MySQL');
    
    // Criar tabela de usuários se não existir
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(36) PRIMARY KEY,
        nickname VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_nickname (nickname)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    console.log('✅ Tabela de usuários verificada/criada');
    
    connection.release();
    
    return pool;
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error.message);
    process.exit(1);
  }
};

/**
 * Fechar todas as conexões
 */
export const closeDatabase = async () => {
  if (pool) {
    await pool.end();
    console.log('Conexões do banco de dados fechadas');
  }
};
