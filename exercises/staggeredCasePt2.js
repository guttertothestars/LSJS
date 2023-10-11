/*
Staggered Caps (Part 2)

Modify the function from the previous exercise so it ignores non-alphabetic
characters when determining whether it should uppercase or lowercase each
letter. The non-alphabetic characters should still be included in the return
value; they just don't count when toggling the desired case.

Example:
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

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
    }
  } //end loop
  return staggeredChars.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);