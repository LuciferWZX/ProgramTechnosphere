import { PTButton } from '@/components';
import { systemStore } from '@/stores/systemStore';
import {
  AppstoreAddOutlined,
  CopyOutlined,
  DropboxOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useModel } from 'foca';
import type { FC } from 'react';
import React, { useState } from 'react';
import { history, useLocation } from 'umi';
type TMenuKey =
  | '/basic/home'
  | '/basic/socket'
  | '/basic/create'
  | '/basic/micro-apps';
interface IMenu {
  id: TMenuKey;
  name: string;
  icon: React.ReactNode;
  isSelect?: boolean;
}
const Menu: FC = () => {
  const location = useLocation();
  const [menus] = useState<IMenu[]>([
    { id: '/basic/home', name: '首页', icon: <HomeOutlined /> },
    { id: '/basic/micro-apps', name: '微应用', icon: <AppstoreAddOutlined /> },
    { id: '/basic/socket', name: 'Socket测试', icon: <DropboxOutlined /> },
    { id: '/basic/create', name: '创作中心', icon: <CopyOutlined /> },
  ]);
  const isScroll = useModel(systemStore, (state) => state.siderScroll);
  const scrollClassName = (): string => {
    if (isScroll) {
      return 'px-0 justify-center';
    }
    return '';
  };
  //点击路由
  const handleClickMenu = (route: TMenuKey) => {
    if (location.pathname !== route) {
      history.push(route);
    }
  };
  return (
    <div className={'p-2 space-y-2'}>
      {menus.map((menu) => {
        const isActive = location.pathname === menu.id;
        return (
          <Tooltip
            key={menu.id}
            color={'#2563EB'}
            placement={'right'}
            title={isScroll ? menu.name : ''}
          >
            <PTButton
              onClick={() => handleClickMenu(menu.id)}
              className={scrollClassName()}
              type={isActive ? 'primary' : 'default'}
              block={true}
              icon={menu.icon}
            >
              {!isScroll && menu.name}
            </PTButton>
          </Tooltip>
        );
      })}
    </div>
  );
};
export default Menu;
