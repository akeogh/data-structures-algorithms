//takes an array and returns a copy of the array with all the duplicates removed.
//assuming: want a "pure" function which does not modify original.
exports = module.exports = function unique(array) {
  var seen = {};
  var unique = [];
  for(var i = 0; i < array.length; i++) {
    if(!seen[array[i]]) {
      seen[array[i]] = true;
      unique[unique.length] = array[i];
    }
  }
  return unique;
}
