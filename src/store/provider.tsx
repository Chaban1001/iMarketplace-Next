'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ReactNode } from 'react';

interface Providers {
  children: ReactNode;
}

export function Providers({ children }: Providers) {
  return <Provider store={store}>{children}</Provider>;
}
