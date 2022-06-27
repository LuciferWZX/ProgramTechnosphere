const { app, BrowserWindow } = require('electron');
const { createMainWindow } = require('./windows/mainWindow');
const { createTray } = require('./windows/tray');
const { isLockInstance } = require('./utils/util');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; //屏蔽安全告警
let mainWin = null; //主窗口
let tray = null; //window下的托盘，mac上的任务栏

//防止多开窗口
isLockInstance(mainWin).then((isLocked) => {
  if (isLocked) {
    initApp();
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
