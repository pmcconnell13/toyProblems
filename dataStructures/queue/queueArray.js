class Queue {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  };
  enqueue(value) {
    this.array.push(value);
    return this;
  }
  dequeue() {
    this.array.shift();
    return this;
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