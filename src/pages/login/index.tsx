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
  return <div>LoginPage</div>;
};
export default LoginPage;
