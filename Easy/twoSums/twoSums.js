Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

var twoSum = function(nums, target) {
  //result array
  //loop through array
    //loop again at current index
    //if values add together to equal target
    //push those indexes to result array
    //return result array
  //return result array
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return result
};

///////////////////////Optimal hash solution/////////////////////////////
var twoSum = function(nums, target) {
  //create object
   //loop through nums
     //if target - current val exists in object
       //return current matching index with current index
     //else
       //add current val to object with index
   var obj = {};
   for (var i = 0; i < nums.length; i++) {
     if (obj[target - nums[i]] >= 0) {
        return [obj[target - nums[i]], i]
     }
     obj[nums[i]] = i
   }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const container = {};
  for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] in container) {
          return [i, container[target - nums[i]]]
      } else {
         container[nums[i]] = i
  }
}

  return [];
};

//come back to this later

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]