const withCSS = require('@zeit/next-css')
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = withImages(withCSS(withSass({
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/blank-page': { page: '/blank-page' },
      };
    },
    publicRuntimeConfig: {
      localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
    },
    webpack: (config, options) => {

      config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
              loader: 'url-loader',
              options: {
                  limit: 100000
              }
          }
      });    

      config.node = {
        fs: 'empty'
      }      
      return config;
    },    
  })
));
