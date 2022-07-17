import '@/stores';
import { FocaProvider } from 'foca';
import React from 'react';

//配置额外的provider包裹
export const rootContainer = (container: any) => {
  return React.createElement(FocaProvider, null, container);
};
