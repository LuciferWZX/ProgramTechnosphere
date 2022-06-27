import { PTButton } from '@/components';
import { useTimer } from '@/hooks/useTimer';
import { userStore } from '@/stores/userStore';
import { SettingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useModel } from 'foca';
import type { FC } from 'react';

const UserAvatar: FC = () => {
  const user = useModel(userStore, (state) => state.user);
  const { time } = useTimer();
  const handleSetting = () => {
    console.log('点击了setting');
  };
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
        <PTButton icon={<SettingOutlined />} onClick={handleSetting} />
      </div>
    );
  }
  return (
    <div className={'flex space-x-1 items-center'}>
      <Avatar size={'small'} style={{ backgroundColor: '#1890ff' }}>
        请登录
      </Avatar>
      <PTButton icon={<SettingOutlined />} onClick={handleSetting} />
    </div>
  );
};
export default UserAvatar;
