'use client';

import { FC } from 'react';
import styled from 'styled-components';
import { Tablet } from '@/interfaces/tablets';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addToFavoritesTablets } from '@/store/slices/productSlice';
import Image from 'next/image';
import styles from '@/components/ui/CatalogItem/catalog-item.module.scss';
import Link from 'next/link';
import CatalogButton from '@/components/ui/CatalogButton/CatalogButton';
import TabletFavoriteButton from '@/components/TabletsUI/TabletFavoriteButton/TabletFavoriteButton';
import CustomButton from '@/components/ui/CustomButton/CustomButton';

const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 10px 14px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 5px 0px rgba(0, 64, 128, 0.2);
`;

const enum TabletsPath {
  TABLETS = '/tablets/tablet',
}

const TabletItem: FC<Tablet> = ({
  images,
  name,
  priceDiscount,
  priceRegular,
  id,
  screen,
  capacity,
  ram,
}) => {
  const toUppPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const dispatch = useAppDispatch();
  const handleAddToFavorites = (product: Tablet) => {
    dispatch(addToFavoritesTablets(product));
  };
  return (
    <CardItem className={styles.cardItem}>
      <div className={styles.card__container}>
        <Image
          src={images === undefined ? '' : images[0]}
          alt='tablet'
          className={styles.image__hovered}
          width={400}
          height={250}
        />
        <h3 className={styles.card__title}>{name}</h3>
        <CustomButton
          style={{ border: '2px solid #6d6474', marginBottom: 10 }}
          className={styles.button}
        >
          <Link
            onClick={toUppPage}
            className={styles.view__product}
            href={`${TabletsPath.TABLETS}${id}`}
          >
            View Product
          </Link>
        </CustomButton>
      </div>

      <span className={styles.price}>
        {priceRegular} <strong id={styles.discount}>{priceDiscount}</strong>
      </span>
      <ul className={styles.card__list}>
        <li className={styles.list__item}>
          Screen
          <span className={styles.list__itemSecondary}>{screen}</span>
        </li>
        <li className={styles.list__item}>
          Capacity
          <span className={styles.list__itemSecondary}>{capacity}</span>
        </li>
        <li className={styles.list__item}>
          RAM
          <span className={styles.list__itemSecondary}>{ram}</span>
        </li>
      </ul>
      <div className={styles.catalog__buttonItems}>
        <CatalogButton />
        <TabletFavoriteButton
          product={{ images, id, name, priceRegular }}
          onClick={handleAddToFavorites}
        />
      </div>
    </CardItem>
  );
};

export default TabletItem;
