var path = require("path");

var net = require('net');

var sockets = [];
//var hostIp=require('./js/ip_port')
var express = require("express"),
    app = require("express")(),
    http = require("http").Server(app),
    io = require("socket.io")(http),
    util = require("util"),
    fs = require("fs");


var HOST = '127.0.0.1'; //  var HOST = '192.168.0.91';
var PORT = 8081;

//var y = require('events').EventEmitter.prototype._maxListeners = 100;
var server = net.createServer();
server.listen(PORT, HOST);
var fs = require('fs');


http.listen(5400, function() {
    console.log("Connected to :5400");
});

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
