'use client';

import { FC } from 'react';
import { styled } from 'styled-components';
import styles from '@/assets/styles/hot-prices.module.scss';
import tablets from '@/common/products/tablets.json';
import { ICatalogItemProps } from '@/interfaces/catalog';
import { Tablet } from '@/interfaces/tablets';
import Tablets from '@/components/TabletsUI/Tablets/Tablets';

const ModelsCatalogSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 30px;
  padding-right: 0px;
`;

const HotPrices: FC<ICatalogItemProps> = ({ pricesTitle }) => {
  return (
    <ModelsCatalogSection>
      <div className={styles.modelsCatalog__block}>
        <h2 className={styles.catalog__title}>{pricesTitle}</h2>
        <h3
          className={`${styles.catalog__title} ${styles.zoomTitle}`}
          style={{ fontSize: '1.4rem' }}
        >
          Swipe to view the catalog
        </h3>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          overflowX: 'hidden',
        }}
      >
        <Tablets products={tablets as unknown as Tablet[]} />
      </div>
    </ModelsCatalogSection>
  );
};

export default HotPrices;
