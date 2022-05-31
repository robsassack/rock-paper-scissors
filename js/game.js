const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const currentScore = document.querySelector('.current-score');
const reset = document.querySelector('.reset');
const results = document.querySelector('.results');
const winner = document.querySelector('.winner');
let gameStatus = true;
let roundNum = 1;
// Set score for player and computer
let playerScore = 0;
let computerScore = 0;

// Generate computer's play
function computerPlay(){
    // Pick a random number 0 to 2
    switch(Math.floor(Math.random() * 3)) {
        // Return rock if 0
        case 0:
            return 'rock';
        // Return paper if 1
        case 1:
            return 'paper';
        // Return scissors if 2
        case 2:
            return 'scissors';
        default:
            return 'rock';
    }
}

// Play round of Rock, Paper Scissors
function playRound(playerSelection, computerSelection){
    if (gameStatus === false) {
        return;
    }
    // If player=rock and computer=paper, computer wins
    const newResult = document.createElement('div');
    if (playerSelection === 'rock'
        && computerSelection === 'paper') {
        newResult.textContent = `Round ${roundNum}: You Lose! Paper beats Rock`;
        computerScore++;
    }
    // If player=rock and computer=scissors, player wins
    else if (playerSelection === 'rock'
        && computerSelection === 'scissors') {
        newResult.textContent = `Round ${roundNum}: You Win! Rock beats Scissors`;
        playerScore++;
    }
    // If player=paper and computer=rock, player wins
    else if (playerSelection === 'paper'
        && computerSelection === 'rock') {
        newResult.textContent = `Round ${roundNum}: You Win! Paper beats Rock`;
        playerScore++;
    }
    // If player=paper and computer=scissors, computer wins
    else if (playerSelection === 'paper'
        && computerSelection === 'scissors') {
        newResult.textContent = `Round ${roundNum}: You Lose! Scissors beats Paper`;
        computerScore++;
    }
    // If player=scissors and computer=rock, computer wins
    else if (playerSelection === 'scissors'
        && computerSelection === 'rock') {
        newResult.textContent = `Round ${roundNum}: You Lose! Rock beats Scissors`;
        computerScore++;
    }
    // If player=scissors and computer=paper, player wins
    else if (playerSelection === 'scissors'
        && computerSelection === 'paper') {
        newResult.textContent = `Round ${roundNum}: You Win! Scissors beats Paper`;
        playerScore++;
    }
    // If anything else happens, it's a tie
    else {
        newResult.textContent = `Round ${roundNum}: Tie game!`;
    }
    currentScore.textContent = `🧑 ${playerScore} : ${computerScore} 🤖`;
    roundNum++;
    results.appendChild(newResult);
    if (playerScore === 5) {
        winner.textContent = 'You beat the computer!';
        endGame();
    } else if (computerScore === 5) {
        winner.textContent = 'The computer beat you!';
        endGame();
    }
    return;
}

// create button to allow player to play again
function endGame() {
    gameStatus = false;
    const restartButton = document.createElement('button');
    reset.style.margin = '10px 0px';
    restartButton.textContent = 'Play Again!';
    reset.appendChild(restartButton);
    restartButton.addEventListener('click', () => {
        reset.removeChild(restartButton);
        reset.style.margin = '0px';
        resetGame();
    });
}

// set values back to default to let player start again
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundNum = 1;
    gameStatus = true;
    currentScore.textContent = `🧑 ${playerScore} : ${computerScore} 🤖`;
    results.textContent = '';
    winner.textContent = '';
}

rockButton.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

paperButton.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});

