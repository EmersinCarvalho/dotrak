import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { getPool } from '../config/database.js';

/**
 * Classe User - Modelo de usuário
 */
class User {
  constructor(data) {
    this.id = data.id;
    this.nickname = data.nickname;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
  }

  /**
   * Comparar senha fornecida com hash
   */
  async comparePassword(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  }

  /**
   * Retornar usuário sem senha
   */
  toJSON() {
    return {
      id: this.id,
      nickname: this.nickname,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Repositório de usuários - Interface com banco de dados MySQL
 */
export const UserRepository = {
  /**
   * Criar novo usuário
   */
  async create(nickname, email, password) {
    const pool = getPool();
    const id = uuidv4();
    
    // Hash da senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Inserir no banco
    const [result] = await pool.query(
      'INSERT INTO users (id, nickname, email, password) VALUES (?, ?, ?, ?)',
      [id, nickname, email.toLowerCase(), hashedPassword]
    );
    
    // Buscar usuário criado
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return new User(rows[0]);
  },

  /**
   * Buscar usuário por email
   */
  async findByEmail(email) {
    const pool = getPool();
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email.toLowerCase()]
    );
    
    if (rows.length === 0) return null;
    return new User(rows[0]);
  },

  /**
   * Buscar usuário por nickname
   */
  async findByNickname(nickname) {
    const pool = getPool();
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE nickname = ?',
      [nickname]
    );
    
    if (rows.length === 0) return null;
    return new User(rows[0]);
  },

  /**
   * Buscar usuário por ID
   */
  async findById(id) {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    
    if (rows.length === 0) return null;
    return new User(rows[0]);
  },

  /**
   * Verificar se email já existe
   */
  async emailExists(email) {
    const pool = getPool();
    const [rows] = await pool.query(
      'SELECT COUNT(*) as count FROM users WHERE email = ?',
      [email.toLowerCase()]
    );
    
    return rows[0].count > 0;
  },

  /**
   * Verificar se nickname já existe
   */
  async nicknameExists(nickname) {
    const pool = getPool();
    const [rows] = await pool.query(
      'SELECT COUNT(*) as count FROM users WHERE nickname = ?',
      [nickname]
    );
    
    return rows[0].count > 0;
  },

  /**
   * Listar todos os usuários (sem senhas)
   */
  async findAll() {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM users');
    
    return rows.map(row => new User(row).toJSON());
  },

  /**
   * Atualizar usuário
   */
  async update(id, updates) {
    const pool = getPool();
    
    // Construir query dinâmica baseada nos campos a atualizar
    const fields = [];
    const values = [];
    
    if (updates.nickname) {
      fields.push('nickname = ?');
      values.push(updates.nickname);
    }
    if (updates.email) {
      fields.push('email = ?');
      values.push(updates.email.toLowerCase());
    }
    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(updates.password, salt);
      fields.push('password = ?');
      values.push(hashedPassword);
    }
    
    if (fields.length === 0) return null;
    
    values.push(id);
    
    await pool.query(
      `UPDATE users SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      values
    );
    
    return await this.findById(id);
  },

  /**
   * Deletar usuário
   */
  async delete(id) {
    const pool = getPool();
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    
    return result.affectedRows > 0;
  }
};

export default User;
