// var maxDepth = function(root) {
//   if (root === null) {
//       return 0;
//   }

//   let left = maxDepth(root.left);
//   let right = maxDepth(root.right);
//   return Math.max(left, right) + 1
// };
var maxDepth = (root) => {
  if (root === null) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}


Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1