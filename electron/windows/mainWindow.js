const { BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const { isDev } = require("../utils/util");

const preload = path.resolve(__dirname, "../preload/main-preload.js");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: preload,
    },
  });
  if (isDev) {
    win.loadURL("http://127.0.0.1:8000").then();
  } else {
    const urlPath = path.resolve(__dirname, "../../dist/index.html");
    const URL = url.format({
      pathname: urlPath,
      protocol: "file:",
      slashes: true,
    });
    win.loadURL(URL).then();
  }

  win.webContents.openDevTools();
};
module.exports = {
  createMainWindow: createWindow,
};
