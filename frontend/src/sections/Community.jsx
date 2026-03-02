import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Community.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Community() {
  const [stats, setStats] = useState({
    activeGamers: '50K+',
    matchesAnalyzed: '1M+',
    tournamentsHeld: '200+',
    supportAvailability: '24/7'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${API_URL}/stats`);
        
        if (!response.ok) {
          throw new Error('Erro ao carregar estatísticas');
        }

        const data = await response.json();
        
        if (data.success && data.data) {
          setStats({
            activeGamers: formatNumber(data.data.activeGamers),
            matchesAnalyzed: formatNumber(data.data.matchesAnalyzed),
            tournamentsHeld: `${data.data.tournamentsHeld}+`,
            supportAvailability: data.data.supportAvailability
          });
        }
      } catch (err) {
        console.error('Erro ao buscar estatísticas:', err);
        setError(err.message);
        // Mantém valores padrão em caso de erro
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    
    // Atualizar estatísticas a cada 30 segundos
    const interval = setInterval(fetchStats, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace('.0', '') + 'M+';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num + '+';
  };

  const statsArray = [
    { number: stats.activeGamers, label: 'Jogadores Ativos' },
    { number: stats.matchesAnalyzed, label: 'Partidas Analisadas' },
    { number: stats.tournamentsHeld, label: 'Torneios Realizados' },
    { number: stats.supportAvailability, label: 'Suporte Disponível' },
  ];

  return (
    <section id="comunidade" className="community">
      <div className="container">
        <div className="community-content">
          <div className="community-text scroll-animate-left">
            <h2>Junte-se à <span className="text-yellow">Comunidade</span></h2>
            <p>
              Faça parte de uma comunidade global de gamers apaixonados. 
              Compartilhe estratégias, forme times, participe de eventos exclusivos 
              e evolua junto com milhares de jogadores dedicados.
            </p>
            <Link to="/login" className="btn btn-primary">Começar Agora</Link>
          </div>

          <div className="community-stats scroll-animate-right">
            {loading && !error ? (
              <div className="loading-stats">Carregando estatísticas...</div>
            ) : (
              statsArray.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
