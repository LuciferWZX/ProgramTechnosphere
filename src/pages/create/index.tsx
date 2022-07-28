
import type { FC } from 'react';
import styles from './index.less';
import { Outlet } from "umi";
const Create: FC = () => {
  return (
    <div className={styles.createContainer}>
      <Outlet/>
    </div>
  );
};
export default Create;
