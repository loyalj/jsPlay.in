define(function (){
    var socket;
    var inMessages = null;
    
    //For Clients 
    var _connectSocket = function (url) {
        socket = io.connect(url);
        
        socket.on('disconnect', _disconnectSocket);
        socket.on('message', _messageIn);
    }

    // For Servers
    var _listenSocket = function (serverPort) {
        var io = require('socket.io').listen(serverPort);

        
        io.sockets.on('connection', _clientConnection);
        io.sockets.on('disconnect', _clientDisconnect);

        io.sockets.on('message', _messageIn);
    }
    
    var _disconnectSocket = function (data) {
        inMessages = null;
    }
    
    var _messageIn = function (data) {
        
        if(!inMessages) {
            inMessages = new Array();
        }
        
        inMessages.push(data);
    }

    var _clientConnection = function (socket) {
        console.log('clientConnect');
        console.log(socket);
    }

    var _clientDisconnect = function (socket) {
        console.log('clientDisconnect');
        inMessages = null;
    }
    
    var _messageOut = function (message) {
        socket.emit('message', message);
    }
    
    var _getMessages = function () {
        
        tempMessages = inMessages;
        inMessages = null;
        
        return tempMessages;
    }

    return{
        connect: _connectSocket,
        listen: _listenSocket,
        emit: _messageOut,
        getMessages: _getMessages
    };
});
