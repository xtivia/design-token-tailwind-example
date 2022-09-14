const tokens = require('./design-tokens');
const colors = require('./get-colors');
const sanitizeClass = (className) => className.toLowerCase().replace(/[^a-z0-9]/gi, '')
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
    sanitizeClass(attributes.type), `${value.fontFamily}`
  ])
);
const margin = Object.fromEntries(Object
  .values(tokens.font)
  .map(({ attributes, value }) => [
    sanitizeClass(attributes.type), `${value.paragraphSpacing / value.fontSize}em`,
  ])
);
module.exports = { colors, fontFamily, fontSize, margin }