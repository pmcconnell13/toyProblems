function twoSums(arr, s) {
    var result = [];
    var contain = {};
    for (var i = 0; i < arr.length; i++) {
      if (contain[arr[i]]) {
        result.push([arr[i], contain[arr[i]]])
      }
       contain[s - arr[i]] = arr[i];
    }
    return result;
  }

console.log(twoSums([3, 5, 2, -4, 8, 11], 7));
console.log(twoSums([4, 5, 2, 4, 8, 11], 6));


