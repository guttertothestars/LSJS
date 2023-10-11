/*
Rotation (Part 1)

Write a function that rotates an array by moving the first element to the end
of the array. Do not modify the original array.

    If the input is not an array, return undefined.
    If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]


Problem: write a function that takes an array as an argument and returns a new
array that is "rotated" i.e. the first element of the original array is the last
element of the returned array. The original array musn't be mutated.

Edge cases: return undefined if argument is not an array.

Data Structures: Arrays all around

Algorithm:
-Guard clause for non-array arguments
-declare and initialiaze an array, copyArray, and set it to the return value of
slice called on the first array from the element at index 1 to the end
-invoke the push method on the copyArray object, and pass it the value of the
element found at index 0 of the argument array
-return the copied array.
*/

function rotateArray(array) {
  if (Array.isArray(array) !== true) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  let copyArray = array.slice(1);
  copyArray.push(array[0]);
  return copyArray;
}