import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
	const [message, setMessage] = useState('');
	const [receivedMessage, setReceivedMessage] = useState('');
	const [ws, setWs] = useState(null);

	useEffect(() => {
		// Replace with your server's IP and port
		const socket = new WebSocket('ws://192.168.58.117:8080');

		socket.onopen = () => {
			console.log('Connected to WebSocket server');
		};

		socket.onmessage = (event) => {
			setReceivedMessage(event.data);
		};

		socket.onerror = (error) => {
			console.error('WebSocket error:', error);
		};

		socket.onclose = () => {
			console.log('WebSocket connection closed');
		};

		setWs(socket);

		return () => {
			socket.close();
		};
	}, []);

	const sendMessage = () => {
		if (ws && message) {
			ws.send(message);
			setMessage('');
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>React Native WebSocket App</Text>
			<TextInput
				style={styles.input}
				placeholder="Type a message"
				value={message}
				onChangeText={setMessage}
			/>
			<Button
				title="Send Message"
				onPress={sendMessage}
			/>
			<Text style={styles.receivedMessage}>Server says: {receivedMessage || 'No messages yet'}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	input: {
		width: '100%',
		padding: 8,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
		marginBottom: 10,
	},
	receivedMessage: {
		marginTop: 20,
		fontSize: 18,
	},
});
