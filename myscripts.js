
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerRandom = options[Math.floor(Math.random() * options.length)]
    return computerRandom;
    }
console.log(getComputerChoice())


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


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
