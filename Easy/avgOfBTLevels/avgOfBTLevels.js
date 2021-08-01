var averageOfLevels = function(root) {
  let result = [];
  let queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length > 0) {
    let length = queue.length;
    let avg = 0;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      avg += node.val
      if (node.left) {
         queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(avg / length)
  }
    return result
};

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.


Example 1:


Input: root = [3,9,20,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].