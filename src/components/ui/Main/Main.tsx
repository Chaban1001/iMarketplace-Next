'use client';

import { FC } from 'react';
import styled from 'styled-components';
import Hero from '@/components/ui/Hero/Hero';
import ModelsCatalog from '@/components/ui/ModelsCatalog/ModelsCatalog';
import HotPrices from '@/components/ui/HotPrices/HotPrices';
import ShopCategory from '@/components/ui/ShopCategory/ShopCategory';

const MainContainer = styled.div`
  width: 100%;
`;

export const Main: FC = () => {
  return (
    <MainContainer>
      <Hero />
      <ModelsCatalog modelsTitle='Brand New Models' />
      <ShopCategory title='Shop by category' />
      <HotPrices pricesTitle='Hot prices' />
    </MainContainer>
  );
};
