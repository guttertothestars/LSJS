Double Doubles
A double number is an even-length number whose left-side digits are exactly 
the same as its right-side digits. For example, 44, 3333, 103103, and 7676 
are all double numbers, whereas 444, 334433, and 107 are not.
Write a function that returns the number provided as an argument multiplied 
by two, unless the argument is a double number; otherwise, return the double 
number as-is.

Examples:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

function twice(number) {
  //get an array of digits from number
  let digits = String(number).split("").map((char) => {
    return Number(char)
  });

  //guard clause for odd length nums
  if (digits.length % 2 !== 0) {
    return number * 2;
  }

  //check for equality between halves. Must convert each half to string before 
  //comparing, since array elements aren't equal as they reside in different 
  //memory spaces
  mid = digits.length/2
  if (digits.slice(0, mid).join('') === digits.slice(mid).join('')) {
    return number;
  }

  //number is neither an odd length, nor a double number. Return it's double
  return number * 2;
}