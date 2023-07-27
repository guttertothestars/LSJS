// Odd Lists

// Write a function that returns an Array that contains every other element of
// an Array that is passed in as an argument. The values in the returned list
// should be those values that are in the 1st, 3rd, 5th, and so on elements of
// the argument Array.

// Examples:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Problem: Pull every other element from an Array starting with the first index
// position, 0, and return it in another Array.
// Input/Output: Arrays all the way
// Edge Cases: None in the way the problem is phrased
// Data Structures: Arrays
// Algorithm:
// initialize a collection array, oddPositionedElements
// iterate through the array and if the index of the element is even, push the
// element into the collection array

function oddities(arr) {
  let oddPositionedElements = [];

  for (let index in arr) {
    if (index % 2 === 0) {
      oddPositionedElements.push(arr[index]);
    }
  }
  return oddPositionedElements;
}