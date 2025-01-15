<template>
	<h1>Messages from Phone</h1>
	<div id="messages">{{ messageFromPhone ? messageFromPhone : 'No messages yet...' }}</div>
</template>

<script setup>
import { ref } from 'vue';

const messageFromPhone = ref('');

window.electronAPI.onMessageFromPhone((message) => {
	messageFromPhone.value = message;
});
</script>
