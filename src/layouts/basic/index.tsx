import ContentHeader from '@/layouts/basic/content-header';
import SiderBar from '@/layouts/basic/sider';
import { userStore } from '@/stores/userStore';
import { isElectron } from '@/utils/utils';
import { useMount, useUnmount } from 'ahooks';
import { message } from 'antd';
import type { FC } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'umi';

const BasicLayout: FC = () => {
  /**
   * 加载到这里说明资源肯定加载完了，发送准备展示窗口
   */
  useEffect(() => {
    if (isElectron()) {
      const { sendToMain } = window.electron;
      sendToMain('ready-to-show', {
        window: 'main',
      });
    }
  }, []);
  useMount(() => {
    if (isElectron()) {
      const { watchMain } = window.electron;
      watchMain('login-success', (_, user) => {
        message.success('登录成功');
        userStore.setUser(user);
      });
    }
  });
  useUnmount(() => {
    if (isElectron()) {
      const { removeWatchMain } = window.electron;
      removeWatchMain('login-success');
    }
  });
  return (
    <div className={'h-full w-full flex overflow-hidden'}>
      <SiderBar />
      <div className={'flex flex-col flex-1 dark:bg-black'}>
        <ContentHeader />
        <div className={'flex-1 px-4 box-border overflow-auto'}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default BasicLayout;
