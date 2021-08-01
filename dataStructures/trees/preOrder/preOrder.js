var preorderTraversal = function(root, result = []) {
  if (!root) {
    return result;
  }
  result.push(root.val);
  if (root.left) {
    preorderTraversal(root.left, result);
  }
  if (root.right) {
    preorderTraversal(root.right, result)
  }
  return result
};

////iterative approach
var preorderTraversal = function(root) {
  if (!root) return [];
  var result = [];
  var stack = [root];

  while(stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []