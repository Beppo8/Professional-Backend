const io = require('socket.io-client');

let socket = io.connect('http://localhost:300', {reconnect:true});

socket.on('connect',function(){
    console.log("\n\nSocket connected from Nodejs\n\n")
})

module.exports = socket;