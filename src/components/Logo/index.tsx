import React, { createRef, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import docsTheme from '@/src/utils/theme';

const Logo = () => {
  const { resolvedTheme } = useTheme();

  const darkSourceRef = createRef<HTMLSourceElement>();

  // This is necessary because of how Next handles images
  useEffect(() => {
    if (darkSourceRef.current) {
      darkSourceRef.current.media = resolvedTheme === 'dark' ? 'all' : 'none';
    }
  }, [resolvedTheme, darkSourceRef.current]);

  const logo = (
    <picture>
      <source
        ref={darkSourceRef}
        srcSet={docsTheme.logo.dark}
        media='(prefers-color-scheme: dark)'
      />
      <Image
        src={docsTheme.logo.light}
        alt='Logo'
        width={125}
        height={50}
        style={{ height: 'auto' }}
      />
    </picture>
  );

  return (
    <a
      href={docsTheme.logo.link}
      target={'_blank'}
      onClick={(e) => e.stopPropagation()}
    >
      {logo}
    </a>
  );
};

export default Logo;
