//packages
const websocketServer = require('ws').Server;
const fs = require('fs');
const config = require('./config.json');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const ws = new websocketServer({server:http});
var clients = [];
var names = [];

//webserver
if (config.webserver){
  app.use('/',express.static(config.folder));
  app.listen(config.port);
}

//websocket
ws.mount(app);
ws.on('connection',function(f){
  ws.on('chat',function(e){
    clients.forEach(function(client) {
      client.send(message.utf8Data);
    });
  });
});
