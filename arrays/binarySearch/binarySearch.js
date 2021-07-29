function binSearch (array, target) {
  let l = 0;
  let r = array.length -1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
	console.log('l', l)
	console.log('r', r)
	console.log('m', m)
	if (array[m] === target) {
	  return m
	} else if (array[m] < target) {
      l = m + 1;
	} else {
	  r = m - 1;
	}
  }
  return -1
}

console.log(binSearch([1, 2, 3, 5, 7, 8, 10, 12, 15], 3))