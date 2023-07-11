
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerRandom = options[Math.floor(Math.random() * options.length)]
    return computerRandom;
    }



function match(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "It's a Draw";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
     ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = match(playerSelection, computerSelection);
    if (result == "It's a Draw") {
        return "It's a Draw"
    }
    else if ( result == "Player") {
        return `You Won! ${playerSelection} beats ${computerSelection}` 
    }
    else {
        return `You Lost! ${computerSelection} beats ${playerSelection}`
    }
}

function userInput() {
        const userChoice = prompt("Choose Rock, Paper, or Scissors");
        const userChoiceLower = userChoice.toLowerCase();
        return userChoiceLower;
}


function game() {
        let scorePlayer = 0;
        let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = userInput();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (match(playerSelection, computerSelection) == "Player") {
            scorePlayer++
        }
        else {
            scoreComputer++
        }
    }
    console.log("Game over");
    if (scorePlayer > scoreComputer) {
        console.log("You have Won!!!");
    }
    else if (scorePlayer < scoreComputer) {
        console.log("You have Lost!!!");
    }
    else {
        console.log("It is a draw!!!");
    }
}

game()

