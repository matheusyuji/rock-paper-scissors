function getComputerChoice () {
  let num;
  // choose a number between 1 and 3
  num = Math.floor(Math.random() * 3) + 1;
  
  if (num == 1) return "Rock";
  else if (num == 2) return "Paper";
  else return "Scissors";
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  let playerScore = 0;
  let computerScore = 0;
  let message = "";

  if (playerSelection == computerSelection) {
    message = "It's a tie!";
    return {playerScore, computerScore, message};
  }
   
  if (playerSelection == "ROCK") {
    switch (computerSelection) {
      case ("PAPER"):
        computerScore++;
        message =  "You Lose! Paper beats Rock";
        return {playerScore, computerScore, message};
      case ("SCISSORS"):
        playerScore++;
        message =  "You Won! Rock beats Scissors";
        return {playerScore, computerScore, message};
    }
  }
  else if (playerSelection == "PAPER") {
    switch (computerSelection) {
      case ("ROCK"):
        playerScore++;
        message = "You Won! Paper beats Rock";
        return {playerScore, computerScore, message};
      case ("SCISSORS"):
        computerScore++;
        message = "You Lost! Scissors beats Paper";
        return {playerScore, computerScore, message};
    }
  }
  else {
    switch (computerSelection) {
      case ("ROCK"):
        computerScore++;
        message = "You Lost! Rock beats Scissors";
        return {playerScore, computerScore, message};
      case ("PAPER"):
        playerScore++;
        message = "You Won! Scissors beats Paper";
        return {playerScore, computerScore, message};
    }
  }
}

function playGame () {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt ("Rock, Paper or Scissors", "Choose one");
    let computerSelection = getComputerChoice();

    let result = playRound (playerSelection, computerSelection);
    alert (result.message);

    if (result.playerScore == 1)
      playerScore++;
    else if (result.computerScore == 1)
      computerScore++;
  }

  if (playerScore > computerScore) {
    alert (`You won ${playerScore} x ${computerScore}`);
  } else if (computerScore > playerScore) {
    alert (`You lost ${playerScore} x ${computerScore}`);
  } else {
    alert (`It's a tie ${playerScore} x ${computerScore}`);
  }
}

playGame();