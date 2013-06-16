define(['./gameMain', './ball', './paddle', './score', './menu', '/js/lib/spriteSheetFactory'], function (gameMain, ballFactory, paddleFactory, scoreboard, menu, spriteSheetFactory) {
    
    // Create some "private" variables for the 'square game'
    var ctx, ssF, demoBall, score, mainMenu, paddles;
    
    
    var _init = function (){
        
        ctx = this.engine.canvas.getContext();
        
        ssF = spriteSheetFactory.produce({'bg':[0, 0,  677, 171]}, ctx);
        ssF.loadImage('/images/games/pong/title.png');
         
        paddles = new Array(2);
        paddles[0] = paddleFactory.producePaddle(64, 250, 8, 90, 0, 90, 0, 60, 1024, 768, ctx);
        paddles[1] = paddleFactory.producePaddle(950, 480, 8, 90, 0, 90, 0, 60, 1024, 768, ctx)
        
        demoBall = ballFactory.produce(512, 384, 10, Math.floor((Math.random()*300)-150), Math.floor((Math.random()*300)-150), 0, 60, 1024, 768, ctx);
        
        score = scoreboard.produce();
        score.addPlayer("Player 1", 0);
        score.addPlayer("Player 2", 0);
        
        mainMenu = menu.produce(ctx);
        mainMenu.addItem(0, "1 Player");
        mainMenu.addItem(1, "2 Players");
    };
    
    
    var _update = function (delta){
        
        //Update ball state
        demoBall.update(delta);
        
        //Update each paddle and check collisions with the ball
        for(var i = 0; i <= 1; i++) {
            //Update paddle state
            paddles[i].update(delta);
            
            // Ball collisions
            if( demoBall.areaOverlap(paddles[i].getLeft(), paddles[i].getTop(), paddles[i].getRight(), paddles[i].getBottom()) ) {
                if(demoBall.getVX() < 0) {
                    demoBall.setPositionX(paddles[i].getRight() + demoBall.getRadius())
                }
                else if (demoBall.getVX() > 0) {
                    demoBall.setPositionX(paddles[i].getLeft() - demoBall.getRadius())
                }
                
                demoBall.setVX(-demoBall.getVX());
            }
        }
        
        //Check the left or right hit and award points
        if(demoBall.checkHitLeft()){
            score.addScore("Player 2", 1);
            demoBall.setPosition(512, 384);
            demoBall.setVelocity(Math.floor((Math.random()*300)+30), Math.floor((Math.random()*300)+30));
        }
        
        if(demoBall.checkHitRight()){
            score.addScore("Player 1", 1);
            demoBall.setPosition(512, 384);
            demoBall.setVelocity(-Math.floor((Math.random()*300)+30), Math.floor((Math.random()*300)+30));
        }
        
        
        //See if the space or enter key has been hit and move to the game or something
        if( (this.engine.keyboard.isKeyDown(13) == true) || (this.engine.keyboard.isKeyDown(32) == true)) {
            
            if((mainMenu.getCurrentItem().itemName == 0)) {
                this.engine.loadGameState(gameMain, {players: 1}, false);
            }
            else if ((mainMenu.getCurrentItem().itemName == 1)) {
                this.engine.loadGameState(gameMain, {players: 2}, false);
            }
        }
        
        //Check arrows 38:up 40:down
        if((this.engine.keyboard.isKeyDown(38) == true)) {
            mainMenu.nextItem();
        }
        
        //Check arrows 38:up 40:down
        if((this.engine.keyboard.isKeyDown(40) == true)) {
            mainMenu.prevItem();
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
        
        demoBall.draw(0,0);
        
        ssF.draw('bg', 173,10);
        
        mainMenu.draw(500,350);
        
        ctx.fillStyle = "rgb(45, 183, 208)";
        ctx.font="30px Arial";
        ctx.fillText( score.getPlayerScore("Player 1"),10,50);
        ctx.fillText( score.getPlayerScore("Player 2"),980,50);  
    };
    
    var _pause = function () {};
    var _resume = function () { };
    
    return {
        name: "Game Menu",
        initialize: _init,
        update: _update,
        render: _render,
        pause: _pause,
        resume: _resume
    }
});