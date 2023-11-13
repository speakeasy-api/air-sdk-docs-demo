import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

import ExternalLink from '@/src/icons/ExternalLink';
import { checkIsLinkInternal } from '@/src/utils/helpers';

import styles from './styles.module.scss';

interface ILinkWrapper {
  children: ReactNode;
  href: string;
}

const LinkWrapper: FC<ILinkWrapper> = ({ children, href = '/' }) => {
  const isInternalLink = checkIsLinkInternal(href);

  return isInternalLink ? (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  ) : (
    <a className={styles.link} href={href} target={'_blank'}>
      {children}
      <ExternalLink />
    </a>
  );
};

export default LinkWrapper;
