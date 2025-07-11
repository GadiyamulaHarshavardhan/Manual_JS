const path = require('path');
const webpackModeConfig = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    webpackModeConfig.devtool = 'source-map';
    console.log('Running in development mode with source maps');
  }

  if (argv.mode === 'production') {
    // Add minification or other optimizations
    console.log('Running in production mode');
  }

  return webpackModeConfig;
};