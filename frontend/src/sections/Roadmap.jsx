import './Roadmap.css';

export default function Roadmap() {
  const milestones = [
    {
      phase: 'Q1 2026',
      title: 'Lançamento Beta',
      description: 'Abertura da plataforma para os primeiros 10.000 usuários com recursos core.',
      status: 'completed',
    },
    {
      phase: 'Q2 2026',
      title: 'Sistema de Torneios',
      description: 'Implementação completa do sistema de torneios automatizados com premiações.',
      status: 'active',
    },
    {
      phase: 'Q3 2026',
      title: 'IA Avançada',
      description: 'Lançamento do coach virtual com análise preditiva e recomendações personalizadas.',
      status: 'upcoming',
    },
    {
      phase: 'Q4 2026',
      title: 'Mobile App',
      description: 'Aplicativo mobile nativo para iOS e Android com todas as funcionalidades.',
      status: 'upcoming',
    },
  ];

  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <div className="roadmap-header text-center scroll-animate">
          <h2>Nosso <span className="text-yellow">Roadmap</span></h2>
          <p>Acompanhe a evolução da plataforma</p>
        </div>

        <div className="roadmap-timeline">
          {milestones.map((milestone, index) => (
            <article key={index} className={`roadmap-item ${milestone.status} scroll-animate scroll-stagger`}>
              <div className="roadmap-marker" aria-hidden="true"></div>
              <div className="roadmap-content">
                <div className="roadmap-phase">{milestone.phase}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
