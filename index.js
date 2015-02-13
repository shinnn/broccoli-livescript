'use strict';

var Filter = require('broccoli-filter');
var LiveScript = require('LiveScript');
var objectAssign = require('object-assign');

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
  // LiveScript overwrites the option object.
  return LiveScript.compile(str, objectAssign({}, this.options));
};

module.exports = LiveScriptFilter;
