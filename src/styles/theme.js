/* eslint-disable */

const chroma = require('chroma-js');
const theme = require('../utils/themeLoader');

const toOKLCH = (color) => {
  [l, c, h] = chroma(color).oklch();

  return {
    lightness: l,
    chroma: c,
    hue: h,
  };
};

// Export only the values needed in CSS
module.exports = {
  primaryHexLight: theme.primaryColor.light,
  primaryHexDark: theme.primaryColor.dark,
  primaryLight: toOKLCH(theme.primaryColor.light),
  primaryDark: toOKLCH(theme.primaryColor.dark),
  mainFont: theme.fonts.main.name,
  codeFont: theme.fonts.code.name,
};
