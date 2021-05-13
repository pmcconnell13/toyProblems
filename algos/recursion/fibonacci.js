function fibonacciRecursive(n) {
  if (n < 2) {
    return n
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

function fibonacciIterative(n) {
  var arr = [0, 1];
  for (var i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n]
}

console.log(fibonacciRecursive(8))
console.log(fibonacciIterative(8))
