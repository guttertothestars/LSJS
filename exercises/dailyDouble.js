// ddaaiillyy ddoouubbllee

// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

// Examples:


function crunch(string) {
  let newStringChars = [];
  let stringChars = string.split('');

  for (let i = 0; i < string.length; i += 1) {
    if (stringChars[i] === newStringChars.slice(-1)[0]) {
      continue;
    }
    newStringChars.push(stringChars[i]);
  }
  console.log(newStringChars.join(''));
  return newStringChars.join('');
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
