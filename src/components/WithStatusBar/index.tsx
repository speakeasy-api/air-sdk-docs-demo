import React, { FC } from 'react';

import styles from './styles.module.scss';

const WithStatusBar: FC<{
  statusItems: [string, string][];
  children: React.ReactNode;
}> = ({ statusItems, children }) => (
  <div className={styles.withStatusBar}>
    {children}
    {statusItems ? (
      <div className={styles.withStatusBar_infoBar}>
        {statusItems.map(([title, value], index) => (
          <div key={index}>
            <strong>{title}</strong>{' '}
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
    ) : null}
  </div>
);

export default WithStatusBar;
