
function computerPlay() {
    let randomNumber = Math.round(Math.random()*10)

    if (randomNumber <= 3) {
        return "rock"
    } else if (randomNumber > 3 && randomNumber <= 6) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection + " vs " + computerSelection)

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


function game () {
    let playerPoints = 0
    let computerPoints = 0
    
    // First player to get 3 wins is essentially the same as "best of 5 rounds", 
    // but eliminates the possibility of a game like a 2 on 2 with a final round tie
    //      
    while (playerPoints < 3 && computerPoints < 3) {
 
        roundResult = playRound(prompt("Please Enter Rock, Paper, or Scissors"),computerPlay())
        
        if (roundResult === 1) {
            playerPoints++
        } else if (roundResult === -1) {
            computerPoints++
        }

        console.log(playerPoints + " vs. " + computerPoints)

        if (playerPoints === 3 ) {
            return "WINNER"
        } else if (computerPoints === 3) {
            return "LOSER"
        }
    }
}

let playerScore = 0
let computerScore = 0

const rockbtnvar = document.querySelector("#rockbtn");
rockbtnvar.addEventListener("click", () => {
    let result = playRound("rock", computerPlay());

    if (playerScore < 5 && computerScore < 5) {
        if (result === 1) {
            score.textContent = "You have " + ++playerScore + " and the computer has " + computerScore;
        } else if (result === -1) {
            score.textContent = "You have " + playerScore + " and the computer has " + ++computerScore;
        }
    } 
    if (playerScore === 5) {
        score.textContent = "You Won!"
    } else if (computerScore === 5) {
        score.textContent = "The Computer Won"
    }
})

const paperbtnvar = document.querySelector("#paperbtn");
paperbtnvar.addEventListener("click", () => {
    let result = playRound("paper", computerPlay());

    if (playerScore < 5 && computerScore < 5) {
        if (result === 1) {
            score.textContent = "You have " + ++playerScore + " and the computer has " + computerScore;
        } else if (result === -1) {
            score.textContent = "You have " + playerScore + " and the computer has " + ++computerScore;
        }
    }
    if (playerScore === 5) {
        score.textContent = "You Won!"
    } else if (computerScore === 5) {
        score.textContent = "The Computer Won"
    }
})

const scissorsbtnvar = document.querySelector("#scissorsbtn");
scissorsbtnvar.addEventListener("click", () => {
    let result = playRound("scissors", computerPlay());
    
    if (playerScore < 5 && computerScore < 5) {
        if (result === 1) {
            score.textContent = "You have " + ++playerScore + " and the computer has " + computerScore;
        } else if (result === -1) {
            score.textContent = "You have " + playerScore + " and the computer has " + ++computerScore;
        }
    }
    if (playerScore === 5) {
        score.textContent = "You Won!"
    } else if (computerScore === 5) {
        score.textContent = "The Computer Won"
    }
})

const containervar = document.querySelector("#container");

const score = document.createElement("div");
score.classList.add("scoreboard");
score.textContent = "Click any button to start the game";

containervar.appendChild(score);

         
//console.log(game())   

