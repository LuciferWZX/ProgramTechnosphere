import '@/stores';
import { FocaProvider } from 'foca';
import React from 'react';

export const rootContainer = (container: any) => {
  console.log(2222);
  return React.createElement(FocaProvider, null, container);
};
