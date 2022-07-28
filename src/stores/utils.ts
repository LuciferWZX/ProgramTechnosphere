import { StoreKey } from '@/constants/enum';
import { systemStore, SystemTheme } from '@/stores/systemStore';
import { createLogger } from 'redux-logger';
import store from 'storejs';
//配置热更新
export const hotUpdate = () => {
  // @ts-ignore
  if (import.meta.hot) {
    // @ts-ignore
    import.meta.hot.accept(() => {
      console.log('热更新: store');
    });
  }
};

//初始化系统的主题是dark还是light，并且监听
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
  const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  darkTheme.addEventListener('change', (e) => {
    const currentTheme: 'dark' | 'light' | undefined = store.get(
      StoreKey.Theme,
    );
    if (!currentTheme) {
      //说明是按照系统进行的
      if (e.matches) {
        //匹配到黑暗模式
        console.log('系统主题：dark');
        if (currentTheme !== 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('data-color-mode', 'dark')
          systemStore.switchTheme(SystemTheme.Dark);
        }
      } else {
        console.log('系统主题：light');
        document.documentElement.classList.remove('dark');
        document.documentElement.removeAttribute('data-color-mode')
        systemStore.switchTheme(SystemTheme.Light);
      }
    }
  });
};
//初始化redux-logger
export const initReduxLogger = () => {
  return createLogger({
    collapsed: true,
    diff: true,
    duration: true,
    logErrors: true,
  });
};
