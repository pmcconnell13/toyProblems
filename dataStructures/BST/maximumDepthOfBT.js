/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  //create maxdepth var
  //create current depth var
  //recursive function takes in current node and current depth
    //if there's nothing to left or right of current node
      //set maxdepth to equal Math.max of current depth and maxdepth
      //return
    //if there's a node to the left
      //run inner function with node to left and current depth
    //if there's a node to the right
      //run inner function node to the right and current depth
  //invoke recursive function
  //return maxDepth
  var maxDepth = 0;
  var currentDepth = 0;

  var innerF = function(currentNode, currentDepth) {
      if (!currentNode) {
          return;
      }
        currentDepth++;
    if (!currentNode.left && !currentNode.right) {
        maxDepth = Math.max(maxDepth, currentDepth);
        return;
    }
    if (currentNode.left) {
        innerF(currentNode.left, currentDepth);
    }
    if (currentNode.right) {
        innerF(currentNode.right, currentDepth);
    }

  }
  innerF(root, currentDepth);
  return maxDepth
};


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2;
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1