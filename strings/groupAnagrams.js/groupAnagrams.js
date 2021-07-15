var groupAnagrams = function(strs) {
  const anagrams = {};
  for (let i = 0; i < strs.length; i++) {
      let sortedWord = strs[i].split('').sort().join('');
      if (!anagrams[sortedWord]) {
        anagrams[sortedWord] = [strs[i]]
      } else {
          anagrams[sortedWord].push(strs[i])
      }
  }
  return Object.values(anagrams)
};

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]