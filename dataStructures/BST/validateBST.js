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
 * @return {boolean}
 */
 var isValidBST = function(root) {
  if (!root) {
      return;
  }
  var currentNode = root;
  var list = [];
  var queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {

    currentNode = queue.shift();

    // console.log('currentNode', currentNode.val)

    list.push(currentNode.val);
      // console.log('list', list)

      console.log(root.val)

    if (currentNode.left) {
        if (currentNode.left.val < currentNode.val && currentNode.left.val < root.val) {
            queue.push(currentNode.left);
        } else {
            return false;
        }
    }
    if (currentNode.right) {
        if (currentNode.right.val > root.val && currentNode.right.val > root.val) {
            queue.push(currentNode.right);
        } else {
            return false;
        }
    }
      // console.log('queue', queue)
  }
  return true
};


///DFS pre order

var isValidBST = function(root) {
  var list = [];

  var innerF = function (node, list) {
    list.push(node.val);
    console.log(list)
    if (node.left) {
        if (node.left.val < node.val) {
            innerF(node.left, list);
        } else {
            return false;
        }
    }
    if (node.right) {
        if (node.right.val > node.val) {
            innerF(node.right, list);
        } else {
            return false;
        }
    }
    return list;
  }
  innerF(root, list)

 console.log(list)
 return true
};