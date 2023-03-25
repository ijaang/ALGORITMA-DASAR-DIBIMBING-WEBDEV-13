// Write a function that takes an array of strings as an argument and returns a new array with only the strings that start with the letter "a".

// Description: You are given an array of strings. You need to write a function that takes this array as an argument and returns a new array with only the strings that start with the letter "a".


words = ["apple", "banana", "avocado"]

function filterStringsStartingWithA(strings) {
  let filteredStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === "a") { 
      filteredStrings.push(strings[i]); 
    }
  }
  return filteredStrings;
}

console.log(filterStringsStartingWithA(words));
//  Expected result: ["apple", "avocado"]