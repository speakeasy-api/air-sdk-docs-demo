import React, { FC } from 'react';

import styles from './styles.module.scss';

const Sun: FC = () => (
  <svg
    width='21'
    height='20'
    viewBox='0 0 21 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.5001 13.3334C12.341 13.3334 13.8334 11.841 13.8334 10.0001C13.8334 8.15913 12.341 6.66675 10.5001 6.66675C8.65913 6.66675 7.16675 8.15913 7.16675 10.0001C7.16675 11.841 8.65913 13.3334 10.5001 13.3334Z'
      stroke='url(#gradient)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.5 1.66675V3.33341'
      stroke='url(#gradient)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.5 16.6667V18.3334'
      stroke='url(#gradient)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.6084 4.1084L5.7834 5.2834'
      stroke='url(#gradient)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.2166 14.7166L16.3916 15.8916'
      stroke='url(#gradient)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.16675 10H3.83341'
      stroke='url(#gradient)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.1667 10H18.8334'
      stroke='url(#gradient)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.7834 14.7166L4.6084 15.8916'
      stroke='url(#gradient)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.3916 4.1084L15.2166 5.2834'
      stroke='url(#gradient)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='gradient'
        x1='7.16675'
        y1='13.3334'
        x2='10.8657'
        y2='5.30023'
        gradientUnits='userSpaceOnUse'
      >
        <stop className={styles.startColor} />
        <stop offset='1' className={styles.endColor} />
      </linearGradient>
    </defs>
  </svg>
);

export default Sun;
