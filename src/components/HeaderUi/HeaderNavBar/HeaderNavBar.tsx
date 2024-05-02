'use client';
import styles from '@/assets/styles/header.module.scss';
import { NavigationPaths } from '@/constants/navigation-paths';
import Link from 'next/link';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@/hooks/useAppSelector';
import Heart from '@/project-images/header/favorite.svg';
import Basket from '@/project-images/header/shopping_cart.svg';
import Image from 'next/image';

const HeaderNavItems = styled.div`
padding: 0,
display: flex;
align-items: center;
`;

type ActiveButton = string | null;

const HeaderNavBar: FC = () => {
  const [activeButton, setActiveButton] = useState<ActiveButton>(null);
  const { favoriteCounter, basketCounter } = useAppSelector(
    (state) => state.productSlice
  );

  const handleButtonClick = (buttonName: string) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  return (
    <HeaderNavItems>
      <Link
        href={NavigationPaths.FAVORITES}
        onClick={() => handleButtonClick(NavigationPaths.FAVORITES)}
      >
        <button
          className={`${styles.heart__button} ${
            activeButton === NavigationPaths.FAVORITES ? styles.active : ''
          }`}
        >
          <Image src={Heart} alt='Heart Icon' />
          <span className={styles.heart__counter}>{favoriteCounter}</span>
        </button>
      </Link>
      <Link
        href={NavigationPaths.CART}
        onClick={() => handleButtonClick(NavigationPaths.CART)}
      >
        <button
          className={`${styles.shoppingCart__button} ${
            activeButton === NavigationPaths.CART ? styles.active : ''
          }`}
        >
          <Image src={Basket} alt='Basket Icon' />
          <span className={styles.basket__counter}>{basketCounter}</span>
        </button>
      </Link>
    </HeaderNavItems>
  );
};

export default HeaderNavBar;
