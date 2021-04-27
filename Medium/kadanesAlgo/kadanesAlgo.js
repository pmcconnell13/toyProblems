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