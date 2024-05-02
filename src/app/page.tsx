'use client';

import { AppContainer } from '@/appStyled/appStyled';
import Footer from '@/components/ui/Footer/Footer';
import Header from '@/components/ui/Header/Header';
import { store } from '@/store/store';
import { FC } from 'react';
import { Provider } from 'react-redux';

const Layout: FC = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <Footer />
      </AppContainer>
    </Provider>
  );
};

export default Layout;
