import React, { FC } from 'react';

import styles from './styles.module.scss';

const Search: FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
  >
    <path
      className={styles.path}
      d='M7.33333 12.6669C10.2789 12.6669 12.6667 10.2791 12.6667 7.33358C12.6667 4.38806 10.2789 2.00024 7.33333 2.00024C4.38781 2.00024 2 4.38806 2 7.33358C2 10.2791 4.38781 12.6669 7.33333 12.6669Z'
      stroke={'#717173'}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      className={styles.path}
      d='M14 14.0002L11.1333 11.1335'
      stroke={'#717173'}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Search;
