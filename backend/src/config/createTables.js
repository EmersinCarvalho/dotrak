/**
 * Script para criar todas as tabelas necessárias no banco de dados
 * Este arquivo é executado automaticamente ao iniciar o servidor
 */

/**
 * Query para criar tabela de usuários
 */
const createUsersTable = `
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
  COMMENT='Tabela de usuários da plataforma'
`;

/**
 * Array com todas as queries de criação de tabelas
 */
export const tableQueries = [
  { name: 'users', query: createUsersTable }
];

/**
 * Executar todas as queries de criação de tabelas
 * @param {Object} connection - Conexão do MySQL
 */
export const createAllTables = async (connection) => {
  console.log('\n🔧 Verificando/criando tabelas do banco de dados...\n');
  
  for (const table of tableQueries) {
    try {
      await connection.query(table.query);
      console.log(`✅ Tabela '${table.name}' verificada/criada`);
    } catch (error) {
      console.error(`❌ Erro ao criar tabela '${table.name}':`, error.message);
      throw error;
    }
  }
  
  console.log('\n✅ Todas as tabelas foram verificadas/criadas com sucesso!\n');
};
