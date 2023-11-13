export const isBrowser = typeof window !== 'undefined';

export const checkIsLinkInternal = (href: string): boolean => {
  const regEx = /^http/;

  return !regEx.test(href);
};
