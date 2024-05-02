'use client';

import { FC } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import firstSlide from '@/project-images/slider/Iphone15-Banner.jpg';
import secondSlide from '@/project-images/slider/aalp-magsafe-header-202309.png';
import thirdSlice from '@/project-images/slider/iphones.png';
import styles from './slider.module.scss';
import Image from 'next/image';

interface Slide {
  image: string;
  title: string;
}

interface SliderProps {
  slides: Slide[];
}

export const Slider: FC<SliderProps> = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      grabCursor={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      scrollbar={{ draggable: true }}
      style={{ width: 1080 }}
    >
      <div className='swiper-button-next' style={{ color: '#313131' }}></div>
      <div className='swiper-button-prev' style={{ color: '#313131' }}></div>
      <SwiperSlide>
        <Image
          src={firstSlide}
          alt='Slider Product'
          className={styles.img__slider}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={thirdSlice}
          alt='Slider Product'
          className={styles.img__slider}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={secondSlide}
          alt='Slider Product'
          className={styles.img__slider}
        />
      </SwiperSlide>
    </Swiper>
  );
};
