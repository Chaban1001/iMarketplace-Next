import { FC, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import homeIcon from '@/project-images/icons/Home.svg';
import rightArrowIcon from '@/project-images/icons/Chevron (Arrow Right).svg';
import leftArrowIcon from '@/project-images/icons/Chevron (Arrow Left).svg';
import styles from '@/assets/styles/phones-page.module.scss';
import { ProductProps } from '@/interfaces/product-item';
import products from '@/common/products/products.json';
import NotFoundPage from '@/app/not-found';
import { PhoneCharacteristics } from '@/components/PhonesUI/PhoneCharacteristics/PhoneCharacteristics';
import PhonesAbout from '@/components/PhonesUI/PhonesAbout/PhonesAbout';
import PhonesTechSpecs from '@/components/PhonesUI/PhoneTechSpecs/PhoneTechSpecs';
import Image from 'next/image';

// eslint-disable-next-line react/display-name
const ProductItem: FC<ProductProps> = memo(() => {
  const router = useRouter();
  const { title } = router.query;
  const productTitle = title ? title.toString() : undefined;
  const phone = products.find((product) => product.title === productTitle);
  const [mainImage, setMainImage] = useState<string>(phone ? phone.imgUrl : '');
  const [selectMemory, setSelectMemory] = useState<string>('64 GB');

  useEffect(() => {
    const phone = products.find((product) => product.title === productTitle);
    if (phone) {
      setMainImage(phone.imgUrl);
    }
  }, [productTitle]);

  const goToHomePage = () => {
    router.push('/', undefined, { shallow: true });
  };

  const backToPhonesPage = () => {
    router.back();
  };

  if (!phone) {
    return <NotFoundPage statusText='404' message='This page is not defined' />;
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const getTitle = (selectedMemory: string) => {
    switch (selectedMemory) {
      case '64 GB':
        return `${phone.title?.replaceAll('-', ' ')} 64GB`;
      case '128 GB':
        return `${phone.title?.replaceAll('-', ' ')} 128GB`;
      case '256 GB':
        return `${phone.title?.replaceAll('-', ' ')} 256GB`;
      default:
        return phone.title?.replaceAll('-', ' ');
    }
  };

  return (
    <>
      <div className={styles.phone__navigationItem}>
        <Image
          onClick={goToHomePage}
          src={homeIcon}
          alt='Home Icon'
          style={{ cursor: 'pointer' }}
        />
        <Image
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={styles.arrowRight__icon}
        />
        <h4 className={styles.phone__phonesTitle}>Phones</h4>
        <Image
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={styles.arrowRight__icon}
        />
        <p className={styles.phoneModel__capture}>{getTitle(selectMemory)}</p>
      </div>
      <div className={styles.backButton__item}>
        <Image src={leftArrowIcon} alt='arrowLeft Icon' />
        <button onClick={backToPhonesPage} className={styles.phoneBack__button}>
          Back to Phones
        </button>
      </div>
      <h2 className={styles.phoneModel__title}>{getTitle(selectMemory)}</h2>
      <>
        <div className={styles.product__gallery}>
          <div className={styles.phonesAbout__block}>
            <div className={styles.phone__images}>
              <div className={styles.images__wrapper}>
                <Image
                  src={phone.firstImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.firstImage ? styles.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.firstImage)}
                />
                <Image
                  src={phone.secondImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.secondImage ? styles.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.secondImage)}
                />
                <Image
                  src={phone.thirdImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.thirdImage ? styles.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.thirdImage)}
                />
                <Image
                  src={phone.fourImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.fourImage ? styles.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.fourImage)}
                />
              </div>
              <Image
                src={mainImage}
                alt='product'
                className={styles.phone__img}
              />
            </div>
            <div className={styles.product__block}>
              <PhoneCharacteristics setSelectMemory={setSelectMemory} />
              <PhonesTechSpecs product={phone} selectMemory={selectMemory} />
            </div>
          </div>
          <PhonesAbout />
        </div>
      </>
    </>
  );
});

export default ProductItem;
