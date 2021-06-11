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
