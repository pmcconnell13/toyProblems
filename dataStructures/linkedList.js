// class linkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     }
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     var newNode = {
//       value: value,
//       next: null
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++
//   }

//   prepend(value) {
//     var newNode = {
//       value: value,
//       next: this.head
//     }
//     this.head = newNode;
//     this.length++
//   }
// }

// var myLinkedList = new linkedList(10);
// myLinkedList.append(4);
// myLinkedList.prepend(1)
// console.log(myLinkedList)

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     }
//     this.tail = this.head;
//     this.length = 1
//   }

//   append(value) {
//     var newNode = new Node(value)
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++
//   }

//   prepend(value) {
//     var newNode = new Node(value)
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++
//   }

//   printList() {
//     var arr = [];
//     var currentNode = this.head;
//     while (currentNode !== null) {
//       arr.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return arr
//   }

//   // insert(index, value) {
//   //   var newNode = new Node(value);
//   //   var currentNode = this.head;
//   //   var count = 0;
//   //   while (currentNode !== null) {
//   //     if (count + 1 === index) {
//   //       newNode.next = currentNode.next;
//   //       currentNode.next = newNode;
//   //       return this
//   //     }
//   //       currentNode = currentNode.next
//   //       count++
//   //   }
//   // }

//   insert(index, value) {
//     if (index >= this.length) {
//       this.append(value);
//     }
//     var newNode = new Node(value);
//     var leader = this.traverseList(index - 1);
//     newNode.next = leader.next;
//     leader.next = newNode;
//     this.length++
//     return this
//   }

//   traverseList(index) {
//     var currentNode = this.head;
//     var count = 0;
//     while (count !== index) {
//       currentNode = currentNode.next;
//       count++
//     }
//     return currentNode;
//   }

// }

// class Node {
//   constructor(value) {
//     this.value = value,
//     this.next = null
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    var newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
  }

  prepend(value) {
    var newNode = new Node(value);
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