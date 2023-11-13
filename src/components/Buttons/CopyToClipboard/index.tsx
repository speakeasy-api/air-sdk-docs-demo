import React, { FC, useCallback, useEffect, useState } from 'react';

import CheckIcon from '@/src/icons/CheckIcon';
import CopyIcon from '@/src/icons/CopyIcon';

import styles from './styles.module.scss';

interface ICopyToClipboard {
  getValue(): string;
}

const CopyToClipboard: FC<ICopyToClipboard> = ({ getValue }) => {
  const [isCopied, setCopied] = useState<boolean>(false);

  const handleClick = useCallback(async () => {
    setCopied(true);

    if (!navigator?.clipboard) {
      console.error('Access to clipboard rejected!');
    }

    try {
      await navigator.clipboard.writeText(getValue());
    } catch {
      console.error('Failed to copy!');
    }
  }, [getValue]);

  const IconToUse = isCopied ? CheckIcon : CopyIcon;

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);

  return (
    <button type='button' className={styles.button} onClick={handleClick}>
      <IconToUse />
    </button>
  );
};

export default CopyToClipboard;
