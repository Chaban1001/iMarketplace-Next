'use client';

import styles from '@/assets/styles/phone-characteristics.module.scss';
import { FC, useRef, useState, useEffect } from 'react';
import GoldColor from '@/project-images/colors-params/Color - Selected.svg';
import BlackColor from '@/project-images/colors-params/Color - Default-2.svg';
import WhiteColor from '@/project-images/colors-params/Color - Default-3.svg';
import GrayColor from '@/project-images/colors-params/Color - Default.svg';
import Image from 'next/image';

interface IProductMemory {
  small: string;
  middle: string;
  large: string;
}

interface PhoneCharacteristicsProps {
  setSelectMemory: (memory: string) => void;
}

export const PhoneCharacteristics: FC<PhoneCharacteristicsProps> = ({
  setSelectMemory,
}) => {
  const productMemory: IProductMemory = {
    small: '64 GB',
    middle: '128 GB',
    large: '256 GB',
  };

  const [selectMemory, setSelectMemoryState] = useState<string>(
    productMemory.middle
  );

  useEffect(() => {
    setSelectMemory(selectMemory);
    updateButtonStyles(1);
  }, []);

  const buttonsRefs: React.RefObject<HTMLButtonElement>[] = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  const resetButtonStyles = (): void => {
    buttonsRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.background = 'transparent';
        ref.current.style.color = '#313131';
      }
    });
  };

  const updateButtonStyles = (index: number) => {
    resetButtonStyles();
    const buttonRef = buttonsRefs[index]?.current;
    if (buttonRef) {
      buttonRef.style.background = '#313131';
      buttonRef.style.color = '#fff';
    } else {
      console.error(`Button ref at index ${index} is null or undefined`);
    }
  };

  const handleMemorySelection = (memory: string, index: number) => {
    setSelectMemoryState(memory);
    setSelectMemory(memory);
    updateButtonStyles(index);
  };

  return (
    <div className={styles.phoneCharacteristics__container}>
      <div className={styles.characteristics__block}>
        <div className={styles.colors__itemBlock}>
          <h4 className={styles.colors__title}>Available colors</h4>
          <div className={styles.checkColors__items}>
            <button type='button' className={styles.checkColor__button}>
              <Image src={GoldColor} alt='color-selected' />
            </button>
            <button type='button' className={styles.checkColor__button}>
              <Image src={BlackColor} alt='color-selected' />
            </button>
            <button type='button' className={styles.checkColor__button}>
              <Image src={WhiteColor} alt='color-selected' />
            </button>
            <button type='button' className={styles.checkColor__button}>
              <Image src={GrayColor} alt='color-selected' />
            </button>
          </div>
        </div>
        <div className={styles.selectCapacity__block}>
          <h4 className={styles.capacity__title}>
            Select capacity: {selectMemory}
          </h4>
          <div className={styles.capacity__buttons}>
            {Object.entries(productMemory).map(([key, value], index) => (
              <button
                key={key}
                ref={buttonsRefs[index]}
                onClick={() => handleMemorySelection(value, index)}
                className={`${styles.select__capacity} ${
                  selectMemory === value ? styles.selected : ''
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCharacteristics;
