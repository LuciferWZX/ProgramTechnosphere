import '@/stores';
import { ConfigProvider } from 'antd';
import { FocaProvider } from 'foca';
import React from 'react';

//配置额外的provider包裹
export const rootContainer = (container: any) => {
  ConfigProvider.config({
    theme: {},
  });
  const secondContainer = React.createElement(ConfigProvider, null, container);
  return React.createElement(FocaProvider, null, secondContainer);
};
