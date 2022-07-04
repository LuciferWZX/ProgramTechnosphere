import type { ButtonHTMLAttributes, FC } from 'react';

const DButton: FC<ButtonHTMLAttributes<any>> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...restProps}
      className={`btn no-animation btn-sm ${className ?? ''}`}
    >
      {children}
    </button>
  );
};
export default DButton;
