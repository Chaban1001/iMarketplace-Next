'use client';

import styled from 'styled-components';
import styles from './catalog.module.scss';
import homeIcon from '../../images/icons/Home.svg';
import arrowRightIcon from '../../images/icons/Chevron (Arrow Right).svg';
import MainTitle from '@/components/ui/MainTitle/MainTitle';
import { FC } from 'react';
import { CatalogPageProps } from '@/interfaces/catalog-page';
import Link from 'next/link';
import { NavigationPaths } from '@/constants/navigation-paths';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PhonesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 0px 0 24px;
  width: 100%;
  max-width: 1138px;
  margin: 0 auto;
  padding-bottom: 36px;
`;

export const CatalogPage: FC<CatalogPageProps> = ({
  smallTitle,
  mainTitle,
  models,
}: CatalogPageProps): JSX.Element => {
  const router = useRouter();
  const goBack = () => router.push(NavigationPaths.HOME);
  return (
    <>
      <PhonesContainer className='Phones'>
        <div className={styles.phones__navigation}>
          <Link
            href={NavigationPaths.HOME}
            style={{ color: '#313237' }}
            className={styles.phones__toHome}
          >
            <Image onClick={goBack} src={homeIcon} alt='home icon' />
          </Link>
          <Image src={arrowRightIcon} alt='arrow right icon' />
          <h5 className={styles.phones__title}>{smallTitle}</h5>
        </div>
        <div className={styles.phones__titles}>
          <MainTitle>{mainTitle}</MainTitle>
        </div>
        <div className={styles.models__title}>{models}</div>
      </PhonesContainer>
    </>
  );
};
