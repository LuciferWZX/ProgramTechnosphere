import { userStore } from '@/stores/userStore';
import { defineModel } from 'foca';
import { io, Socket } from 'socket.io-client';
export interface ISocketStoreState {
  socket: Socket | null;
}

const initialState: ISocketStoreState = {
  socket: null,
};
export const socketStore = defineModel('socket', {
  initialState: initialState,
  events: {
    onInit() {},
  },
  actions: {
    connect(state) {
      if (state.socket === null) {
        console.log('连接');
        const socket = io('ws://127.0.0.1:3000', {
          path: '/socket',
          transports: ['websocket'],
          auth: {
            token: userStore.state.user?.token,
          },
        });
        socket.on("connect",socketStore.socketConnect)
        socket.on("disconnect",socketStore.socketDisconnect)
        socket.on("connect_error",socketStore.socketConnectError)
        socket.on('enter', socketStore.socketEnter);
        state.socket = socket;
      }
    },
    disconnect(state){
      if(state.socket!==null){
        state.socket.disconnect()
        state.socket.close()
        state.socket = null
      }
    }
  },
  effects: {
    //连接
    socketConnect(){
      console.info("客户端连接成功：",this.state.socket?.id)
    },
    //断开连接
    socketDisconnect(){
      console.info("客户端已断开连接：")
    },
    //连接错误
    socketConnectError(){
      console.info("客户端连接错误：")
    },
    socketEnter(data: any) {
      console.log('已经进入了：', data);
    },
  },
  persist: {
    version: 1,
  },
  skipRefresh: true,
});
