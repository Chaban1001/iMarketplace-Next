'use client';

import { FC } from 'react';
import styled from 'styled-components';
import Hero from '@/components/ui/Hero/Hero';

const MainContainer = styled.div`
  width: 100%;
`;

export const Main: FC = () => {
  return (
    <MainContainer>
      <Hero />
      {/* <ModelsCatalog modelsTitle='Brand New Models' /> */}
      {/* <ShopCategory title='Shop by category' /> */}
      {/* <HotPrices pricesTitle='Hot prices' /> */}
    </MainContainer>
  );
};
