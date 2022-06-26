import LogoIcon from '@/assets/logo.svg';
import type { FC } from 'react';
const SiderHeader: FC = () => {
  return (
    <div
      className={'h-10 box-border flex items-center px-2 space-x-2 shadow-sm'}
    >
      <img alt={'PT'} className={'w-6 rounded'} src={LogoIcon} />
      <div className={'flex-1 font-bold text-sm'}>程序分享圈</div>
    </div>
  );
};
export default SiderHeader;
