'use client';

import { AppProps } from 'next/app';
import RootLayout from '@/app/layout';
import Layout from '@/app/page';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
      <Layout />
    </RootLayout>
  );
};

export default MyApp;
