/* eslint-env node */
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');
var postCssImport = require('postcss-import');

module.exports = {
  siteMetadata: {
    title: `Gatsby TypeScript Starter`,
  },
  plugins: [

    // Typescript
    `gatsby-plugin-typescript`,

    // Gatsby CMS
    `gatsby-plugin-netlify-cms`,

    // PostCSS
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          postCssImport(),
          tailwindcss('./tailwind.config.js'),
        ],
        precision: 8,
      },
    },
  ],
};
