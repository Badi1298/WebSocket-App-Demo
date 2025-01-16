<template>
	<main class="container">
		<h1>Messages from Phone</h1>
		<div id="messages">{{ messageFromPhone ? messageFromPhone : 'No messages yet...' }}</div>
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
}
</style>