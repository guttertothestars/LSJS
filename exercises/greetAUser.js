// Write a program that will ask for user's name. The program will then
// greet the user. If the user writes "name!" then the computer yells back to
// the user.

// Examples:
// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

const readline = require('readline-sync');

console.log("What is your name?");
let name = readline.prompt();

if (name.includes('!')) {
  console.log(`WHY ARE WE YELLING ${name}?!?!?!`);
} else {
  console.log(`Hello there ${name}.`);
}