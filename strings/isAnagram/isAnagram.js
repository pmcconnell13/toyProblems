// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

 var isAnagram = function(s, t) {
  var container = {};

  for (var i = 0; i < s.length; i++) {
    if (!container[s[i]]) {
        container[s[i]] = 1
    } else {
        container[s[i]]++
    }
  }

  for (var j = 0; j < t.length; j++) {
    if (!container[t[j]]) {
        return false
    } else {
        container[t[j]]--
        if (container[t[j]] < 0) {
            return false;
        }
    }
  }
  console.log(container)
  return true
};

console.log(isAnagram("anagram", "nagaram"));
