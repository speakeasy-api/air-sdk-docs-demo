import React, { FC } from 'react';

import styles from './styles.module.scss';

const Moon: FC = () => (
  <svg
    width='21'
    height='20'
    viewBox='0 0 21 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.5361 2.5C9.54157 3.49456 8.98284 4.84348 8.98284 6.25C8.98284 7.65652 9.54157 9.00544 10.5361 10C11.5307 10.9946 12.8796 11.5533 14.2861 11.5533C15.6927 11.5533 17.0416 10.9946 18.0361 10C18.0361 11.4834 17.5963 12.9334 16.7722 14.1668C15.948 15.4001 14.7767 16.3614 13.4063 16.9291C12.0358 17.4968 10.5278 17.6453 9.07296 17.3559C7.6181 17.0665 6.28173 16.3522 5.23284 15.3033C4.18394 14.2544 3.46964 12.918 3.18025 11.4632C2.89086 10.0083 3.03938 8.50032 3.60704 7.12987C4.1747 5.75943 5.13599 4.58809 6.36936 3.76398C7.60273 2.93987 9.05278 2.5 10.5361 2.5Z'
      stroke='url(#gradient-moon)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.3694 2.5V5.83333'
      stroke='url(#gradient-moon)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.0362 4.16675H14.7028'
      stroke='url(#gradient-moon)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='gradient-moon'
        x1='3.03613'
        y1='17.5'
        x2='11.3588'
        y2='-0.574669'
        gradientUnits='userSpaceOnUse'
      >
        <stop className={styles.startColor} />
        <stop offset={1} className={styles.endColor} />
      </linearGradient>
    </defs>
  </svg>
);

export default Moon;
