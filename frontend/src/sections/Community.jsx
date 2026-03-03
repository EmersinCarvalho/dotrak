import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Community.css';
import comunidade1 from '../assets/comunidade-1.jpg';
import comunidade2 from '../assets/comunidade-2.jpg';
import comunidade3 from '../assets/comunidade-3.jpg';
import comunidade4 from '../assets/comunidade-4.jpg';
import comunidade5 from '../assets/comunidade-5.jpg';
import comunidade6 from '../assets/comunidade-6.jpg';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Community() {
  const [stats, setStats] = useState({
    activeGamers: '150+',
    matchesAnalyzed: '500+',
    tournamentsHeld: '12+',
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
    { number: stats.matchesAnalyzed, label: 'Partidas Jogadas' },
    { number: stats.tournamentsHeld, label: 'Eventos Realizados' },
    { number: stats.supportAvailability, label: 'Suporte Disponível' },
  ];

  const galleryImages = [
    { src: comunidade1, alt: 'Primeiro encontro da comunidade CS2 - 1' },
    { src: comunidade2, alt: 'Primeiro encontro da comunidade CS2 - 2' },
    { src: comunidade3, alt: 'Primeiro encontro da comunidade CS2 - 3' },
    { src: comunidade4, alt: 'Primeiro encontro da comunidade CS2 - 4' },
    { src: comunidade5, alt: 'Primeiro encontro da comunidade CS2 - 5' },
    { src: comunidade6, alt: 'Primeiro encontro da comunidade CS2 - 6' },
  ];

  return (
    <section id="comunidade" className="community">
      <div className="container">
        <div className="community-header scroll-animate">
          <h2>Junte-se à <span className="text-yellow">Comunidade CS2</span></h2>
          <p>
            Nossa comunidade está crescendo! Confira o nosso primeiro encontro presencial 
            onde gamers se reuniram para jogar CS2, compartilhar experiências e se divertir juntos. 
            Venha fazer parte dessa família!
          </p>
        </div>

        <div className="community-gallery scroll-animate">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="community-content">
          <div className="community-stats scroll-animate-up">
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

          <div className="community-cta scroll-animate">
            <Link to="/login" className="btn btn-primary">Entrar na Comunidade</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
