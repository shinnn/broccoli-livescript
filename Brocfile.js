'use strict';

module.exports = function (broccoli) {
  return require('./index')(broccoli.makeTree('test/fixture'), {bare: true});
};
