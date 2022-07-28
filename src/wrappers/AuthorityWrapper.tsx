import { FC } from 'react';
import { Outlet ,Navigate} from 'umi';
import { useModel } from "foca";
import { userStore } from "@/stores/userStore";

const AuthorityWrapper: FC = () => {
  const { isLogin } = useModel(userStore,state => ({
    isLogin:!!state.user
  }))

  if(isLogin){
    return <Outlet />;
  }
  return <Navigate to="/basic/403" />;
};
export default AuthorityWrapper;
