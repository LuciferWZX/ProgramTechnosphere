import { StoreKey } from '@/constants/enum';
import '@/stores';
import { userStore } from '@/stores/userStore';
import { FocaProvider } from 'foca';
import React from 'react';
import store from 'storejs';
//配置额外的provider包裹
export const rootContainer = (container: any) => {
  return React.createElement(FocaProvider, null, container);
};

export async function render(oldRender: any) {
  // fetch('/api/auth').then(auth => {
  //   if (auth.isLogin) { oldRender() }
  //   else {
  //     location.href = '/login';
  //     oldRender()
  //   }
  // });
  //userStore.setUser({username:'xxx'})
  const token = store.get(StoreKey.Token);
  if (token) {
    await userStore.fetchUserInfo();
  }
  oldRender();
}
