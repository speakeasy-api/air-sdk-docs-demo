import { FC } from 'react';

import styles from './styles.module.scss';

const StatusCode: FC<{ code: string }> = ({ code }) => (
  <span className={[styles.statusCodes_code, codeTypeStyle(code)].join(' ')}>
    {code}
  </span>
);

const codeTypeStyle = (code: string) => {
  const range = parseInt(code[0]);

  if (isNaN(range)) {
    return styles.statusCodes_codeInformative;
  }

  switch (range) {
    // 2xx
    case 2:
      return styles.statusCodes_codeSuccess;
    // 3xx
    case 3:
      return styles.statusCodes_codeRedirect;
    // 4xx, 5xx
    case 4:
    case 5:
      return styles.statusCodes_codeError;
    default:
      return styles.statusCodes_codeInformative;
  }
};

export default StatusCode;
