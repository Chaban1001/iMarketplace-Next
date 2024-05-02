'use client';

import { FC, useEffect, useState } from 'react';
import { HeaderContainer, HeaderWrapper } from './headerStyled/headerStyled';
import styles from '@/assets/styles/header.module.scss';
import Link from 'next/link';
import { NavigationPaths } from '@/constants/navigation-paths';
import AppleIcon from '@mui/icons-material/Apple';
import HeaderNavBar from '@/components/HeaderUi/HeaderNavBar/HeaderNavBar';
import BurgerMenu from '@/components/HeaderUi/BurgerMenu/BurgerMenu';

type isMenuOpen = boolean;
type isScrolled = boolean;

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<isMenuOpen>(false);
  const [isScrolled, setIsScrolled] = useState<isScrolled>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toPageBottomScrolled = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleNavScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleNavScroll);
    return () => {
      removeEventListener('scroll', handleNavScroll);
    };
  }, []);

  return (
    <HeaderWrapper className={styles.header}>
      <HeaderContainer
        className={`${styles.header__navContainer} ${styles.header} ${
          isScrolled ? styles.scrolled : ''
        }`}
      >
        <div onClick={toPageBottomScrolled} className={styles.header__logo}>
          <a href='#!' className={styles.logo__link}>
            <AppleIcon
              className={styles.apple__logo}
              style={{ fontSize: 30, color: '#89939A' }}
            />
          </a>
          <h3 className={styles.logo__title}>iMarketplace</h3>
        </div>
        <nav className={styles.navigation__bar}>
          <ul className={styles.nav}>
            <li tabIndex={1} className={styles.nav__item}>
              <Link href={NavigationPaths.HOME} className={styles.nav__link}>
                home
              </Link>
            </li>
            <li tabIndex={2} className={styles.nav__item}>
              <Link href={NavigationPaths.PHONES} className={styles.nav__link}>
                phones
              </Link>
            </li>
            <li tabIndex={3} className={styles.nav__item}>
              <Link href={NavigationPaths.TABLETS} className={styles.nav__link}>
                tablets
              </Link>
            </li>
            <li tabIndex={4} className={styles.nav__item}>
              <Link
                href={NavigationPaths.ACCESSORIES}
                className={styles.nav__link}
              >
                accessories
              </Link>
            </li>
          </ul>
        </nav>
        {/* <PopUp /> */}
        <HeaderNavBar />
        <div onClick={toggleMenu} className={styles.burger__buttonBlock}>
          <button type='button' className={styles.button__burgerLine}></button>
          <button type='button' className={styles.button__burgerLine}></button>
          <button type='button' className={styles.button__burgerLine}></button>
        </div>
      </HeaderContainer>
      {isMenuOpen && <BurgerMenu />}
    </HeaderWrapper>
  );
};

export default Header;
