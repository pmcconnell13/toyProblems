function productSum(array, multiplier = 1) {
	var sum = 0;
	for (var element of array) {
		if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1)
		} else {
			sum += element;
		}
	}
	return sum * multiplier;
}