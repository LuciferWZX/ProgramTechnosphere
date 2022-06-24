const { BrowserWindow, app, nativeImage } = require("electron");
const url = require("url");
const path = require("path");
const { isDev } = require("../utils/util");
const { DIST_PATH, WINDOW_ICON, DOCK_ICON } = require("../constants/constant");

const preload = path.resolve(__dirname, "../preload/main-preload.js");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    icon: WINDOW_ICON,
    webPreferences: {
      preload: preload,
    },
  });
  if (process.platform === "darwin") {
    const icon = nativeImage.createFromPath(DOCK_ICON);
    app.dock.setIcon(icon);
  }
  if (isDev) {
    win.loadURL("http://127.0.0.1:8000").then();
  } else {
    //const urlPath = path.resolve(__dirname, "../../dist/index.html");
    const URL = url.format({
      pathname: DIST_PATH,
      protocol: "file:",
      slashes: true,
    });
    win.loadURL(URL).then();
  }
  win.webContents.openDevTools();
  return win;
};
module.exports = {
  createMainWindow: createWindow,
};
