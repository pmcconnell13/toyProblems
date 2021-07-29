/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  console.log('nums', nums)
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
  if (nums[i] > 0) break;
  if (i > 0 && nums[i] === nums[i - 1]) continue;
      let l = i + 1;
      let r = nums.length - 1;
      while (l < r) {
        let currentSum = nums[i] + nums[l] + nums[r];
        if (currentSum === target) {
            result.push([nums[i], nums[l], nums[r]]);
             while (l < r && nums[l] === nums[l + 1]) l++;
      while (l < r && nums[r] === nums[r - 1]) r--;
            l++;
            r--;
        } else if (currentSum < target) {
          l++;
        } else if (currentSum > target) {
            r--;
        }
      }
  }
  return result
};

console.log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
console.log(threeSum([-1,0,1,2,-1,-4], 0))