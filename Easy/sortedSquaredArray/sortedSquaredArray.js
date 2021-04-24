function sortedSquaredArray(array) {
  var result = [];
	for (var i = 0; i < array.length; i++) {
    result.push(array[i] ** 2)
	}
  return result.sort((a, b) => a -b)
}