import Menu from '@/layouts/basic/sider/menu';
import SiderHeader from '@/layouts/basic/sider/sider-header';
import type { FC } from 'react';

const SiderBar: FC = () => {
  return (
    <div
      className={
        'w-0 xs:w-40 transition-width duration-200 ease-in-out shadow overflow-ellipsis overflow-hidden'
      }
    >
      <div className={'w-40'}>
        <SiderHeader />
        <Menu />
      </div>
    </div>
  );
};
export default SiderBar;
