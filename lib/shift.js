// remove and return first element of the array.
module.exports = function shift(array) {
  var element = array[0];
  for(var i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length--;
  return element;
}
