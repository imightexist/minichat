//packages
const websocketServer = require('ws').WebsocketServer;
const fs = require('fs');
const config = require('./config.json');
const ws = new websocketServer({port:config.port});
const express = require('express');
const app = express();
var clients = [];

//webserver
if (config.webserver){
  app.use('/',express.static(config.folder));
  app.listen(config.port);
}

//websocket
ws.on('connection',function(f){
  ws.on('chat',function(e){
    clients.forEach(function(client) {
      client.send(message.utf8Data);
    });
  });
});
