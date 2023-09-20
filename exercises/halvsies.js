/*
halvsies
Write a function that takes an array as an argument and returns an array t
hat contains two elements, each of which is an array. Put the first half of the
original array elements in the first element of the return value, and put the
second half in the second element. If the original array contains an odd number
of elements, place the middle element in the first half array.

Examples:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

*/

function halvsies(array) {
  let halves = [];
  let midpoint = Math.ceil(array.length / 2);

  halves.push(array.slice(0, midpoint), array.slice(midpoint));
  return halves;
}