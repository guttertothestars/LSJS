/*
Swap Case
Write a function that takes a string as an argument and returns that string
with every lowercase letter changed to uppercase and every uppercase letter
changed to lowercase. Leave all other characters unchanged.

Examples:
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"


Algorithm: Make use of previously written swapCase function
*/


function swapCase(string) {
  let letters = string.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toLowerCase()) {
      letters[i] = letters[i].toUpperCase();
    } else {
      letters[i] = letters[i].toLowerCase();
    }
  }
  return letters.join('');
}