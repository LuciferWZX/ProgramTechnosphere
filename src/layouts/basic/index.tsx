import ContentHeader from '@/layouts/basic/content-header';
import SiderBar from '@/layouts/basic/sider';
import type { FC } from 'react';
import { Outlet } from 'umi';

const BasicLayout: FC = () => {
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
