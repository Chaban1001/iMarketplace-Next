'use client';

import styles from '@/components/ui/CatalogItem/catalog-item.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Tablet, Tablets } from '@/interfaces/tablets';
import { FC, useState } from 'react';

interface FavoriteProps {
  product?: Tablet;
  onClick?: (product: Tablets) => void;
}

type isActive = boolean;

const TabletFavoriteButton: FC<FavoriteProps> = ({
  product = null,
  onClick = () => {},
}) => {
  const [isActive, setIsActive] = useState<isActive>(false);

  const handleAddToFavorites = () => {
    if (product) {
      if (!isActive) {
        setIsActive(!isActive);
      }
      onClick(product);
    }
  };

  return (
    <button
      onClick={handleAddToFavorites}
      className={`${styles.favorite__button} ${isActive ? 'active' : ''}`}
      style={{
        background: isActive ? '#FF2400' : '',
        border: isActive ? '1px solid #eee' : '',
      }}
    >
      <FavoriteBorderIcon
        style={{ fontSize: 30, color: isActive ? '#fff' : '' }}
        className={styles.favorite__icon}
      />
    </button>
  );
};

export default TabletFavoriteButton;
