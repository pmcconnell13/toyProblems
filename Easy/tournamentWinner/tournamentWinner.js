function tournamentWinner(competitions, results) {
  //create obj for teams and scores
	  //loop through competitions
	  //at each value, check the corresponding results value
	  //if winning team doesn't exist in object
	    //add it to object with 3 as value
	  //otherwise, increment existing key value by 3
	//loop through object
	  //add each key value to new array
	//sort new array by most points
	  //return that winner
	var obj = {};
	var sorted = [];
	for (var i = 0; i < competitions.length; i++) {
    if (results[i] === 0) {
      if (!obj[competitions[i][1]]) {
        obj[competitions[i][1]] = 3
			} else {
				obj[competitions[i][1]]+=3
			}
		} else {
			if (!obj[competitions[i][0]]) {
        obj[competitions[i][0]] = 3
			} else {
				obj[competitions[i][0]]+=3
			}
		}
	}
	console.log(obj)
	for (var key in obj) {
		sorted.push([key, obj[key]])
	}
	var newSort = sorted.sort((a, b) => b[1] - a[1]);
	return newSort[0][0]
}