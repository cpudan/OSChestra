var osc = require("osc"),
  http = require("http"),
  WebSocket = require("ws"),
  express = require("express");

// Create an Express server app
// // and serve up a directory of static files.
var app = express(),
  server = app.listen(8081);

app.use("/", express.static(__dirname));


// Listen for Web Socket requests.
var wss = new WebSocket.Server({
  server: server
});

// Listen for Web Socket connections.
wss.on("connection", function (socket) {
  var socketPort = new osc.WebSocketPort({
    socket: socket,
    metadata: true
  });

  var udpPort = new osc.UDPPort({
      // This is the port we're listening on.
      localAddress: "127.0.0.1",
      localPort: 8081,

      // This is where sclang is listening for OSC messages.
      remoteAddress: "127.0.0.1",
      remotePort: 57120,
      metadata: true
  });

  udpPort.open();

 
  socketPort.on("message", function (oscMsg) { 
    console.log(oscMsg);
    udpPort.send(oscMsg);
  });
});

