function hi(arr){
  var storage = {};
  for (var i = 0; i < arr.length; i++) {
    if (!storage[arr[i]]) {
      storage[arr[i]] = true;
    } else {
      return arr[i]
    }
  }
  return undefined
}

console.log(hi([1, 2, 3, 2, 3]))
console.log(hi([1, 2, 3, 4]))
console.log(hi([1, 2, 1, 3, 2, 3]))