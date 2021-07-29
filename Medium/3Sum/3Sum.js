function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < array.length - 2; i++) {
		let currentNum = array[i];
		let l = i + 1;
		let r = array.length - 1;
		while (l < r) {
			const currentSum = currentNum + array[l] + array[r]
			if (currentSum === targetSum) {
				result.push([currentNum, array[l], array[r]]);
				l++;
				r--;
			} else if (currentSum < targetSum) {
				l++;
			} else if (currentSum > targetSum) {
				r--;
			}
		}
	}
	return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))