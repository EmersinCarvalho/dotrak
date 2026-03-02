/**
 * Controller para estatísticas da comunidade
 */

// Dados mock - futuramente virão do banco de dados
const mockStats = {
  activeGamers: 52847,
  matchesAnalyzed: 1243891,
  tournamentsHeld: 247,
  supportAvailability: '24/7'
};

export const getCommunityStats = (req, res) => {
  try {
    // Adiciona uma pequena variação nos números para simular tempo real
    const stats = {
      activeGamers: mockStats.activeGamers + Math.floor(Math.random() * 100),
      matchesAnalyzed: mockStats.matchesAnalyzed + Math.floor(Math.random() * 1000),
      tournamentsHeld: mockStats.tournamentsHeld,
      supportAvailability: mockStats.supportAvailability,
      lastUpdate: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Erro ao obter estatísticas:', error);
    res.status(500).json({
      success: false,
      error: 'Erro ao obter estatísticas da comunidade'
    });
  }
};
