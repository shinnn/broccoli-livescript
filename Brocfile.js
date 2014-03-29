'use strict';

var filterLiveScript = require('./index');

module.exports = function(broccoli) {
  return filterLiveScript('test/fixture', {
    bare: true
  });
};
