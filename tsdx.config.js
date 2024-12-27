const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
// const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {

    config.plugins = [
      postcss({ modules: true}),
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      // replace({
      //   'process.env.NODE_ENV': JSON.stringify(options.env),
      //   preventAssignment: true
      // }),
      ...config.plugins,
    ];
    return config;
  },
};
