// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var result = [];
  var innerF = function(list) {
    if (list.length === 0) {
      return;
    }
    if (result[result.length - 1] !== list[0]) {
      result.push(list[0]);
    }
    innerF(list.slice(1));
  }
  innerF(list);
  return result;
};

console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4]));