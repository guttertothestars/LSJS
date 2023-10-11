/*
Staggered Caps (Part 1)

Write a function that takes a string as an argument and returns that string
with a staggered capitalization scheme. Every other character, starting from
the first, should be capitalized and should be followed by a lowercase or
non-alphabetic character. Non-alphabetic characters should not be changed, but
should be counted as characters for determining when to switch between upper
and lower case.

Examples:
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

Problem: mutatee a string such that the first letter is capitalized and every
other character capitalized. Non-alpha characters do count as characters.

Capitalized characters should be lowercased if they fall into that part of the
pattern.

Data structures: strings and more strings.

Algorithm:
-create a helper function, swapCase(char), that just swaps the case of a character.
create a helper function, toggle(boolean), that toggles a boolean
-declare and initialize a variable, capitalizeMe, and set it to false.
-declare and initialze a chars array with the return value of the string split
into characters

-upcase the first chars element
-declare and initialze a loop, starting with 1, until the length of the chars
array, and incrementing by 1 that:
--checks if chars[i] equals and alpha char
---if non-alpha char
----toggle(capitalizeMe)
----continue
---if alpha char && capitalizeMe === true, set it to the value of swapcase(char)
---toggle(capitalizeMe)
if alpha char && capitalizeMe === false
---toggle(capitalizeMe)
---continue
--return chars array, joined on blank spaces.
*/

function toggle(value) {
  return !value;
}

function swapCase(char) {
  if (char >= 'a' && char <= 'z') {
    return char.toUpperCase();
  } else if (char >=  'A' && char <= 'Z') {
    return char.toLowerCase();
  }
}

function isChar(char) {
  if ((char >= 'a' && char <= 'z') || (char >=  'A' && char <= 'Z')) {
    return true;
  } else {
    return false;
  }
}

function staggeredCase(string) {
  let capitalizeMe = true;
  let staggeredChars = [];

  for (let i = 0; i <= string.length; i++) {
    if (isChar(string[i])) {
      //nested if
      if (capitalizeMe) {
        staggeredChars.push(string[i].toUpperCase());
      } else {
        staggeredChars.push(string[i].toLowerCase());
      }
      capitalizeMe = !capitalizeMe;
      //end nested if
    } else {
      staggeredChars.push(string[i]);
      capitalizeMe = !capitalizeMe;
    }
  } //end loop
  return staggeredChars.join('');
}

console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");
