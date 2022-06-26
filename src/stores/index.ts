import { systemStore } from '@/stores/systemStore';
import { userStore } from '@/stores/userStore';
import { hotUpdate, initSystemTheme } from '@/stores/utils';
import { engines, store } from 'foca';
import * as process from 'process';
initSystemTheme();
store.init({
  persist: [
    {
      key: `PT_${process.env.NODE_ENV}`,
      version: 1,
      engine: engines.localStorage,
      models: [systemStore, userStore],
    },
  ],
});
hotUpdate();
console.log('store初始化完成');
