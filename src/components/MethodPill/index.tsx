import { FC } from 'react';

import styles from './styles.module.scss';

const MethodPill: FC<{
  method: string;
}> = ({ method }) => <span className={styles.methodPill}>{method}</span>;

export default MethodPill;
