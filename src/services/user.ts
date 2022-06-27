import type { ResType } from '@/constants/interface';
import request from '@/services/request';
import type { User } from '@/stores/userStore';

//更具用户token获取用户信息
export const getUserInfo = async (): Promise<ResType<User> | undefined> => {
  return request('/user/queryUser', {
    method: 'POST',
  });
};
