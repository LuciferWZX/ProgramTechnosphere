import { PTButton } from '@/components';
import UserAvatar from '@/layouts/basic/content-header/user-avatar';
import { systemStore } from '@/stores/systemStore';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useModel } from 'foca';
import type { FC } from 'react';

const ContentHeader: FC = () => {
  const isScroll = useModel(systemStore, (state) => state.siderScroll);
  const handleExpand = () => {
    systemStore.updateSiderScroll();
  };
  return (
    <div
      className={
        'h-10 px-2 dark:bg-gray-darkHeader flex items-center justify-between shadow'
      }
    >
      <PTButton
        icon={isScroll ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleExpand}
      />
      <UserAvatar />
    </div>
  );
};
export default ContentHeader;
