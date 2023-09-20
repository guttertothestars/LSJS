/*
Combine Two Lists

Write a function that combines two arrays passed as arguments, and returns a
new array that contains all elements from both array arguments, with each
element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the
same number of elements.

Example: interleave([1, 2, 3], ['a', 'b', 'c']);   // [1, "a", 2, "b", 3, "c"]

Problem: given two arrays of the same length return a new array that contains
each element of the two arrays taken in turn.

Edge Cases:
Have been removed - non-empty, same length arrays.

Data Structures:
I/O: arrays

Algorithm:
-Declare and initialize a collection array, comboArray
-loop through each array, pushing the elements of the two given arrays into
collection array
-return collection array

*/

function interleave(arr1, arr2) {
  let comboArray = [];

  for (let i = 0; i < arr1.length; i += 1) {
    comboArray.push(arr1[i], arr2[i]);
  }

  return comboArray;
}