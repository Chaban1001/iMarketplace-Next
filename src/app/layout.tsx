import { FC, PropsWithChildren, ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import '@/assets/styles/main.scss';
import { Metadata } from 'next';
import { Providers } from '@/store/provider';
import Header from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';

interface RootLayout {
  children: ReactNode;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'iMarketplace',
  description:
    'Explore the world of Apple products at our online store. Discover a curated selection of cutting-edge devices, from iPhones and iPads and accessories.',
  icons: '/favicon.svg',
};

const RootLayout: FC<RootLayout> = ({ children }: RootLayout) => {
  return (
    <html lang='en'>
      <body className={`${poppins.className} body`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
