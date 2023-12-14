let userChoice;
let userScore = 0;
let computerChoice;
let computerScore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function () {
  let choicesBox = document.querySelector("#user-choices");
  for (let i = 0; i < choices.length; i++) {
    let opt = document.createElement("img");
    opt.className = "opt-style";
    opt.id = choices[i];
    opt.src = `assets/${choices[i]}.png`;
    choicesBox.appendChild(opt);
    opt.addEventListener("click", selectedChoice);
  }
};
function selectedChoice() {
  userChoice = this.id;
  document.querySelector("#user-choice").src = `assets/${userChoice}.png`;
  //computer choice - random election
  computerChoiceId = Math.floor(Math.random() * 3);
  computerChoice = choices[computerChoiceId];
  document.querySelector(
    "#computer-choice"
  ).src = `assets/${computerChoice}.png`;
  compareChoices(userChoice, computerChoice);
}
function compareChoices(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    userScore;
    computerScore;
  } else {
    if (userChoice == "rock" && computerChoice == "paper") {
      computerScore += 1;
    } else if (userChoice == "rock" && computerChoice == "scissors") {
      userScore += 1;
    } else if (userChoice == "paper" && computerChoice == "rock") {
      userScore += 1;
    } else if (userChoice == "paper" && computerChoice == "scissors") {
      computerScore += 1;
    } else if (userChoice == "scissors" && computerChoice == "paper") {
      userScore += 1;
    } else if (userChoice == "scissors" && computerChoice == "rock") {
      computerScore += 1;
    }
  }
  console.log(userScore,computerScore)
  document.querySelector("#computer-score").innerHTML = computerScore;
  document.querySelector("#user-score").innerHTML = userScore;
}

//user-rock contra pc-paper -> pc-paper
//user-rock contra pc-scissors -> user-rock

//user-paper contra pc-rock -> user-paper
//user-paper contra pc-scissors -> pc-scissors

//user-scissors contra pc-paper -> user-scissors
//user-scissors contra pc-rock -> pc-rock
