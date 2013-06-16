define(function (){
    
    var gameStates = Array();
    
    var _loadState = function (engineRef, newGameState, parameters, overwrite) {
        
        if(gameStates.length != 0) {
            
            var iLastState = gameStates.length - 1;
            
            if(overwrite) {
                //Overwrite the current state with the new state
                gameStates[iLastState].unload();
                gameStates.pop();
            }
            else {
                // Push a new state onto the stack            
                gameStates[iLastState].pause();  
            }
        }
        
        newGameState.engine = engineRef;
        newGameState.initialize(parameters);
        
        gameStates.push(newGameState);    
    };
    
    var _unloadState = function () {
        gameStates.pop();
        _currentState().resume();
    };
    
    var _currentState = function () {
        
        var iCurrentState = gameStates.length - 1;
        return gameStates[iCurrentState];
    };
    
    return{
        loadState: _loadState,
        unloadState: _unloadState,
        currentState: _currentState
    };
});