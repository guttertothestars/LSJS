/*
Letter Counter (Part 1)

Write a function that takes a string consisting of zero or more space
separated words and returns an object that shows the number of words of
different sizes.

Words consist of any sequence of non-space characters.

Examples:
wordSizes('Four score and seven.');
// { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");
// { "2": 1, "4": 1, "6": 1 }
wordSizes('');
// {}


Problem: Given a string return an object that gives the character count as a
key, and the number of words with the same character count as a value.

Input: A string.
Output: An object

Edge Cases: Anything that is not a string should be rejected

Data Structures: Strings and objects

Algorithm
-guard clause to check for string type

-create an empty object for char count and word-instance count
-split string into array of words
-loop through string
--for each word check if word char count is contained in object as a key
---if not, create char count as new key, and 1 as new value
---if it is, + 1 to value
-return object
*/

function wordSizes(string) {
  //Guard Clauses
  if (typeof string !== 'string') {
    return "This is not a string!";
  }

  if (string.length === 0) {
    return {};
  }

  let wordSizesAnswer = {};
  let words = string.split(' ');

  for (const word of words) {
    if (Object.keys(wordSizesAnswer).includes(word.length)) {
      wordSizesAnswer[word.length] = wordSizesAnswer + 1;
    } else {
      wordSizesAnswer[word.length] = 1;
    }
  }

  return wordSizesAnswer;
}