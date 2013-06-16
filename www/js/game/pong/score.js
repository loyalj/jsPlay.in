define(function () {
    var _scoreboard = function (){
        
        var players = new Object();
        
        var _addPlayer= function (playerName, score) {
            players[playerName] = score;
        };
        
        var _addScore = function(playerName, score) {
            players[playerName] += score;
        };
        
        var _getPlayerScore = function (playerName) {
          return players[playerName];  
        };
        
        return{
            addPlayer: _addPlayer,
            addScore: _addScore,
            getPlayerScore: _getPlayerScore
        };
    };
    
    return {
        produce: _scoreboard
    };
});