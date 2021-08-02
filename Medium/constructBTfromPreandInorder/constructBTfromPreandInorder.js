var buildTree = function(preorder, inorder) {
  function helper(p1, p2, i1, i2) {
      if (p1 > p2 || i1 > i2) return null; // sanity check

      var value = preorder[p1],           // get the root value
          index = inorder.indexOf(value), // get inorder position
          nLeft = index - i1,             // count nodes in left subtree
          root  = new TreeNode(value);    // build the root node
console.log('value', value)
      console.log('index', index)
      console.log('nLeft', nLeft)
      console.log('root', root)
      console.log('p1', p1)
      console.log('p2', p2)
      console.log('i1', i1)
      console.log('i2', i2)
      // build the left and right subtrees recursively
      root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1);
      root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

      return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.



Example 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]