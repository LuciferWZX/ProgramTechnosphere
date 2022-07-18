import { PTButton } from '@/components';
import { useTimer } from '@/hooks/useTimer';
import { userStore } from '@/stores/userStore';
import { isElectron } from '@/utils/utils';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, message } from 'antd';
import { store, useModel } from 'foca';
import type { FC } from 'react';
import { history } from 'umi';

const UserAvatar: FC = () => {
  const user = useModel(userStore, (state) => state.user);
  const { time } = useTimer();
  const handleSetting = () => {
    console.log('点击了setting');
  };
  //如果是桌面端，打开窗口
  const openLoginWindow = () => {
    //桌面端
    if (isElectron()) {
      const { sendToMain } = window.electron;
      sendToMain('changeLoginWindow', {
        open: true,
      });
    } else {
      //web端
      history.push('/entry/login');
    }
  };
  //退出登录
  const logout = () => {
    //重置（用户）所有数据，其他的store需要设置skipRefresh: true
    store.refresh();
    message.success('已退出登录');
  };
  const menu = (
    <Menu
      items={[
        {
          key: 'logout',
          danger: true,
          icon: <LogoutOutlined />,
          label: '退出登录',
          onClick: logout,
        },
      ]}
    />
  );
  if (user) {
    return (
      <div className={'flex space-x-1 items-center'}>
        <Avatar
          size={'small'}
          style={{ backgroundColor: '#1890ff' }}
          src={user.avatar}
        />
        <div>
          <div className={'text-xs'}>你好，{user.username}</div>
          <div className={'text-xs'}>{time}</div>
        </div>
        <Dropdown trigger={['click']} overlay={menu}>
          <PTButton
            icon={
              <SettingOutlined
                className={'transition duration-500 hover:-rotate-90'}
              />
            }
            onClick={handleSetting}
          />
        </Dropdown>
      </div>
    );
  }
  return (
    <div className={'flex space-x-1 items-center'} onClick={openLoginWindow}>
      <Avatar
        className={'cursor-pointer'}
        size={'small'}
        style={{ backgroundColor: '#1890ff' }}
      >
        登
      </Avatar>
    </div>
  );
};
export default UserAvatar;
