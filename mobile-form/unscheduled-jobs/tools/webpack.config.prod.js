const makeConfigFactory = require('./make.webpack.config.js');

const prodConfig = makeConfigFactory({
  minimize: true,
  mode: "production",
  infrastructureLogging: {
    level: 'info'
  }
});

module.exports = prodConfig