'use client';

import styled from 'styled-components';
import { FC, useEffect } from 'react';
import { Apple } from '@mui/icons-material';
import Link from 'next/link';
import { NavigationPaths } from '@/constants/navigation-paths';
import styles from '@/assets/styles/not-found.module.scss';

export const StyledErrorPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding-top: 150px;
  color: #313237;
  font-size: 32px;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface NotFoundProps {
  statusText: string;
  message: string;
}

const enum StatusCodes {
  NOT__FOUND = '404',
}

const NotFoundPage: FC<NotFoundProps> = ({ statusText }) => {
  const errorStatusCode = StatusCodes.NOT__FOUND;
  useEffect(() => {
    document.title = `iMarketplace | Not Found ${errorStatusCode}`;
  }, [errorStatusCode]);

  return (
    <NotFoundContainer>
      <StyledErrorPage>
        <Apple id={styles.rotateIcon} style={{ fontSize: '50px' }} />
        Page is not Defined {errorStatusCode} {statusText}
      </StyledErrorPage>
      <Link id={styles.error__link} href={NavigationPaths.HOME}>
        Click To Home
      </Link>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
