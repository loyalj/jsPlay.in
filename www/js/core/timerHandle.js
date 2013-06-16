define(function (){
    
    var gameFrameTime = 1;  //time in ms that the timer runs the engine functions
    var timerReference = null;
    var deltaStartTime = new Date();
    var deltaTime;
    
    var _start = function (callbackFunction) {
        if(!timerReference) {
            timerReference = setTimeout(callbackFunction, gameFrameTime);  
        }
    };
    
    var _stop = function() {
        if(timerReference) {
            clearInterval(timerReference);
            timerReference = null;
        }
    };
    
    var _tick = function () {
        var tempTime = new Date();
        
        deltaTime = (tempTime - deltaStartTime) * 0.001;
        deltaStartTime = tempTime;
        
        timerReference = null;
    };
    
    var _getDeltaTime = function () {
        return deltaTime;
    }
    
    var _getFrameRate = function () {
        return (1 / deltaTime);
    };
    
    return{
        start: _start,
        stop: _stop,
        tick: _tick,
        tock: _start,
        getDeltaTime: _getDeltaTime,
        getFrameRate: _getFrameRate
    };
});