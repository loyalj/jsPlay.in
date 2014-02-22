define(['/js/lib/spriteSheetFactory',
        '/js/game/pong/gameMenu'
    ],
    
    function (sprite,
              gameMenu) {

    var ctx, ssF;
    var timeout = 5;
    
    var _init = function (){
        //context short hand for the game
        ctx = this.engine.canvas.getContext();
        
        ssF = sprite.produce({'bg':[0, 0, 516, 133]}, ctx);
        ssF.loadImage('/images/avdgs.png');
    };
    
    var _update = function (delta){
       timeout = timeout - delta;       
        if((this.engine.mouse.getClickX() != null) || (timeout < 0) || (this.engine.keyboard.isKeyDown(32) == true)) {
            this.engine.loadGameState(gameMenu, [], true);
        }
    };
    
    var _render = function (){
      
        // Clear the canvas to black by default
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0,0, this.engine.canvas.getWidth(), this.engine.canvas.getHeight());
        
        
        ssF.draw('bg', 254,318);
    };
    
    var _pause = function () {
        // Pause this state
    }    
    
    var _resume = function () {
        //Resume this state
        
    }
    
    var _unload = function() {
        
    };
    
    return {
        name: "Pong",
        initialize: _init,
        update: _update,
        render: _render,
        pause: _pause,
        resume: _resume,
        unload: _unload
    }
});
