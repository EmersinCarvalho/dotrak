import './About.css';

export default function About() {
  const features = [
    {
      title: 'Análise de CS2 e Valorant com IA',
      description: 'Estatísticas detalhadas, heatmaps, análise de replays e insights instantâneos sobre seu desempenho em CS2, Valorant e outros jogos competitivos.',
    },
    {
      title: 'Comunidade E-Sports Ativa',
      description: 'Conecte-se com milhares de jogadores, forme times profissionais, participe de torneios online e eventos de e-sports exclusivos.',
    },
    {
      title: 'Tecnologia e IA Avançada',
      description: 'Machine learning e inteligência artificial analisando suas partidas para fornecer recomendações personalizadas e acelerar sua evolução.',
    },
  ];

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-header scroll-animate">
          <h2>O que é a <span className="text-yellow">Dotrak</span>?</h2>
          <p>
            Dotrak é a plataforma tecnológica que revoluciona a forma como gamers competitivos 
            treinam em CS2, Valorant, League of Legends e Dota 2. Combinamos IA de ponta, análise de dados 
            em tempo real e uma comunidade vibrante de e-sports para levar seu jogo ao próximo nível.
          </p>
        </div>

        <div className="about-grid">
          {features.map((feature, index) => (
            <article key={index} className="about-card card scroll-animate scroll-stagger">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
