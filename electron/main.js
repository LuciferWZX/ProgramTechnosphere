const { app, BrowserWindow, ipcMain } = require('electron');
const { createMainWindow } = require('./windows/mainWindow');
const { createTray } = require('./windows/tray');
const { isLockInstance } = require('./utils/util');
const { createLoginWindow } = require('./windows/loginWindow');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; //屏蔽安全告警
let mainWin = null; //主窗口
let loginWin = null; //登录的窗口
let tray = null; //window下的托盘，mac上的任务栏

//防止多开窗口
isLockInstance(mainWin).then((isLocked) => {
  if (isLocked) {
    initApp();
    ipcListeners();
  }
});
console.log('当前版本', app.getVersion());
const initApp = () => {
  app.whenReady().then(() => {
    mainWin = createMainWindow();
    tray = createTray();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
  });
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
};
const loginWindowEvent = () => {
  loginWin.on('close', () => {
    loginWin = null;
  });
};
const ipcListeners = () => {
  ipcMain.handle('changeLoginWindow', async (event, data) => {
    const { open } = data;
    if (open) {
      if (mainWin) {
        if (loginWin === null) {
          console.log('mainWin:');
          loginWin = createLoginWindow(mainWin);
          loginWindowEvent();
        }
      }
    } else {
      if (loginWin) {
        loginWin.close();
      }
    }
  });
};
