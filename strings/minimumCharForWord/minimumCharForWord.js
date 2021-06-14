function minimumCharactersForWords(words) {
	var maxFrequency = {};
	  for (var i = 0; i < words.length; i++) {
      var charFrequencies = countFrequency(words[i]);
			updateMaxFrequencies(charFrequencies, maxFrequency);
		}
	return makeArray(maxFrequency)
}

function countFrequency (string) {
  const charFrequency = {};

	for (var i = 0; i < string.length; i++) {
		if (!charFrequency[string[i]]) {
			charFrequency[string[i]] = 1
		} else {
			charFrequency[string[i]]++
		}
	}
	return charFrequency
}

function updateMaxFrequencies (frequencies, maxFrequencies) {
	for (var character in frequencies) {
		var frequency = frequencies[character];
		if (maxFrequencies[character]) {
			maxFrequencies[character] = Math.max(frequency, maxFrequencies[character])
		} else {
			maxFrequencies[character] = frequency;
		}
	}
}

function makeArray (charFrequencies) {
	var result = [];

	for (var char in charFrequencies) {
		var frequency = charFrequencies[char];

		for (var i = 0; i < frequency; i++) {
			result.push(char)
		}
	}
	return result
}



// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
