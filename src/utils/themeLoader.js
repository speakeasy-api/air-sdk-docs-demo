// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const yaml = require('js-yaml');

const theme = yaml.load(fs.readFileSync('theme.yaml', 'utf8'));

module.exports = theme;
