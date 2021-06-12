// class Node {
//   constructor(value) {
//       this.value = value,
//       this.next = null
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.length === 1) {
//       this.bottom = null;
//     }
//     var pointer = this.top;
//     this.top = this.top.next;
//     this.length--
//     return this
//   }
//   push(value) {
//     var newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode
//     } else {
//       var pointer = this.top;
//       this.top = newNode;
//       this.top.next = pointer;
//     }
//     this.length++
//     return this
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  pop() {
    if (!this.top) {
      return null
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    var pointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  push(value) {
    var newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      var pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.length++;
    return this
  }
}

const myStack = new Stack();
console.log(myStack.push(5));
console.log(myStack.push(6));
console.log(myStack.push(3));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.push(3));
console.log(myStack.push(10));
console.log(myStack.peek());
