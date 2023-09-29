/*
Leading Substrings

Write a function that takes a string argument and returns a list of substrings
of that string. Each substring should begin with the first letter of the word,
and the list should be ordered from shortest to longest.

Examples:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Problem:
-Given a string argument return an array that contains all the substrings of
that string starting with the first letter, and adding an additional letter
until every letter in the string is represented.

Edge Cases:
-Empty strings

Data Structures:
I/O: a string/an array

Algorithm:
-declare and intialize an array, charts and set it to the return value of #split
  invoked on the given string  argument
-declare and intialize an empty array, 'substrings
-declare and define a for loop
--set initializer to 1, condition to string.length, and increment to += 1
--within the body of the loop invoke the `push` method on substrings and pass
  the return value of invoking the #slice method on the character array, slicing
  from 0, to the initializer, and then invoking #join on the return value of
  #slice
--return substrings array when loop finishes executing
*/

function leadingSubstrings(string) {
  let chars = string.split('');
  let substrings = [];

  for (let i = 1; i < string.length; i++) {
    substrings.push(chars.slice(0, i).join(''));
  }
  return substrings;
}