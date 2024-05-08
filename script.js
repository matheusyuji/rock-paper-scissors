const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const WINNER = 5;
let computerScore = 0;
let playerScore = 0;

function getRandNum () {
  let num = Math.floor(Math.random() * 3) + 1;
  return num;
}

function checkWinner () {
  if (playerScore == WINNER)
    document.querySelector(".finalResult").textContent = "You are the winner!";
  else if (computerScore == WINNER)
    document.querySelector(".finalResult").textContent = "Computer are the winner!";
}

function playRound (playerChoice, computerChoice) {
  let result;
  if (playerChoice == computerChoice)
    result = "It's a tie!";
  else if ((playerChoice == ROCK && computerChoice == SCISSORS) ||
          (playerChoice == PAPER && computerChoice == ROCK) ||
          (playerChoice == SCISSORS && computerChoice == PAPER)) 
  {
    result = "You won!";
    playerScore++;
  } else {
    result = "You lost!";
    computerScore++;
  }
  document.querySelector(".computerScore").textContent = computerScore;
  document.querySelector(".playerScore").textContent = playerScore;
  document.querySelector(".result").textContent = result;
  checkWinner();
}

function clickBtn (button) {
  let playerChoice = parseInt(button.id);
  let computerChoice = getRandNum();
  playRound (playerChoice, computerChoice);
}