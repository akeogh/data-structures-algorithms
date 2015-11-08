// remove and return the last element of the array.
module.exports = function pop(array) {
  var element = array[array.length - 1];
  array.length--;
  return element;
}
