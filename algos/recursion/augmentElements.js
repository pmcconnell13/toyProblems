// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];
  var innerF = function(array) {
    if (array.length === 0) {
      return;
    }
    array[0].push(aug);
    result.push(array[0]);
    innerF(array.slice(1));
  }
  innerF(array);
  return result;
};

console.log(augmentElements([[],[3],[7]], 5));