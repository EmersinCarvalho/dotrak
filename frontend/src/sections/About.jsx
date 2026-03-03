import './About.css';

export default function About() {
  const features = [
    {
      title: 'Comunidade de Gamers',
      description: 'Um espaço criado para reunir jogadores apaixonados por e-sports. Conecte-se, compartilhe experiências e divirta-se com outros entusiastas de CS2, Valorant e muito mais.',
    },
    {
      title: 'Recursos em Desenvolvimento',
      description: 'Estou constantemente trabalhando em novas ferramentas e funcionalidades para ajudar você a acompanhar suas estatísticas, melhorar seu desempenho e aproveitar ao máximo a plataforma.',
    },
    {
      title: 'Suporte e Ajuda Mútua',
      description: 'Tire suas dúvidas, compartilhe dicas e aprenda com a comunidade. Este é um projeto em evolução, feito de gamers para gamers, onde todos podem contribuir e crescer juntos.',
    },
  ];

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-header scroll-animate">
          <h2>O que é a <span className="text-yellow">Dotrak</span>?</h2>
          <p>
            Dotrak é um projeto pessoal criado com o objetivo de reunir pessoas apaixonadas por jogos competitivos. 
            Aqui você encontra um espaço para se divertir, acompanhar estatísticas, tirar dúvidas e participar de 
            uma comunidade que está crescendo. É um trabalho em progresso, feito com dedicação para oferecer 
            recursos úteis e criar conexões entre jogadores.
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
