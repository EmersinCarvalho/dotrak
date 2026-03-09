import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Login.css';
import heroImage from '../assets/2.jpg';
import logo from '../assets/logo.png';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar senhas no Sign Up
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setPasswordError('As senhas não correspondem');
      return;
    }
    
    setPasswordError('');
    console.log('Form submitted:', formData);
    // Implementar lógica de autenticação aqui
  };

  return (
    <>
      <Helmet>
        <title>{isLogin ? 'Login' : 'Sign Up'} - Dotrak | Acesse sua conta</title>
        <meta 
          name="description" 
          content="Entre na sua conta Dotrak e acesse análises de desempenho, torneios exclusivos e muito mais." 
        />
        <link rel="canonical" href="https://dotrak.com/login" />
      </Helmet>

      <main className="login-page">
        <article className="login-split-container">
          {/* Left Side - Hero */}
          <aside className="login-hero" style={{ backgroundImage: `url(${heroImage})` }} aria-label="Dotrak brand showcase">
            <div className="login-hero-overlay" aria-hidden="true"></div>
            <header className="login-hero-content">
              <h1 className="login-hero-title">
                Dotrak
              </h1>
              <p className="login-hero-subtitle">
                The World of True Warriors.
              </p>
            </header>
          </aside>

          {/* Right Side - Form */}
          <section className="login-form-container" aria-labelledby="form-title">
            <div className="login-form-wrapper">
              <h2 id="form-title" className="login-form-title">
                <img src={logo} alt="Dotrak Logo" className="login-logo" />
                {isLogin ? 'Login' : 'Sign Up'}
              </h2>

              <form className="login-form" onSubmit={handleSubmit} aria-label={isLogin ? 'Login form' : 'Sign up form'}>
                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="nickname" className="sr-only">Nickname</label>
                    <input
                      type="text"
                      id="nickname"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleChange}
                      required
                      placeholder="Nickname"
                      autoComplete="username"
                      aria-required="true"
                    />
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="email" className="sr-only">Nickname ou email address</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Nickname ou email address"
                    autoComplete="email"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Password"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    aria-required="true"
                  />
                </div>

                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      placeholder="Confirm Password"
                      autoComplete="new-password"
                      aria-required="true"
                      aria-invalid={passwordError ? "true" : "false"}
                    />
                    {passwordError && (
                      <span className="error-message" role="alert">{passwordError}</span>
                    )}
                  </div>
                )}

                {isLogin && (
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" name="rememberMe" />
                      <span>Remember me</span>
                    </label>
                    <a href="/recuperar-senha" className="forgot-link">
                      Forgot password?
                    </a>
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-full">
                  {isLogin ? 'Login' : 'Join us'} →
                </button>
              </form>

              <div className="login-divider" role="separator" aria-label="or">
                <span>or</span>
              </div>

              <div className="social-login" role="group" aria-label="Social login options">
                <button type="button" className="social-btn social-btn-white" aria-label="Sign up with Steam">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                  </svg>
                  Sign up with Steam
                </button>
                
                <button type="button" className="social-btn social-btn-black" aria-label="Sign up with Discord">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 10.2 10.2 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Sign up with Discord
                </button>
              </div>

              <footer className="login-footer">
                {isLogin ? (
                  <>Don't have an account? <button type="button" onClick={() => setIsLogin(false)} className="link-btn">Sign up</button></>
                ) : (
                  <>Already have an account? <button type="button" onClick={() => setIsLogin(true)} className="link-btn">Login</button></>
                )}
              </footer>
            </div>
          </section>
        </article>

        {/* Navigation */}
        <nav className="floating-buttons" aria-label="Site navigation">
          <Link to="/" className="floating-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Acessar o site
          </Link>
        </nav>
      </main>
    </>
  );
}
