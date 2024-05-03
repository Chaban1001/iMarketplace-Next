'use client';

import { FC } from 'react';
import styles from './pagination.module.scss';
import { PaginationProps } from '@/interfaces/pagination';
import Link from 'next/link';

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
          <Link
            href={`#?page${number}`}
            className={`${styles.page__link} active-page`}
            onClick={() => paginate(number)}
          >
            {number}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
