import LoginForm from '@/pages/login/LoginForm';
import WindowLogin from '@/pages/login/window/WindowLogin';
import { isElectron } from '@/utils/utils';
import type { FC } from 'react';

// import { useMount } from "ahooks";

const LoginPage: FC = () => {
  // useMount(()=>{
  //   const {watchMain} = window.electron
  //
  // })
  if (isElectron()) {
    return <WindowLogin />;
  }
  return (
    <div className={'h-full w-full'}>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
