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
    var newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
  }

  prepend(value) {
    var newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++
  }

}

var myLinkedList = new LinkedList(5);
myLinkedList.append(6);
myLinkedList.append(7);
myLinkedList.prepend(4);
console.log(myLinkedList)