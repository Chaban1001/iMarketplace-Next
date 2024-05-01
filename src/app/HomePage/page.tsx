import styles from '@/assets/styles/home.module.scss';
import Hero from '@/components/ui/Hero/Hero';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'iMarketplace | Home',
};

const Home: FC = () => {
  return (
    <div className={styles.home__page}>
    </div>
  );
};

export default Home;
