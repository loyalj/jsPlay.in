define(['./ball', './paddle', './score', './menu', '/js/lib/spriteSheetFactory'], function (ballFactory, paddleFactory, scoreboard, menu, spriteSheetFactory) {
    
    // Create some "private" variables for the 'square game'
    var ctx, gameBall, score, playerCount, paddles;
    
    var _init = function (parameters){
        
        ctx = this.engine.canvas.getContext();
        
        playerCount = parameters.players;
        
        paddles = new Array(2);
        paddles[0] = paddleFactory.producePaddle(64, 250, 8, 90, 0, 0, 0, 60, 1024, 768, ctx);
        paddles[1] = paddleFactory.producePaddle(950, 480, 8, 90, 0, 0, 0, 60, 1024, 768, ctx);
        
        if(playerCount == 1){
            paddles[1].setVY(90);
        }
        
        gameBall = ballFactory.produce(512, 384, 10, Math.floor((Math.random()*300)-150), Math.floor((Math.random()*300)-150), 0, 60, 1024, 768, ctx);
        
        score = scoreboard.produce();
        score.addPlayer("Player 1", 0);
        score.addPlayer("Player 2", 0);
    };
    
    
    var _update = function (delta){
        
        //Update ball state
        gameBall.update(delta);
        
        //Update each paddle and check collisions with the ball
        for(var i = 0; i <= 1; i++) {
            //Update paddle state
            paddles[i].update(delta);
            
            // Ball collisions
            if( gameBall.areaOverlap(paddles[i].getLeft(), paddles[i].getTop(), paddles[i].getRight(), paddles[i].getBottom()) ) {
                if(gameBall.getVX() < 0) {
                    gameBall.setPositionX(paddles[i].getRight() + gameBall.getRadius())
                }
                else if (gameBall.getVX() > 0) {
                    gameBall.setPositionX(paddles[i].getLeft() - gameBall.getRadius())
                }
                
                gameBall.setVX(-gameBall.getVX());
            }
        }
        
        //Check the left or right hit and award points
        if(gameBall.checkHitLeft()){
            score.addScore("Player 2", 1);
            gameBall.setPosition(512, 384);
            gameBall.setVelocity(Math.floor((Math.random()*300)+30), Math.floor((Math.random()*300)+30));
        }
        
        if(gameBall.checkHitRight()){
            score.addScore("Player 1", 1);
            gameBall.setPosition(512, 384);
            gameBall.setVelocity(-Math.floor((Math.random()*300)+30), Math.floor((Math.random()*300)+30));
        }
        
        //check player one up key "W"
        if((this.engine.keyboard.isKeyDown(87) == true)) {
           paddles[0].setVY(-90);
        }
        
        //check player one stop key "X"
        if((this.engine.keyboard.isKeyDown(88) == true)) {
           paddles[0].setVY(0);
        }
        
        //check player one down key "S"
        if((this.engine.keyboard.isKeyDown(83) == true)) {
           paddles[0].setVY(90);
        }
        
        if(playerCount == 2) {
            //check player one up key "Arrow Up"
            if((this.engine.keyboard.isKeyDown(38) == true)) {
               paddles[1].setVY(-90);
            }
            
            //check player one stop key "X"
            if((this.engine.keyboard.isKeyDown(96) == true)) {
               paddles[1].setVY(0);
            }
            
            //check player one down key "Arrow Down"
            if((this.engine.keyboard.isKeyDown(40) == true)) {
               paddles[1].setVY(90);
            }    
        }
        
        
        //Check escape key and head back to menu
        if((this.engine.keyboard.isKeyDown(27) == true)) {
            this.engine.unloadGameState();
        }
    };
    
    
    var _render = function (){
       
        // Clear the canvas to black by default
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0,0, this.engine.canvas.getWidth(), this.engine.canvas.getHeight());
        
        //Draw the center line
        ctx.fillStyle = "rgb(45, 183, 208)";
        ctx.fillRect(0,60, this.engine.canvas.getWidth(), 2);
       
        for(var i = 0; i < paddles.length; i++ ) {
            paddles[i].draw(0, 0);
        }
        
        gameBall.draw(0,0);
        
        ctx.fillStyle = "rgb(45, 183, 208)";
        ctx.font="30px Arial";
        ctx.fillText( score.getPlayerScore("Player 1"),10,50);
        ctx.fillText( score.getPlayerScore("Player 2"),980,50);
    };
    
    var _pause = function () {};
    var _resume = function () {};
    
    return {
        name: "Game Main",
        initialize: _init,
        update: _update,
        render: _render,
        pause: _pause,
        resume: _resume
    }
});