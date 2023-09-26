/*
How Many?

Write a function that counts the number of occurrences of each element in a
given array. Once counted, log each element alongside the number of
occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Example:
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

Problem: Iterate through an array counting each occurence of the elements
within, then log them to the console.

Edge Cases: Case sensitivity.

Data Structures:
I/O: array, strings
Will use an object to create type keys, and count values

Algorithm:
Create an empty count object
Loop through given array using forEach
If the vehicle type exists, increment the count by 1,
If the vehicle type doesn't exist create it and set count to 1
*/

function countOccurrences(vehicles) {
  let vehicleCount = {};
  vehicles.forEach(vehicle => {
    if (vehicleCount[vehicle] === undefined) {
      vehicleCount[vehicle] = 1;
    } else {
      vehicleCount[vehicle] += 1;
    }
  });
  return vehicleCount;
}

function logObject(object) {
  for (const key in object) {
    console.log(`${key} => ${object[key]}`);
  }
}
