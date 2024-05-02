'use client';

import styles from '@/assets/styles/favorite-card.module.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Tablet } from '@/interfaces/tablets';
import { deleteFavoriteTablets } from '@/store/slices/productSlice';
import Image from 'next/image';
import { FC, useState } from 'react';

interface FavoriteCardProps extends Tablet {
  tabletId: string;
}

const TabletFavoriteCard: FC<FavoriteCardProps> = ({
  images = '',
  name = '',
  priceRegular = '',
  tabletId,
}) => {
  const dispatch = useAppDispatch();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDeleteGoods = (productId: string) => {
    setIsRemoving(true);
    dispatch(deleteFavoriteTablets(productId));
  };

  const handleTransitionEnd = () => {
    setIsRemoving(false);
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
          src={images[0]}
          alt='tablet banner'
          className={styles.favorite__cardPicture}
        />
        <div>
          <h3 className={styles.favorite__cardTitle}>{name}</h3>
          <span className={styles.favorite__cardPrice}>{priceRegular}</span>
        </div>
        <button
          className={styles.favorite__cardDelete}
          onClick={() => tabletId !== undefined && handleDeleteGoods(tabletId!)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TabletFavoriteCard;
