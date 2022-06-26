import SiderBar from '@/layouts/basic/sider';
import type { FC } from 'react';
import { Outlet } from 'umi';

const BasicLayout: FC = () => {
  return (
    <div className={'h-full w-full flex'}>
      <SiderBar />
      <div className={'flex flex-col flex-1 dark:bg-gray-800'}>
        <div className={'h-10'}>basic content header</div>
        <div className={'flex-1 px-4'}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default BasicLayout;
