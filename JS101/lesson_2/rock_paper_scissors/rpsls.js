// JS Rock Paper Scissors Lizard Spock

const readline = require('readline-sync');
const MESSAGES = require('./rpsls_messages.json');

const MAX_ROUNDS = 5;
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_ABBREVIATIONS = {r : 'rock', p : 'paper', s : 'scissors',
  l : 'lizard', sp : 'spock' };

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

let roundCount;
let computerScore;
let playerScore;

function prompt(message) {
  console.log(`=> ${message}`);
}

function handleAbbreviatedChoice(input) {
  input = input.toLowerCase();
  if (input.length > 2 ) {
    return input;
  } else if (input === 'sp' || input === 'spock') {
    return VALID_ABBREVIATIONS['sp'];
  } else {
    return VALID_ABBREVIATIONS[input[0]];
  }
}

function wait(timeLimitMilliseconds) {
  let startTime = new Date().getTime();
  while (true) {
    let currentTime = new Date().getTime();
    let timeElapsed = currentTime - startTime;
    if (timeElapsed >= timeLimitMilliseconds) break;
  }
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function scoreRound(choice, computerChoice) {
  roundCount += 1;
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    playerScore += 1;
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    computerScore += 1;
  }
}
function displayWinner(choice, computerChoice) {
  if (playerWins(choice,computerChoice)) {
    prompt(MESSAGES.win);
  } else if (choice === computerChoice ) {
    prompt(MESSAGES.draw);
  } else {
    prompt(MESSAGES.lose);
  }
}

function displayScore() {
  prompt(`Score is: You:${playerScore} Computer:${computerScore}`);
}

function displayRound() {
  prompt(`Round ${roundCount}`);
}

function displayOverallWinner() {
  prompt("Good Game!");
  if (playerScore === computerScore) {
    prompt("Sadly, no one wins.");
  } else if (computerScore > playerScore) {
    prompt("Computer wins. Better luck next time.");
  } else {
    prompt("Victory is yours. Go in glory.");
  }
}

// Begin Program
console.clear();

prompt(MESSAGES.welcome);
prompt(MESSAGES.seeRules);
let wantsRules = readline.question();
if (wantsRules === ('y')) {
  prompt('');
  prompt('');
  console.log(MESSAGES.rules.join(''));
  prompt('');
  prompt('');
}

while (true) {
// Begin Tourney Round
  roundCount = 1;
  computerScore = 0;
  playerScore = 0;
  prompt("We're going to play best out of five, okay?");
  prompt("Let me know if you are ready (Y)");
  let ready = readline.question();

  if (ready) {
    console.clear();
  }


  while (roundCount <= MAX_ROUNDS) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    choice = handleAbbreviatedChoice(choice);

    while (!VALID_CHOICES.includes(choice)) {
      console.log(MESSAGES.invalidChoice);
      prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
      choice = readline.question();
      choice = handleAbbreviatedChoice(choice);
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    displayWinner(choice, computerChoice);
    scoreRound(choice, computerChoice);
    wait(2500);
    console.clear();

    if (roundCount < 6) {
      displayRound();
      displayScore();
    }
  }

  displayOverallWinner();
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}