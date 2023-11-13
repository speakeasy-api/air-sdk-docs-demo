import React, { FC } from 'react';
import NextLink from 'next/link';

import Logo from '@/src/components/Logo';

import styles from './styles.module.scss';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <Logo />
    <div className={styles.footer_links}>
      <div className={styles.footer_links_social}>
        <p className={styles.footer_links_social_inc}>
          <NextLink
            href={'https://www.speakeasyapi.dev/'}
            key={'speakeasy'}
            target='_blank'
          >
            Built by Speakeasy
          </NextLink>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
