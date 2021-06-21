// Given a string, find the length of the longest substring T that contains at most k distinct characters.

// Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: T is "ece" which its length is 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which its length is 2.

function longestSubstring (string, k) {

  var container = {};
  var highestCount = 0;
  var counter = 0;
  var kMatch = 0;

  for (var i = 0; i < string.length; i++) {
    if (!container[string[i]]) {
      kMatch++;
      if (kMatch > k) {
        container = {};
        counter = 0;
        kMatch = 0;
      } else {
        container[string[i]] = 1;
        counter++;
        highestCount = Math.max(highestCount, counter);
      }
    } else {
      counter++;
      highestCount = Math.max(highestCount, counter);
      container[string[i]]++;
    }
  }

  return highestCount;

};

console.log(longestSubstring('eceba', 2));
console.log(longestSubstring('', 2));