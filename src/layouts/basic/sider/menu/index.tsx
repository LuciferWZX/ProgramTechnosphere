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
import React, { useEffect, useState } from "react";
import { history, useLocation } from 'umi';
import { userStore } from "@/stores/userStore";
type TMenuKey =
  | '/basic/home'
  | '/basic/socket'
  | '/basic/create'
  | '/basic/micro-apps';
interface IMenu {
  id: TMenuKey;
  name: string;
  icon: React.ReactNode;
  auth?:boolean
  isSelect?: boolean;
}
const Menu: FC = () => {
  const { isLogin } = useModel(userStore,state => ({
    isLogin:!!state.user
  }))
  const location = useLocation();
  const [menus,setMenu] = useState<IMenu[]>([
    { id: '/basic/home', name: '首页', icon: <HomeOutlined /> },
    { id: '/basic/micro-apps', name: '微应用', icon: <AppstoreAddOutlined /> },
    { id: '/basic/socket', name: 'Socket测试', icon: <DropboxOutlined /> },
    { id: '/basic/create', name: '创作中心',auth:true, icon: <CopyOutlined /> },
  ]);
  const isScroll = useModel(systemStore, (state) => state.siderScroll);
  const scrollClassName = (): string => {
    if (isScroll) {
      return 'px-0 justify-center';
    }
    return '';
  };
  //用户登录展示不同的路由
  useEffect(()=>{
    const defaultMenu:IMenu[]=[
      { id: '/basic/home', name: '首页', icon: <HomeOutlined /> },
      { id: '/basic/micro-apps', name: '微应用', icon: <AppstoreAddOutlined /> },
      { id: '/basic/socket', name: 'Socket测试', icon: <DropboxOutlined /> },
      { id: '/basic/create', name: '创作中心',auth:true, icon: <CopyOutlined /> },
    ]
    if(isLogin){
      setMenu(defaultMenu)
    }else{
      setMenu(defaultMenu.filter(menu=>!menu.auth))
    }
  },[isLogin])
  //点击路由
  const handleClickMenu = (route: TMenuKey) => {
    if (!location.pathname.includes(route)) {
      history.push(route);
    }
  };
  return (
    <div className={'p-2 space-y-2'}>
      {menus.map((menu) => {
        const isActive =  location.pathname.includes(menu.id);
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
