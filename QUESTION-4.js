// Write a function that takes an array of strings as an argument and returns a new array with the length of each string in the original array.

// Description: You are given an array of strings. You need to write a function that takes this array as an argument and returns a new array with the length of each string in the original array.


words = ["hello", "world"]

function getLengthsOfStrings(strings) {
  let lengths = [];
  for(let i = 0; i < strings.length; i++) {
    lengths.push(strings[i].length);
  }
  return lengths;
}

console.log(getLengthsOfStrings(words));
// Expected result: [5, 5]