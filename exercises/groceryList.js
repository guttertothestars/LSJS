/*
Grocery List - Orange you glad I didn't say banana?

Write a function that takes a grocery list in a two-dimensional array and
returns a one-dimensional array. Each element in the grocery list contains a
fruit name and a number that represents the desired quantity of that fruit.
The output array is such that each fruit name appears the number of times equal
to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus,
we return an array that contains 3 apples, 1 orange, and 2 bananas.

Example:

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

Problem:
-take a two dimensional array and return a one dimensional array.
-each sub-array consists of the grocery-item, and the quantity.
-The returned array needs to consist of the grocery items, in the correct count

Edge cases:
-grocery items with a zero count
-empty string grocery items

Data Structures: Nested arrays, arrays

Algorithm:
-declare and initialize an empty array, shoppingBag
-invoke the forEach method on the grocery list
--on each iteration declare and define a for loop that intializes with 0, has
  an end condition of element.length -1, and increments by 1.
--in the loop body invoke push on shoppingBag and pass in element[0]
-return shoppingBag
*/

function buyFruit(groceryList) {
  let shoppingBag = [];

  groceryList.forEach(element => {
    for (let index = 0; index < element[1]; index++) {
      shoppingBag.push(element[0]);
    }
  });
  return shoppingBag;
}