define(function () {
    var _factoryTemplate = function (pX, pY, w, h, vX, vY, bL, bT, bR, bB, ctx){

        var xPosition = pX;
        var yPosition = pY;
        var width = w;
        var height = h;
        
        var xVelocity = vX;
        var yVelocity = vY;
        
        var bounds = new Array(bL, bT, bR, bB); // left, top, right, bottom

        var _setVelocity = function (vX, vY) {
            _setVelocityX(vX);
            _setVelocityY(vY);
        };
        
            var _setVelocityX = function (vX){
                xVelocity = vX;
            };
            
            var _setVelocityY = function(vY) {
                yVelocity = vY;    
            };
        
        var _getVelocity = function (){
            return new Array(xVelocity, yVelocity);    
        };
        
            var _getVelocityX = function(){
                return xVelocity;
            };
            
            var _getVelocityY = function(){
                return yVelocity;
            };
        
        var _setPosition = function (pX, pY) {
            _setPositionX(pX);
            _setPositionY(pY);
        };
        
            var _setPositionX = function (pX) {
                xPosition = pX;
            };
            
            var _setPositionY = function (pY) {
                yPosition = pY;
            };
            
        var _getPosition = function (pX, pY) {
            return new Array(xPosition, yPosition);
        };
        
            var _getPositionX = function () {
                return xPosition;
            };
            
            var _getPositionY = function () {
                return yPosition;
            };
            
        var _getLeft = function() {
            return (xPosition - width / 2);
        };
        
        var _getTop = function() {
            return (yPosition - height / 2);
        };
        
        var _getRight = function() {
            return (xPosition + width / 2);
        };
        
        var _getBottom = function() {
            return (yPosition + height / 2);
        };
        
        var _setWidth = function(w){
            width = w;
        };
        
        var _getWidth = function(){
            return width;
        };
        
        var _setHeight = function(h){
            height = h;
        };
        
        var _getHeight = function(){
            return height;
        };
        
        var _draw = function (pX, pY) {
            ctx.fillStyle="#00ffFF";
            ctx.fillRect((xPosition - width / 2) + pX, (yPosition - height / 2) + pY, width, height);
        };
        
        var _update = function(timeDelta) {
            var dX = xVelocity * timeDelta;
            var dY = yVelocity * timeDelta;
            
            if((dX !=0) || (dY != 0)) {
               _setPosition(xPosition + dX, yPosition + dY);
            }
            _checkBounds();
        };
        
        var _checkBounds = function() {
          
          //Left check  
          if((xPosition - (width/2))  < bounds[0] ) {
            _setPositionX(bounds[0] + (width/2) + 1);
            _setVelocityX(-xVelocity);
          }
          
          //right check
          if( (xPosition + (width/2)) > bounds[2] ) {
            _setPositionX(bounds[2] - (width/2) - 1);
            _setVelocityX(-xVelocity);
          }
          
          //top check
          if( (yPosition - (height/2)) < bounds[1] ) {
            _setPositionY(bounds[1] + (height/2) + 1);
            _setVelocityY(-yVelocity);
          }
          
          //bottom check
          if( (yPosition + (height/2)) > bounds[3] ) {
            _setPositionY(bounds[3] - (height/2) - 1);
            _setVelocityY(-yVelocity);
          }
        };
        
        
        return{
            setVelocity: _setVelocity,
            setVX: _setVelocityX,
            setVY: _setVelocityY,
            
            getVelocity: _getVelocity,
            getVX: _getVelocityX,
            getVY: _getVelocityY,
            
            setPosition: _setPosition,
            setPositionX: _setPositionX,
            setPositionY: _setPositionY,
            
            getPosition: _getPosition,
            getPositionX: _getPositionX,
            getPositionY: _getPositionY,
            
            getLeft: _getLeft,
            getTop: _getTop,
            getRight: _getRight,
            getBottom: _getBottom,
            
            getWidth: _getWidth,
            setWidth: _setWidth,
            
            getHeight: _getHeight,
            setHeight: _setHeight,
            
            draw: _draw,
            update: _update
        };
    };
    
    return {
        producePaddle: _factoryTemplate
    };
});