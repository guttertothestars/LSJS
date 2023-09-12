const readline = require('readline-sync');

console.log("I'm going to ask for six numbers");
console.log("Then I'm going to tell you if the sixth number is found" +
" within the first five.");

console.log('What is the first number?');
let num1 = readline.question();

console.log('What is the second number?');
let num2 = readline.question();

console.log('What is the third number?');
let num3 = readline.question();

console.log('What is the fourth number?');
let num4 = readline.question();

console.log('What is the fifth number?');
let num5 = readline.question();

console.log('What is the sixth number?');
let num6 = readline.question();

let numsArray = [];
numsArray.push(num1, num2, num3, num4, num5);

console.log(`Do numbers 1-5 contain number 6? ${numsArray.includes(num6)}!`);
