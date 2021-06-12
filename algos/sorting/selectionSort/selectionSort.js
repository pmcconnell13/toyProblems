function selectionSort(array) {
	for (var i = 0; i < array.length; i++) {
		var min = i;
		var smallest = array[i]
		for (var j = i+1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j
			}
		}
		array[i] = array[min]
		array[min] = smallest
	}
	return array
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
