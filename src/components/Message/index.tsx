import React, { FC } from 'react';

import InfoIcon from '@/src/icons/InfoIcon';

import styles from './styles.module.scss';

const Message: FC<{ message: string }> = ({ message }) => (
  <div className={styles.message}>
    <InfoIcon />
    <p>{message}</p>
  </div>
);

export default Message;
