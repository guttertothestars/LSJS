/*
Delete Vowels

Write a function that takes an array of strings and returns an array of the
same string values, but with all vowels (a, e, i, o, u) removed.

Examples:
removeVowels(['abcdefghijklmnopqrstuvwxyz']);
// ["bcdfghjklmnpqrstvwxyz"]

removeVowels(['green', 'YELLOW', 'black', 'white']);
// ["grn", "YLLW", "blck", "wht"]

removeVowels(['ABC', 'AEIOU', 'XYZ']);
// ["BC", "", "XYZ"]

*/


function removeVowels(array) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  return array.map(subarray => {
    return subarray.split('').filter(char => !VOWELS.includes(char.toLowerCase())).join('');
  });
}