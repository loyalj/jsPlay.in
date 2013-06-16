define(function () {
    var _menu = function (ctx){
        
        var menuItems = new Array();
        var currentItem = null;
        var lastItemSelection = null;
        var lastItemTimeout = 175;
        
        var _addItem = function (itemName, value) {
            
            menuItems.push({'itemName': itemName, 'value':value});
            
            if(menuItems.length == 1) {
                currentItem = 0;
            }
        };
        
        var _getCurrentItem = function () {
            return menuItems[currentItem];
        };
        
        var _nextItem = function () {
            if(_controlTimeout()) {
                currentItem++;
            }
            
            if(currentItem == menuItems.length) {
                currentItem = 0;
            }
        };
        
        var _prevItem = function () {
            
            if(_controlTimeout()) {
                currentItem--;    
            }

            if(currentItem == -1) {
                currentItem = menuItems.length - 1;
            }
        };
        
        var _controlTimeout = function () {
            
            if(lastItemSelection == null) {
                lastItemSelection = new Date().getTime();
            }
            else {
                
                if (new Date().getTime() < (lastItemSelection + lastItemTimeout) ) {
                    return false;
                }
                else {
                    lastItemSelection = new Date().getTime();
                }
            }
            return true;
        };
        
        var _draw = function (x, y) {
            var txtHeight = 30;
            
            ctx.fillStyle = "rgb(45, 183, 208)";
            ctx.font= txtHeight + "px Arial";
            
            
            for(var i = 0; i < menuItems.length; i++) {
                menuText = menuItems[i].value;
                
                if(menuItems[i] == _getCurrentItem())
                {
                    menuText = ">" + menuText + "<"; 
                }
                
                var txtWidth = ctx.measureText(menuText).width;
                ctx.fillText( menuText, x - (txtWidth/2), y + 5 + (txtHeight * i));    
            }
        };
        
        return{
            addItem: _addItem,
            getCurrentItem: _getCurrentItem,
            nextItem: _nextItem,
            prevItem: _prevItem,
            draw: _draw
        };
    };
    
    return {
        produce: _menu
    };
});