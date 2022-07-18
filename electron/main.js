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
    mainWindowEvent();
    tray = createTray();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
  });
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
};
const mainWindowEvent = () => {
  //该方法还是又白屏
  // mainWin.once('ready-to-show', () => {
  //   mainWin.show()
  // });
};
const loginWindowEvent = () => {
  loginWin.on('close', () => {
    loginWin = null;
  });
  //该方法还是又白屏
  // loginWin.once('ready-to-show', () => {
  //   loginWin.show()
  // });
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
  ipcMain.handle('ready-to-show', async (event, data) => {
    const { window } = data;
    if (window === 'main' && mainWin) {
      mainWin.show();
    }
    if (window === 'login' && loginWin) {
      loginWin.show();
    }
  });
  ipcMain.handle('login-success', async (event, user) => {
    //将登录成功的数据转发到渲染进程
    mainWin.webContents.send('login-success', user);
  });
};
