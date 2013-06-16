var engineBasePath = '/js/';
var gameBasePath = 'game/cosmic_frontier/';

require.config({
    'baseUrl': engineBasePath,
    'paths': {
        'engineFile': 'gameEngineRQ',
        'gameFile': 'game/cosmic_frontier/main'
    }
});

require(['engineFile','gameFile'], function(engine, gameFile) {
    // Attach the object to the canvas
    engine.initCanvas('#gameCanvas');
    engine.loadGameState(gameFile);
    engine.startGame();
});
