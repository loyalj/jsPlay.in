define(['../../lib/quadtree'], function (QuadTree) {

    var timeout = 5;
    var elapsedTime = 0;

    var worldQT = null;
    var qtMaxWidth = 10000;
    var qtMaxHeight = 10000;
    var qtMaxStars = 100;


    var _init = function (){
    
        console.log('Starting Server');
        console.log('Generating Star Map');

        //Generate a random set of X points into a quad map
        // These will represent the stars in the galaxy.
        worldQT = new QuadTree([0, 0], [10000, 10000]);
        
        for(var i = 0; i < qtMaxStars; i++) {
            coords = [Math.floor(Math.random() * 10000), Math.floor(Math.random() * 10000)]; 
            console.log('Star placed at: ' + coords);
            worldQT.insert(coords, {});
        }
        
        console.log(worldQT);
        this.engine.net.listen(8201);   
    };
    
    
    var _update = function (delta){
        elapsedTime = elapsedTime + delta;
        
        if(elapsedTime > timeout) {
            elapsedTime = 0;
            console.log('Take Five');
            console.log(this.engine.net.getMessages());
        }
        
    };
    
    
    var _render = function (){
    };
    
    
    var _pause = function () {};
    var _resume = function () {};
    
    return {
        name: "Simple Game",
        initialize: _init,
        update: _update,
        render: _render,
        pause: _pause,
        resume: _resume
    };
});
