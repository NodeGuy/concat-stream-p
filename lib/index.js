'use strict';

var
  concat = require('concat-stream');

module.exports = function (options) {
  var
    stream, resolve;

  stream = concat(options, function (value) {
    resolve(value);
  });

  stream.then = function (onFulfilled) {
    resolve = onFulfilled;
  };

  return stream;
};
