'use client';

import styles from '@/assets/styles/hero.module.scss';
import { HeroSection } from './heroStyled/heroStyled';
import { Slider } from '@/components/ui/Slider/Slider';
import AppleIcon from '@mui/icons-material/Apple';
import MainTitle from '@/components/ui/MainTitle/MainTitle';

const Hero = () => {
  return (
    <HeroSection>
      <div className={styles.hero__container}>
        {
          <MainTitle className={styles.mainHero__title}>
            Welcome to iMarketplace! It&apos;s great to have you here.
            <AppleIcon />
          </MainTitle>
        }
        <div className={styles.swiper__div}>
          <Slider slides={[]} />
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;