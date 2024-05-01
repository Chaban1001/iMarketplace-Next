import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/assets/styles/main.scss';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} body`}>{children}</body>
    </html>
  );
}
