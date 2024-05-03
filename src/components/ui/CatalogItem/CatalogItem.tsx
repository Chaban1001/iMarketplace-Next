'use client';

import { FC } from 'react';
import styles from './catalog-item.module.scss';
import CustomButton from '@/components/ui/CustomButton/CustomButton';
import { ICatalogItemProps } from '@/interfaces/catalog';
import { CardItem } from './catalogItemStyled/catalogItemStyled';
import Image from 'next/image';
import Link from 'next/link';
import CatalogButton from '@/components/ui/CatalogButton/CatalogButton';
import FavoriteButton from '@/components/ui/FavoriteButton/FavoriteButton';
import useAppDispatch from '@/hooks/useAppDispatch';
import { Products } from '@/interfaces/products';
import { addToFavorites } from '@/store/slices/productSlice';

export const enum PhonesPath {
  PHONES = '/phones/phone',
}

const PhoneItem: FC<ICatalogItemProps> = ({
  imgUrl = '',
  title = '',
  price = '',
  discount = '',
  displaySize = '',
  capacity = '',
  memory = '',
  phoneId,
}) => {
  const dispatch = useAppDispatch();

  const handleAddToFavorites = (product: Products) => {
    dispatch(addToFavorites(product));
  };

  const toUppPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CardItem className={styles.cardItem}>
      <div className={styles.card__container}>
        <Image
          src={imgUrl}
          alt='iphone'
          className={styles.image__hovered}
          width={250}
          height={150}
        />
        <h3 className={styles.card__title}>{title.replaceAll('-', ' ')}</h3>
        <CustomButton
          style={{ border: '2px solid #6d6474', marginBottom: 10 }}
          className={styles.button}
        >
          <Link
            onClick={toUppPage}
            className={styles.view__product}
            href={`${PhonesPath.PHONES}/${title}`}
          >
            View Product
          </Link>
        </CustomButton>
      </div>
      <span className={styles.price}>
        {price} <strong id={styles.discount}>{discount}</strong>
      </span>
      <ul className={styles.card__list}>
        <li className={styles.list__item}>
          Screen
          <span className={styles.list__itemSecondary}>{displaySize}</span>
        </li>
        <li className={styles.list__item}>
          Capacity
          <span className={styles.list__itemSecondary}>{memory}</span>
        </li>
        <li className={styles.list__item}>
          RAM
          <span className={styles.list__itemSecondary}>{capacity}</span>
        </li>
      </ul>
      <div className={styles.catalog__buttonItems}>
        <CatalogButton />
        <FavoriteButton
          product={{
            imgUrl,
            title,
            price,
            displaySize,
            discount,
            capacity,
            memory,
            phoneId,
          }}
          onClick={handleAddToFavorites}
        />
      </div>
    </CardItem>
  );
};

export default PhoneItem;
