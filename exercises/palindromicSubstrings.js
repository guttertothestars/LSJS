/*
Palindromic Substrings

Write a function that returns a list of all palindromic substrings of a string.
That is, each substring must consist of a sequence of characters that reads the
same forward and backward. The substrings in the returned list should be sorted
by their order of appearance in the input string. Duplicate substrings should be
included multiple times.

You may (and should) use the substrings function you wrote in the previous
exercise.

For the purpose of this exercise, you should consider all characters and pay
attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
are not. In addition, assume that single characters are not palindromes.

Examples:

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

Problem:
--Find all substrings (see previous two substring challenges)
--Iterate through array of all substrings and check for palindromes
  probably should use filter
EdgeCases, single letters
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

function substrings(string) {
  let allSubstrings = [];
  for (let i = 0; i <= string.length; i++ ) {
    allSubstrings.push(leadingSubstrings(string.slice(i)));
  }
  return allSubstrings.flat();
}

function palindromes(string) {
  let allSubstrings = substrings(string);
  let allPalindromes = allSubstrings
    .filter(substring => isPalindrome(substring) && substring.length > 1);
  return allPalindromes;
}