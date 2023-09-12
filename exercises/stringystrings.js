Stringy Strings
Write a function that takes one argument, a positive integer, and returns a 
string of alternating '1's and '0's, always starting with a '1'. The length of 
the string should match the given integer.

Examples:
stringy(6) === "101010";
stringy(9) === "101010101";
stringy(4) === "1010";
stringy(7) === "1010101";

function stringy(delimiter) {
  let i = 1;
  let string = '';
  
  while (i <= delimiter) {
    if (string === "") {
      string += '1';
    } else if (string.slice(-1) === '1') {
      string += '0';
    } else {
      string += '1';
    }

    i++
  }
  console.log(string);
  return string;
}