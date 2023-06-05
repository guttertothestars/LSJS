
// Sum or Product of Consecutive Integers

// Write a program that asks the user to enter an integer greater than 0, then
// asks whether the user wants to determine the sum or the product of all numbers
// between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

const readline = require('readline-sync');

function prompt(string) {
  console.log(`=>${string}`);
}

prompt('Please enter an integer greater than 0:');
const maxNum = readline.question();

prompt('Enter "s" to compute the sum, or "p" to compute the product.');
const operation = readline.question();

let numRange = [];
for (let i = 1; i <= maxNum; i += 1) {
  numRange.push(i);
}

if (operation == 's') {
  const sum = numRange.reduce((total, element) => total + element);
  prompt(`The sum of the integers between 1 and ${maxNum} is  ${sum}.`);
} else if (operation == 'p') {
  const product = numRange.reduce((total, element) => total * element);
  prompt(`The product of the integers between 1 and ${maxNum} is ${product},`);
} else {
  prompt("You've failed to enter an appropriate operation");
}

