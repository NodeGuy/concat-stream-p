'use strict';

var
  concat = require('concat-stream'),
  Promise = require('bluebird');

module.exports = function (options) {
  var
    promise, stream, streamResolve;

  promise = new Promise(function (resolve) {
    streamResolve = resolve;
  });

  stream = concat(options, function (value) {
    streamResolve(value);
  });

  stream.then = promise.then.bind(promise);
  return stream;
};
