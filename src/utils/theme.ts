// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import themeJs from '!js-yaml-loader!/theme.yaml';

type Font = {
  name: string;
  url: string;
};

export type Theme = {
  title: string;
  primaryColor: string;
  logo: {
    light: string;
    dark: string;
    link: string;
  };
  favicon: string;
  codeTheme: string;
  fonts: {
    main: Font;
    code: Font;
  };
};

export const theme: Theme = themeJs as Theme;
export default theme;
