// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  var innerF = function (arr) {
    arr.forEach((val) => {
      if (Array.isArray(val)) {
        innerF(val);
      } else {
        result.push(val)
      }
    })
  }
  innerF(array);
  return result
};
console.log(flatten([1,[2],[3,[[4]]],5]));