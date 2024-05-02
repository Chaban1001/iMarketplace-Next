'use client';

import { FC } from 'react';
import styles from '@/assets/styles/phones.module.scss';
import { PhonesProps } from '@/interfaces/phones';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PhoneItem from '@/components/ui/CatalogItem/CatalogItem';

const Phones: FC<PhonesProps> = ({ products }) => {
  return (
    <div className={styles.phones__catalog}>
      <Swiper
        wrapperClass={styles.swiper__wrapper}
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={35}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        slidesPerView={4}
        style={{ width: '1080px', margin: '0 auto', cursor: 'grab' }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.phoneId}
            className={styles.slide}
            style={{ width: '240px', marginLeft: 0 }}
          >
            <PhoneItem
              displaySize={product.displaySize}
              imgUrl={product.imgUrl}
              title={product.title}
              phoneId={product.phoneId}
              capacity={`${product.capacity} GB`}
              memory={`${product.memory} GB`}
              discount={`${product.discount}$`}
              price={`${product.price}$`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Phones;
