const kebabCase = require('lodash.kebabcase');
const tokens = require('./design-tokens');
const sanitizeClass = (className) => className.toLowerCase().replace(/[^a-z0-9]/gi, '')
const colors = Object.fromEntries(Object
  .values(tokens.color)
  .map(({ attributes, value }) => [
    kebabCase(attributes.type), value
  ])
);
const fontSize = Object.fromEntries(Object
  .values(tokens.font)
  .map(({ attributes, value }) => [
    sanitizeClass(attributes.type), [`${value.fontSize / 16}rem`, {
      letterSpacing: `${value.letterSpacing / value.fontSize}em`,
      lineHeight: `${value.lineHeight / value.fontSize}em`,
    }]
  ])
);
const fontFamily = Object.fromEntries(Object
  .values(tokens.font)
  .map(({ attributes, value }) => [
    sanitizeClass(attributes.type), `${value.fontFamily}, Arial, Helvetica, sans-serif`
  ])
);
const margin = Object.fromEntries(Object
  .values(tokens.font)
  .map(({ attributes, value }) => [
    sanitizeClass(attributes.type), `${value.paragraphSpacing / value.fontSize}em`,
  ])
);
module.exports = { colors, fontFamily, fontSize, margin }