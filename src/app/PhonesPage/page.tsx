'use client';

import { FC, useState, useEffect } from 'react';
import { CatalogPage } from '@/app/CatalogPage/page';
import styles from './phones.module.scss';
import phonesProducts from '@/common/products/products.json';
import Pagination from '@/components/ui/Pagination/Pagination';
import { CustomSelect } from '@/components/ui/Select/Select';
import { Phone } from '../../interfaces/phone';
import PhoneItem from '@/components/ui/CatalogItem/CatalogItem';
import Select from 'react-select';

const PhonesPage: FC = () => {
  const [products, setProducts] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [phonePerPage, setPhonePerPage] = useState<number>(8);

  useEffect(() => {
    setCurrentPage(1);
  }, [phonePerPage]);

  useEffect(() => {
    document.title = 'iMarketplace | Phones';
    getPhonesProducts();
  }, []);

  const getPhonesProducts = () => {
    const parsedProducts = phonesProducts.map((product) => ({
      ...product,
      memory: parseInt(product.memory),
    }));

    setProducts(parsedProducts);
  };

  const indexOfLastPhone = currentPage * phonePerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonePerPage;
  const currentPhones = products.slice(indexOfFirstPhone, indexOfLastPhone);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
    window.scrollTo({
      top: 250,
      behavior: 'smooth',
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
    window.scrollTo({
      top: 250,
      behavior: 'smooth',
    });
  };

  const itemsOptions = [
    { value: 2, label: 'Items 2' },
    { value: 4, label: 'Items 4' },
    { value: 6, label: 'Items 6' },
    { value: 8, label: 'Items 8' },
    { value: 16, label: 'Items 16' },
  ];

  const handlePhonePerPageChange = (
    selectedOption: { value: number; label: string } | null
  ) => {
    if (selectedOption) {
      setPhonePerPage(selectedOption.value);
    }
  };

  return (
    <div className={styles.phones} style={{ margin: '0 auto' }}>
      <div className={styles.catalog__container}>
        <CatalogPage
          smallTitle='Phones'
          models={`${products.length} models`}
          mainTitle='Mobile phones'
        />
        <div className={styles.page__select}>
          <label htmlFor='sort'>
            <span id='sort' className={styles.select__title}>
              Sort by:
            </span>
            <CustomSelect />
          </label>
          <label htmlFor='items'>
            <span id='items' className={styles.select__title}>
              Choose items:
            </span>
            <Select
              placeholder='Choose items'
              className={styles.select__width}
              options={itemsOptions}
              value={{ value: phonePerPage, label: `Items ${phonePerPage}` }}
              onChange={handlePhonePerPageChange}
            />
          </label>
        </div>
      </div>
      <div className={styles.catalog__containerPhones}>
        {currentPhones.map((product) => (
          <PhoneItem
            key={product.phoneId}
            displaySize={product.displaySize}
            imgUrl={product.imgUrl}
            title={product.title}
            phoneId={product.phoneId}
            capacity={`${product.capacity} GB`}
            memory={`${product.memory} GB`}
            discount={`${product.discount}$`}
            price={`${product.price}$`}
          />
        ))}
      </div>
      <div>
        <div className={styles.pagination__item}>
          <button
            className={`btn btn-secondary ${styles.btn__item}`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev Page
          </button>
          <Pagination
            currentPage={currentPage}
            phonePerPage={phonePerPage}
            totalPhones={products.length}
            paginate={paginate}
          />
          <button
            className={`btn btn-secondary ${styles.btn__item}`}
            onClick={nextPage}
            disabled={indexOfLastPhone >= products.length}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhonesPage;
