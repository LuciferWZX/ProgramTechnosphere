const { app, BrowserWindow } = require("electron");
const { createMainWindow } = require("./windows/mainWindow");

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});
