/*
Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19 and returns
an array of those integers sorted based on the English word for each number:

    zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
    twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Example:

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Problem: take a numeric array fromm 0-19 and sort it based on the string version
of those integers

Input/ouput: An array of 220 integers 0-19.

Algorithm:
-create an object whose keys are the numbers 0-19 and whose keys are the
string equivalents of those numbers
create an array, answerKey
-sort object by key (i.e. strings)
-iterate through sorted strings and push associated key[value] to answer key
*/

function alphabeticNumberSort(numsArray) {
  let numbersObject = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
  };


  let answerKey = [];
  let sortedValues = Object.keys(numbersObject).sort();
  sortedValues.forEach((element) => answerKey.push(numbersObject[element]));
  return answerKey;

}