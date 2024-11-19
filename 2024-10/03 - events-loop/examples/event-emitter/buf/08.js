// const EventEmitter = require('events')

const express = require('express')
const app = express()

// client - event.emit('route1', payload)

app.get('route1', handler1) // event.on
app.get('route2', handler2) // event.on
app.get('route3', handler3) // event.on

// webhooks - шлют все события на один роуте


var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});


// express <- http модуля node.js <- tcp модуля node.js <- event emitter
