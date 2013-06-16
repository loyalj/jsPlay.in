var requirejs = require('requirejs');
var engineBasePath = '/var/www/jsplay.in/space/www/js/';    

requirejs.config({
    baseUrl: engineBasePath,
    nodeRequire: require
});

requirejs(['gameEngineRQ',
          'game/cosmic_frontier/main_s'],
    function(gameEngine, gameFile) {
        gameEngine.loadGameState(gameFile);
        gameEngine.startGame();
    }
);

