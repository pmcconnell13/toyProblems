/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let pre = null
  while(head){
      const next = head.next
      head.next = pre
      pre = head
      head = next
  }
  return pre
};


Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
