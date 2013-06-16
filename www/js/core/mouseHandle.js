define(function (){
    
    var _x = 0;
    var _y = 0;
    var _mouseDown = false;
    var _clickX = null;
    var _clickY = null;
    var _dblClickX = null;
    var _dblClickY = null;
   
    var _clear = function () {
        _mouseDown = false;
        _clickX = null;
        _clickY = null;
        _dblClickX = null;
        _dblClickY = null;
    };
    
    var _getX = function() {
        return _x;
    };
    
    var _setX = function(x) {
        _x = x;
    };
    
     var _getY = function() {
        return _y;
    };
    
    var _setY = function(y) {
        _y = y;
    };
    
    var _getClickX = function() {
        return _clickX;
    };
    
    var _setClickX = function(clickX) {
        _clickX = clickX;
    };
    
    var _getClickY = function() {
        return _clickY;
    };
    
    var _setClickY = function(clickY) {
        _clickY = clickY;
    };
    
    var _setClickXY = function(clickX, clickY) {
        _clickX = clickX;
        _clickY = clickY;
    };
    
    var _getMousedown = function() {
        return _mouseDown;
    };
    
    var _setMousedown = function(mouseDown){
        _mouseDown = mouseDown;
    };
   
    return{
        getX: _getX,
        setX: _setX,
        getY: _getY,
        setY: _setY,
        
        getClickX: _getClickX,
        setClickX: _setClickX,
        getClickY: _getClickY,
        setClickY: _setClickY,
        setClickXY: _setClickXY,
        
        getMousedown: _getMousedown,
        setMousedown: _setMousedown,
        
        dblClickX: _dblClickX,
        dblClickY: _dblClickY,
        clear: _clear
    };
});