'use client';

import { FC, Fragment } from 'react';
import styles from '@/assets/styles/footer.module.scss';
import AppleIcon from '@mui/icons-material/Apple';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import NavigationIcon from '@mui/icons-material/Navigation';
import {
  FooterContainer,
  FooterStyledWrapper,
} from './footerStyled/footerStyled';
import { NavigationPaths } from '@/constants/navigation-paths';
import Link from 'next/link';

const Footer: FC = () => {
  const toUppPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Fragment>
      <FooterContainer>
        <FooterStyledWrapper>
          <>
            <button className={styles.logo__buttonUp} onClick={toUppPage}>
              <Link href={NavigationPaths.HOME}>
                <h3 className={styles.logo__capture}>
                  <AppleIcon
                    style={{ fontSize: '30' }}
                    className={styles.footer__appleLogo}
                  />
                  iMarketplace
                </h3>
              </Link>
            </button>
          </>
          <>
            <ul className={styles.footer__menu}>
              <li className={styles.list__item}>
                <a
                  href='https://github.com/Chaban29'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.list__link}
                >
                  <GitHubIcon />
                  Github
                </a>
              </li>
              <li className={styles.list__item}>
                <a
                  href='https://t.me/romanchaban'
                  target='_blank'
                  className={styles.list__link}
                >
                  <TelegramIcon />
                  Telegram
                </a>
              </li>
              <li className={styles.list__item}>
                <a
                  href='https://www.linkedin.com/in/romanchaban1001/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.list__link}
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
            </ul>
          </>
          <div className={styles.footer__buttons}>
            <button className={styles.footer__button} onClick={toUppPage}>
              Back to top
            </button>
            <button className={styles.arrow__top} onClick={toUppPage}>
              <NavigationIcon className={styles.arrow__circle} />
            </button>
          </div>
        </FooterStyledWrapper>
      </FooterContainer>
    </Fragment>
  );
};

export default Footer;
