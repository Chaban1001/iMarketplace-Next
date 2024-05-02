import { FC, PropsWithChildren } from 'react';
import { Poppins } from 'next/font/google';
import '@/assets/styles/main.scss';
import { Metadata } from 'next';

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

const RootLayout: FC = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <body className={`${poppins.className} body`}>{children}</body>
    </html>
  );
};

export default RootLayout;
