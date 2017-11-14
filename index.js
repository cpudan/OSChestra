var osc = require("osc");

var udpPort = new osc.UDPPort({
  localAddress: "127.0.0.1",
  localPort: 57121,

  // This is where sclang is listening for OSC messages.
  remoteAddress: "127.0.0.1",
  remotePort: 57120,
  metadata: true
});

udpPort.open();

// Every second, send an OSC message to SuperCollider

setInterval(function() {
  var msg = {
    address: "/hello/from/oscjs",
    args: [
      {
        type: "f",
        value: Math.random()
      },
      {
        type: "f",
        value: Math.random()
      }
    ]
  };

  console.log("Sending message", msg.address, msg.args, "to", udpPort.options.remoteAddress + ":" + udpPort.options.remotePort);
  udpPort.send(msg);
}, 1000);
