define(['core/environmentHandle',
        'core/timerHandle',
        'core/eventHandle',
        'core/canvasHandle',
        'core/socketHandle',
        'core/stateHandle',
        'core/gameApp'],
    function(environmentHandle, timerHandle, eventHandle, canvasHandle, socketHandle, stateHandle, gameApp) {
        
        var _initCanvas = function (canvasId) {
           console.log(environmentHandle.isBrowser()); 
            if(environmentHandle.isBrowser()) {
                // Hook the canvas and then add some handy mouse/key events
                canvasHandle.initCanvas(canvasId);
                
                eventHandle.attachKeyboard(window);
                eventHandle.attachMouse(canvasHandle.getDObj());
            }
        };
        
        var _loadGameState = function (gameToLoad, parameters, overwrite){
            // give it the engine reference, a game and some parameters
            stateHandle.loadState(this, gameToLoad, parameters, overwrite);
            gameApp = stateHandle.currentState();
            
        };
        
        var _unloadGameState = function () {
            stateHandle.unloadState();
            gameApp = stateHandle.currentState();
        }
       
        var _getGameName = function (){
            return gameApp.name;
        };
        
        var _startGame = function (){
            timerHandle.start(_updateFrame);
        };
        
        var _stopGame = function (){
            timerHandle.stop();
        };
        
        var _updateFrame = function(){
        
            // Runs the full frame update, logic and render.
            try{
                //Calculate the frame time
                timerHandle.tick();
                
                //Run the application update and render
                gameApp.update(timerHandle.getDeltaTime());
                gameApp.render();
                
                
                //Clear the mouse event register
                eventHandle.mouse.clear();
                eventHandle.keyboard.clear(false, true);
                
                // Start the timer for the next frame
                timerHandle.tock(_updateFrame);
                
                
            }
            catch(er){
                // oops, something went wrong, better report on what it might be... duh duh der.
                console.log(er);  
            }
        };

        // Create and return an object with "public" methods
        return {
            environment: environmentHandle,
            mouse: eventHandle.mouse,
            keyboard: eventHandle.keyboard,
            canvas: canvasHandle,
            net: socketHandle,
            framerate: timerHandle.getFrameRate,
            initCanvas: _initCanvas,
            loadGameState: _loadGameState,
            unloadGameState: _unloadGameState,
            startGame: _startGame,
            stopGame: _stopGame,
            getGameName: _getGameName,
            events: eventHandle
        };
    }
);
