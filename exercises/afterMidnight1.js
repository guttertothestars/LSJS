/*
After Midnight (Part 1)

The time of day can be represented as the number of minutes before or after
midnight. If the number of minutes is positive, the time is after midnight.
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns
the time of day in 24 hour format (hh:mm). Your function should work with any
integer input.

You may not use javascript's Date class methods.

Examples:

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


Problem:
-Take a given number of minutes and determine what hour it would
represent in a 24 hour clock.
-This problem needs to work with negative and positive numbers.
Edge Cases:
-numbers that exceed 24 hours
Data Structures:
-I/O: an integer, a string
Algorithm:
take the given integer and divide by 60 to get the number of hours, and the
remainder in minutes. Use helper functions.
if the hours exceed 24, divide by 24 and take the remainder as hours.
return a string with template literals in the required format.
*/

function findHours(totalMinutes) {
  return Math.floor(totalMinutes / 60) % 24;
}

function findMinutes(totalMinutes) {
  return totalMinutes % 60;
}

function timeOfDay(totalMinutes) {
  let hours = findHours(totalMinutes);
  let minutes = findMinutes(totalMinutes);
  if (totalMinutes < 0) {
    hours = 24 + hours;
    minutes = 60 + minutes;
  }

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}