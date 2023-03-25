// Write a function that takes an array of numbers as an argument and returns a new array with the same numbers in reverse order.

// Description: You are given an array of numbers. You need to write a function that takes this array as an argument and returns a new array with the same numbers in reverse order.
numbers = [1,2,3,4,5]

function reverseArray(numbers) {
  let reversedNumbers = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
  }
  return reversedNumbers;
}

console.log(reverseArray(numbers));
// Expected result: [5,4,3,2,1]