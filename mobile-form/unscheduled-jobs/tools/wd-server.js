"use strict";

// Dev WebServer config here
require("../jsVNextify")

// Needed to run compiled TS SDK
require("babel-polyfill")

const fs = require('fs')
const os = require('os')
const path = require('path')
const https = require('https')

// Dev WebServer config here
const express = require('express')
const webpack = require('webpack')
const httpProxy = require('http-proxy')
const bodyParser = require('body-parser')

const request = require('request-promise')
const WebpackDevServer = require("webpack-dev-server")
const getServer = require('../sdk/dist/get-server.js').getServer;

getServer().then((res) => {
  startWebpack(res.apiServer, res.skedApiAccessToken)
})

function startWebpack(baseURL, skedApiAccessToken) {

  const host = "localhost"; // process.platform === "win32" ? "127.0.0.1" : "0.0.0.0";
  const port9050 = 9050;

  const webpackPort = 43213;

  var app = express();

  var config = require('./make.webpack.config.js')();
  // console.log("👉 SLOG:  → startWebpack → config", config.output)

  const __HTTPS__ = config.plugins[0].definitions.__HTTPS__.replace(/"/g, '') === "true";

  console.log("\nRunning dev-server for webpack. Please visit http%s://%s:%s\n", __HTTPS__ ? 's' : '', host, port9050);

  // Manually set environment variable for skedApiAccessToken
  config.plugins[0].definitions.__AUTH_API_TOKEN__ = JSON.stringify(skedApiAccessToken)

  var compiler = webpack(config);
  // console.log("👉 SLOG:  → startWebpack → compiler", compiler)

  var bundleStart

  compiler.plugin('compile', function () {
    console.log('Building ...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', function () {
    console.log('Built in ' + (Date.now() - bundleStart) + 'ms!');
  });

  // This server could be anywhere. Localhost on a different port or up on a server ( i.e beta1 )
  var serverProxy = new httpProxy.createProxyServer({
    changeOrigin: true,
    target: baseURL,
    headers: {
      Authorization: 'Bearer ' + skedApiAccessToken
    }
  });

  var webpackProxy = new httpProxy.createProxyServer({
    target: {
      host: host,
      port: webpackPort
    }
  })

  // UNCOMMENT THIS TO LOG Requests to CMD line
  // app.use(function (req, res, next) {
  //   console.log(req.hostname, req.path);
  //   next();
  // });

  // Forwards sockjs and webpack-dev server requests to webpack server
  // app.get(/webpack-dev-server.js|sockjs/, function (req, res) {
  app.get(/sockjs/, function (req, res) {

    // console.log("👉 SLOG:  → Forwards sockjs and webpack-dev server requests to webpack server")

    webpackProxy.web(req, res, {}, function (err) { });
  });

  // Used when the local form requests the form directly
  app.all(/^\/form\/.+/, function (req, res) {
    // Url Re-writing. Removing the `/customform` bit.

    req.url = req.url.replace("/form", "");

    // console.log("👉 SLOG:  → Url Re-writing. Removing the `/customform` bit.", req.url)
    webpackProxy.web(req, res, {}, function (err) { });
  })

  app.all(/^\/vocabulary/, function (req, res) {
    request.get({
      url: baseURL + '/custom/vocabularies',
      headers: {
        Authorization: 'Bearer ' + skedApiAccessToken
      }
    })
      .then(result => {

        res.writeHead(201, {
          'Content-Type': 'application/json'
        })

        // Parity with legacy endpoint requires nested structure
        const nestedResult = JSON.stringify(JSON.parse(result).result)
        res.write(Buffer.from(nestedResult))
      })
      .catch(error => {
        const { response } = error

        if (response.statusCode >= 400 && response.statusCode < 500) {
          res.writeHead(response.statusCode, response.headers)
          res.write(Buffer.from(response.body))
        } else {
          res.writeHead(response.statusCode)
        }

      })
      .finally(() => res.end())
  })

  app.all(/^\/usermetadata/, function (req, res) {
    request.get({
      url: baseURL + '/custom/usermetadata',
      headers: {
        Authorization: 'Bearer ' + skedApiAccessToken
      }
    })
      .then(result => {

        res.writeHead(201, {
          'Content-Type': 'application/json'
        })

        // Parity with legacy endpoint requires nested structure
        const nestedResult = JSON.stringify(JSON.parse(result).result)
        res.write(Buffer.from(nestedResult))
      })
      .catch(error => {
        const { response } = error

        if (response.statusCode >= 400 && response.statusCode < 500) {
          res.writeHead(response.statusCode, response.headers)
          res.write(Buffer.from(response.body))
        } else {
          res.writeHead(response.statusCode)
        }

      })
      .finally(() => res.end())
  })

  app.all(/^\/delattachment\/.+/, function (req, res) {
    req.url = req.url.replace('/delattachment', '/files/attachment')

    serverProxy.web(req, res, {}, function (err) {
      console.error(err)
    })
  })

  app.all(/^\/attachments\/.+/, function (req, res) {
    req.url = '/files' + req.url

    // We need to rewrite the response on-the-fly
    // So remove response gzipping
    delete req.headers['accept-encoding']

    var _write = res.write
    var _writeHead = res.writeHead

    res.writeHead = function (status, headers) {
      if (status !== 200) {
        _writeHead.call(res, status, headers)
      }
    }

    res.write = function (data) {
      const rawData = data.toString('utf8')
      const json = JSON.parse(rawData)
      const updatedData = Buffer.from(JSON.stringify(json.result))

      _writeHead.call(res, 200, { 'content-length': updatedData.length })
      _write.call(res, updatedData)
    }

    serverProxy.web(req, res, {}, function (err) {
      console.error(err)
    })

  })

  app.all(/^\/upload/, bodyParser.json({ limit: '25mb' }), function (req, res) {

    const { name, description, data, parent_id } = req.body
    const [type, file] = data.split(',')

    const contentType = type.replace('data:', '').replace(';base64', '')
    const fileData = Buffer.from(file, 'base64')

    request.post({
      url: baseURL + '/files/attachments/' + parent_id,
      headers: {
        Authorization: 'Bearer ' + skedApiAccessToken,
        'Content-Type': contentType,
        'Content-Length': fileData.length,
        'X-Skedulo-Name': name,
        'X-Skedulo-Description': description
      },
      body: fileData
    })
      .then(result => {

        res.writeHead(201, {
          'Content-Type': 'application/json'
        })

        res.write(Buffer.from(result))
      })
      .catch(error => {

        const { response } = error

        if (response.statusCode >= 400 && response.statusCode < 500) {
          res.writeHead(response.statusCode, response.headers)
          res.write(Buffer.from(response.body))
        } else {
          res.writeHead(response.statusCode)
        }

      })
      .finally(() => res.end())
  })

  app.all(/^\/attachment\/.+/, function (req, res) {

    req.url = `/files` + req.url

    serverProxy.web(req, res, {}, function (err) {
      console.error(err)
    })
  })

  // the others are forwarded to play server
  app.all("*", function (req, res) {
    // console.log("👉 SLOG:  → req", req)

    serverProxy.web(req, res, {}, function (err) {
      console.error(err)
    })
  })

  /** Web Servers **/
  let httpServer = null;

  if (__HTTPS__) {
    const sslDir = path.join(os.homedir(), '/.localhost-ssl/')
    const key = path.join(sslDir, 'server.key')
    const cert = path.join(sslDir, 'server.crt')

    if (!fs.existsSync(key) || !fs.existsSync(cert)) {
      throw new Error('Localhost SSL files required for Custom Form SDK.  Please setup the Connected Pages SDK to verify these exist')
    }

    // Setup HTTPS Server
    const options = {
      key: fs.readFileSync(key),
      cert: fs.readFileSync(cert)
    };
    httpServer = https.createServer(options, app).listen(port9050, host);
  } else {
    httpServer = app.listen(port9050, host)
  }

  // Handle all websocket events
  httpServer.on('upgrade', function (req, socket, head) {

    // console.log("👉 SLOG:  → startWebpack → httpServer: On upgrade")

    if (/sockjs-node/.test(req.url)) {
      return webpackProxy.ws(req, socket, head, function (err) { });
    }

    serverProxy.ws(req, socket, head, function (err) {

      if (err.code === "ECONNREFUSED") {
        console.log("Cannot reach Skedulo server. Please ensure that the play server is running...");
        return
      }

      throw err;
    });
  });

  const webpackServer = new WebpackDevServer({

    historyApiFallback: true,
    compress: true,
    liveReload: true,
    hot: true,
    host,
    port: webpackPort,
    webSocketServer: 'ws',
    static: {
      directory: '../public/',
      publicPath: [`http${__HTTPS__ ? 's' : ''}://${host}:${webpackPort}/javascripts`],
      watch: true
    },
    client: {
      logging: 'error',
      overlay: {
        errors: true,
        warnings: false,
      },
      webSocketTransport: 'ws',
      progress: true
    }
  }, compiler);

  console.time("Dev-server is started in ")
  webpackServer.startCallback(() => {
    console.timeEnd("Dev-server is started in ")
  })
}
