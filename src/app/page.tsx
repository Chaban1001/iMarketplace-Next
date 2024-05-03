'use client';

import { FC, StrictMode, useEffect } from 'react';
import { Main } from '@/components/ui/Main/Main';

const Layout: FC = () => {
  useEffect(() => {
    document.title = 'iMarketplace | Home';
  }, []);

  return (
    <StrictMode>
      <Main />
    </StrictMode>
  );
};

export default Layout;
