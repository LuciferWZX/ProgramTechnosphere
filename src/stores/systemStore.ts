import { StoreKey } from '@/constants/enum';
import { defineModel } from 'foca';
import store from 'storejs';
export enum SystemTheme {
  Dark = 'dark',
  Light = 'light',
}
export interface SystemStoreState {
  theme: SystemTheme;
}

const initialState: SystemStoreState = {
  theme:
    store.get(StoreKey.Theme) === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? SystemTheme.Dark
      : SystemTheme.Light,
};
export const systemStore = defineModel('system', {
  initialState: initialState,
  events: {
    onInit() {
      console.log('系统初始化:当前Theme:', this.state.theme);
    },
  },
  persist: {
    version: 1,
  },
});
