let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10); //random integer between 0 and 9
}
//console.log(generateTarget());
//crée la varialble automatique
target = generateTarget();
console.log(target);

const compareGuesses = (humanGuess, computerGuess, targetGuess) => { //compare les scores
  return Math.abs(targetGuess - humanGuess) <= Math.abs(targetGuess - computerGuess);
}

//calcul du score
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore +=1;
  }
}

const advanceRound = () => {
  return currentRoundNumber += 1;
}
console.log(currentRoundNumber);
