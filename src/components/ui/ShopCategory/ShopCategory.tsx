'use client';

import { FC } from 'react';
import styled from 'styled-components';
import styles from './shop-category.module.scss';
import AccessoriesBanner from '@/project-images/slider/aalp-magsafe-header-202309.png';
import IphoneBanner from '@/project-images/slider/Iphone15-Banner.jpg';
import TabletBanner from '@/project-images/slider/Ipad-Pro.jpg';
import products from '@/common/products/products.json';
import tablets from '@/common/products/tablets.json';
import CategoryItem from '@/components/ui/CategoryItem/CategoryItem';
import { NavigationPaths } from '@/constants/navigation-paths';

const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1136px;
  gap: 24px;
  margin-bottom: 81px;
  padding: 0 30px;
`;

interface IShopCategory {
  title: string;
}

const ShopCategory: FC<IShopCategory> = ({ title }) => {
  return (
    <section>
      <CategoriesContainer>
        <h2 className={styles.categories__title}>{title}</h2>
        <div className={styles.category__products}>
          <CategoryItem
            banner={IphoneBanner}
            categoryTitle='Mobile phones'
            categoryModels={`${products.length} models`}
            href={NavigationPaths.PHONES}
          />
          <CategoryItem
            categoryTitle='Tablets'
            categoryModels={`${tablets.length} models`}
            banner={TabletBanner}
            href={NavigationPaths.TABLETS}
          />
          <CategoryItem
            categoryTitle='Accessories'
            categoryModels={`${
              products.filter((product) => product.category === 'accessory')
                .length
            } models`}
            banner={AccessoriesBanner}
            href={NavigationPaths.ACCESSORIES}
          />
        </div>
      </CategoriesContainer>
    </section>
  );
};

export default ShopCategory;
