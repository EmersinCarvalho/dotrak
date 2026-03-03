import { Link } from 'react-router-dom';
import heroImage from '../assets/2.jpg';
import './Hero.css';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" style={{backgroundImage: `url(${heroImage})`}} role="img" aria-label="Background Hero"></div>
      <div className="container hero-content">
        <h1>
          Welcome to <span className="text-yellow">Dotrak</span>.<br />
          The World of True Warriors.
        </h1>
        <p className="hero-subtitle">
          A plataforma tecno-gamer completa onde você encontra estatísticas avançadas, 
          treinamento personalizado e uma comunidade apaixonada por e-sports.
        </p>
        <div className="hero-cta">
          <Link to="/login" className="btn btn-primary">Entrar na Plataforma</Link>
          <button onClick={() => scrollToSection('sobre')} className="btn btn-secondary">
            Conhecer Recursos
          </button>
        </div>
      </div>
    </section>
  );
}
