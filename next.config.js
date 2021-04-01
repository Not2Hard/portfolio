const withCSS = require('@zeit/next-css')
const withImages = require('next-images');

module.exports = withImages(
  withCSS({
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
      cssModules: true,
      //      config.module.rules.push({
      //          enforce: 'pre',
      //          test: /\.js?$/,
      //          exclude: [/node_modules/],
      //          loader: 'eslint-loader',
      //          options: {
      //            quiet: true,
      //          }
      //      });
      
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/, use: ['style-loader', 'css-loader'],
      //   include: /flexboxgrid/
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ['file-loader']
      // }

      
      config.node = {
        fs: 'empty'
      }
      
      return config;
    },
    
    
  
    
  })
);
