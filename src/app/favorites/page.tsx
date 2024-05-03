'use client';

import { FC, useEffect } from 'react';
import useAppSelector from '@/hooks/useAppSelector';
import CatalogPage from '@/app/catalog/page';
import styles from '@/assets/styles/favorite-page.module.scss';
import { Products } from '@/interfaces/products';
import FavoriteCard from '@/components/ui/FavoriteCard/FavoriteCard';
import { Tablet } from '@/interfaces/tablets';
import TabletFavoriteCard from '@/components/TabletsUI/TabletFavoriteCard/TabletFavoriteCard';

const FavoritesPage: FC = () => {
  const favoriteProducts = useAppSelector(
    (state) => state.productSlice.favorites
  );

  const favoriteTablets = useAppSelector(
    (state) => state.productSlice.favoritesTablets
  );

  useEffect(() => {
    document.title = 'iMarketplace | Favorites';
  }, []);

  return (
    <>
      <CatalogPage mainTitle='Favorites' smallTitle='Favorites' />
      <div>
        {favoriteProducts.length === 0 && favoriteTablets.length === 0 ? (
          <h2 className={styles.empty__title}>Favorite page is empty</h2>
        ) : (
          <div className={styles.favorite__list}>
            {favoriteProducts.map((favorite: Products) => (
              <div key={favorite.phoneId} className={styles.favorite__item}>
                <FavoriteCard
                  imgUrl={favorite.imgUrl}
                  title={favorite.title}
                  price={favorite.price}
                  phoneId={favorite.phoneId}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {favoriteTablets.length > 0 && (
        <div className={styles.favorite__list}>
          {favoriteTablets.map((favorite: Tablet) => (
            <div key={favorite.id} className={styles.favorite__item}>
              <TabletFavoriteCard
                images={favorite.images}
                name={favorite.name}
                priceRegular={favorite.priceRegular}
                id={favorite.id}
                tabletId={favorite.id === undefined ? '' : favorite.id}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
