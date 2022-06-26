import type { FC } from 'react';
import { Outlet } from 'umi';

const EntryLayout: FC = () => {
  return (
    <div>
      EntryLayout
      <Outlet />
    </div>
  );
};
export default EntryLayout;
