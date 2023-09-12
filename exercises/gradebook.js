/*Grade Book

Write a function that determines the mean (average) of the any number of scores
passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for
negative values or values greater than 100.
*/

function getGrade(...args) {
  //guard clause for empty args array
  if (args.length === 0) {
    return "Get to work";
  }

  let averageScore = args.reduce((runningTotal, currentScore) => {
    return runningTotal + currentScore;
  }) / args.length;

  if (averageScore >= 90 && averageScore <= 100) {
    console.log('A');
  } else if (averageScore >= 80 && averageScore <= 89) {
    console.log('B');
  } else if (averageScore >= 70 && averageScore <= 79) {
    console.log('C');
  } else if (averageScore >= 60 && averageScore <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }

}