import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Features from '../sections/Features';
import Community from '../sections/Community';
import Roadmap from '../sections/Roadmap';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

export default function Home() {
  useScrollAnimation();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dotrak",
    "url": "https://dotrak.com",
    "description": "Plataforma de análise e treinamento para CS2, Valorant e jogos competitivos. IA avançada, estatísticas em tempo real, torneios e comunidade gamer.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dotrak.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://discord.gg/dotrak",
      "https://twitter.com/dotrak",
      "https://youtube.com/@dotrak"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dotrak",
    "url": "https://dotrak.com",
    "logo": "https://dotrak.com/logo.png",
    "description": "Plataforma tecnológica para gamers competitivos de CS2, Valorant, League of Legends e Dota 2.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contato@dotrak.com",
      "contactType": "Customer Support",
      "availableLanguage": ["Portuguese", "English"]
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Dotrak - The World of True Warriors</title>
        <meta 
          name="description" 
          content="Melhore no CS2, Valorant e jogos competitivos com análise de IA, estatísticas em tempo real, replays avançados e torneios. Plataforma tecnológica para gamers profissionais e amadores." 
        />
        <meta 
          name="keywords" 
          content="CS2, Counter-Strike 2, Valorant, análise de jogos, treinamento gamer, e-sports, torneios online, estatísticas CS2, coach IA, plataforma gamer, League of Legends, Dota 2, Rainbow Six, análise de replays, matchmaking, comunidade gamer, tecnologia gaming"
        />
        <link rel="canonical" href="https://dotrak.com/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Dotrak" />
        
        {/* Open Graph - Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dotrak.com/" />
        <meta property="og:site_name" content="Dotrak" />
        <meta property="og:title" content="Dotrak - Análise CS2, Valorant e E-Sports com IA" />
        <meta property="og:locale" content="pt_BR" />
        <meta 
          property="og:description" 
          content="Plataforma tecnológica para análise e treinamento em CS2, Valorant e jogos competitivos. IA avançada, estatísticas em tempo real e torneios." 
        />
        <meta property="og:image" content="https://dotrak.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Dotrak - Plataforma Gamer" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dotrak" />
        <meta name="twitter:creator" content="@dotrak" />
        <meta name="twitter:url" content="https://dotrak.com/" />
        <meta name="twitter:title" content="Dotrak - Análise CS2 e Valorant com IA" />
        <meta 
          name="twitter:description" 
          content="Melhore no CS2 e Valorant com análise de IA, estatísticas em tempo real e torneios. Tecnologia para gamers competitivos." 
        />
        <meta name="twitter:image" content="https://dotrak.com/twitter-image.jpg" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
      </Helmet>

      <main>
        <Hero />
        <About />
        <Features />
        <Community />
        <Roadmap />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
