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
		 //if current value is greater than next value
		 for (var j = 0; j < array.length; j++) {
			 if (array[j] >= array[j + 1]) {
				 var temp = array[j + 1];
				 array[j + 1] = array[j];
				 array[j] = temp;
			 }
		 }
	}
	    //swap them
	  //subtract 1 from array length when it gets to end
	return array
}

console.log(bubbleSort([3, 2, 6, 4, 9, 8, 8, 3]))
