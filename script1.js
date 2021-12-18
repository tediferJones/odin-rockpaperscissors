let y = "poopoodoodoo"


function computerPlay() {
    let randomNumber = Math.round(Math.random()*10)

    if (randomNumber <= 3) {
        return "rock"
    } else if (randomNumber > 3 && randomNumber <= 6) {
        return "paper"
    } else {
        return "scissors"
    }
    return "" + randomNumber
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win, Rock Beats Scissors"
        } else if (computerSelection === "paper") {
            return "You Lose, Paper Beats Rock "
        } else if (computerSelection === "rock") {
            return "Its a Tie, Rock ties Rock"
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win, Paper Beats Rock"
        } else if (computerSelection === "scissors") {
            return "You Lose, Scissors Beats Paper"
        } else if (computerSelection === "paper") {
            return "Its a Tie, Paper ties Paper"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win, Scissors Beats Paper"
        } else if (computerSelection === "rock") {
            return "You Lose, Rock Beats Scissors"
        } else if (computerSelection === "scissors") {
            return "Its a Tie, Scissors ties Scissors"
        }
    }
}

const playerSelection = computerPlay()
const computerSelection = computerPlay()
console.log(playRound(playerSelection,computerSelection))