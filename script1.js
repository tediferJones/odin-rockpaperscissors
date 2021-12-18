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
    
    let newPlayerSelection = playerSelection.toLowerCase()

    if (newPlayerSelection === "rock") {
        if (computerSelection === "scissors") {
            return 1 //"You Win, Rock Beats Scissors"
        } else if (computerSelection === "paper") {
            return -1 //"You Lose, Paper Beats Rock "
        } else if (computerSelection === "rock") {
            return 0 //"Its a Tie, Rock ties Rock"
        }

    } else if (newPlayerSelection === "paper") {
        if (computerSelection === "rock") {
            return 1 //"You Win, Paper Beats Rock"
        } else if (computerSelection === "scissors") {
            return -1 //"You Lose, Scissors Beats Paper"
        } else if (computerSelection === "paper") {
            return 0 //"Its a Tie, Paper ties Paper"
        }
    } else if (newPlayerSelection === "scissors") {
        if (computerSelection === "paper") {
            return 1 //"You Win, Scissors Beats Paper"
        } else if (computerSelection === "rock") {
            return -1 //"You Lose, Rock Beats Scissors"
        } else if (computerSelection === "scissors") {
            return 0 //"Its a Tie, Scissors ties Scissors"
        }
    }
}

// This shit dont work, only iterates one time, should loop 5 times
function game () {
    i = 0
    while (i <= 4) {
        playRound(playerSelection, computerSelection)
        console.log(i)
        i++
        //return playRound(playerSelection, computerSelection) + i
    }
}

function game001 () {
    let playerPoints = 0
    let computerPoints = 0

    if (playRound(playerSelection, computerSelection) === 1) {
        playerPoints++
    } else if (playRound(playerSelection, computerSelection) === -1) {
        computerPoints++
    } else {
        return
    }
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)

    console.log(playerPoints + " vs. " + computerPoints)
}

let playerSelection = "SCISSORS"
let computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))

console.log(game001())  

console.log("end of program")