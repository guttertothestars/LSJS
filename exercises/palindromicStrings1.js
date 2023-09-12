/*
Palindromic Strings (Part 1)

Write a function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. A palindrome reads the same forwards and 
backwards. For this problem, the case matters and all characters matter.

Examples:
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

Problem: determine if a string is identical when reversed
Data Structures: Strings, arrays
algorithm:
-split string into array
-reverse array
-join into string
-compare string and reversed string for equality

*/

//using built-in methods
function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

//programatically, w/a loop

function isPalindrome(string) {
  let reversedString = '';
  for (i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}