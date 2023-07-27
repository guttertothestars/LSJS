// *Write a function that returns the next to last word in the String passed
// to it as an argument.
// *Words are any sequence of non-blank characters.
// *You may assume that the input String will always contain at least two words.

// Examples:
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Problem: find the next to last word in a string and return it

// Edge Cases: only strings are passed in and accepted

// Data structures:
// Input and output: strings
// data manipulation/iteration: arrays

// Algorithm:
// Declare a function with one parameter
// if argument passed is a string
// then split string into an array of indivdual words
// declare a variable 'penultimate' and set it to the length of the array
// return the last word in the array using array access syntax and the
// penultimate variable
// ELSE console log "This is not a string"
// invoke function and pass in string object

function penultimate(string) {
  if (typeof (string) === 'string') {
    return nextToLastWordGrabber(string);
  } else {
    return console.log("This is not a string");
  }
}

function nextToLastWordGrabber(string) {
  let words = string.split(' ');
  let penultimateIndex = (words.length - 1);
  return words[penultimateIndex];
}

// Further Exploration

// // Our solution ignored a couple of edge cases because we explicitly stated
// that you didn't have to handle them: strings that contain just one word, and
// strings that contain no words.

// // Suppose we need a function that retrieves the middle word of a
// phrase/sentence. What edge cases need to be considered? How would you handle
// those edge cases without ignoring them? Write a function that returns the
// middle word of a phrase or sentence. It should handle all of the edge cases
// you thought of.

// Edge Cases for Further Exploration:
// Not a string - handled
// Empty strings - handled
//strings of even lengths

function isOdd(number) {
  return number % 2 === 1;
}

function findMiddlePhrase(string) {
  if (typeof (string) !== 'string') {
    return console.log("Ceci n'est pas une string");
  } else if (string.length === 0 || string.split(' ').length <= 2) {
    return console.log("This string is too short");
  } else {
    return middleWordGrabber(string);
  }
}

function middleWordGrabber(string) {
  let words = string.split(' ');
  if (isOdd(words.length)) {
    return words[(Math.floor(words.length / 2))];
  } else {
    return words[(words.length / 2) - 1] +  ' ' + words[(words.length / 2)];
  }
}