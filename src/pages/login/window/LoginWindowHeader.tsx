import { CloseCircleFilled } from '@ant-design/icons';
import type { FC } from 'react';

const LoginWindowHeader: FC = () => {
  const closeLoginWindow = () => {
    const { sendToMain } = window.electron;
    sendToMain('changeLoginWindow', {
      open: false,
    });
  };
  return (
    <header className={'h-6 dark:bg-gray-darkHeader flex items-center px-2'}>
      <CloseCircleFilled
        className={'hover:text-red-600 cursor-pointer'}
        onClick={closeLoginWindow}
      />
    </header>
  );
};
export default LoginWindowHeader;
