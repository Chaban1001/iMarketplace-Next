'use client';

import styles from '@/assets/styles/models-catalog.module.scss';
import products from '@/common/products/products.json';
import { FC } from 'react';
import { ModelsCatalogSection } from '@/components/ui/ModelsCatalog/modelsStyled/modelsStyled';
import { Phone } from '@/interfaces/phones';
import Phones from '@/components/ui/Phones/Phones';

interface IModelsCatalog {
  modelsTitle: string;
}

const ModelsCatalog: FC<IModelsCatalog> = ({ modelsTitle }) => {
  return (
    <ModelsCatalogSection>
      <div className={styles.modelsCatalog__block}>
        <h2 className={styles.catalog__title}>{modelsTitle}</h2>
        <h3
          className={`${styles.catalog__title} ${styles.zoomTitle}`}
          style={{ fontSize: '1.4rem' }}
        >
          Swipe to view the catalog
        </h3>
      </div>
      <div className={styles.catalog__cards}>
        <Phones products={products as unknown as Phone[]} />
      </div>
    </ModelsCatalogSection>
  );
};


export default ModelsCatalog;