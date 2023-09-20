/*
Letter Swap

Given a string of words separated by spaces, write a function that swaps the
first and last letters of every word.

You may assume that every word contains at least one letter, and that the
string will always contain at least one word. You may also assume that each
string contains nothing but words and spaces, and that there are no leading,
trailing, or repeated spaces.

Examples:
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Problem:
-Take a string and break it into words
-invert the first and last characters of each word
-rejoin the words and return a string

Data structures:
-strings and arrays
I/O:
-strings

Algorithm
write a helper function that will invert the first and last char of a word
--split word into chars
-- set temp var as first char
--set first char as last char
--set las char as temp var
--rejoin as string and return

set guard clause
-if string length <= 1, return string;
-split string into words
-map each word, using return val of helper function
-rejoin words into string and return
*/

function invertChars(word) {
  let chars = word.split('');
  let temp = chars[0];
  chars[0] = chars[chars.length - 1];
  chars[chars.length - 1] = temp;
  return chars.join('');
}

function swap(string) {
  if (string.length <= 1) {
    return string;
  }

  return string.split(' ').map(word => invertChars(word)).join(' ');
}