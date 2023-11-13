import React, { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

const RightArrow: FC<{ activeClass: string; nested?: boolean }> = ({
  activeClass,
  nested,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={cn(styles.right_arrow, {
      [styles[activeClass]]: activeClass,
      [styles['nested']]: nested,
    })}
  >
    <path
      className={cn(styles.right_arrow_path, { [styles['nested']]: nested })}
      d='M6 12L10 8L6 4'
      stroke='#DFDFE5'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default RightArrow;
