class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.last;
  }
  enqueue(value) {
    var newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next
    this.length--;
    return this
  }
}

var newQueue = new Queue();
console.log(newQueue)
console.log(newQueue.peek());
console.log(newQueue.enqueue('john'));
console.log(newQueue.enqueue('tony'));
console.log(newQueue.enqueue('julian'));
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());

