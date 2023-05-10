// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask the user if they would like to perform more calculations
// Return to beginning if answer === yes, exit program if no

//Libraries &c.
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

//Functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart === '' || Number.isNaN(Number(number));
}

//Begin Program
prompt(MESSAGES.welcome);

let keepGoing = true;
while (keepGoing) {

  prompt("What is the first number?");
  let number1 = readline.question();

  //number1 validation loop
  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalidNum);
    number1 = readline.question();
  }

  prompt("What is the second number?");
  let number2 = readline.question();

  //number2 validation loop
  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalidNum);
    number2 = readline.question();
  }


  prompt(MESSAGES.whatOperation);
  let operation = readline.question();

  //operation validation loop
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}.`);
  prompt(MESSAGES.again);
  let answer = readline.question();
  if (answer === 'y' || answer === 'Y') {
    keepGoing = true;
  } else {
    keepGoing = false;
  }
}

prompt(MESSAGES.goodbye);