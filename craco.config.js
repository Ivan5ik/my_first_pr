const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': "#ab3838",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
