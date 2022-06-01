// Requiring this file will patch babel into node's require.
// This will allow all requires after this to contain babel'ified JS.

var Promise = require("bluebird")

// Set bluebird as the default promise library within babel. (Override native implementation)
require("babel-runtime/core-js/promise").default = Promise

// Promisify core node libraries
Promise.promisifyAll(require("fs"))
Promise.promisifyAll(require("http"))
Promise.promisifyAll(require('request'))

// Bind babel to "require".
require("@babel/register")({});

// Our work here is done.
