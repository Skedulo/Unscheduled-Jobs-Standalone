const path = require('path');

module.exports = {
  entry: './src/handler.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js', '.graphql' ],
  },
  output: {
    libraryTarget: 'commonjs2',
    filename: 'handler.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
