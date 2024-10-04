/* eslint-disable no-unused-vars */
module.exports = (_context, _options) => ({
  name: 'esm-docusaurus-plugin',
  configureWebpack(_config, _isServer, _utils) {
    return {
      module: {
        rules: [
          {
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
    };
  },
});
