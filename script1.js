
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

let playerScore = 0
let computerScore = 0

function game001 (choice) {
    let result = playRound(choice, computerPlay());

    if (playerScore < 5 && computerScore < 5) {
        if (result === 1) {
            roundResult.textContent = "You Won This Round";
            ++playerScore;
        } else if (result === -1) {
            roundResult.textContent = "The Computer Won This Round";
            ++computerScore;
        } else if (result === 0) {
            roundResult.textContent = "That round was a tie!"
        }
    } 
    if (playerScore === 5) {
        roundResult.textContent = "You Won The Game!"
    } else if (computerScore === 5) {
        roundResult.textContent = "The Computer Won The Game"
    }
    currentScore.textContent = playerScore + " vs " + computerScore;
    
}

function reset() {
    console.log("RESET FUNCTION")
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = "Click any button to start the game";
    currentScore.textContent = null
}

const rockbtnvar = document.querySelector("#rockbtn");
rockbtnvar.addEventListener("click", () => {
    game001("rock");
})

const paperbtnvar = document.querySelector("#paperbtn");
paperbtnvar.addEventListener("click", () => {
    game001("paper");
})

const scissorsbtnvar = document.querySelector("#scissorsbtn");
scissorsbtnvar.addEventListener("click", () => {
    game001("scissors");
})


const roundResult = document.createElement("div");
roundResult.classList.add("roundResult");
roundResult.textContent = "Click any button to start the game";

const currentScore = document.createElement("div");
currentScore.classList.add("currentScore");

const resetBtn = document.createElement("button");
resetBtn.classList.add("resetBtn");
resetBtn.textContent = "Play Again?";
resetBtn.addEventListener("click", () => {
    reset()
})

const containervar = document.querySelector("#container");

containervar.appendChild(roundResult);
containervar.appendChild(currentScore);
containervar.appendChild(resetBtn);