import type { FC } from 'react';
import { Outlet } from 'umi';

const Layout: FC = () => {
  return (
    <div
      className={
        'h-screen w-screen dark:bg-gray-900 dark:text-gray-100 box-border flex flex-col'
      }
    >
      <div className={'flex-1'}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
