import { FC, memo, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import homeIcon from '@/project-images/icons/Home.svg';
import rightArrowIcon from '@/project-images/icons/Chevron (Arrow Right).svg';
import leftArrowIcon from '@/project-images/icons/Chevron (Arrow Left).svg';
import NotFoundPage from '@/app/not-found';
import { PhoneCharacteristics } from '@/components/PhonesUI/PhoneCharacteristics/PhoneCharacteristics';
import TabletsAbout from '@/components/TabletsUI/TabletsAbout/TabletsAbout';
import { TabletsTechSpecs } from '@/components/TabletsUI/TabletsTechSpecs/TabletsTechSpecs';
import { ProductItemProps } from '@/interfaces/tablets';
import styles from './phonePage.module.scss';
import { NavigationPaths } from '@/constants/navigation-paths';

type MainImage = string;
type SelectMemory = string;

// eslint-disable-next-line react/display-name
const ProductItem: FC<ProductItemProps> = memo(({ tablet }) => {
  const router = useRouter();
  const [mainImage, setMainImage] = useState<MainImage>('');
  const [selectMemory, setSelectMemory] = useState<SelectMemory>('64 GB');

  useEffect(() => {
    if (tablet && tablet.images && tablet.images.length > 0) {
      setMainImage(tablet.images[0]);
    }
  }, [tablet]);

  const goToHomePage = () => {
    router.push(NavigationPaths.HOME);
  };

  const backToTabletsPage = () => {
    router.push(NavigationPaths.TABLETS);
  };

  if (!tablet) {
    return <NotFoundPage statusText='404' message='This page is not defined' />;
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const getTitle = (selectedMemory: string) => {
    switch (selectedMemory) {
      case '64 GB':
        return `${tablet.name} 64GB`;
      case '128 GB':
        return `${tablet.name} 128GB`;
      case '256 GB':
        return `${tablet.name} 256GB`;
      default:
        return tablet.name;
    }
  };

  return (
    <>
      <div className={styles.phone__navigationItem}>
        <Image
          src={homeIcon}
          alt='Home Icon'
          onClick={goToHomePage}
          width={24}
          height={24}
          className={styles.homeIcon}
        />
        <Image
          src={rightArrowIcon}
          alt='arrowRight Icon'
          width={24}
          height={24}
          className={styles.arrowRight__icon}
        />
        <h4 className={styles.phone__phonesTitle}>Tablets</h4>
        <Image
          src={rightArrowIcon}
          alt='arrowRight Icon'
          width={24}
          height={24}
          className={styles.arrowRight__icon}
        />
        <p className={styles.phoneModel__capture}>{getTitle(selectMemory)}</p>
      </div>
      <div className={styles.backButton__item}>
        <Image
          src={leftArrowIcon}
          alt='arrowLeft Icon'
          width={24}
          height={24}
        />
        <button
          onClick={backToTabletsPage}
          className={styles.phoneBack__button}
        >
          Back to Tablets
        </button>
      </div>
      <h2 className={styles.phoneModel__title}>{getTitle(selectMemory)}</h2>
      <div className={styles.product__gallery}>
        <div className={styles.phonesAbout__block}>
          <div className={styles.phone__images}>
            <div className={styles.images__wrapper}>
              {tablet.images &&
                tablet.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt='tablet'
                    width={100}
                    height={100}
                    className={`${styles.phoneSmall__image} ${
                      mainImage === image ? styles.active : ''
                    }`}
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))}
            </div>
            <Image
              src={mainImage}
              alt='product'
              width={300}
              height={300}
              className={styles.phone__img}
            />
          </div>
          <div className={styles.product__block}>
            <PhoneCharacteristics setSelectMemory={setSelectMemory} />
            <TabletsTechSpecs product={tablet} selectCapacity={selectMemory} />
          </div>
        </div>
        <TabletsAbout />
      </div>
    </>
  );
});

export default ProductItem;
