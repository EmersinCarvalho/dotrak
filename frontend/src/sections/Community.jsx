import { Link } from 'react-router-dom';
import './Community.css';
import comunidade1 from '../assets/comunidade-1.jpg';
import comunidade2 from '../assets/comunidade-2.jpg';
import comunidade3 from '../assets/comunidade-3.jpg';
import comunidade4 from '../assets/comunidade-4.jpg';
import comunidade5 from '../assets/comunidade-5.jpg';
import comunidade6 from '../assets/comunidade-6.jpg';

export default function Community() {
  // Estatísticas estáticas da comunidade
  const stats = {
    activeGamers: '150+',
    matchesAnalyzed: '500+',
    tournamentsHeld: '12+',
    supportAvailability: '24/7'
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
            {statsArray.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="community-cta scroll-animate">
            <Link to="/login" className="btn btn-primary">Entrar na Comunidade</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
