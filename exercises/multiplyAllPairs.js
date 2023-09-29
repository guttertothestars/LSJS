/*
Multiply All Pairs

Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array containing the products of all combinations
of number pairs that exist between the two arrays. The returned array should
be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Example:
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

Problem:
-Find all pairs (a separate problem!)
-Multiply all pairs and return the products, in the form of an ascending-order
sorted array

*/

function findAllPairs(array1, array2) {
  let allPairs = [];

  //nested loops boi lfg.
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      // allPairs.push([array1[i], array2[j]]);
      allPairs.push([array1[i],array2[j]]);
    }
  }
  return allPairs;
}

function multiplyAllPairs(array1, array2) {
  let multipliedPairs = [];

  findAllPairs(array1, array2)
    .forEach((subArray) => {
      multipliedPairs.push(subArray[0] * subArray[1]);
    });
  return multipliedPairs.sort((a,b) => a - b);
}
/*
Not sure I actually need this logic:

let shortArray, longArray;
  if (array1.length <= array2.length) {
    shortArray = array1;
    longArray = array2;
  } else {
    shortArray = array2;
     longArray = array1
  }
*/