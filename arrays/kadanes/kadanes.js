function kadanesAlgorithm(array) {
  let maxCurrent = array[0];
	let maxGlobal = array[0];

	for (var i = 1; i < array.length; i++) {
		maxCurrent = Math.max(array[i], maxCurrent + array[i])
		if (maxCurrent > maxGlobal) {
			maxGlobal = maxCurrent;
		}
	}
	return maxGlobal
}

console.log(kadanesAlgorithm([1, 4, 5, -6, 3, 5, -2, -4, 10]))