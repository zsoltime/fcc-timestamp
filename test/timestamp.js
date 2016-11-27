const test = require('tape');
const timestamp = require('../timestamp.js');

test('should return with an object', function(t) {
  t.is(typeof timestamp(), 'object');
  t.end();
});

test('should return an object which has a unix and a natural key', function(t) {
  var actual = Object.keys(timestamp());
  var expected = ['unix', 'natural'];
  t.same(actual, expected);
  t.end();
});

test('should return both formats if I pass a unix timestamp', function(t) {
  var actual = timestamp(1480281405);
  var expected = {
    unix: 1480281405,
    natural: 'November 27, 2016'
  };
  t.same(actual, expected);
  t.end();
});

test('should return both formats if I pass a human readable date', function(t) {
  var actual = timestamp('June 19, 2016');
  var expected = {
    unix: 1466290800,
    natural: 'June 19, 2016'
  };
  t.same(actual, expected);
  t.end();
});

test('should return both formats if I pass a human readable date', function(t) {
  var actual = timestamp('2016 6 19');
  var expected = {
    unix: 1466290800,
    natural: 'June 19, 2016'
  };
  t.same(actual, expected);
  t.end();
});


test('should return null for both formats if I pass a non-date argument', function(t) {
  var actual = timestamp('gibberish');
  var expected = {
    unix: null,
    natural: null
  };
  t.same(actual, expected);
  t.end();
});
