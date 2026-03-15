import jwt from 'jsonwebtoken';
import { UserRepository } from '../models/user.model.js';

// Chave secreta JWT (em produção, deve estar no .env)
const JWT_SECRET = process.env.JWT_SECRET || 'dotrak_secret_key_change_in_production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

/**
 * Gerar token JWT
 */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
};

/**
 * Validar formato de email
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validar nickname
 */
const isValidNickname = (nickname) => {
  // Nickname: 3-20 caracteres, letras, números, underscore e hífen
  const nicknameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
  return nicknameRegex.test(nickname);
};

/**
 * Validar senha
 */
const isValidPassword = (password) => {
  // Senha: mínimo 6 caracteres
  return password && password.length >= 6;
};

/**
 * Controller de Autenticação
 */
export const authController = {
  /**
   * Registro de novo usuário
   * POST /api/auth/register
   */
  async register(req, res) {
    try {
      const { nickname, email, password } = req.body;

      // Validar campos obrigatórios
      if (!nickname || !email || !password) {
        return res.status(400).json({
          success: false,
          error: 'Todos os campos são obrigatórios',
          fields: { nickname: !nickname, email: !email, password: !password }
        });
      }

      // Validar formato do nickname
      if (!isValidNickname(nickname)) {
        return res.status(400).json({
          success: false,
          error: 'Nickname inválido. Use apenas letras, números, underscore e hífen (3-20 caracteres)'
        });
      }

      // Validar formato do email
      if (!isValidEmail(email)) {
        return res.status(400).json({
          success: false,
          error: 'Email inválido'
        });
      }

      // Validar senha
      if (!isValidPassword(password)) {
        return res.status(400).json({
          success: false,
          error: 'A senha deve ter no mínimo 6 caracteres'
        });
      }

      // Verificar se email já existe
      const emailExists = await UserRepository.emailExists(email);
      if (emailExists) {
        return res.status(409).json({
          success: false,
          error: 'Email já cadastrado'
        });
      }

      // Nickname pode ser duplicado (vários jogadores podem ter o mesmo nome)

      // Criar novo usuário
      const user = await UserRepository.create(nickname, email, password);

      // Gerar token
      const token = generateToken(user.id);

      // Retornar resposta
      res.status(201).json({
        success: true,
        message: 'Conta criada com sucesso!',
        data: {
          user: user.toJSON(),
          token
        }
      });

    } catch (error) {
      console.error('Erro no registro:', error);
      res.status(500).json({
        success: false,
        error: 'Erro ao criar conta. Tente novamente.'
      });
    }
  },

  /**
   * Login de usuário
   * POST /api/auth/login
   */
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validar campos obrigatórios
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          error: 'Email e senha são obrigatórios'
        });
      }

      // Validar formato do email
      if (!isValidEmail(email)) {
        return res.status(400).json({
          success: false,
          error: 'Email inválido'
        });
      }

      // Buscar usuário por email
      const user = await UserRepository.findByEmail(email);

      // Verificar se usuário existe
      if (!user) {
        return res.status(401).json({
          success: false,
          error: 'Email ou senha incorretos'
        });
      }

      // Verificar senha
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          error: 'Email ou senha incorretos'
        });
      }

      // Gerar token
      const token = generateToken(user.id);

      // Retornar resposta
      res.status(200).json({
        success: true,
        message: 'Login realizado com sucesso!',
        data: {
          user: user.toJSON(),
          token
        }
      });

    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({
        success: false,
        error: 'Erro ao fazer login. Tente novamente.'
      });
    }
  },

  /**
   * Verificar token e retornar dados do usuário
   * GET /api/auth/me
   */
  async getMe(req, res) {
    try {
      const user = await UserRepository.findById(req.userId);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          error: 'Usuário não encontrado'
        });
      }

      res.status(200).json({
        success: true,
        data: {
          user: user.toJSON()
        }
      });

    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      res.status(500).json({
        success: false,
        error: 'Erro ao buscar dados do usuário'
      });
    }
  },

  /**
   * Logout (lado do servidor - opcional)
   * POST /api/auth/logout
   */
  async logout(req, res) {
    // Com JWT, o logout é geralmente feito no cliente removendo o token
    // Aqui podemos adicionar lógica adicional se necessário (blacklist de tokens, etc)
    
    res.status(200).json({
      success: true,
      message: 'Logout realizado com sucesso'
    });
  }
};

export default authController;
