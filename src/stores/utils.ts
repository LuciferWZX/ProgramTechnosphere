import { StoreKey } from '@/constants/enum';
import store from 'storejs';
export const hotUpdate = () => {
  // @ts-ignore
  if (import.meta.hot) {
    // @ts-ignore
    import.meta.hot.accept(() => {
      console.log('热更新: store');
    });
  }
};

//获取系统的主题是dark还是light
export const initSystemTheme = (): void => {
  const localTheme: 'dark' | 'light' | undefined = store.get(StoreKey.Theme);
  if (
    localTheme === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
