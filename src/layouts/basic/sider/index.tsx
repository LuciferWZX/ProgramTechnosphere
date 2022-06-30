import Menu from '@/layouts/basic/sider/menu';
import SiderHeader from '@/layouts/basic/sider/sider-header';
import { systemStore } from '@/stores/systemStore';
import { useModel } from 'foca';
import type { FC } from 'react';

const SiderBar: FC = () => {
  const isScroll = useModel(systemStore, (state) => state.siderScroll);
  const renderIsScroll = (): string => {
    if (isScroll) {
      return 'xs:w-12';
    }
    return 'xs:w-40';
  };
  return (
    <div
      className={`
                dark:bg-gray-darkSider w-0  transition-width duration-200 ease-in-out shadow overflow-ellipsis overflow-hidden
                ${renderIsScroll()}
            `}
    >
      <div className={`w-40 ${renderIsScroll()}`}>
        <SiderHeader />
        <Menu />
      </div>
    </div>
  );
};
export default SiderBar;
