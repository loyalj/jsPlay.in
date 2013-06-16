define(['../../lib/spriteSheetFactory', '../../lib/tilemap'], function (spriteSheetFactory, tilemap) {
    // Create some "private" variables for the 'square game'
    var ctx, ssF;
    
    var _init = function (){
        //context short hand for the game
        ctx = this.engine.canvas.getContext();
        
        
        ctx.font         = '15.5px sans-serif';
        ctx.textBaseline = 'top';
        ctx.strokeStyle = "rgb(255, 100, 100)";
        ctx.fillStyle = "rgb(0, 0, 0)";
        
        this.engine.net.connect('http://space.jsplay.in:8201');
    };
    
    var _update = function (delta){
        if(this.engine.mouse.getClickX() != null) {
            
            //this.engine.unloadGameState();
        }
    };
    
    var _render = function (){
        // Clear the canvas to black by default
        ctx.fillRect(0,0, this.engine.canvas.getWidth(), this.engine.canvas.getHeight());
//        ctx.strokeRect((this.engine.canvas.getWidth()/2) - 200, (this.engine.canvas.getHeight() /2) - 100, 400, 400);
        
         
    };
    
    var _pause = function () {
        // Pause this state
    };
    
    var _unpause = function () {
    };
    

    return {
        name: "Game Menu",
        initialize: _init,
        update: _update,
        render: _render,
        pause: _pause
    };
});
