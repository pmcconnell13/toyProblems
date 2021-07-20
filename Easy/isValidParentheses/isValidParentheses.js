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

var isValid = function(s) {
    let mapLeft = {
        '{' : 1,
        '[' : 2,
        '(' : 3
    },
        mapRight = {
            '}' : 1,
            ']' : 2,
            ')' : 3
        };
    let stack = [];
    for(let i = 0; i < s.length; ++i) {
        if(mapLeft[s[i]]) {
            stack.push(s[i])
        } else if(!stack.length || mapRight[s[i]] != mapLeft[stack.pop()])
            return false;
    }
    return stack.length ? false : true;
};

console.log(isValid('(){}[]'))