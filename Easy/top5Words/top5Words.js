var string = 'I love to type. I dance and - dance and dance %, I dance. Dancing i Dance makes me love my life and I love that. I love to dance.';

var top5 = function (string) {
  var removedPunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  //split regex at space
  var splitString = removedPunctuation.split(' ');

  var storage = {};
  var result = [];

  //loop through split words array
  for (var i = 0; i < splitString.length; i++) {
    //if current word hasn't been seen
    var word = splitString[i];
    if (!storage[word]) {
      //add to storage
      storage[word] = 1;
      //else
    } else {
      //increment
      storage[word]++
    }
  }

  //sort storage keys by value
  //create var representing top 5 words array
  var top5 = Object.values(storage).sort((a, b) => b - a).slice(0, 5);
  console.log(top5)

  //loop through top5 array and push each word + it's count (from storage) to result
  for(var key in storage) {
    if (top5.includes(storage[key])) {
      result.push({word: key, frequency: storage[key]})
    }
  }
  return result;
}

console.log(top5(string));