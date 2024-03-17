function getComputerChoice () {
  let num;
  // choose a number between 1 and 3
  num = Math.floor(Math.random() * 3) + 1;
  
  if (num == 1) return "Rock";
  else if (num == 2) return "Paper";
  else return "Scissors";
}

function playRound (playerSelection, computerSelection, playerWins, computerWins) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (playerSelection == computerSelection) 
    return "It's a tie!";

  if (playerSelection == "ROCK") {
    switch (computerSelection) {
      case ("PAPER"):
        ++computerWins;
        return "You Lose! Paper beats Rock";
      case ("SCISSORS"):
        ++playerWins;
        return "You Won! Rock beats Scissors";
    }
  }
  else if (playerSelection == "PAPER") {
    switch (computerSelection) {
      case ("ROCK"):
        ++playerWins;
        return "You Won! Paper beats Rock";
      case ("SCISSORS"):
        ++computerWins;
        return "You Lost! Scissors beats Paper";
    }
  }
  else {
    switch (computerSelection) {
      case ("ROCK"):
        return "You Lost! Rock beats Scissors";
      case ("PAPER"):
        ++computerWins;
        ++playerWins;
        return "You Won! Scissors beats Paper";
    }
  }
}

function playGame () {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt ("Rock, Paper or Scissors", "Choose one");
    let computerSelection = getComputerChoice();

    console.log (playRound (playerSelection, computerSelection, playerWins, computerWins));
    console.log (`Hello ${playerWins}, nice to see you!`);
    console.log (`Hello ${computerWins}, nice to see you!`);
  }
}

console.log (playGame());