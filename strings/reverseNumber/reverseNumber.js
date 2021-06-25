var reverse = function(x) {
  var string = x.toString().split('');
  var result = string[0] === '-' ? [string[0]] : [];
  for (var i = string.length -1; string[0] === '-' ? i >= 1 : i >= 0; i--) {
      if (string[i] !== 0) {
          result.push(string[i])
      }
  }
  return Number(result.join(''));
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(56364))