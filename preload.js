
const { contextBridge, ipcRenderer } = require('electron');
const path = require('path');
const { timetable } = require(path.join(__dirname, 'data.js'));

contextBridge.exposeInMainWorld('electronAPI', {
    ipcRenderer: ipcRenderer,
    timetable: timetable,
});

// You can also expose specific functions from ipcRenderer if needed,
// for example, if you only want to allow specific channels:
// contextBridge.exposeInMainWorld('electronAPI', {
//   send: (channel, data) => ipcRenderer.send(channel, data),
//   receive: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
// });