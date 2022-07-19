import LogoIcon from '@/assets/logo.svg';
import { ReactComponent as BetaOutline } from '@/assets/svg/beta-outline.svg';
import { systemStore } from '@/stores/systemStore';
import Icon from '@ant-design/icons';
import { Badge } from 'antd';
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
        <Badge
          offset={[12, 2]}
          count={
            <Icon
              component={BetaOutline}
              className={'text-3xl text-orange-400'}
            />
          }
        >
          <div className={'flex-1 font-bold text-sm'}>程序分享圈</div>
        </Badge>
      )}
    </div>
  );
};
export default SiderHeader;
