//Swap the case of letters in a string

function swapCase(string) {
  let letters = string.split('');
  let newString = '';
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toLowerCase()) {
      newString += letters[i].toUpperCase();
    } else {
      newString += letters[i].toLowerCase();
    }
  }
  return newString;
}

function swapCase(string) {
  let letters = string.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toLowerCase()) {
      letters[i] = letters[i].toUpperCase();
    } else {
      letters[i] = letters[i].toLowerCase();
    }
  }
  return letters.join('');
}