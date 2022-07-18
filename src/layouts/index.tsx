import { systemStore, SystemTheme } from '@/stores/systemStore';
import { ConfigProvider } from 'antd';
import { useModel } from 'foca';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Outlet } from 'umi';

const Layout: FC = () => {
  const theme = useModel(systemStore, (state) => state.theme);
  const [prefix, setPrefix] = useState('custom-default');
  useEffect(() => {
    setPrefix(theme === SystemTheme.Light ? 'custom-default' : 'custom-dark');
  }, [theme]);

  // console.log(123,status);
  console.log(prefix);
  return (
    <ConfigProvider prefixCls={prefix}>
      <div
        className={
          'h-screen w-screen dark:bg-gray-900 dark:text-gray-100 box-border flex flex-col'
        }
      >
        <Outlet />
      </div>
    </ConfigProvider>
  );
};

export default Layout;
