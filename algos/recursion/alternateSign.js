// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];
  var innerF = function(array) {
    if (array.length === 0) {
      return;
    }
    if
    result.push(-array[0])

  }
  innerF(array);
  return result
};