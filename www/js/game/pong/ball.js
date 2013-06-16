define(function () {
    var _ballFactory = function (pX, pY, r, vX, vY, bL, bT, bR, bB, ctx){
        
        
        var xPosition = pX;
        var yPosition = pY;
        var radius = r;
        
        var xVelocity = vX;
        var yVelocity = vY;
        
        var bounds = new Array(bL, bT, bR, bB); // left, top, right, bottom
        
        var hitRight = false;
        var hitLeft = false;
        
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
        
        var _setRadius = function(r){
            radius = r;
        };
        
        var _getRadius = function(){
            return radius;
        };
        
        var _draw = function (pX, pY) {
            
            ctx.fillStyle="#cc2299";
            ctx.fillRect((xPosition - radius) + pX, (yPosition - radius) + pY, radius*2, radius*2);

            /**ctx.fillStyle="#FF0000";
            ctx.beginPath();
                ctx.arc(xPosition + pX, yPosition + pY, radius, 0, Math.PI * 2, true);
                ctx.closePath();
            ctx.fill();**/
        };
        
        var _update = function(timeDelta) {
            var dX = xVelocity * timeDelta;
            var dY = yVelocity * timeDelta;
            
            if((dX !=0) || (dY != 0)) {
               _setPosition(xPosition + dX, yPosition + dY);
            }

            hitLeft = false;
            hitRight = false;
            
            _checkBounds();
        };
        
        var _checkBounds = function() {
          
          //Left check  
          if((xPosition - radius)  < bounds[0] ) {
            _setPositionX(bounds[0] + radius + 1);
            _setVelocityX(-xVelocity);
            
            hitLeft = true;
          }
          
          //right check
          if( (xPosition + radius) > bounds[2] ) {
            _setPositionX(bounds[2] - radius - 1);
            _setVelocityX(-xVelocity);
            
            hitRight = true;
          }
          
          //top check
          if( (yPosition - radius) < bounds[1] ) {
            _setPositionY(bounds[1] + radius + 1);
            _setVelocityY(-yVelocity);
          }
          
          //bottom check
          if( (yPosition + radius) > bounds[3] ) {
            _setPositionY(bounds[3] - radius - 1);
            _setVelocityY(-yVelocity);
          }
        };
        
        var _checkAreaIntersection = function (aL, aT, aR, aB){
            //r1 = me
            //r2 = param rect
            
            return !(
                (aL > xPosition + radius) ||
                (aR < xPosition - radius) ||
                (aT > yPosition + radius) ||
                (aB < yPosition - radius) 
            );
        };
        
        var _checkHitLeft = function () {
            return hitLeft;
        }
        
        var _checkHitRight = function () {
            return hitRight;
        }

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
            
            getRadius: _getRadius,
            setRadius: _setRadius,
            
            checkHitLeft: _checkHitLeft,
            checkHitRight: _checkHitRight,
            
            draw: _draw,
            update: _update,
            
            areaOverlap: _checkAreaIntersection
        };
    };
       
    return {
        produce: _ballFactory
    };
});