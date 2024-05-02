'use client';

import styled from 'styled-components';
import MainTitle from '@/components/ui/MainTitle/MainTitle';
import { FC } from 'react';
import { CatalogPageProps } from '@/interfaces/catalog-page';
import { NavigationPaths } from '@/constants/navigation-paths';
import Image from 'next/image';
import Link from 'next/link';
import homeIcon from '@/project-images/icons/Home.svg';
import arrowRightIcon from '@/project-images/icons/Chevron (Arrow Right).svg';

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

const CatalogPage: FC<CatalogPageProps> = ({
  smallTitle,
  mainTitle,
  models,
}) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <PhonesContainer className='Phones'>
        <div className='phones__navigation'>
          <Link href={NavigationPaths.HOME}>
            <a
              style={{ color: '#313237' }}
              className='phones__toHome'
              onClick={goBack}
            >
              <Image src={homeIcon} alt='home icon' width={24} height={24} />
            </a>
          </Link>
          <Image
            src={arrowRightIcon}
            alt='arrow right icon'
            width={24}
            height={24}
          />
          <h5 className='phones__title'>{smallTitle}</h5>
        </div>
        <div className='phones__titles'>
          <MainTitle>{mainTitle}</MainTitle>
        </div>
        <div className='models__title'>{models}</div>
      </PhonesContainer>
    </>
  );
};

export default CatalogPage;
