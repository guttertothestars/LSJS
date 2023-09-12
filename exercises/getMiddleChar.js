// Get Middle Character

// Write a function that takes a non-empty string argument and returns the middle
// character(s) of the string. If the string has an odd length, you should return
// exactly one character. If the string has an even length, you should return
// exactly two characters.

function centerOf(str) {
  let chars = str.split('');

  if (str.length % 2 === 0) {
    return chars[str.length / 2 - 1] + chars[str.length / 2];
  } else {
    return chars[Math.floor(str.length / 2)];
  }
}

// Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School'); // " "
centerOf('Launch'); // "un"
centerOf('Launchschool'); // "hs"
centerOf('x'); // "x"