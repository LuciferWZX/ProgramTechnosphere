console.log("this is preload script")
const { contextBridge,app } = require('electron')
const path = require("path");
console.log(22,__dirname)
contextBridge.exposeInMainWorld('electron',{
    deskTop:true
})