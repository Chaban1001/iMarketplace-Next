'use client';

import { AppContainer } from '@/appStyled/appStyled';
import Header from '@/components/ui/Header/Header';
import { store } from '@/store/store';
import { FC } from 'react';
import { Provider } from 'react-redux';
import Home from './HomePage/page';
import { Main } from '@/components/ui/Main/Main';

const Layout: FC = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Home>
          <Header />
          <Main />
        </Home>
      </AppContainer>
    </Provider>
  );
};

export default Layout;
