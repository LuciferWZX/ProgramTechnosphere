import React from 'react';

import { tuple } from '@/components/type';

const ButtonTypes = tuple('default', 'primary', 'ghost');
export type ButtonType = typeof ButtonTypes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export interface BaseButtonProps {
  icon?: React.ReactNode;
  type?: ButtonType;
  children?: React.ReactNode;
  block?: boolean;
  disabled?: boolean;
  animated?: boolean;
  style?: React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'middle' | 'large';
  onClick?: React.MouseEventHandler<HTMLElement>;
}
export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
export type ButtonProps = NativeButtonProps;

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref,
) => {
  const {
    className,
    children,
    icon,
    size,
    disabled,
    animated,
    block,
    type = 'default',
    htmlType,
    ...rest
  } = props;
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();
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
  //是否占一行
  const renderBlock = () => {
    if (block) {
      return 'flex w-full';
    }
    return 'inline-flex';
  };
  //组件的类型
  const renderType = () => {
    if (type === 'primary') {
      return 'text-blue-700 bg-blue-lightPrimary hover:bg-blue-300 dark:bg-blue-500 dark:hover:bg-blue-400';
    }
    return 'focus:outline-blue-300 ';
  };
  return (
    <button
      {...rest}
      //eslint-disable-next-line react/button-has-type
      type={htmlType}
      className={`
          
          bg-transparent
          items-center dark:text-gray-300 
          rounded-md text-sm select-none
          border-transparent
          outline-none
          outline-offset-0
          ${renderBlock()}
          ${renderBlock()} 
          ${renderAnimated()}
          ${renderSpaceX()}
          ${renderDisabled()}
          ${renderSize()}
          ${renderType()}
          ${className}`}
      ref={buttonRef}
    >
      {icon && <div>{icon}</div>}
      {children && <div>{children}</div>}
    </button>
  );
};
const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);
export default Button;
