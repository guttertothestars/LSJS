/*
All Substrings

Write a function that returns a list of all substrings of a string. Order the
returned list by where in the string the substring begins. This means that all
substrings that start at index position 0 should come first, then all substrings
that start at index position 1, and so on. Since multiple substrings will occur
at each position, return the substrings at a given index from shortest to
longest.

You may (and should) use the leadingSubstrings function you wrote in the
previous exercise:

Example:
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

Problem:
-Given a string give all leading substrings from index 0 to index -1
-repeat the process starting from index position 1 to index -1
-return an array containing all substrings

Algorithm:
-declare and initialize an empty array, allSubstrings
-declare and define a for loop with an initializer of 1, an end condition of
string.length, and in increment, i++
--within the body of the loop pass a string, sliced from the given string, from
  the intializer to the end of the string to the leadingSubstrings function.
--push the return value to the array allSubstrings
--When loop finishes executing return allSubstrings array

*/

function substrings(string) {
  let allSubstrings = [];
  for (let i = 0; i <= string.length; i++ ) {
    allSubstrings.push(leadingSubstrings(string.slice(i)));
  }
  return allSubstrings.flat();
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}