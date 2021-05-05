var minStack = function() {
  this.stack = [];
}

minStack.prototype.peek () {
  return this.stack[this.stack.length - 1]
}

minStack.prototype.push (value) {
  this.stack.push(value)
  return this.stack
}

minStack.prototype.pop () {
  this.stack.pop();
  return this.stack
}

//edit later