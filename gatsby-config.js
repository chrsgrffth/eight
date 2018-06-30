/* eslint-env node */
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');
var postCssImport = require('postcss-import');

module.exports = {
  siteMetadata: {
    title: `Gatsby TypeScript Starter`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
