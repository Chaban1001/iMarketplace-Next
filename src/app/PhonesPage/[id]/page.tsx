'use client';

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './phonePage.module.scss';
// import { ProductItem } from '@/components/ui/';
import products from '@/common/products/products.json';
import  ModelsCatalog  from '@/components/ui/ModelsCatalog/ModelsCatalog';

const PhonePage: FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    document.title = 'Product | Phone';
    const product = products.find((product) => product.title === title);
    if (product) {
      setSelectedProduct(product);
    }
  }, [title]);

  return (
    <div className={styles.phone__layout}>
      {/* <ProductItem product={selectedProduct} /> */}
      <ModelsCatalog modelsTitle="iPhone's" />
    </div>
  );
};

export default PhonePage;
