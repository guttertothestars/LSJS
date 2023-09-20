/*
Combining Arrays

Write a function that takes two arrays as arguments and returns an
array containing the union of the values from the two. There should be no
duplication of values in the returned array, even if there are duplicates
in the original arrays. You may assume that both arguments will always be
arrays.

Example:
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

Problem: Take two array and return one array containing all unique values:
-Does the returned array need to be a new array?
-Can we mutate the existing arrays?
-Does the returned array need to be sorted?
--I'm going to say yes, no and yes.

Edge cases: arrays with NaN or undefined?

Data Structures:
I/O: Arrays

Algorithm:
-Declare and initialize an array, mergedArray, and set it to the value of the
first array given an an argument.
-Loop through the second array and check if merged array contains the element
being checked. If so, continue, otherwise push the element into mergedArray.
-call Sort() on mergedArray and return.
*/

function union(array1, array2) {
  let mergedArray = array1.slice(0);

  array2.forEach(element => {
    if (!mergedArray.includes(element)) {
      mergedArray.push(element);
    }
  });
  return mergedArray.sort();
}