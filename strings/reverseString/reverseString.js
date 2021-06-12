function reverseWordsInString(string) {
	var result = [];
	var tempString = '';
  //loop through the string
	  //if current char is a space
	    //unshift holder string to result
	    //unshift that space to result array
	    //temp string equals empty string again
	  //if current char is not a space
	    //tempString += character
	for (var i = 0; i < string.length; i++) {
		if (string[i] !== ' ') {
			tempString += string[i];
		}
		if (string[i] === ' ') {
			result.unshift(tempString);
			result.unshift(string[i]);
			tempString = '';
		}
		if (!string[i + 1]) {
			result.unshift(tempString);
		}
	}

  return result.join('');
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
