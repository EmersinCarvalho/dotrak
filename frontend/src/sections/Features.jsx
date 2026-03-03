import featuresImage from '../assets/3.jpg';
import './Features.css';

export default function Features() {
  const features = [
    {
      icon: '🎮',
      title: 'Organize Partidas de CS2',
      description: 'Chame até 10 amigos e organize um mix completo! Crie partidas personalizadas e divirta-se com sua galera.',
    },
    {
      icon: '📊',
      title: 'Acompanhe suas Estatísticas',
      description: 'Veja seu desempenho, histórico de partidas e evolução ao longo do tempo em um painel simples e direto.',
    },
    {
      icon: '🏆',
      title: 'Sistema de Classificação',
      description: 'Suba no ranking, acompanhe sua posição e veja como você se compara com outros jogadores da comunidade.',
    },
    {
      icon: '🎁',
      title: 'Sorteios Exclusivos VIP',
      description: 'Participe de sorteios especiais e ganhe prêmios. Membros VIP têm acesso a benefícios e sorteios exclusivos.',
    },
    {
      icon: '🎨',
      title: 'Personalize suas Skins',
      description: 'Escolha e configure suas skins favoritas, monte seu inventário e mostre seu estilo nas partidas.',
    },
    {
      icon: '💬',
      title: 'Suporte e Dúvidas',
      description: 'Tire suas dúvidas, receba ajuda da comunidade e aprenda com outros jogadores sempre que precisar.',
    },
  ];

  return (
    <section id="recursos" className="features">
      <div className="features-bg" style={{backgroundImage: `url(${featuresImage})`}} role="img" aria-label="Background Features"></div>
      <div className="container">
        <div className="features-header text-center scroll-animate">
          <h2>Recursos <span className="text-yellow">Disponíveis</span></h2>
          <p>Ferramentas práticas para você e seus amigos se divertirem</p>
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
