import type React from 'react';
import type { FC } from 'react';

interface InputProps {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
}
const Input: FC<InputProps> = (props) => {
  const { placeholder, type, className } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input input-bordered input-sm w-full max-w-xs ${
        className ?? ''
      }
            `}
    />
  );
};
export default Input;
