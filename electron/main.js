const { app, BrowserWindow } = require("electron");
const { createMainWindow } = require("./windows/mainWindow");
const { createTray } = require("./windows/tray");
const { isLockInstance } = require("./utils/util");
let mainWin = null; //主窗口
let tray = null; //window下的托盘，mac上的任务栏

isLockInstance(mainWin).then((isLocked) => {
  if (isLocked) {
    initApp();
  }
});
const initApp = () => {
  app.whenReady().then(() => {
    mainWin = createMainWindow();
    tray = createTray();
    console.log(111, app.getVersion());
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
  });
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
};
