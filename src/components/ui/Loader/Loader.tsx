'use client';

import { FC, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import styles from '@/assets/styles/loader.module.scss';
import Layout from '@/app/page';
import { Comment } from 'react-loader-spinner';
import MainTitle from '@/components/ui/MainTitle/MainTitle';
import { Apple } from '@mui/icons-material';

type TypeLoader = {
  children: ReactNode;
};

export const Loader: FC<TypeLoader> = () => {
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const changeLoading = async () => {
      const loading = setTimeout(() => {
        setLoader(true);
      }, 1800);
      return loading;
    };
    changeLoading();
  }, []);

  if (!loader) {
    return (
      <div className={styles.blocks__loader}>
        <MainTitle className={styles.block__title}>
          Welcome to iMarketplace!
          <Apple style={{ fontSize: 60, color: '#89939a' }} />
        </MainTitle>
        <Comment
          visible={true}
          height='80'
          width='80'
          ariaLabel='comment-loading'
          wrapperStyle={{}}
          wrapperClass='comment-wrapper'
          color='#fff'
          backgroundColor='#313131'
        />
      </div>
    );
  }
  return <Layout />;
};
