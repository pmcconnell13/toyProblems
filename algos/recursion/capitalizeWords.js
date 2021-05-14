// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var result = [];
  var innerF = function(arr) {
    if (arr.length === 0) {
      return
    }
    result.push(arr[0].toUpperCase());
    innerF(arr.slice(1))
  }
  innerF(array)

  return result
};

var words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));