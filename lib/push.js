// add an element to the end of the array.
module.exports = function push(array, element) {
  array[array.length] = element;
  return array;
}
