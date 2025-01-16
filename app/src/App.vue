<template>
	<main class="container">
		<h1 class="title">Messages from Phone</h1>
		<div class="messages">{{ messageFromPhone ? messageFromPhone : 'No messages yet...' }}</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';

const messageFromPhone = ref('');

window.electronAPI.onMessageFromPhone((message) => {
	messageFromPhone.value = message;
});
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-family: 'Courier New', Courier, monospace;
}

.title {
	font-size: 3rem;
}

.messages {
	margin-top: 20px;
	font-size: 1.5rem;
}
</style>