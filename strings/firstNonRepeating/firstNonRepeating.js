function firstNonRepeatingCharacter(string) {
  //create object for storage of reptition number and index
	//loop through string
	  //check if character exists in object
	  //if it doesn't, add char to object
	  //if it does, increment number of times seen
	//loop through string again
	//return first chars index that's only been seen once
	var storage = {};

	for (var i = 0; i < string.length; i++) {
		if (!storage[string[i]]) {
			storage[string[i]] = 1;
		} else {
			storage[string[i]]++;
		}
	}

	for (var j = 0; j < string.length; j++) {
		if (storage[string[j]] === 1) {
			return j
		}
	}

  return -1;
}

//check in 
