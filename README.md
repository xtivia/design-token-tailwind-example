# Design Token Tailwind Example

A simple [Next.js](https://nextjs.org/) proof of concept that integrates typography and color [Style Dictionary](https://amzn.github.io/style-dictionary/#/) design tokens into [TailwindCSS](https://tailwindcss.com/).

This is a companion to the blog post [Bringing Your Figma Design System to Nextjs/Tailwind Using Style Dictionary](https://www.xtivia.com/blog/bringing-your-figma-design-system-to-tailwind-using-style-dictionary/)

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Replacing the sample with your own design token

Export a design token CommonJS module from style-dictionary into `/design-tokens/design-tokens.js`. 
__Important__: Make sure that your style dictionary config is set to output in `"javascript/module"` format

## 👋 About Me
I'm a UX designer and UI developer at Xtivia inc. I do my best to help make the internet shiny and easy to use for everyone!
