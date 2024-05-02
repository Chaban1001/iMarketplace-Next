'use client';

import { FC, useState } from 'react';
import styles from '@/assets/styles/favorite-card.module.scss';
import { ICatalogItemProps } from '@/interfaces/catalog';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { deleteFavorites } from '@/store/slices/productSlice';
import Image from 'next/image';

type isRemoving = boolean;

const FavoriteCard: FC<ICatalogItemProps> = ({
  imgUrl = '',
  title = '',
  price = '',
  phoneId,
}) => {
  const dispatch = useAppDispatch();
  const [isRemoving, setIsRemoving] = useState<isRemoving>(false);

  const handleTransitionEnd = () => {
    setIsRemoving(false);
  };

  const handleDeleteGoods = (productId: number) => {
    setIsRemoving(true);
    dispatch(deleteFavorites(productId));
  };

  return (
    <div
      className={`${styles.favorite__cardBlock} ${
        isRemoving ? styles.removing : ''
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={styles.favorite__card}>
        <Image
          src={imgUrl}
          alt='iphone banner'
          className={styles.favorite__cardPicture}
        />
        <div>
          <h3 className={styles.favorite__cardTitle}>
            {title.replaceAll('-', ' ')}
          </h3>
          <span className={styles.favorite__cardPrice}>{price}</span>
        </div>
        <button
          className={styles.favorite__cardDelete}
          onClick={() => phoneId !== undefined && handleDeleteGoods(phoneId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
