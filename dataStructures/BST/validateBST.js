/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
//  var isValidBST = function(root) {
//   if (!root) {
//       return;
//   }
//   var currentNode = root;
//   var list = [];
//   var queue = [];
//   queue.push(currentNode);

//   while (queue.length > 0) {

//     currentNode = queue.shift();

//     // console.log('currentNode', currentNode.val)

//     list.push(currentNode.val);
//       // console.log('list', list)

//       console.log(root.val)

//     if (currentNode.left) {
//         if (currentNode.left.val < currentNode.val && currentNode.left.val < root.val) {
//             queue.push(currentNode.left);
//         } else {
//             return false;
//         }
//     }
//     if (currentNode.right) {
//         if (currentNode.right.val > root.val && currentNode.right.val > root.val) {
//             queue.push(currentNode.right);
//         } else {
//             return false;
//         }
//     }
//       // console.log('queue', queue)
//   }
//   return true
// };


///DFS pre order

var isValidBST = function(root) {
  var isValidBST = function(root) {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(root, min, max) {
        if (!root) {
            return true; // We hit the end of the path
        }

        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }

        // Continue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }

    return helper(root, null, null);
};
};
//reattempted