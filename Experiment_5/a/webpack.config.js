const path = require('path');

module.exports = {
  mode: 'development', // Fix the warning
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '.'),
    clean: true,
  },
  devServer: {
    static: './',
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};