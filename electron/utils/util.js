const { app } = require("electron");

module.exports = {
  isDev: !app.isPackaged,
};
