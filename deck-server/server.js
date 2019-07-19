var express = require('express');
var http = require('http');
var socket = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socket(server);

var players = [];

app.get('/', function (req, res) {
	res.send(players);
});

server.listen(5000, function () {
	console.log('Starting server on port 5000.')
});

io.on('connection', function (socket) {
    console.log('connected' + socket);
    
	socket.on('new', function (playerId) {
		players[socket.id] = { id: playerId };
		console.log('New Player : ' + playerId);
	});
});
