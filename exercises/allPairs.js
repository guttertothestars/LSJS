// Write a function that will takes two numbers, and returns all the pairs
// between them.


// Further exploration: return only unique pairs.

function findAllPairs(smallestNumber,largestNumber) {
  let allPairsArray = [];
  for (let firstNum = smallestNumber; firstNum <= largestNumber; firstNum++) {
    for (let secondNum = firstNum + 1; secondNum <= largestNumber; secondNum++ ) {
      allPairsArray.push([firstNum, secondNum]);
    }
  }

  return allPairsArray;
}