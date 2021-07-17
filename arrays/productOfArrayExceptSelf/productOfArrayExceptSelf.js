var productExceptSelf = function(nums) {
  const result = [];
  let productSoFar = 1;
  for (let i = 0; i < nums.length; i++) {
      result[i] = productSoFar
      productSoFar *= nums[i]
      console.log(result)
  }
  productSoFar = 1
  for (let j = nums.length-1; j >= 0; j--) {
      result[j] *= productSoFar
      productSoFar *= nums[j]
      console.log('second time', result)
  }
  return result;
};

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]