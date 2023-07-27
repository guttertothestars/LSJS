// How Old is Teddy?

// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:
// Teddy is 69 years old!

function ageOfTeddy() {
  const age = Math.floor(Math.random() * (120 - 20 + 1) + 20);
  console.log(`Teddy is ${age} years old!`);
}

Further exploration:
Math.round() rounds to the nearest integer, so it wouldn't be max exclusive, 
it would be max inclusive.Further

function randomBetween(min, max) {
  //.sort() converts elements to strings unless a comparison function is used
  //as a callback
  let endpoints = [min, max].sort(function(a, b) {
    return a - b;
  });
  return Math.floor(Math.random() * (endpoints[1] - endpoints[0] + 1)) + endpoints[0];
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);

