define(function (){
    var keyDownBin = new Array();
    var keyPressBin = new Array();
    
    var anyKeyDown = false;
    var keysDown = 0;
    
    var cleanKeyCode = function(keyCode) {
        
        if(typeof keyCode == 'string') keyCode = keyCode.charCodeAt(0);
        
        return keyCode;
    }
    
    var _isAnyKeyDown = function(){
        
        return anyKeyDown;
    };
    
    var _howManyKeysDown = function() {
        
        return keysDown;  
    }
    
    var _getKeyDown = function(keyCode) {
        
        return keyDownBin[cleanKeyCode(keyCode)];
    };
    
    var setKeyDown = function(keyCode, value) {
       
        keyDownBin[keyCode] = value;   
    };
    
    var _keyDown = function(keyCode) {
        
        setKeyDown(keyCode, true);
        keysDown++;
        anyKeyDown = true;
    };
    
    var _keyUp = function(keyCode) {
        
       setKeyDown(keyCode, false);
       keysDown--;
       
       if(keysDown == 0) anyKeyDown = false;
    };
    
    var _clearKeyDown = function () {
      keyDownBin = new Array();  
    };
    
    var _getKeyPress = function (keyCode) {
      return keyPressBin[cleanKeyCode(keyCode)];
        
    };
    
    var setKeyPress = function (keyCode, value) {
        keyPressBin[keyCode] = value;  
    };
    
    var _keyPress = function (keyCode) {
        setKeyPress(keyCode, true);
    };
    
    var _clearKeyPress = function () {
        keyPressBin = new Array();
    };
    
    var _clear = function (clearKeyDown, clearKeyPress) {
      
        if (clearKeyDown == true) _clearKeyDown();
        
        if (clearKeyPress == true) _clearKeyPress();
        
    };
    
    return{
        anyKey: _isAnyKeyDown,
        howManyKeysDown: _howManyKeysDown,
        isKeyDown: _getKeyDown,
        keyDown: _keyDown,
        keyUp: _keyUp,
        keyPress: _keyPress,
        clear: _clear
    };
});