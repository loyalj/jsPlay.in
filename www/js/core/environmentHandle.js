var _gEnv_ = this;

define(function (){
    
    var environment = _gEnv_;
   
    
    var _isBrowser = function () {
        
        var isBrowser = false;
        if(!_isNode()) {
            isBrowser = true;
        }
    
        return isBrowser;
    };

    var _isNode = function () {

        var isNode = false;
        if(typeof module !== 'undefined') {
            isNode = true;
        }

        return isNode;
    };
    
    return{
        isBrowser: _isBrowser,
        isNode: _isNode
    };
});
