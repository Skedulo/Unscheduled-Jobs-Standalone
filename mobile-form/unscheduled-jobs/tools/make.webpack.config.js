/**
 * @contributes : Harish Subramanium, Son Dieu
 * 
 *
 * Makes webpack config's based on the passed parameters and returns a config that can be used by webpack
 */

"use strict";

var fs = require("fs");
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var _ = require("lodash");
var webpack = require("webpack");
var rimraf = require("rimraf");

var workingDirectory = path.resolve(__dirname, "../public/");
var outputDirectoryRoot = path.resolve(__dirname, "../dist");

// Delete the output folder path, since it'll be regenerated from scratch
rimraf.sync(outputDirectoryRoot);
fs.mkdirSync(outputDirectoryRoot);

module.exports = function (buildConfig) {

  // Default buildConfig vals. These are the keys that can be passed through.
  buildConfig = _.assign(
    {
      mode: "development",
      watch: false,
      debug: false,
      minimize: false,
      bail: false,
      infrastructureLogging: {
        level: 'error'
      }
    },
    buildConfig
  );

  var minimize = buildConfig.minimize;

  var rules = [
    // Javascript and jsx assets
    {
      test: /\.js$/,
      exclude: /(node_modules|Uranium)/,
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|Uranium)/,
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-react']
      }
    },
    // Typescript
    {
      test: /\.ts$/,
      exclude: /(node_modules|Uranium)/,
      loader: "ts-loader?configFile=public/tsconfig.json&transpileOnly=true"
    },
    {
      test: /\.tsx?$/,
      loader: "ts-loader?configFile=public/tsconfig.json&transpileOnly=true"
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        'sass-loader'
      ],
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },

    // Handling image assets
    { test: /(\.png|\.gif|\.jpg|\.jpeg)$/, use: ["url-loader"] },

    // Handling webfonts
    { test: /(\.woff|\.eot|\.svg|\.ttf)($|\?)/, use: ["url-loader"] },

    // Handling HTML
    { test: /\.html$/, loader: "html-loader" },

    {
      test: /angular-.+\.js$/,
      enforce: "pre",
      loader: "imports-loader?angular"
      // use: [
      //   {
      //     loader: "imports-loader",
      //     options: {
      //       imports: [
      //         {
      //           syntax: "default",
      //           moduleName: "angular",
      //           name: "angular",
      //         },
      //       ],
      //     },
      //   }
      // ]
    }
  ];

  var resolve = {
    // root: [workingDirectory],
    // modulesDirectories: ["javascripts", "node_modules", "stylesheets"],
    modules: [
      workingDirectory, "javascripts", "node_modules", "stylesheets"
    ],
    extensions: [".js", ".jsx", ".scss", ".ts", ".tsx", ".jsx", ".html", "..."],
    enforceExtension: false,
    alias: {
      // Internal Package maps
      // External Package maps
    }
  };

  var externals = [
    {
      ga: true,

      // Browser specific global's required for jsx and jsNext files
      window: true,
      document: true
    }
  ];

  // Ignores these modules from the node_modules folder. Significantly speeds up build and re-build time
  // especially when using file watching.
  var noParse = /jquery/;

  var entry = {
    // Javascript entry points for each platform
    main: "./tools/platforms/browser",
    node: "./tools/platforms/node",
    native: "./tools/platforms/native"
  };

  var output = {
    path: outputDirectoryRoot,
    pathinfo: !buildConfig.minimize,

    // The main bootstrap file has the chunkhash appended to it as a query string.
    // It dosen't serve any purpose at the moment, but once webpack handles the HTML assets as well
    // we can add the hash to the filename here as well.
    filename: "[name].js" + (buildConfig.minimize ? "?[chunkhash]" : ""),

    // Chunk filename has the hash defined as part of the filename
    chunkFilename: buildConfig.minimize ? "[name].js" : "[id].js",
    crossOriginLoading: "anonymous",
    publicPath: buildConfig.publicPath ? buildConfig.publicPath : ""
  };
  // console.log("👉 SLOG:  → output", output)

  var node = {
    global: true,

    path: false,
    timers: false,
    Buffer: false,
    process: false,
    fs: false
  };

  // Delete the output folder path, since it'll be regenerated from scratch
  rimraf.sync(output.path);

  // Any legacy AMD modules should be defined here
  var amd = {};

  var plugins = _.compact([

    // When code is minimized, this feature flag is set which can be used to optionally enable / disable features
    new webpack.DefinePlugin({
      __PROD__: buildConfig.minimize,
      "process.env": {
        NODE_ENV: JSON.stringify(buildConfig.mode)
      },
      __WEBPACK_LIVE__: JSON.stringify(process.env.__WEBPACK_LIVE__ || false),
      __HTTPS__: JSON.stringify(process.env.__HTTPS__ || false)
    }),

    // Prevent moment from including all locales' :-|
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),

    // Global moment <-> moment-timezone
    new webpack.ProvidePlugin({
      moment: "moment-timezone"
    }),

    new webpack.LoaderOptionsPlugin({
      debug: buildConfig.debug
    }),

    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),

    new HtmlWebpackPlugin({
      title: "Skedulo",
      template: 'public/index.html',
      chunks: ["main"]
    })
  ]);


  const { bail, watch, infrastructureLogging, mode } = buildConfig

  const config = {
    context: process.cwd(),
    entry: entry,
    cache: {},
    node: node,
    amd: amd,
    module: {
      rules: rules,
      noParse: noParse
    },
    stats: "errors-warnings",
    plugins: plugins,
    resolve: resolve,
    externals: externals,
    output: output,
    devtool: false,
    bail, watch, infrastructureLogging, mode,
    performance: {
      hints: false,
    },
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          sourceMap: true,
          uglifyOptions: {
            esma: 5,
            compress: {
              drop_console: true,
            },
          }
        }),
      ],
    }
  }
  // Print's the final config out to stdout. (For debugging purposes if required)
  // console.debug("\nConfig Options --> \n", JSON.stringify(config, null, 4), "\n");

  return config;
};
