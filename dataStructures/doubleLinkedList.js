class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      previous: null,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    var newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
  }

  prepend(value) {
    var newNode = new Node(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    var newNode = new Node(value);
    var leadNode = this.traverseToIndex(index - 1);
    newNode.next = leadNode.next;
    leadNode.next = newNode;
    newNode.previous = leadNode;
    this.length++
  }

  printList(){
    var arr = [];
    var currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr
  }

  remove(index) {
    if (index >= this.length) {
      return null
    }
    var leader = this.traverseToIndex(index - 1)
    var removalNode = leader.next;
    if (removalNode.next === null) {
      this.tail = leader
    }
    leader.next = removalNode.next
    // removalNode.next.previous = leader;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    var count = 0;
    var currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++
    }
    return currentNode;
  }

}

class Node {
  constructor(value) {
    this.value = value,
    this.previous = null,
    this.next = null
  }
}


var myLinkedList = new LinkedList(5);
myLinkedList.append(6);
myLinkedList.append(7);
myLinkedList.prepend(4);
myLinkedList.prepend(2);
myLinkedList.append(50);
myLinkedList.insert(1, 12);
myLinkedList.remove(myLinkedList.length - 1);
console.log(myLinkedList.printList());
console.log(myLinkedList)