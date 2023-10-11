/*
Lettercase Counter

Write a function that takes a string and returns an object containing three
properties: one representing the number of characters in the string that are
lowercase letters, one representing the number of characters that are uppercase
letters, and one representing the number of characters that are neither.

Examples:

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

Problem: take a string and count the number of uppercase, lowercase, and neither
characters. Return that information in the form of an object.

Edgecases: non-string arguments

Data Structures:
I/O: String / Object

Algorithm:
helper function-increment object
-takes one char and one onj args
--Declare and initialzie a constant with all uppercase and lowercase letters
--check if char is an uppercase char and a letter
---if so increment the uppercase key by one
--check if char is a lowercase char and a letter
---if so increment the lowercase key by one
--if char is neither uppercase nor lowercase
---increment neither key by one

main function
-use a guard-clause
-check if argument type is a string and return "not a string if not"
-declare and initialize an object with three keys: lowercase, uppercase, and
 neither. Set all values to zero.
-declare and initalize chars array and set it to the given string, split into
  chars
-iterate if chars array and pass each char to the helper function
return object
*/

function incrementCaseObject(char, object) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (char === char.toUpperCase() && ALPHABET.includes(char)) {
    object['uppercase']++;
  } else if (char === char.toLowerCase() && ALPHABET.includes(char)) {
    object['lowercase']++;
  } else {
    object['neither']++;
  }
}

function letterCaseCount(string) {
  let caseObject = { lowercase: 0, uppercase: 0, neither: 0 };
  let chars = string.split('');
  chars.forEach(char => {
    incrementCaseObject(char, caseObject);
  });

  return caseObject;
}