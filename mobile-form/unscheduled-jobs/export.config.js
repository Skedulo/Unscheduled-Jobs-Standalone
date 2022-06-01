
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var webpack = require('webpack');

var outputDirectory = path.join(__dirname, './export')

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: {
    "./tools/wd-server": "./tools/wd-server"
  },
  output: {
    path: outputDirectory,
    filename: '[name].js'
  },
  resolve: {
    root: [__dirname],
    modulesDirectories: [__dirname, "node_modules"]
  },
  module: {
    loaders: [
      // Javascript and jsx assets
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',

        query: {
          presets: ["es2015","stage-0"],
          plugins: [
            'lodash',
            // This changes the async method to use bluebird's coroutine method instead. (Way Bettah)
            ["transform-async-to-module-method", {
              "module": "bluebird",
              "method": "coroutine"
            }],
            'transform-runtime',
            'transform-flow-strip-types'
          ]
        }
      },
      // Typescript
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  externals: [nodeModules],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      mangle: {
        except: ['$super', '$', 'exports', 'require', '__dirname', 'module.exports']
      },
      output: {
        comments: false
      }
    })
  ]
}