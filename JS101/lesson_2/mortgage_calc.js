//Problem:
// calculate the following:
// monthly interest rate
// loan duration in months

// Use the following formula:
// let m = p * (j / (1 - Math.pow((1 + j), (-n))));

// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

// Print the answer in dollars and cents. e.g $04.23

// // Edge Cases:
// Zero interest loans
// Very short loans e.g. payday loans of only a few months or weeks.
// Data Structures:
// Just variables to plug in.

//Algorithm:
// Ask for needed info
// Convert APR to monthly interest rate
// plug into equation
//return answer in dollars and cents format.

//////////////////////////CALCULATOR/////////////////////////////////
// Required Stuff
const readline = require('readline-sync');

//Functions
function prompt(message) {
  console.log(`=> ${message}`);
}

// Begin program
prompt("Thank you for choosing MortCalcBot 3000");
prompt("I just need a few pieces of info from you.");
prompt("What is the total amount of your loan?");
let loanAmount = Number(readline.question());
prompt("Ouch, okay. What's your APR?");
let loanAPR = Number(readline.question());
prompt("....");
prompt("Well. How long do they have you on the hook for this loan?");
prompt("Giv it to me in months, please!");
let loanDuration = Number(readline.question());

//Calc monthly interest rate from APR
let monthlyInterestRate = (((loanAPR / 100) / 12));

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 +
    monthlyInterestRate), (-loanDuration))));

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

//Things to do:
// put calc inside loop for mulitiple calculations
// add validation to prevent loans or interest rates below zero