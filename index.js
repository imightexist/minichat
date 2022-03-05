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
ws.on('connection',function(f,err){
  if (err){
    throw err;
  }
  ws.on('username',function(e){
    names.push(e);
  });
  ws.on('chat',function(e){
    clients.forEach(function(client) {
      client.send(message.utf8Data);
    });
  });
});
