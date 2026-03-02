import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'O que é a Dotrak e como funciona?',
      answer: 'Dotrak é uma plataforma completa para gamers competitivos que oferece análise de desempenho, treinamento personalizado, matchmaking inteligente e uma comunidade ativa. Utilizamos IA para analisar suas partidas e fornecer insights acionáveis.',
    },
    {
      question: 'A plataforma é gratuita?',
      answer: 'Oferecemos um plano gratuito com recursos básicos. Para acesso completo a todas as funcionalidades, análises avançadas e torneios premium, temos planos pagos acessíveis.',
    },
    {
      question: 'Quais jogos são suportados?',
      answer: 'Atualmente suportamos os principais títulos competitivos como CS:GO, Valorant, League of Legends, Dota 2 e Rainbow Six Siege. Estamos constantemente adicionando novos jogos.',
    },
    {
      question: 'Como funciona o sistema de análise por IA?',
      answer: 'Nossa IA analisa seus replays identificando padrões, erros recorrentes, pontos fortes e fracos. Com base nisso, gera recomendações personalizadas de treinamento e estratégias focadas na sua evolução.',
    },
    {
      question: 'Posso participar de torneios?',
      answer: 'Sim! Organizamos torneios diários, semanais e mensais para todos os níveis de habilidade, com premiações em dinheiro, itens in-game e reconhecimento na comunidade.',
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Oferecemos suporte 24/7 através do Discord, chat ao vivo e email. Usuários premium têm prioridade no atendimento e acesso a suporte por voz.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-header text-center scroll-animate">
          <h2>Perguntas <span className="text-yellow">Frequentes</span></h2>
          <p>Tire suas dúvidas sobre a plataforma</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article key={index} className={`faq-item ${activeIndex === index ? 'active' : ''} scroll-animate scroll-stagger`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
