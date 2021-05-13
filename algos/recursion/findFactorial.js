function findWithRecursion(number){
  if (number <= 1) {
    return 1
  }
  return number * findWithRecursion(number - 1);
}

function findWithIteration(number){
  var answer = 1
  for (var i = 2; i <= number; i++) {
    answer = answer * i
  }
  return answer
}

console.log(findWithRecursion(5))
console.log(findWithIteration(5))