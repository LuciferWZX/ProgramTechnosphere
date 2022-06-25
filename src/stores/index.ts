import { userStore } from '@/stores/userStore';
import { hotUpdate } from '@/stores/utils';
import { engines, store } from 'foca';
import * as process from 'process';

store.init({
  persist: [
    {
      key: `PT_${process.env.NODE_ENV}`,
      version: 1,
      engine: engines.localStorage,
      models: [userStore],
    },
  ],
});
hotUpdate();
console.log('store初始化完成');
