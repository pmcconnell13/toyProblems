/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  //create storage object
  var storage = {};
  //create longest variable
  var longestSub = 0;
  //current length variable
  var currentLength = 0;
  //loop through string
  for (var i = 0; i < s.length; i++) {
      var currentEl = s[i]
      //if current val doesn't exist in object
      if (!storage[currentEl]) {
          //add it to object
          storage[currentEl] = 1;
     //increase current length by 1
          currentLength++;
      } else {
      //if it does exist
     //create new storage object
      storage = {}
     //make longest variable result of math.max longest, current
      longestSub = Math.max(longestSub, currentLength);
     //current = 0
      currentLength = 0;
      }
  }
 return longestSub;
  //return longest

};

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.