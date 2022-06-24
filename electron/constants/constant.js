const path = require("path");
module.exports = {
  DIST_PATH: path.resolve(__dirname, "../../dist/index.html"),
  WINDOW_ICON: path.resolve(__dirname, "../../dist/assets/png/favicon.png"),
  DOCK_ICON: path.resolve(
    __dirname,
    "../../dist/assets/png/dockIcon_light.png"
  ),
};
