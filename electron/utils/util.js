const { app } = require("electron");
/**
 * 使用户无法直接双开
 * @param mainWin  需要聚焦的窗口
 * @param additionalData 额外的一些数据
 */
const lockInstance = async (mainWin, additionalData) => {
  const gotTheLock = app.requestSingleInstanceLock(additionalData);
  if (!gotTheLock) {
    app.quit();
    return Promise.resolve(false);
  } else {
    app.on(
      "second-instance",
      (event, commandLine, workingDirectory, additionalData) => {
        // Print out data received from the second instance.
        console.log(additionalData);
        // Someone tried to run a second instance, we should focus our window.
        if (mainWin) {
          if (mainWin.isMinimized()) mainWin.restore();
          mainWin.focus();
        }
      }
    );
    return Promise.resolve(true);
  }
};
module.exports = {
  isDev: !app.isPackaged,
  isLockInstance: lockInstance,
};
