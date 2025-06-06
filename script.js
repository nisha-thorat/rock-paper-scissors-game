let rounds = 0;
let userWins = 0;

const roundsDisplay = document.getElementById("para1");
const userWinsDisplay = document.getElementById("para2");
const output = document.getElementById("output");

function playGame(userChoice) {
  rounds++;
  roundsDisplay.innerText = "Rounds⭕: " + rounds;

  let computerChoice = getComputerChoice();
console.log(userChoice,computerChoice);

  if (userChoice === computerChoice) {
    output.innerHTML="Draw🫡";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userWins++;
    userWinsDisplay.innerText = "User Wins🥳: " + userWins;
    output.innerHTML = "You Win!🥇";
  } else {
    output.innerHTML = "You Lost!😶";
  }


}

function getComputerChoice() {
  const arr= ["rock", "paper", "scissors"];
  let x=Math.random()*3;
  let random=parseInt(x);
  return arr[random];
}

function resetGame() {
  rounds = 0;
  userWins = 0;
  roundsDisplay.innerText = "Rounds: 0";
  userWinsDisplay.innerText = "User Wins: 0";
  output.innerText="Result:";
}
