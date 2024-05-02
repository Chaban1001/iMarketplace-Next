'use client';

import styles from '@/assets/styles/home.module.scss';
import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

interface Home {
  children: ReactNode;
}

const Home: FC<Home> = ({ children }): JSX.Element => {
  return <div className={styles.home__page}>{children}</div>;
};

export default Home;
