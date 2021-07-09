var containsDuplicate = function(nums) {
  let storage = {};
  for (var i = 0; i < nums.length; i++) {
    if (!storage[nums[i]]) {
      storage[nums[i]] = true;
    } else {
        return true;
    }
  }
  return false;
};

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true