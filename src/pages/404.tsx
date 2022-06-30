import { PTButton } from '@/components';
import { Result } from 'antd';
import type { FC } from 'react';
import { history } from 'umi';
const NotFondPage: FC = () => {
  const handleGOHome = () => {
    history.replace('/basic/home');
  };
  return (
    <div
      className={
        'h-full w-full flex-col box-border flex items-center justify-center'
      }
    >
      <Result
        status={404}
        title={<div className={'text-red-500'}>404</div>}
        subTitle={
          <div className={'text-red-500'}>很抱歉，您访问的页面不存在。</div>
        }
        extra={
          <PTButton onClick={handleGOHome} type="primary">
            返回首页
          </PTButton>
        }
      />
    </div>
  );
};
export default NotFondPage;
