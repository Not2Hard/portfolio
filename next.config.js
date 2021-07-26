const withCSS = require('@zeit/next-css')
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = withImages(withCSS(withSass({
  exportTrailingSlash: true,
    // exportPathMap: async function (
    //   defaultPathMap,
    //   { dev, dir, outDir, distDir, buildId }
    // ) {
    //   return {
    //     '/': { page: '/' },
    //     '/blank-page': { page: '/blank-page' },
    //     '/memory_game': { page: '/memory_game' },
    //     '/dao': { page: '/dao' },
    //     '/tap_and_fork': { page: '/tap_and_fork' },
    //     '/aws_map': { page: '/aws_map' },
    //     '/journey': { page: '/journey' },
    //     '/kefir': { page: '/kefir' },
    //     '/myPortfolio': { page: '/myPortfolio' },
    //     '/nv_martialarts': { page: '/nv_martialarts' },
    //     '/refkitchen': { page: '/refkitchen' },
    //     '/salami': { page: '/salami' },
    //     '/stock_board': { page: '/stock_board' },
    //     '/synovis': { page: '/synovis' },
    //     '/tf_editor': { page: '/tf_editor' }
    //   }
    // },

    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/blank-page': { page: '/blank-page' },
        '/memory_game': { page: '/memory_game' },
        '/dao': { page: '/dao' },
        '/tap_and_fork': { page: '/tap_and_fork' },
        '/aws_map': { page: '/aws_map' },
        '/journey': { page: '/journey' },
        '/kefir': { page: '/kefir' },
        '/myPortfolio': { page: '/myPortfolio' },
        '/nv_martialarts': { page: '/nv_martialarts' },
        '/refkitchen': { page: '/refkitchen' },
        '/salami': { page: '/salami' },
        '/stock_board': { page: '/stock_board' },
        '/synovis': { page: '/synovis' },
        '/tf_editor': { page: '/tf_editor' },
        '/one-world': { page: '/one-world' }
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
