/**
 * @todo 判断是否是electron
 */
export function isElectron(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes(' electron/');
}
