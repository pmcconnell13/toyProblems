// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
  var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let storage = {};
    for (let i = 0; i < s.length; i++) {
      if (!storage[s[i]]) {
        storage[s[i]] = 1;
      } else {
          storage[s[i]]++
      }
    }
    for (let i = 0; i < t.length; i++) {
      if (!storage[t[i]]) {
          return false
      } else {
          storage[t[i]]--
      }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));
