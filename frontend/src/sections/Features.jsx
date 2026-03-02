import featuresImage from '../assets/3.jpg';
import './Features.css';

export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Dashboard Analítico',
      description: 'Visualize todas as suas estatísticas em um painel intuitivo e personalizável.',
    },
    {
      icon: '🎯',
      title: 'Treinamento Focado',
      description: 'Exercícios adaptativos baseados nos seus pontos fracos identificados pela IA.',
    },
    {
      icon: '🏆',
      title: 'Torneios Exclusivos',
      description: 'Participe de competições diárias, semanais e mensais com premiações reais.',
    },
    {
      icon: '👥',
      title: 'Matchmaking Inteligente',
      description: 'Sistema avançado que encontra jogadores do seu nível para treinos balanceados.',
    },
    {
      icon: '🎬',
      title: 'Replay Avançado',
      description: 'Reveja suas partidas com ferramentas profissionais de análise frame-a-frame.',
    },
    {
      icon: '🔔',
      title: 'Notificações Smart',
      description: 'Receba alertas personalizados sobre eventos, torneios e atualizações relevantes.',
    },
  ];

  return (
    <section id="recursos" className="features" style={{backgroundImage: `url(${featuresImage})`}}>
      <div className="features-overlay"></div>
      <div className="container">
        <div className="features-header text-center scroll-animate">
          <h2>Recursos <span className="text-yellow">Poderosos</span></h2>
          <p>Tudo que você precisa para se tornar um competidor de elite</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article key={index} className="feature-card card scroll-animate-scale scroll-stagger">
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
