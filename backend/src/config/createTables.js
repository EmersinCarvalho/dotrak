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
 * Query para criar tabela de partidas/jogos
 */
const createGamesTable = `
  CREATE TABLE IF NOT EXISTS games (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    game_type ENUM('cs2', 'valorant', 'other') NOT NULL,
    map_name VARCHAR(100) NULL,
    score VARCHAR(50) NULL,
    kills INT DEFAULT 0,
    deaths INT DEFAULT 0,
    assists INT DEFAULT 0,
    headshots INT DEFAULT 0,
    duration_minutes INT NULL,
    result ENUM('win', 'loss', 'draw') NULL,
    match_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_game_type (game_type),
    INDEX idx_match_date (match_date),
    INDEX idx_result (result)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Tabela de partidas dos jogadores'
`;

/**
 * Query para criar tabela de estatísticas
 */
const createStatisticsTable = `
  CREATE TABLE IF NOT EXISTS statistics (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    game_type ENUM('cs2', 'valorant', 'other') NOT NULL,
    total_matches INT DEFAULT 0,
    total_wins INT DEFAULT 0,
    total_losses INT DEFAULT 0,
    total_draws INT DEFAULT 0,
    total_kills INT DEFAULT 0,
    total_deaths INT DEFAULT 0,
    total_assists INT DEFAULT 0,
    total_headshots INT DEFAULT 0,
    win_rate DECIMAL(5,2) DEFAULT 0.00,
    kd_ratio DECIMAL(5,2) DEFAULT 0.00,
    avg_kills DECIMAL(5,2) DEFAULT 0.00,
    avg_deaths DECIMAL(5,2) DEFAULT 0.00,
    headshot_percentage DECIMAL(5,2) DEFAULT 0.00,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_game (user_id, game_type),
    INDEX idx_user_id (user_id),
    INDEX idx_game_type (game_type),
    INDEX idx_win_rate (win_rate),
    INDEX idx_kd_ratio (kd_ratio)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Tabela de estatísticas agregadas dos jogadores'
`;

/**
 * Query para criar tabela de torneios
 */
const createTournamentsTable = `
  CREATE TABLE IF NOT EXISTS tournaments (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT NULL,
    game_type ENUM('cs2', 'valorant', 'other') NOT NULL,
    prize_pool DECIMAL(10,2) NULL,
    max_participants INT DEFAULT 16,
    current_participants INT DEFAULT 0,
    status ENUM('upcoming', 'open', 'in_progress', 'completed', 'cancelled') DEFAULT 'upcoming',
    start_date TIMESTAMP NULL,
    end_date TIMESTAMP NULL,
    registration_deadline TIMESTAMP NULL,
    rules TEXT NULL,
    banner_url VARCHAR(500) NULL,
    created_by VARCHAR(36) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_game_type (game_type),
    INDEX idx_status (status),
    INDEX idx_start_date (start_date),
    INDEX idx_created_by (created_by)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Tabela de torneios da plataforma'
`;

/**
 * Query para criar tabela de participantes de torneios
 */
const createTournamentParticipantsTable = `
  CREATE TABLE IF NOT EXISTS tournament_participants (
    id VARCHAR(36) PRIMARY KEY,
    tournament_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    status ENUM('registered', 'confirmed', 'eliminated', 'winner', 'disqualified') DEFAULT 'registered',
    placement INT NULL,
    prize_won DECIMAL(10,2) NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_tournament_user (tournament_id, user_id),
    INDEX idx_tournament_id (tournament_id),
    INDEX idx_user_id (user_id),
    INDEX idx_status (status)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Tabela de participantes dos torneios'
`;

/**
 * Query para criar tabela de conquistas/achievements
 */
const createAchievementsTable = `
  CREATE TABLE IF NOT EXISTS achievements (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NULL,
    icon_url VARCHAR(500) NULL,
    category ENUM('kills', 'wins', 'tournaments', 'social', 'special') DEFAULT 'special',
    points INT DEFAULT 0,
    requirement_type VARCHAR(50) NULL,
    requirement_value INT NULL,
    is_hidden BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_points (points)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Tabela de conquistas disponíveis'
`;

/**
 * Query para criar tabela de conquistas dos usuários
 */
const createUserAchievementsTable = `
  CREATE TABLE IF NOT EXISTS user_achievements (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    achievement_id VARCHAR(36) NOT NULL,
    unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (achievement_id) REFERENCES achievements(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_achievement (user_id, achievement_id),
    INDEX idx_user_id (user_id),
    INDEX idx_achievement_id (achievement_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Tabela de conquistas desbloqueadas pelos usuários'
`;

/**
 * Query para criar tabela de sessões de análise de IA
 */
const createAnalysisSessionsTable = `
  CREATE TABLE IF NOT EXISTS analysis_sessions (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    game_id VARCHAR(36) NULL,
    analysis_type ENUM('gameplay', 'strategy', 'performance') NOT NULL,
    status ENUM('pending', 'processing', 'completed', 'failed') DEFAULT 'pending',
    insights TEXT NULL,
    recommendations TEXT NULL,
    score DECIMAL(5,2) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Tabela de sessões de análise por IA'
`;

/**
 * Array com todas as queries de criação de tabelas
 */
export const tableQueries = [
  { name: 'users', query: createUsersTable },
  { name: 'games', query: createGamesTable },
  { name: 'statistics', query: createStatisticsTable },
  { name: 'tournaments', query: createTournamentsTable },
  { name: 'tournament_participants', query: createTournamentParticipantsTable },
  { name: 'achievements', query: createAchievementsTable },
  { name: 'user_achievements', query: createUserAchievementsTable },
  { name: 'analysis_sessions', query: createAnalysisSessionsTable }
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
