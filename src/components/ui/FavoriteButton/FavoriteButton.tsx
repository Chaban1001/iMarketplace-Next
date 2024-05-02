'use client';

import styles from '@/components/ui/CatalogItem/catalog-item.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FC, useState } from 'react';
import { Products } from '@/interfaces/products';


interface FavoriteProps {
  product?: Products;
  onClick?: (product: Products) => void;
}

type isActive = boolean;


const FavoriteButton: FC<FavoriteProps> = ({
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

export default FavoriteButton;