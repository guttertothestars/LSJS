// Write a program that prompts the user for two positive integers, and then
// prints the results of the following operations on those two numbers: addition,
//  subtraction, product, quotient, remainder, and power. Do not worry about
//  validating the input.

// Example:

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23
const readline = require('readline-sync');

function prompt(str) {
  console.log(`=>${str}`);
}

prompt('Enter the first number: ');
let num1 = Number(readline.question());

prompt('Enter the second number: ');
let num2 = Number(readline.question());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${num1 / num2}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);

