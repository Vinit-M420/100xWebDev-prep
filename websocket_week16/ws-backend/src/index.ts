import WebSocket = require("ws");

const wss = new WebSocket.WebSocketServer({port: 8080});

// event handler
wss.on("connection", function(socket){
    console.log("user connected");
    // setInterval(() => {
    //     socket.send("Current price of Eth " + Math.random());
    // }, 5000)


    socket.on("message", (e) => {
        if(e.toString() === 'ping'){
            // console.log(e.toString());
            socket.send("pong");
        }
    })
})