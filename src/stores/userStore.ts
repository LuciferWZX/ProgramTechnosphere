import type { AccountType, Sex } from '@/constants/enum';
import { ResultCode } from '@/constants/enum';
import type { EmailLoginParams } from '@/services/types';
import { emailLogin, getUserInfo } from '@/services/user';
import { isElectron } from '@/utils/utils';
import { message } from 'antd';
import { defineModel } from 'foca';
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
    },
  },
  effects: {
    async fetchUserInfo() {
      const result = await getUserInfo();
      if (result && result.code === ResultCode.Success) {
        console.log(result.msg);
        this.setUser(result.data);
      } else {
        console.log('查询用户信息失败');
      }
    },
    async emailLogin(params: EmailLoginParams) {
      const result = await emailLogin(params);

      if (result) {
        if (result.code === ResultCode.Success) {
          console.log(result.msg);

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
        console.log('查询用户信息失败');
        message.error({ content: '登录失败', key: 'error' });
      }
    },
  },
  actions: {
    //设置用户
    setUser(state, user: User | null) {
      state.user = user;
    },
  },
  persist: {
    version: 1,
  },
});
