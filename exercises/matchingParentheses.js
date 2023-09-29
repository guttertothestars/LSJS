/*
Matching Parentheses?

Write a function that takes a string as an argument and returns true if all
parentheses in the string are properly balanced, false otherwise. To be
properly balanced, parentheses must occur in matching '(' and ')' pairs.

Examples:
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


Problem: determine if the number of parentheses is equal, and if the number of
right parentheses ever exceeds the number of left parentheses

I/O: A string/A Boolean

Data Structures:
-The initial string
-an array of chars to iterate over
-two intever variables, leftParen and rightParen

Algorithm:
-declare and initialize two variables, leftParen and rightParen, both set to 0
-split argument string into character array
-iterate over char array
--if char is left parenthesis increment leftParen by 1
--if char is right parenthesis increment rightParen by 1
--return false if rightParen > leftParen at any point
-return true if leftParen === rightParen, otherwise return false

*/

function isBalanced(string) {
  let leftParen = 0;
  let rightParen = 0;
  let chars = string.split('');

  for (let i = 0; i < string.length; i++) {

    if (chars[i] === '(') {
      leftParen++;
    } else if (chars[i] === ')') {
      rightParen++;
    }

    if (rightParen > leftParen) return false;
  }
  return leftParen === rightParen;
}
