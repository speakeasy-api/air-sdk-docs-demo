import { FC, useContext } from 'react';

import { LanguageContext } from '@/src/utils/contexts/languageContext';

const OperationHeader: FC<{
  sdkHeader: React.ReactNode;
  curlHeader: React.ReactNode;
}> = ({ sdkHeader, curlHeader }) => {
  const { language } = useContext(LanguageContext);

  if (language == 'curl') {
    return curlHeader;
  } else {
    return sdkHeader;
  }
};
export default OperationHeader;
