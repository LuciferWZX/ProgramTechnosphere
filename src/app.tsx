import '@/stores';
import { FocaProvider } from 'foca';
import React from 'react';
export const rootContainer = (container: any) => {
  return React.createElement(FocaProvider, null, container);
};
