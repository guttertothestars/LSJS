/*
Counting Up

Write a function that takes an integer argument and returns an array containing
all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

*/

function sequence(targetMax) {
  let sequenced = [];

  for (let i = 1; i <= targetMax; i += 1) {
    sequenced.push(i);
  }
  return sequenced;
}