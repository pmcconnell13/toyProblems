function insertSort(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    } else {
      for (var j = 1; j < i; j++) {
        if (array[i] < array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }
  return array
}
//return

console.log(insertSort([99, 108, 45, 3, 0, 12, 94, 155, 1, 234]))