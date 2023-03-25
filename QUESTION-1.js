// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// Description: You are given an array of numbers. You need to write a function that takes this array as an argument and returns the sum of all the numbers in the array.

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
const total = sumArray(numbers);
console.log(total);
// Expected result: 15
