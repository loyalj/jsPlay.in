define(function () {
    var _factoryTemplate = function (spriteD, contextRef){
        
        var sprites = [];
        var spriteWidth = 0;
        var spriteHeight = 0;
        
        var sheetImage;
        var isImageLoaded = false;
        var spriteData = spriteD;
        
        // Holds a reference to the canvas for drawing operations.
        var canvasContext = contextRef;
    
        // flips the image load flag over to true.
        var _imageLoaded = function (){
            isImageLoaded = true;
        };
        
        return{
            loadImage: function (imgUrl){
                // Load the image file and set the isLoaded flag to false.
                // this will prevent the draw routine from trying to dran an image not loaded.
                isImageLoaded = false;
                
                sheetImage = new Image();
                sheetImage.src = imgUrl;
                sheetImage.onload = _imageLoaded;   
            },
            draw: function (spriteName, x, y){
                //Get the coordinates of the specified index from 'sprites'
                // draw the sprite on to the canvas.
                if(isImageLoaded == true){
                    //draw the image sprite
                    canvasContext.drawImage(sheetImage, spriteData[spriteName][0], spriteData[spriteName][1], spriteData[spriteName][2], spriteData[spriteName][3], x, y, spriteData[spriteName][2], spriteData[spriteName][3]);
                }
                else{
                    canvasContext.fillStyle = "rgba(255, 0, 0, .5)";
                    canvasContext.fillRect (x, y, spriteData[spriteName][2], spriteData[spriteName][3]);
                }
            }
        };
    };
    
    return {
        produce: _factoryTemplate
    };
});
