'use strict';

var Filter = require('broccoli-filter');
var LiveScript = require('LiveScript');

function LiveScriptFilter(inputTree, options) {
  if (!(this instanceof LiveScriptFilter)) {
    return new LiveScriptFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
}

LiveScriptFilter.prototype = Object.create(Filter.prototype);
LiveScriptFilter.prototype.constructor = LiveScriptFilter;

LiveScriptFilter.prototype.extensions = ['ls'];
LiveScriptFilter.prototype.targetExtension = 'js';

LiveScriptFilter.prototype.processString = function(str) {
  return LiveScript.compile(str, this.options);
};

module.exports = LiveScriptFilter;
