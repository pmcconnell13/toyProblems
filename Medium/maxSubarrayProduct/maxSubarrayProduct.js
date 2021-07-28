var maxProduct = function(nums) {
  let max = -Infinity;
  let currentMax = 1;
  let currentMin = 1;


  for(let i = 0; i < nums.length; i++) {
      let prevMax = currentMax;
      currentMax = Math.max(nums[i], prevMax * nums[i], currentMin * nums[i]);
      currentMin = Math.min(nums[i], prevMax * nums[i], currentMin * nums[i]);
      max = Math.max(currentMax, max);
  }

  return max;
};

console.log(maxProduct([-2, 3, -4]));
console.log(maxProduct([-2, 3, -4]));

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,3,-4]
// Output: 24
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.