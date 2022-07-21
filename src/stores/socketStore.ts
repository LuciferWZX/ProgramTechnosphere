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
      console.log('连接');
      if (state.socket === null) {
        const socket = io('ws://127.0.0.1:3000', {
          path: '/socket',
          transports: ['websocket'],
          auth: {
            token: userStore.state.user?.token,
          },
        });
        socket.on('enter', socketStore.enter);
        state.socket = socket;
      }
    },
  },
  effects: {
    enter(data: any) {
      console.log('已经进入了：', data);
    },
  },
  persist: {
    version: 1,
  },
  skipRefresh: true,
});
