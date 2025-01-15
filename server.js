const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server running on ws://localhost:8080');

server.on('connection', (socket) => {
	console.log('Client connected');
	socket.on('message', (message) => {
		const text = message.toString();
		console.log('Received:', text);
	});

	// Send a message to the client
	socket.send('Hello from MacBook!');
});
