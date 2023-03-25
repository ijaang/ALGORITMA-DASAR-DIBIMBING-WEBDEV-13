// Write a function that takes an array of numbers as an argument and returns a new array with only the even numbers from the original array.

// Description: You are given an array of numbers. You need to write a function that takes this array as an argument and returns a new array with only the even numbers from the original array.




numbers = [1,2,3,4,5]

function filterEvenNumbers(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

console.log(filterEvenNumbers(numbers));
// # Expected result: [2,4]