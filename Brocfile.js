'use strict';

var filterLiveScript = require('./index');

module.exports = function(broccoli) {
  return filterLiveScript(broccoli.makeTree('test/fixture'), {
    bare: true
  });
};
