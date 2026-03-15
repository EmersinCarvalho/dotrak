import bcrypt from 'bcryptjs';

/**
 * Classe User - Modelo de usuário
 * Por enquanto, usa armazenamento em memória
 * TODO: Integrar com banco de dados real (MongoDB, PostgreSQL, etc)
 */
class User {
  constructor(nickname, email, password) {
    this.id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    this.nickname = nickname;
    this.email = email.toLowerCase();
    this.password = password; // Será hasheado
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Hash da senha antes de salvar
   */
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
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

// Armazenamento em memória (temporário)
const users = [];

/**
 * Repositório de usuários
 */
export const UserRepository = {
  /**
   * Criar novo usuário
   */
  async create(nickname, email, password) {
    const user = new User(nickname, email, password);
    await user.hashPassword();
    users.push(user);
    return user;
  },

  /**
   * Buscar usuário por email
   */
  async findByEmail(email) {
    return users.find(user => user.email === email.toLowerCase());
  },

  /**
   * Buscar usuário por nickname
   */
  async findByNickname(nickname) {
    return users.find(user => user.nickname === nickname);
  },

  /**
   * Buscar usuário por ID
   */
  async findById(id) {
    return users.find(user => user.id === id);
  },

  /**
   * Verificar se email já existe
   */
  async emailExists(email) {
    return users.some(user => user.email === email.toLowerCase());
  },

  /**
   * Verificar se nickname já existe
   */
  async nicknameExists(nickname) {
    return users.some(user => user.nickname === nickname);
  },

  /**
   * Listar todos os usuários (sem senhas)
   */
  async findAll() {
    return users.map(user => user.toJSON());
  },

  /**
   * Atualizar usuário
   */
  async update(id, updates) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    
    const user = users[userIndex];
    Object.assign(user, updates);
    user.updatedAt = new Date();
    
    return user;
  },

  /**
   * Deletar usuário
   */
  async delete(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return false;
    
    users.splice(userIndex, 1);
    return true;
  }
};

export default User;
