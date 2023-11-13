import React from 'react';
import { useConfig } from 'nextra-theme-docs';

import { theme } from '@/src/utils/theme';

export const Head = () => {
  const { frontMatter } = useConfig();

  const title = frontMatter.title || 'Reference';

  return (
    <>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta
        property='og:description'
        content={frontMatter.description || 'SDK reference'}
      />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href={theme.fonts.main.url} rel='stylesheet' />
      <link href={theme.fonts.code.url} rel='stylesheet' />
      <link href={theme.favicon} rel={'icon'} />
    </>
  );
};
