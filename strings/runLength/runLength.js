//O(N) solution

function runLengthEncoding(string) {
  //create counter var
	var counter = 1;

	//create result string
	var result = [];

	//loop through string
	for (var i = 1; i < string.length; i++) {
	  var currentChar = string[i];
		var previousChar = string[i - 1];

		if (currentChar !== previousChar || counter === 9) {
			result.push(counter.toString());
			result.push(previousChar);
			counter = 0;
		}
		counter++
	}

	result.push(counter.toString());
	result.push(string[string.length - 1]);

	//return result string
	return result.join('');
}


console.log(runLengthEncoding('AAAAAABBBBBCCCCCRTTUUU'));
