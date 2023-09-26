/*
Double Char (Part 1)

Write a function that takes a string, doubles every character in the string,
and returns the result as a new string.

Examples:
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
*/

function repeater(string) {
  let doubledChars = [];
  let chars = string.split('');

  chars.forEach((char) => {
    doubledChars.push(char, char);
  });
  return doubledChars.join('');
}