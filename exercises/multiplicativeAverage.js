/*
Multiplicative Average

Write a function that takes an array of integers as input, multiplies all of
the integers together, divides the result by the number of entries in the
array, and returns the result as a string with the value rounded to three
decimal places.

Examples:

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

Problem:
-multiply all of the integers in an array together (use reduce)
-divide by total number of integers
-give answer to the third decimal place (usee toFixed())
-return answer as a string (use toFixed())

Edge Cases : anything that isn't an array of integers

Data Structures:
I/O array, string

algorithm:
-find multiplicative total using reduce
-divide for average, using to fixed to get three decimal places in string format

*/

function multiplicativeAverage(intsArray) {
  let product =
  intsArray.reduce((accumulator, currentVal) => accumulator * currentVal);

  return (product / intsArray.length).toFixed(3);
}

