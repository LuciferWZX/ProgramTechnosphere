import { StoreKey } from '@/constants/enum';
import { defineModel } from 'foca';
import store from 'storejs';
export enum SystemTheme {
  Dark = 'dark',
  Light = 'light',
}
export interface ISystemStoreState {
  theme: SystemTheme;
  siderScroll: boolean;
}

const initialState: ISystemStoreState = {
  theme:
    store.get(StoreKey.Theme) === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? SystemTheme.Dark
      : SystemTheme.Light,
  siderScroll: false,
};
export const systemStore = defineModel('system', {
  initialState: initialState,
  events: {
    onInit() {
      console.log('系统初始化:当前Theme:', this.state.theme);
    },
  },
  actions: {
    //更新是否收起
    updateSiderScroll(state, isScroll?: boolean) {
      state.siderScroll = isScroll ?? !state.siderScroll;
    },
    switchTheme(state, theme: SystemTheme) {
      state.theme = theme;
    },
  },
  persist: {
    version: 1,
  },
  skipRefresh: true,
});
