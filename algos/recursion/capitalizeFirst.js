// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var result = [];
  var innerF = function(arr) {
    if (arr.length === 0) {
      return;
    }
    result.push(arr[0][0].toUpperCase() + arr[0].substring(1));
    innerF(arr.slice(1));
  }
  innerF(array);
  return result;
};

console.log(capitalizeFirst(['car','poop','banana']))