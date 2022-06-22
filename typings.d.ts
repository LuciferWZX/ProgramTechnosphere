import 'umi/typings';
declare global {
    interface Window {
        electron: {
            deskTop:boolean
        }
    }
}
