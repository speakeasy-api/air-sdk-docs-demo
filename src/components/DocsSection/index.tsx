import React, { ReactNode, useContext, FC } from 'react';

import { RouteContext } from '@/src/components/scrollManager';

interface IDocsSection {
  route?: string;
  children?: ReactNode;
}

const DocsSection: FC<IDocsSection> = ({ route, children }) => {
  let parentRoute = useContext(RouteContext);

  if (parentRoute === '/') {
    parentRoute = '';
  }

  return (
    <RouteContext.Provider value={`${parentRoute}/${route ?? ''}`}>
      <div>{children}</div>
    </RouteContext.Provider>
  );
};

export default DocsSection;
