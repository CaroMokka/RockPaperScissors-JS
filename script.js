let userChoice;
let userScore = 0;
let computerChoice;
let computerScore = 0;

let choices = ["rock", "paper", "scissors"]

window.onload = function() {
    let choicesBox = document.querySelector("#user-choices");
    for(let i = 0; i < choices.length; i++){
        let opt = document.createElement("img");
        opt.className = "opt-style"
        opt.id = choices[i]
        opt.src = `assets/${choices[i]}.png`;
        choicesBox.appendChild(opt)
        opt.addEventListener("click", selectedChoice);
    }
}
 function selectedChoice() {
    userChoice = this.id;
    document.querySelector("#user-choice").src = `assets/${userChoice}.png`;
 }
