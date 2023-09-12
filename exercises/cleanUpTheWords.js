/* Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the
non-alphabetic characters replaced by spaces. If one or more non-alphabetic
characters occur in a row, you should only have one space in the result
(i.e., the result string should never have consecutive spaces).

Example:
cleanUp("---what's my +*& line?");    // " what s my line "
*/

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

function lastChar(string) {
  return string[string.length - 1];
}

function cleanUp(string) {
  let cleanString = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isUpperCase(string[idx]) || isLowerCase(string[idx])) {
      cleanString += string[idx];
    } else if (idx ===  0 || lastChar(cleanString) !== ' ') {
      cleanString += ' ';
    }
  }

  return cleanString;
}