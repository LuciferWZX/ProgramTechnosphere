import { isElectron } from '@/utils/utils';
import type { FC } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'umi';

const EntryLayout: FC = () => {
  /**
   * 加载到这里说明资源肯定加载完了，发送准备展示窗口
   */
  useEffect(() => {
    if (isElectron()) {
      const { sendToMain } = window.electron;
      sendToMain('ready-to-show', {
        window: 'login',
      });
    }
  }, []);
  return (
    <div className={'h-full w-full dark:bg-black'}>
      <Outlet />
    </div>
  );
};
export default EntryLayout;
