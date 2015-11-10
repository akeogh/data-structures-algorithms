// add element to the beginning of the array.
module.exports = function unshift(array, element) {
  for(var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = element;
  return array.length;
}
