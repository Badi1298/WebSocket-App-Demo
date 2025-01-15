const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
	onMessageFromPhone: (callback) => ipcRenderer.on('message-from-phone', (event, message) => callback(message)),
});
