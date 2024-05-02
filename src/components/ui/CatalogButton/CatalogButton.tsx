'use client';

import { FC } from 'react';
import { Button } from '@mui/material';
import styles from '@/assets/styles/catalog-button.module.scss';

const CatalogButton: FC = () => {
  return <Button className={styles.catalog__buttonItem}>Add to cart</Button>;
};


export default CatalogButton;