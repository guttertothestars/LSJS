/*
What Century is That?

Write a function that takes a year as input and returns the century. The
return value should be a string that begins with the century number, and ends
with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000
comprise the 20th century.

Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Problem:
divide a given year by 100 and determine what century it is.
-use Math.ceil to round up appropriately
Create helper function to determine suffix based on last two digits
Data Structures: Numbers, strings

Algorithm:
Take a given year, divide it by 100, and round up to determine the century.
Take the last two digits and determine the correct suffix
-convert the number of the century to a string
-take the last two characters of that string
-compare last two to list of suffix requirements and return correct suffix and year

*/
function whatSuffix(century) {
  let lastTwoDigits = String(century).slice(-2);
  let lastDigit = String(century).slice(-1);
  let suffix = '';

  if (lastTwoDigits === '11' || lastTwoDigits === '12' || lastTwoDigits === '13') {
    suffix = 'th';
  } else if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  } else if (lastDigit === '3') {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return suffix;
}

function century(year) {
  return String(Math.ceil(year / 100 )) + whatSuffix(Math.ceil(year / 100 ));
}