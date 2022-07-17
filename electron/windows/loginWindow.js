const { BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
const { isDev } = require('../utils/util');
const { DIST_PATH } = require('../constants/constant');

const preload = path.resolve(__dirname, '../preload/main-preload.js');
const createWindow = (parentWindow) => {
  const win = new BrowserWindow({
    width: 500,
    height: 400,
    parent: parentWindow,
    modal: true,
    // skipTaskbar:true,
    // resizable:false,
    // minimizable:false,
    // maximizable:false,
    title: '登录',
    webPreferences: {
      preload: preload,
    },
  });
  if (isDev) {
    win.loadURL('http://127.0.0.1:8000/#/entry/login').then();
  } else {
    //const urlPath = path.resolve(__dirname, "../../dist/index.html");
    const URL = url.format({
      pathname: DIST_PATH,
      protocol: 'file:',
      slashes: true,
      hash: '#/entry/login',
    });
    win.loadURL(URL).then();
  }
  win.webContents.openDevTools();
  return win;
};
module.exports = {
  createLoginWindow: createWindow,
};
