'use strict';

var assert = require('assert');
var fs = require('fs');

var expected = "['ha', 'ha', 'ha'];";

describe('broccoli-livescript', function () {
  it('should compile LiveScript to JavaScript', function (done) {
    fs.readFile('test/actual/simple.js', function(err, data) {
      if (err) done(err);
      assert.strictEqual(data.toString(), expected);
      done();
    });
  });
});