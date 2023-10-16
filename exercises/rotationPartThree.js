/*
Rotation (Part 3)

Take the number 735291 and rotate it by one digit to the left, getting 352917.

Next, keep the first digit fixed in place and rotate the remaining digits to
get 329175. Keep the first two digits fixed in place and rotate again to get
321759. Keep the first three digits fixed in place and rotate again to get
321597. Finally, keep the first four digits fixed in place and rotate the
final two digits to get 321579. The resulting number is called the maximum
rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum
rotation of that integer. You can (and probably should) use the
rotateRightmostDigits function from the previous exercise.

Examples:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845


 1 2 3 4 5

*/
function rotateArray(array) {
  if (Array.isArray(array) !== true) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  let copyArray = array.slice(1);
  copyArray.push(array[0]);
  return copyArray;
}

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

function maxRotation(number) {
  let count = String(number).length;

  while (count >= 2) {
    number = rotateRightmostDigits(number, count);
    count--;
  }
  return number;
}