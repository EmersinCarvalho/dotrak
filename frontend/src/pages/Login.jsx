import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implementar lógica de autenticação aqui
  };

  return (
    <>
      <Helmet>
        <title>Login - Dotrak | Acesse sua conta</title>
        <meta 
          name="description" 
          content="Entre na sua conta Dotrak e acesse análises de desempenho, torneios exclusivos e muito mais." 
        />
        <link rel="canonical" href="https://dotrak.com/login" />
      </Helmet>

      <div className="login-page">
        <div className="bg-shapes"></div>
        
        <div className="login-container">
          <div className="login-header">
            <Link to="/" className="login-logo">
              Dot<span className="text-yellow">rak</span>
            </Link>
          </div>

          <div className="login-card">
            <div className="login-tabs">
              <button 
                className={`login-tab ${isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button 
                className={`login-tab ${!isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(false)}
              >
                Cadastro
              </button>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    autoComplete="name"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirmar Senha</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                </div>
              )}

              {isLogin && (
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Lembrar-me</span>
                  </label>
                  <a href="/recuperar-senha" className="forgot-link">
                    Esqueceu a senha?
                  </a>
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-full">
                {isLogin ? 'Entrar' : 'Criar Conta'}
              </button>
            </form>

            <div className="login-divider">
              <span>ou continue com</span>
            </div>

            <div className="social-login">
              <button className="social-btn" aria-label="Entrar com Google">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              
              <button className="social-btn" aria-label="Entrar com Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord
              </button>
            </div>

            <p className="login-footer">
              {isLogin ? (
                <>Não tem uma conta? <button onClick={() => setIsLogin(false)} className="link-btn">Cadastre-se</button></>
              ) : (
                <>Já tem uma conta? <button onClick={() => setIsLogin(true)} className="link-btn">Faça login</button></>
              )}
            </p>

            <Link to="/" className="back-home">
              ← Voltar para o site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
