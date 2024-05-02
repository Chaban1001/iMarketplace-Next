'use client';

import { FC, PropsWithChildren, StrictMode, useEffect } from 'react';
import AuthProvider from '@/common/hoc/AuthProvider';
import { RootWrapper } from '@/styled/main';
import { AppContainer } from '@/appStyled/appStyled';
import { Main } from '@/components/ui/Main/Main';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Header from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    document.title = 'iMarketplace | Home';
  }, []);

  return (
    <StrictMode>
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </StrictMode>
  );
};

export default Layout;
