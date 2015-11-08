var expect = require('chai').expect;

var pop = require(__dirname + "/../lib/pop");
var push = require(__dirname + "/../lib/push");
var shift = require(__dirname + "/../lib/shift");
var unshift = require(__dirname + "/../lib/unshift");
var unique = require(__dirname + "/../lib/unique");
var frequency2 = require(__dirname + "/../lib/frequency2");

describe('the pop function', function() {
  it('should remove and return last element of an array', function() {
    var array = [1,2,3,4,5];
    expect(pop(array)).to.eql(5);
    expect(array.length).to.eql(4);
    expect(array).to.eql([1,2,3,4]);
  });
});

describe('the push function', function() {
  it('should add an element to the end of the array', function () {
    var array = [1,2,3,4,5];
    expect(push(array, 6)).to.eql([1,2,3,4,5,6]);
    expect(array.length).to.eql(6);
    expect(array[array.length - 1]).to.eql(6);
  });
});

describe('the shift function', function() {
  it('should remove and return the first element of the array', function () {
    var array = [1,2,3,4,5];
    expect(shift(array)).to.eql(1);
    expect(array.length).to.eql(4);
    expect(array[0]).to.eql(2);
  });
});

describe('the unshift function', function() {
  it('should add an element to the beginning of an array', function() {
    var array = [1,2,3,4,5];
    expect(unshift(array, 0)).to.eql([0,1,2,3,4,5]);
    expect(array.length).to.eql(6);
    expect(array[0]).to.eql(0);
  });
});

describe('the unique function', function() {
  it('should return an array with all duplicates removed', function() {
    var array = [2,2,6,9,2,3,6]
    expect(unique(array)).to.eql([2,6,9,3]);
    array = ['hello', 'hello', 'world', 'bar', 'foo', 'bar', 'fizz', 'world'];
    expect(unique(array)).to.eql(['hello', 'world', 'bar', 'foo', 'fizz']);
  });
});

describe('the frequency2 function', function() {
  it('should return the most common letter(anywhere in a word)', function() {
    expect(frequency2('hello')).to.eql('l');
  })
})
