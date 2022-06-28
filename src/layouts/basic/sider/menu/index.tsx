import { PTButton } from '@/components';
import { HomeOutlined } from '@ant-design/icons';
import type { FC } from 'react';

const Menu: FC = () => {
  return (
    <div className={'p-2 dark:bg-gray-900 space-y-2'}>
      <PTButton block={true} icon={<HomeOutlined />}>
        首页
      </PTButton>
      <PTButton block={true}>首页2</PTButton>
      <PTButton block={true}>首页3</PTButton>
    </div>
  );
};
export default Menu;
