/*
Rotation (Part 2)

Write a function that rotates the last count digits of a number. To perform
the rotation, move the first of the digits that you want to rotate to the end
and shift the remaining digits to the left.

Examples:
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Problem:
-Convert a number into an array of digits.
-Pluck an element from an array, nth from the left, and return an array
with it as the last element
-convert array back into numbers

Function has two args: the number, and the place-number for the digit to be
moved

Data Structures: arrays,  numbers, strings

algorithm:
first convert the number to a string, then split the string into an array of
elements

if the count argument is greeater than the length of the array, return a fault

find the element to be rotated and declare an intialiaze a variable set to its
value

declare and intialize a loop, from 0 to the length of the array -1, incrementing
by 1 and (
  in the loop body push the value of each consecutive element to a collection
  array/string, bypassing the current element if it equals the element to be
  rotated
)
append the element to be rotated to the collection array/string
return the collection array/string in the form of a number
*/

function rotateRightmostDigits(number, nthFromLeft) {
  let digits = String(number).split('');
  let digitToRotate = digits[digits.length - nthFromLeft];
  let rotatedDigits = [];

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === digitToRotate) {
      continue;
    } else {
      rotatedDigits.push(digits[i]);
    }
  }
  rotatedDigits.push(digitToRotate);
  return Number(rotatedDigits.join(''));
}