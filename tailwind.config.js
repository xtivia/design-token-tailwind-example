/** @type {import('tailwindcss').Config} */
const {colors, fontFamily, fontSize, margin} = require('./design-tokens/parsed-tokens')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./forms/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: Object.assign(colors, {
        "white": "#ffffff",
      }),
      fontSize,
      fontFamily,
      margin,
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": colors.primary || "#570DF8",
          "secondary": colors.secondary || "#F000B8",
          "accent": colors.accent || "#37CDBE",
          "neutral": colors.neutral || "#3D4451",
          "base-100": colors.base100 || "#FFFFFF",
          "info": colors.info || "#3ABFF8",
          "success": colors.success || "#36D399",
          "warning": colors.warning || "#FBBD23",
          "error": colors.error || "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
}
