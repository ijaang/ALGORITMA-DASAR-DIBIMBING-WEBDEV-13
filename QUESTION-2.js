// Write a function that takes an array of numbers as an argument and returns the largest number in the array.

// Description: You are given an array of numbers. You need to write a function that takes this array as an argument and returns the largest number in the array.

numbers = [1, 2, 3, 4, 5];

function findLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

console.log(findLargestNumber(numbers));;
// # Expected result: 5
