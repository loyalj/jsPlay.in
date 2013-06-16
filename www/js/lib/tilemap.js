define(['lib/spriteSheetFactory'], function (spriteSheetFactory) {
    var _factoryTemplate = function (){
                
        return{
            theproperty: true
        };
    };
    
    return {
        produce: _factoryTemplate
    };
});
