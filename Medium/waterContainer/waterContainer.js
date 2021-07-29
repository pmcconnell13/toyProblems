var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let max = -Infinity;

  while (l < r) {
    let min = Math.min(height[l], height[r]);
    max = Math.max(max, min * (r - l));
    if (height[l] < height[r]) {
        l++;
    } else {
        r--;
    }
  }
    return max;
};

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2