import { DButton, PTInput } from '@/components';
import { Space } from 'antd';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <div>
      <Space align={'center'}>
        <PTInput placeholder={'请输入'} />
        <DButton>查询</DButton>
      </Space>
    </div>
  );
};
export default Header;
