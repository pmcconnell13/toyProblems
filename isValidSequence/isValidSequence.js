function isValidSubsequence(array, sequence) {
  //create count variable
	//create index variable to show where we are in array
	//loop through sequence
	  //loop through array, starting point is whatever index variable is
	    //if current value is first value in sequence
	      //add 1 to count
				//set index var to current array index
	      //break array loop
	//if count var === sequence length
	//return true
	var count = 0;
	var index = 0;
	for (var i = 0; i < sequence.length; i++) {
		for (var j = index; j < array.length; j++) {
			if (sequence[i] === array[j]) {
				count++;
				index = j + 1;
				break;
			}
			if (array[j + 1] === undefined) {
				return false;
			}
		}
	}
	if (count === sequence.length){
		return true;
	} else {
		return false;
	}
}

