/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const romans = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let result = 0;
  for (let i = 0; i < s.length; i++) {
      let current = romans[s[i]];
      if ((s[i] === 'V' || s[i] === 'X') && s[i - 1] && s[i - 1] === 'I') {
          result += current - 2
      } else if ((s[i] === 'L' || s[i] === 'C') && s[i - 1] && s[i - 1] === 'X') {
          result += current - 20
      } else if ((s[i] === 'D' || s[i] === 'M') && s[i - 1] && s[i - 1] === 'C') {
          result += current - 200
      } else {
          result += current;
      }
  }
  return result;
};

Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
