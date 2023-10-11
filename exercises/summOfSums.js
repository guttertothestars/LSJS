/*
Sum of Sums

Write a function that takes an array of numbers and returns the sum of the sums
 of each leading subsequence in that array. Examine the examples to see what we
 mean. You may assume that the array always contains at least one number.

Examples:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

*/

function findLeadingSubarrays(array) {
  let subArrays = [];

  for (let i = 1; i <= array.length; i++) {
    subarrays.push(array.slice(0, i));
  }
  return subArrays;
}


function sumOfSums(array) {
  let subArrays = findLeadingSubarrays(array);

  let subArraySums = subArrays.map((subArray => {
    return subArray.reduce((accumlator, element) => accumlator + element, 0);
  }));

  return subArraySums.reduce((sum, element) => sum + element, 0);
}

//LS Solution
function sumOfSums(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}