// function bubbleSort(array) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
// 				var temp = array[j];
// 				array[j] = array[j + 1];
// 				array[j + 1] = temp;
// 			}
// 		}
// 	}
// 	return array
// }

// // Do not edit the line below.
// exports.bubbleSort = bubbleSort;

function bubbleSort(array) {
	var arrayLength = array.length;
  //loop through array
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			 //if current value is greater than next value
			 if (array[j] >= array[j + 1]) {
				 //swap them
				 var temp = array[j + 1];
				 array[j + 1] = array[j];
				 array[j] = temp;
			 }
		 }
	}
	return array
}

console.log(bubbleSort([3, 2, 6, 4, 1, 9, 8, 8, 3]))
