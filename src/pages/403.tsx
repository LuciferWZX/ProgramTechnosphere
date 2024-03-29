import { PTButton } from '@/components';
import { Result } from 'antd';
import type { FC } from 'react';
import { history } from 'umi';
const NoAuthorityPage: FC = () => {
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
        status={403}
        title={<div className={'text-red-500'}>403</div>}
        subTitle={
          <div className={'text-red-500'}>很抱歉，您暂无权限访问。</div>
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
export default NoAuthorityPage;
