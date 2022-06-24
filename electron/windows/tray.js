const { Tray, nativeImage, Menu } = require("electron");
const { WINDOW_ICON } = require("../constants/constant");
const createTray = () => {
  const icon = nativeImage.createFromPath(WINDOW_ICON);

  let tray = new Tray(icon);
  const contextMenu = Menu.buildFromTemplate([
    { label: "功能1", click: () => {} },
    { label: "功能3", click: () => {} },
    { label: "是否开启xxx", type: "checkbox" },
    { label: "关于", type: "radio", role: "about" },
    {
      role: "help",
      label: "帮助",
      submenu: [
        {
          label: "如何使用electron",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal("https://electronjs.org");
          },
        },
      ],
    },
    { label: "退出程序", role: "quit" },
  ]);
  tray.setContextMenu(contextMenu);
  tray.setToolTip("这是程序员领域");
  tray.setTitle("程序圈");
  return tray;
};
module.exports = {
  createTray: createTray,
};
