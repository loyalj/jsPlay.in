define(function (){
    
       var canvasName,
           canvasWidth, 
           canvasHeight,
           gameCanvasCTX,    // a reference to the game canvas contxt
           gameCanvasDObj;   // a reference to the game dom object
           
        var _initCanvas = function(canvasId) {
            //Get the canvas object
            gameCanvasDObj = $(canvasId)[0];

            // Ensure the element grabbed has a context/is a canvas element.
            if (gameCanvasDObj.getContext){
                gameCanvasCTX = gameCanvasDObj.getContext('2d');
            }
            
            canvasName = canvasId;
            canvasWidth = gameCanvasDObj.clientWidth;
            canvasHeight = gameCanvasDObj.clientHeight;
        };
        
        var _getDObj = function() {
            return gameCanvasDObj;
        }
        
        var _getWidth = function () {
            return canvasWidth;
        };
        
        var _setWidth = function (nWidth) {
            canvasWidth = nWidth;
        }
        
        var _getHeight = function () {
            return canvasHeight;
        };
        
        var _setHeight = function (nHeight) {
            canvasHeight = nWidth;
        }
        
        var _getContext = function () {
            if(gameCanvasCTX) {
                return gameCanvasCTX;
            }
            else {
                throw "Canvas context has not been initialized. Game cannot initialize."
            }
        }
        
        var _getName = function () {
            return canvasHeight;
        };
        
        var _setName = function (nName) {
            canvasName = nName;
        }
        
        return {
            initCanvas: _initCanvas,
            getName: _getName,
            setName: _setName,
            getWidth: _getWidth,
            setWidth: _setWidth,
            getHeight: _getHeight,
            setHeight: _setHeight,
            getDObj: _getDObj,
            getContext: _getContext
        };
});