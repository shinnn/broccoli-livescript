'use strict';

var assert = require('assert');
var fs = require('fs');

var expected = "['ha', 'ha', 'ha'];";

describe('broccoli-livescript', function () {
  it('should run LiveScript compiler', function (done) {
    fs.readFile('test/actual/src.js', function(err, data) {
      assert.strictEqual(data.toString(), expected);
      done();
    });
  });
});