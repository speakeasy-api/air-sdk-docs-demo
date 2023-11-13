const theme = require('./src/utils/themeLoader');
const withPlugins = require('next-compose-plugins');
const { remarkCodeHike } = require('@code-hike/mdx');
const jsonImporter = require('node-sass-json-importer');

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        { lineNumbers: true, showCopyButton: true, theme: theme.codeTheme },
      ],
    ],
  },
});

module.exports = withPlugins([], {
  sassOptions: {
    importer: jsonImporter(),
  },
  ...withNextra({
    output: 'export',
    distDir: 'out',
    images: {
      unoptimized: true,
    },
  }),
});
