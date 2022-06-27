import type React from 'react';
import type { FC } from 'react';

interface IProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  type?: 'primary' | 'box';
  disabled?: boolean;
  animated?: boolean;
  size?: 'small' | 'middle' | 'large';
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const Button: FC<IProps> = (props) => {
  const { children, icon, size, disabled, animated, onClick } = props;
  //size的样式
  const renderSize = (): string => {
    if (size === 'small') {
      return 'min-h-5 text-xs px-2 py-0';
    }
    return 'min-h-7 px-3 py-1';
  };
  //当处于disabled状态的时候
  const renderDisabled = () => {
    if (disabled) {
      return 'cursor-not-allowed dark:text-gray-500';
    }
    return 'cursor-pointer dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-200';
  };
  //当有俩组件的时候，中间给出空隙
  const renderSpaceX = () => {
    if (icon && children) {
      return 'space-x-1';
    }
    return '';
  };
  //是否开启动画，默认开启
  const renderAnimated = () => {
    if (animated === false) {
      return '';
    }
    return 'transition-colors duration-200';
  };
  return (
    <div
      onClick={onClick}
      className={`
          inline-flex items-center dark:text-gray-300 
          rounded-md text-sm select-none 
          ${renderAnimated()}
          ${renderSpaceX()}
          ${renderDisabled()}
          ${renderSize()}`}
    >
      {icon && <div>{icon}</div>}
      <div>{children}</div>
    </div>
  );
};
export default Button;
