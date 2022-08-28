let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  let compareUser = Math.abs(userGuess - secretNumber);
  let compareComputer = Math.abs(computerGuess - secretNumber);

  if (compareUser <= compareComputer) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  switch (winner) {
    case "human":
      humanScore += 1;
      break;
    case "computer":
      computerScore += 1;
      break;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
