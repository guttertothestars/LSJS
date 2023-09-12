
Right Triangles

Write a function that takes a positive integer, n, as an argument and logs a 
right triangle whose sides each have n stars. The hypotenuse of the triangle 
(the diagonal side in the images below) should have one end at the lower-left 
of the triangle, and the other end at the upper-right.

Examples:
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

function triangle(baseLength) {
  let numberOfStars = 1;
  let numberOfSpaces = baseLength - numberOfStars;

  while (numberOfStars <= baseLength) {
    console.log(`${' '.repeat(numberOfSpaces)}${'*'.repeat(numberOfStars)}`);
    numberOfStars++;
    numberOfSpaces--;
  }
}