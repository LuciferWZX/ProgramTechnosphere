import { ReactComponent as FemaleAvatar } from '@/assets/svg/female-avatar.svg';
import { ReactComponent as MaleAvatar } from '@/assets/svg/male-avatar.svg';
import { ReactComponent as TwoDimensional } from '@/assets/svg/two-dimensional.svg';
import { PTButton } from '@/components';
import { Sex } from '@/constants/enum';
import { useTimer } from '@/hooks/useTimer';
import { userStore } from '@/stores/userStore';
import { isElectron } from '@/utils/utils';
import Icon, { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Avatar, Dropdown, Menu } from 'antd';
import { useLoading, useModel } from 'foca';
import type React from 'react';
import type { FC } from 'react';
import { history } from 'umi';

const UserAvatar: FC = () => {
  const user = useModel(userStore, (state) => state.user);
  const loading = useLoading(userStore.logout);
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
  const logout = async () => {
    await userStore.logout();
  };
  //渲染头像地址
  const renderAvatar = useMemoizedFn((): React.ReactNode => {
    if (user) {
      if (user.sex === Sex.Male) {
        return (
          <Icon className={'text-2xl leading-none'} component={MaleAvatar} />
        );
      }
      if (user.sex === Sex.Female) {
        return (
          <Icon className={'text-2xl leading-none'} component={FemaleAvatar} />
        );
      }
      return (
        <Icon className={'text-xl leading-none'} component={TwoDimensional} />
      );
    }
    return null;
  });
  const menu = (
    <Menu
      items={[
        {
          key: 'logout',
          danger: true,
          icon: <LogoutOutlined />,
          label: loading ? '正在退出' : '退出登录',
          disabled: loading,
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
          icon={renderAvatar()}
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
