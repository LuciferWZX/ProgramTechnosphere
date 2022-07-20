import { systemStore } from '@/stores/systemStore';
import { hotUpdate, initReduxLogger, initSystemTheme } from '@/stores/utils';
import { engines, Middleware, store } from 'foca';
import * as process from 'process';

const middleware: Middleware[] = [];
initSystemTheme();
if (process.env.NODE_ENV !== 'production') {
  middleware.push(initReduxLogger());
}
store.init({
  middleware: middleware,
  persist: [
    {
      key: `PT_${process.env.NODE_ENV}`,
      version: 1,
      engine: engines.localStorage,
      models: [systemStore],
    },
  ],
});
hotUpdate();
console.log('store初始化完成');
