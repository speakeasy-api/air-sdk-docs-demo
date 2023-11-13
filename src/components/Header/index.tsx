import React, { FC } from 'react';
import NextLink from 'next/link';

import Logo from '@/src/components/Logo';
import ThemeToggle from '@/src/components/ThemeToggle';

import styles from './styles.module.scss';

const Header: FC = () => (
  <div className={styles.headerRoot}>
    <div className={styles.headerInner}>
      <div>
        <NextLink href='/'>
          <Logo />
        </NextLink>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  </div>
);

export default Header;
