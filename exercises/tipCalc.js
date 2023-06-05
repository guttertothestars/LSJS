// Tip Calculator

// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input
// validation and assume that the user will enter numbers.

const readline = require('readline-sync');

function prompt(string) {
  console.log(`=>${string}`);
}

prompt("What's the total bill?");
let totalBill = Number(readline.question());

prompt("What's the tip percentage?");
let tipPercentage = Number(readline.question()) / 100;

let tip = (totalBill * tipPercentage);
let totalWithTip = totalBill + tip;
prompt(`The tip is ${tip.toFixed(2)}`);
prompt(`The total is ${totalWithTip.toFixed(2)}`);
