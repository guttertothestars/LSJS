/*
Uppercase Check

Write a function that takes a string argument and returns true if all of the
alphabetic characters inside the string are uppercase; false otherwise. Ignore
characters that are not alphabetic.

Examples:
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

Since this ignores anything that isn't alphabetic we can just check if the given
string is equal to the given string, but up-cased.
*/

function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true