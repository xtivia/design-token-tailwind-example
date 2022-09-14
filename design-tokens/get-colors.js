const kebabCase = require('lodash.kebabcase');
const tokens = require('./design-tokens');
const ColorContrastChecker = require('color-contrast-checker');
const ccc = new ColorContrastChecker();
let colors = Object.fromEntries(Object
    .values(tokens.color)
    .map(({ attributes, value }) => [
        kebabCase(attributes.type), value
    ])
);
const black = (colors.body && ccc.isLevelAA(colors.body, "#FFFFFF", 16) ? colors.body : "#222222")
const white = (colors.body && !ccc.isLevelAA(colors.body, "#FFFFFF", 16) ? colors.body : "#FFFFFF")
Object.keys(colors).forEach((key) => {
    colors[`${key}-contrast`] = (ccc.isLevelAA(colors[key], white, 16))? white : black;
});
module.exports = colors;