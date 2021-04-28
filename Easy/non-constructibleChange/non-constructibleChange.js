function nonConstructibleChange(coins) {
  //sort the array
	 //loop through
	  //at each iteration
	    //check if current value is greater than amount of change you can create + 1
	    //if it is, return amount of change you can create + 1
	    //otherwise, add to list and keep iterating
	//return total number

  var sorted = coins.sort((a, b) => a - b);
	var greatest = 0;
	for (var i = 0; i < sorted.length; i++) {
		if (sorted[i] > greatest + 1) {
			return greatest + 1
		}
			greatest += sorted[i]
	}
	return greatest + 1
}