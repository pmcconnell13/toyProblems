function isPalindrome(string) {
  return (string.split('').reverse().join('') === string)
}

// function isPalindrome(string) {
//   var result = [];
//   for (var i = string.length - 1; i>=0; i--) {
//     result.push(string[i]);
//   }
//   return string === result.join('')
// }

console.log(isPalindrome('abccba'));


//regex version
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[\W_]/g,"");
  return s.split('').reverse().join('') === s
};
