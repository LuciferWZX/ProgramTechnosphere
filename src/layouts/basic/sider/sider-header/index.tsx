import LogoIcon from '@/assets/logo.svg';
import { systemStore } from '@/stores/systemStore';
import { useModel } from 'foca';
import type { FC } from 'react';
const SiderHeader: FC = () => {
  const isScroll = useModel(systemStore, (state) => state.siderScroll);
  const renderLogoScroll = (): string => {
    if (isScroll) {
      return 'justify-center';
    }
    return '';
  };
  return (
    <div
      className={`h-10 box-border flex items-center px-2 space-x-2 shadow-sm 
        ${renderLogoScroll()}
      `}
    >
      <img alt={'PT'} className={'w-6 rounded'} src={LogoIcon} />
      {!isScroll && (
        <div className={'flex-1 font-bold text-sm'}>程序分享圈</div>
      )}
    </div>
  );
};
export default SiderHeader;
