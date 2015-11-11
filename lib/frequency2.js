// given an array of english words, figure out what the most common letter (
// anywhere in a word) is
// Assuming: array passed IS an array of strings

exports = module.exports = function frequency2(array) {
  var letters = {};
  for(var i = 0; i < array.length; i++) {
    for(var charIndex = 0; charIndex < array[i].length; charIndex++) {
      var letter = array[i].charAt(charIndex);
      !letters[letter] ? letters[letter] = 1 : letters[letter]++;
    }
  }
  var mostFrequent;
  for (var letter in letters) {
    if (!mostFrequent || letters[letter] > letters[mostFrequent]) mostFrequent = letter;
  }
  return mostFrequent;
}
