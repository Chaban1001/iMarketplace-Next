'use client';

import { FC } from 'react';
import styles from '@/assets/styles/pagination.module.scss';
import { PaginationProps } from '@/interfaces/pagination';

type PaginationPageNumbers = Array<number>;

const Pagination: FC<PaginationProps> = ({
  phonePerPage,
  totalPhones,
  currentPage,
  paginate,
}) => {
  const pageNumbers: PaginationPageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhones / phonePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination center'>
      {pageNumbers.map((number) => (
        <li
          className={`page-item ${number === currentPage ? 'active-page' : ''}`}
          key={number}
        >
          <a
            href={`#?page${number}`}
            className={`${styles.page__link} active-page`}
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
