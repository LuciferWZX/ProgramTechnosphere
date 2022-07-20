import type { ResType } from '@/constants/interface';
import request from '@/services/request';
import type { EmailLoginParams } from '@/services/types';
import type { User } from '@/stores/userStore';

//更具用户token获取用户信息
export const getUserInfo = async (): Promise<ResType<User> | undefined> => {
  return request('/user/fetch_user_info', {
    method: 'GET',
  });
};

//email登录方式
export const emailLogin = async (
  params: EmailLoginParams,
): Promise<ResType<User> | undefined> => {
  return request('/user/login_with_email', {
    method: 'POST',
    data: params,
  });
};
//退出登录
export const logout = async (): Promise<ResType<null> | undefined> => {
  return request('/user/logout', {
    method: 'POST',
  });
};
