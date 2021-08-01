var isSubtree = function(s, t) {
  // helper fn to check if both tree are same
 const isSameTree = (t1, t2) => {
     if(!t1 && !t2) return true;
     if(!t1 || !t2 || t1.val !== t2.val) return false;

     return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
 }
 // main helper recursion fn
 const helper = (t1, t2) => {
     // check t1 for null because if it is null then t2 does not exist as we are incrementing t1 for every mismatch
     if(!t1) return false;
     // check for same tree, return true if found
     if(isSameTree(t1, t2)) return true;
     // otherwise check match t2 with t1.left and t2.right
     return helper(t1.left, t2) || helper(t1.right, t2);
 }

 return helper(s, t)
};

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.


Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false