// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];
  var count = 0;
  var innerF = function(array) {
    if (array.length === 0) {
      return;
    }
    if (count % 2 === 0) {
      result.push(Math.abs(array[0]));
    } else {
      result.push(-Math.abs(array[0]));
    }
    count++;
    innerF(array.slice(1))
  }
  innerF(array);
  return result
};

console.log(alternateSign([2,7,8,3,1,4])) // [2,-7,8,-3,1,-4]
console.log(alternateSign([-2,-7,8,3,-1,4]));