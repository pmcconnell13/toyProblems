var kthSmallest = function(root, k) {
    let array = [];

    const dfs = (node) => {
      if (!node) {
        return
      }
        console.log(array)
      if (node.left) dfs(node.left);
      array.push(node.val)
      if (node.right) dfs(node.right);
    }
    dfs(root);

        return array[k - 1];
};

Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.



Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3