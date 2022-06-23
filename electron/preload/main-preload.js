console.log("this is preload script");
const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("electron", {
  deskTop: true,
});
