'use client';

import styled from 'styled-components';
import { FC } from 'react';
import styles from '@/assets/styles/shop-category.module.scss';
import { ICategoryItemProps } from '@/interfaces/category';
import Image from 'next/image';
import Link from 'next/link';

const CategoryItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CategoryItem: FC<ICategoryItemProps> = ({
  categoryModels,
  categoryTitle,
  banner,
  href,
}) => {
  const categoryTopScrolled = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CategoryItemBlock>
      <Image
        src={banner}
        alt='Iphone Banner'
        id={styles.width}
        className={styles.category__banner}
      />
      <div className={styles.category__titles}>
        <Link
          onClick={categoryTopScrolled}
          href={href}
          className={styles.category__title}
        >
          {categoryTitle}
        </Link>
        <span className={styles.category__models}>{categoryModels}</span>
      </div>
    </CategoryItemBlock>
  );
};

export default CategoryItem;
