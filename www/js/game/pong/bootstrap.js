require.config({
    'paths': {
        'jsGame': '/js/gameEngineRQ',
        'gameFile': '/js/games/pong/pong'
    }
});

require(['jsGame','gameFile'], function(jsGame, gameFile) {
    // Attach the object to the canvas
    jsGame.initCanvas('#gameCanvas');
    jsGame.loadGameState(gameFile);
    jsGame.startGame();
});
