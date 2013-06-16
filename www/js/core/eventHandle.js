define(['core/mouseHandle', 'core/keyboardHandle'], function(mouseHandle, keyboardHandle) {
    
    var _attachMouseHandlers = function (targetObject){
        targetObject.addEventListener('click', _processMouseClick, true);
        targetObject.addEventListener('dblclick', _processMouseDblClick, true);  
        targetObject.addEventListener('mousemove', _processMouseMove, true); 
        targetObject.addEventListener('mousedown', _processMouseDown, true);
        targetObject.addEventListener('mouseup', _processMouseUp, true);
        
    };
    
    var _processMouseDown = function(event){
      // Handle mouse down
      mouseHandle.setMousedown(true);
    };
    
    var _processMouseUp = function(event){
       //Handle mouse up.
       mouseHandle.setMousedown(false);
    };
    
    var _processMouseMove = function(event){
        // Handle mouse move event
        // Register the mouse's location in the game engine's mouse handle.
        mouseHandle.setX(event.clientX - this.offsetLeft);
        mouseHandle.setY(event.clientY - this.offsetTop);
    };
    
    var _processMouseClick = function(event){
        // Click handle code goes here.
        // Register the mouse's location in the game engine's mouse handle.
        mouseHandle.setClickXY(event.clientX - this.offsetLeft, event.clientY - this.offsetTop);
    };
    
    var _processMouseDblClick = function(event){
        // Click handle code goes here.
        // Register the mouse's location in the game engine's mouse handle.
        mouseHandle['dblClickX'] = event.clientX - this.offsetLeft;
        mouseHandle['dblClickY'] = event.clientY - this.offsetTop;
    };
    
    
    
    //Event handlers for the keyboard functions applied to the canvas.
    var _attachKeyHandlers = function(targetObject){
        // Attach the key handlers to the canvas
        targetObject.addEventListener('keydown', processKeyDown, true);
        targetObject.addEventListener('keyup', processKeyUp, true);
        targetObject.addEventListener('keypress', processKeyPress, true);
    };
    
    var processKeyDown = function(event){
        
        // Handle key down event.
        event.preventDefault();  //Stops the browser from using keys; Spacebar don't scroll no more.
        
        keyboardHandle.keyDown(event.keyCode);
    };
    
    var processKeyUp = function (event){
        // Handle the key up event
        keyboardHandle.keyUp(event.keyCode);
    };
    
    
    var processKeyPress = function (event){
        // Handle the key up event
        keyboardHandle.keyPress(event.keyCode);
    };
    
    
    return {
        mouse: mouseHandle,
        attachMouse: _attachMouseHandlers,
        keyboard: keyboardHandle,
        attachKeyboard: _attachKeyHandlers
    };
});
