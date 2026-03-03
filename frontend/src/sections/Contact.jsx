import { useState } from 'react';
import contactImage from '../assets/1.jpg';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  return (
    <section id="contato" className="contact">
      <div className="contact-bg" style={{backgroundImage: `url(${contactImage})`}} role="img" aria-label="Background Contact"></div>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info scroll-animate-left">
            <h2>Entre em <span className="text-yellow">Contato</span></h2>
            <p>
              Tem alguma dúvida, sugestão ou precisa de ajuda? 
              Nossa equipe está pronta para te atender.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:contato@dotrak.com">contato@dotrak.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">💬</div>
                <div>
                  <h4>Discord</h4>
                  <a href="https://discord.gg/dotrak" target="_blank" rel="noopener noreferrer">
                    discord.gg/dotrak
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">⏰</div>
                <div>
                  <h4>Horário</h4>
                  <p>Suporte 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form scroll-animate-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

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
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>

            {status && <div className="form-status">{status}</div>}

            <button type="submit" className="btn btn-primary">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
