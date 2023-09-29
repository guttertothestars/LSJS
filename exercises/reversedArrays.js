/*
Reversed Arrays

Write a function that takes an Array as an argument and reverses its elements
in place. That is, mutate the Array passed into this method. The return value
should be the same Array object.

You may not use Array.prototype.reverse().

Examples:
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

Problem: reverse an array in place (i.e. mutate the array) without using
Array.prototype.reverse()
Input/Output: The SAME array

Data Structures: Original array (ogArray) and a copy array (cpyArray) to pull
from.

Algorithm:
-Use a guard clause: if array. length <= 1 return array.
-make a copy of the orginal array
-declare and initialize a count variable and set it to 0
-declare in initialize a for loop with array.length as the initialization, > 0
as the continuation condition, and i-- as the decrement.
- for each iteration reasign ogArray element at count to element at cpyArray
position i
-count ++
-return ogArray after loop terminates
*/

function reverse(ogArray) {
  //guard clause
  if (ogArray.length <= 1) return ogArray;

  let copyArray = ogArray.slice();
  let count = 0;

  for (let i = copyArray.length - 1; i >= 0; i--) {
    ogArray[count] = copyArray[i];
    count++;
  }

  return ogArray;
}