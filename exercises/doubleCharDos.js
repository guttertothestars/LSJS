/*
Double Char (Part 2)

Write a function that takes a string, doubles every consonant character in
the string, and returns the result as a new string. The function should not
double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""


Create an array of all consonants.
iterate over array of chars similar to last problem, but only push twice if the
current char is included in the consonants array.
*/

const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function double(string, charsToBeDoubled) {
  let chars = string.split('');
  let answerChars = [];
  chars.forEach((char) => {
    if (charsToBeDoubled.includes(char.toLowerCase())) {
      answerChars.push(char, char);
    } else {
      answerChars.push(char);
    }
  });
  return answerChars.join('');
}

