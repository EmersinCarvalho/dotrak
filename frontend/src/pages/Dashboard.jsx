import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Dashboard.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se usuário está logado
    const token = localStorage.getItem('dotrak_token');
    const userData = localStorage.getItem('dotrak_user');

    if (!token || !userData) {
      // Não está logado, redirecionar para login
      navigate('/login');
      return;
    }

    // Carregar dados do usuário
    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
      handleLogout();
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('dotrak_token');
    localStorage.removeItem('dotrak_user');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard - Dotrak</title>
        <meta name="description" content="Painel do usuário Dotrak" />
      </Helmet>

      <div className="dashboard-page">
        <div className="dashboard-background">
          <div className="dashboard-overlay"></div>
        </div>

        <div className="dashboard-container">
          {/* Header do Dashboard */}
          <header className="dashboard-header">
            <div className="dashboard-logo">
              <h1>DOTRAK</h1>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="16 17 21 12 16 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="21" y1="12" x2="9" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sair
            </button>
          </header>

          {/* Welcome Section */}
          <section className="dashboard-welcome">
            <div className="welcome-content">
              <h2>Bem-vindo, <span className="highlight">{user.nickname}</span>!</h2>
              <p>Pronto para dominar o jogo?</p>
            </div>
          </section>

          {/* User Info Card */}
          <section className="dashboard-content">
            <div className="user-info-card">
              <div className="card-header">
                <h3>Informações do Perfil</h3>
              </div>
              <div className="card-body">
                <div className="info-item">
                  <span className="info-label">Nickname:</span>
                  <span className="info-value">{user.nickname}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{user.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">ID:</span>
                  <span className="info-value info-id">{user.id}</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">🎮</div>
                <div className="stat-info">
                  <h4>Partidas</h4>
                  <p className="stat-value">0</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-info">
                  <h4>Vitórias</h4>
                  <p className="stat-value">0</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-info">
                  <h4>Nível</h4>
                  <p className="stat-value">1</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <h4>Conquistas</h4>
                  <p className="stat-value">0</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h3>Ações Rápidas</h3>
              <div className="actions-grid">
                <button className="action-btn" disabled>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
                  </svg>
                  <span>Iniciar Análise</span>
                  <small>Em breve</small>
                </button>

                <button className="action-btn" disabled>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
                  </svg>
                  <span>Ver Amigos</span>
                  <small>Em breve</small>
                </button>

                <button className="action-btn" disabled>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Torneios</span>
                  <small>Em breve</small>
                </button>

                <button className="action-btn" disabled>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                    <path d="M12 1v6m0 6v6" strokeWidth="2"/>
                    <path d="M1 12h6m6 0h6" strokeWidth="2"/>
                  </svg>
                  <span>Configurações</span>
                  <small>Em breve</small>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
