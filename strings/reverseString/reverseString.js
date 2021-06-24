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

Write a function that reverses a string. The input string is given as an array of characters s.



Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

var reverseString = function(s) {
	var left = 0;
	var right = s.length - 1
	while (left < right) {
			var temp = s[left];
			s[left] = s[right];
			s[right] = temp;
			left++;
			right--;
	}
	return s
};


