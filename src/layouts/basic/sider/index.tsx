import SiderHeader from '@/layouts/basic/sider/sider-header';
import type { FC } from 'react';

const SiderBar: FC = () => {
  return (
    <div
      className={'w-0 xs:w-40 transition-width duration-200 ease-in-out shadow'}
    >
      <SiderHeader />
      <div>未完成侧边内容</div>
    </div>
  );
};
export default SiderBar;