/*
Sum Of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

Examples:

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

*/

function sum(num) {
  let digits = String(num).split('');
  return digits.reduce((accum, elem) => accum + Number(elem), 0);
}

//LS Solution is same but more elegant

function sum(number) {
  return String(number)
    .split("")
    .reduce((accum, digit) => accum + Number(digit), 0);
}