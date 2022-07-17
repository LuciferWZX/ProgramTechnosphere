import type { AccountType, Sex } from '@/constants/enum';
import { ResultCode } from '@/constants/enum';
import { getUserInfo } from '@/services/user';
import { defineModel } from 'foca';

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
