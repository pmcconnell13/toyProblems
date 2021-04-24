function twoNumberSum(array, targetSum) {
  for (var i = 0; i < array.length; i++) {
		for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
				return [array[i], array[j]]
			}
		}
	}
	return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))