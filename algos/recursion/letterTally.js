// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var result = {};
  var innerF = function(str) {
    if (str === '') {
      return ''
    }
    if (result[str[0]]) {
      result[str[0]]++
    } else {
      result[str[0]] = 1
    }
    innerF(str.substring(1))
  }
  innerF(str);
  return result;
};

console.log(letterTally('potato'));