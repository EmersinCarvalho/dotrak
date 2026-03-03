import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container" aria-label="Menu principal">
        <Link to="/" className="logo">
          <img 
            src={logo} 
            alt="Dotrak - Plataforma de Análise CS2 e E-Sports" 
            className="logo-img"
            width="200"
            height="60"
            loading="eager"
          />
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Início</a></li>
          <li><a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')}>Sobre</a></li>
          <li><a href="#recursos" onClick={(e) => scrollToSection(e, 'recursos')}>Recursos</a></li>
          <li><a href="#comunidade" onClick={(e) => scrollToSection(e, 'comunidade')}>Comunidade</a></li>
          <li><a href="#contato" onClick={(e) => scrollToSection(e, 'contato')}>Contato</a></li>
          <li className="nav-cta">
            <Link to="/login" className="btn btn-primary">
              <span className="login-icon">🎮</span>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
