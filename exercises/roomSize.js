// Build a program that asks the user to enter the length and width of a room in
// meters, and then logs the area of the room to the console in both square meters
// and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the
// readlineSync.prompt method to collect user input.

// Example:

// Enter the length of the room in meters: 10
// Enter the width of the room in meters: 7
// The area of the room is 70.00 square meters (753.47 square feet).

const readline = require('readline-sync');

console.log('Welcome to room size calculator');
console.log('please enter the length of the room in meters');

let roomLength = readline.question();

console.log('Thanks!');
console.log('please enter the width of the room in meters');

let roomWidth = readline.question();

function feetConversion(lengthInMeters, widthInMeters) {
  return (lengthInMeters * 10.7639) * (widthInMeters * 10.7639);
}

console.log(`The area of the room is ${roomLength * roomWidth} meters square.`);
let areaInFeet = feetConversion(roomLength, roomWidth);

console.log(`The area of the room is ${areaInFeet} feet square`);
console.log('Goodbye');
