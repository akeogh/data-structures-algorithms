// given an array of english words, figure out what the most common letter (
// anywhere in a word) is
// Assuming: array passed IS an array of strings

exports = module.exports = function frequency2(array) {
  var counts = {};
  var data = array.concat();
  for(var i = 0; i < data.length; i++) {
    !counts[data.charAt(i)] ? counts[data.charAt(i)] = 1 : counts[data.charAt(i)]++;
  }
  var highCount = 0;
  var mostFrequent = '';
  for (var prop in counts) {
    if (counts[prop] > highCount) {
      mostFrequent = prop;
      highCount = counts[prop];
    }
  }
  return mostFrequent;
}
