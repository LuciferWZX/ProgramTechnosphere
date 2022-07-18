import LoginForm from '@/pages/login/LoginForm';
import LoginWindowHeader from '@/pages/login/window/LoginWindowHeader';
import type { FC } from 'react';

export const WindowLogin: FC = () => {
  return (
    <div className={'h-full flex flex-col dark:bg-amber-300'}>
      <LoginWindowHeader />
      <div className={'flex-1'}>
        <LoginForm />
      </div>
    </div>
  );
};
export default WindowLogin;
