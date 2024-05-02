'use client';

import { useState, useRef, FC } from 'react';
import styles from './burger.module.scss';
import AppleIcon from '@mui/icons-material/Apple';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { MENU__LINKS } from '@/interfaces/burger-links';

type ButtonRef = null;
type isMenuClosed = boolean;

const BurgerMenu = () => {
  const buttonRef = useRef<ButtonRef>(null);
  const burgerMenuRef = useRef<ButtonRef>(null);
  const [isMenuClosed, setIsMenuClosed] = useState<isMenuClosed>(false);

  const toggleMenu = (): void => {
    setIsMenuClosed(!isMenuClosed);
  };

  const closeMenuButton = (): void => {
    toggleMenu();
  };

  const handleMenuItemClick = (): void => {
    closeMenuButton();
  };

  return (
    <div className='burger__container'>
      <div
        className={`${styles.burger__menu} ${
          isMenuClosed ? styles.closed : styles.active
        }`}
        ref={burgerMenuRef}
      >
        <div className={styles.close__item}>
          <div className={styles.burger__logoBlock}>
            <AppleIcon className={styles.burger__logo} />
            <h3 className={styles.logo__title}>iMarketplace</h3>
          </div>
          <CloseIcon
            onClick={closeMenuButton}
            ref={buttonRef}
            style={{ fontSize: 30, cursor: 'pointer' }}
          />
        </div>
        <nav className={styles.menu}>
          {MENU__LINKS.map((link) => (
            <ul key={link.linkId} className={styles.menu__item}>
              <li className={styles.menu__listItem}>
                <Link
                  onClick={handleMenuItemClick}
                  href={link.href}
                  className={styles.menu__itemLink}
                >
                  {link.title}
                </Link>
              </li>
            </ul>
          ))}
        </nav>
        <span className={styles.menu__description}>Apple Inc. 2024</span>
      </div>
    </div>
  );
};

export default BurgerMenu;
