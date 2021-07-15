function getPermutations(array) {
	if (array.length === 0) {
		return [[]];
	}

	let firstVal = array[0];
	let rest = array.slice(1);

	let permsWithoutFirst = getPermutations(rest);

	let result = [];
	permsWithoutFirst.forEach(perm => {
    for (let i = 0; i < array.length; i++) {
		let permWithFirst = [...perm.slice(0, i), firstVal, ...perm.slice(i)];
		result.push(permWithFirst)
	}

	})

	return result
}

console.log(getPermutations([1, 2, 3]))