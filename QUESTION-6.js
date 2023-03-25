// Write a function that takes an array of numbers as an argument and returns the second smallest number in the array.

// Description: You are given an array of numbers. You need to write a function that takes this array as an argument and returns the second smallest number in the array.

numbers = [1, 2, 3, 4, 5];

function findSecondSmallestNumber(numbers) {
  //   let secondSmallestNumber = 0;
  let smallestNumber = Infinity;
  let secondSmallestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      secondSmallestNumber = smallestNumber;
      smallestNumber = numbers[i];
    } else if (
      numbers[i] < secondSmallestNumber &&
      numbers[i] !== smallestNumber
    ) {
      secondSmallestNumber = numbers[i];
    }
  }

  return secondSmallestNumber;
}

console.log(findSecondSmallestNumber(numbers));
// Expected result: 2
