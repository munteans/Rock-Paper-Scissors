const userChoiceDisplay = document.querySelector("[data-heading-user]");
const compChoiceDisplay = document.querySelector("[data-heading-computer]");
const resultDisplay = document.querySelector("[data-heading-result]");
const displayChoices = document.querySelectorAll("[data-counter-button]");
const displayWins = document.querySelector("[data-counter-wins]");
const displayTotalGames = document.querySelector("[data-counter-total]");
const displayLosses = document.querySelector("[data-counter-losses]");
let userChoice;
let compChoice;
let result;
let totalGames = 0;
let userWins = 0;
let compWins = 0;

displayChoices.forEach((displayChoices) =>
  displayChoices.addEventListener("click", (e) => {
    userChoice = e.target.dataset.counterButton;
    compSel();
    playGame();
  })
);

function compSel() {
  const comp = Math.floor(Math.random() * displayChoices.length + 1);
  if (comp === 1) {
    compChoice = "rock";
  } else if (comp === 2) {
    compChoice = "paper";
  } else compChoice = "scissors";
  return compChoice;
}

function playGame() {
  if (userChoice === compChoice) {
    result = `It's a draw! You both chose ${compChoice}`;
    userWins++;
    compWins++;
    totalGames++;
  } else if (
    (userChoice === "rock" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "rock")
  ) {
    result = "Computer wins!";
    totalGames++;
    compWins++;
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    result = "You win!";
    userWins++;
    totalGames++;
  }
  displayWins.innerHTML = userWins;
  displayTotalGames.innerHTML = totalGames;
  displayLosses.innerHTML = compWins;
  resultDisplay.innerHTML = result;
  return result;
}
