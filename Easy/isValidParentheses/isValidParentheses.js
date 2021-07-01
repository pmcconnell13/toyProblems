var isValid = function(s) {
  var arrayStack = [];
  for (var i = 0; i < s.length; i++) {
    console.log(arrayStack)
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        arrayStack.push(s[i]);
    } else if (s[i] === ')' && arrayStack.length > 0 && arrayStack[arrayStack.length       -1] === '(') {
        arrayStack.pop();
    } else if (s[i] === '}' && arrayStack.length > 0 && arrayStack[arrayStack.length       -1] === '{') {
        arrayStack.pop();
    } else if (s[i] === ']' && arrayStack.length > 0 && arrayStack[arrayStack.length       -1] === '[') {
        arrayStack.pop();
    } else {
        return false
    }
  }

 return true
};

console.log(isValid('(){}[]'))