console.log('this is preload script');
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electron', {
  deskTop: true,
  /**
   * 发送消息到主进程
   * @param channel
   * @param data
   * @param response
   */
  sendToMain: async (channel, data, response) => {
    const result = await ipcRenderer.invoke(channel, data);
    response?.(result); //处理主进程返回的结果
  },
  /**
   * 渲染进程监听
   * @param channel
   * @param listener
   */
  watchMain: (channel, listener) => {
    ipcRenderer.on(channel, listener);
  },
  /**
   * 移除该频道的所有监听
   * @param channel
   */
  removeWatchMain: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  },
});
// // 主进程
// ipcMain.handle('some-name', async (event, someArgument) => {
//   const result = await doSomeWork(someArgument)
//   return result
// })
