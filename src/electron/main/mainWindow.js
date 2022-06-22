const {app,BrowserWindow}=require('electron')
const path = require('path')
console.log(22,path.resolve(__dirname,"../preload/main-preload"))
const preload = path.resolve(__dirname,"../preload/main-preload.js")
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences:{
            preload:preload
        }
    })
    win.loadURL('http://127.0.0.1:8000').then()
    win.webContents.openDevTools()
}
module.exports = {
    createMainWindow:createWindow
}