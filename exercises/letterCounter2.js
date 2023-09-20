/*
Letter Counter (Part 2)

Modify the wordSizes function from the previous exercise to exclude non-letters
when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples:
wordSizes('Four score and seven.');
// { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 3 }
wordSizes("What's up doc?");
// { "2": 1, "3": 1, "5": 1 }
wordSizes('');
// {}

Problem:
Same as before, but with the necessity of stripping non-alpha chars

*/

function stripNonAlphas(word) {
  let chars = word.toUpperCase().split('');
  let cleanWord = '';

  for (const char of chars ) {
    if (char >= 'A' && char <= 'Z') {
      cleanWord += char;
    }
  }

  return cleanWord;
}

function wordSizes(string) {
  //Guard Clauses
  if (typeof string !== 'string') {
    return "This is not a string!";
  }

  if (string.length === 0) {
    return {};
  }

  //Setup collection object
  let wordSizesAnswer = {};
  //Clean up string by removing non-alphas
  let words = string.split(' ').map(word => stripNonAlphas(word));

  for (const word of words) {
    if (Object.keys(wordSizesAnswer).includes(word.length)) {
      wordSizesAnswer[word.length] = wordSizesAnswer + 1;
    } else {
      wordSizesAnswer[word.length] = 1;
    }
  }

  return wordSizesAnswer;
}