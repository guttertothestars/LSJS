/*
Name Swapping

Write a function that takes a string argument consisting of a first name, a 
space, and a last name, and returns a new string consisting of the last name, 
a comma, a space, and the first name.

Examples:
swapName('Joe Roberts');    // "Roberts, Joe"

Further Exploration

What if the person has one or more middle names? Refactor the current solution 
so that it can accommodate this; the middle names should be listed after the 
first name:

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"
*/

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

function swapName (name) {
  name = name.split(' ');
  let lastName = name.pop();
  return `${lastName}, ${name.join(' ')}`;
}