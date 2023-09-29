/*
Sequence Count

Create a function that takes two integers as arguments. The first argument is
a count, and the second is the starting number of a sequence that your function
will create. The function should return an array containing the same number of
elements as the count argument. The value of each element should be a multiple
of the starting number.

You may assume that the count argument will always be an integer greater than
or equal to 0. The starting number can be any integer. If the count is 0, the
function should return an empty array.

Examples:
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

Problem: Create a function that takes two arguments and returns an array. The
first argument is the number of elements the array should contain, and the
second argument is both the initial element and the amount by which each
subsequent element is incremented.

Input/Output: Two integers, an array of integers

Edge cases: count argument of 0 should return an empty array.

Data Structures: Integers and arrays.

Algorithm:
-First check if count argument is 0 and return an empty array if so.
-Declare and initialize an empty "sequenced" array.
-Create a loop with 1 as an initialization, the count
argument as the continutation condition, and increment by 1.
-If i === 1 Push startNumber to sequenced, otherwise push i * startNumber to
sequenced until loop completes.
-return sequenced

*/

function sequence(count, startNumber) {
  //guard clause
  if (count === 0) {
    return [];
  }

  let sequenced = [];

  for (let i = 1; i <= count; i++) {
    if (i === 1) {
      sequenced.push(startNumber);
    } else {
      sequenced.push(startNumber * i);
    }
  }
  return sequenced;
}