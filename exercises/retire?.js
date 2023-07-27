// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

// Example:
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const readline = require('readline-sync');

const currentDate = new Date(); // gets full date object
const currentYear = currentDate.getFullYear(); // extracts just the year

console.log("Let's calculate when you will retire.");

console.log("What is your age?");
let currentAge = readline.question();

console.log("What age would you like to retire?");
let retirementAge = readline.question();
let retirementYear = (currentYear + (retirementAge - currentAge));

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(`Only ${retirementYear - currentYear} years to go!`);
