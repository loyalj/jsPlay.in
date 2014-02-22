var engineBasePath = '/js/';
var gameBasePath = 'game/pong/';

require.config({
    'baseUrl': engineBasePath,
    'paths': {
        'engineFile': 'gameEngineRQ',
        'gameFile': 'game/pong/pong'
    }
});

require(['engineFile','gameFile'], function(engine, gameFile) {
    // Attach the object to the canvas
    engine.initCanvas('#gameCanvas');
    engine.loadGameState(gameFile);
    engine.startGame();
});
