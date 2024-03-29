import type { AccountType, Sex } from '@/constants/enum';
import { ResultCode, StoreKey } from '@/constants/enum';
import type { EmailLoginParams } from '@/services/types';
import { emailLogin, getUserInfo, logout } from '@/services/user';
import { isElectron } from '@/utils/utils';
import { message } from 'antd';
import { defineModel, store } from 'foca';
import storejs from 'storejs';
import { history } from 'umi';
export interface User {
  accountType: AccountType;
  avatar: string;
  createDate: string;
  email: string;
  id: string;
  ip: string;
  sex: Sex;
  updateDate: string;
  username: string;
  token: string;
}
export interface UserStoreState {
  user: User | null;
}
const initialState: UserStoreState = {
  user: null,
};
export const userStore = defineModel('user', {
  initialState: initialState,
  events: {
    async onInit() {
      //await this.fetchUserInfo();
      console.log('init');
    },
  },
  effects: {
    async fetchUserInfo() {
      const result = await getUserInfo();
      if (result && result.code === ResultCode.Success) {
        this.setUser(result.data);
      } else {
        storejs.remove(StoreKey.Token);
        message.error(result?.msg ?? '用户信息已过期请重新登录');
        console.error('查询用户信息失败');
      }
      return result;
    },
    async emailLogin(params: EmailLoginParams) {
      const result = await emailLogin(params);
      if (result) {
        if (result.code === ResultCode.Success) {
          if (isElectron()) {
            return result.data;
          }
          message.success('登录成功');
          this.setUser(result.data);
          history.replace('/basic/home');
        } else {
          message.error({ content: result.msg, key: 'error', duration: 2 });
        }
      } else {
        console.error('查询用户信息失败');
        message.error({ content: '登录失败', key: 'error',duration:1000 });
      }
    },
    async logout() {
      const result = await logout();
      if (result && result.code === ResultCode.Success) {
        storejs.remove(StoreKey.Token);
        store.refresh();
        message.success('已退出登录');
      } else {
        console.error(result);
      }
    },
  },
  actions: {
    //设置用户
    setUser(state, user: User | null) {
      state.user = user;
      if (user) {
        storejs.set(StoreKey.Token, user.token);
      } else {
        storejs.remove(StoreKey.Token);
      }
    },
  },
  persist: {
    version: 1,
  },
});
