import { PTButton } from '@/components';
import UserAvatar from '@/layouts/basic/content-header/user-avatar';
import { MenuFoldOutlined } from '@ant-design/icons';
import type { FC } from 'react';

const ContentHeader: FC = () => {
  const handleExpand = () => {
    console.log('处理展开和收起状态');
  };
  return (
    <div
      className={
        'h-10 px-2 dark:bg-gray-900 flex items-center justify-between shadow'
      }
    >
      <PTButton icon={<MenuFoldOutlined />} onClick={handleExpand} />
      <UserAvatar />
    </div>
  );
};
export default ContentHeader;
