import 'umi/typings';
declare global {
  interface Window {
    electron: {
      deskTop: boolean;
      sendToMain: (
        channel: string,
        data?: any,
        response?: (res?: any) => void,
      ) => void;
      watchMain: (
        channel: string,
        listener?: (event?: any, ...arg: any) => void,
      ) => void;
      removeWatchMain: (channel: string) => void;
    };
  }
}
