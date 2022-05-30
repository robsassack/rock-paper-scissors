const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const currentScore = document.querySelector('.current-score');
const reset = document.querySelector('.reset');
const results = document.querySelector('.results');
let gameStatus = true;
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
    if (playerSelection === 'rock'
        && computerSelection === 'paper') {
        results.textContent = 'You Lose! Paper beats Rock';
        computerScore++;
    }
    // If player=rock and computer=scissors, player wins
    else if (playerSelection === 'rock'
        && computerSelection === 'scissors') {
        results.textContent = 'You Win! Rock beats Scissors';
        playerScore++;
    }
    // If player=paper and computer=rock, player wins
    else if (playerSelection === 'paper'
        && computerSelection === 'rock') {
        results.textContent = 'You Win! Paper beats Rock';
        playerScore++;
    }
    // If player=paper and computer=scissors, computer wins
    else if (playerSelection === 'paper'
        && computerSelection === 'scissors') {
        results.textContent = 'You Lose! Scissors beats Paper';
        computerScore++;
    }
    // If player=scissors and computer=rock, computer wins
    else if (playerSelection === 'scissors'
        && computerSelection === 'rock') {
        results.textContent = 'You Lose! Rock beats Scissors';
        computerScore++;
    }
    // If player=scissors and computer=paper, player wins
    else if (playerSelection === 'scissors'
        && computerSelection === 'paper') {
        results.textContent = 'You Win! Scissors beats Paper';
        playerScore++;
    }
    // If anything else happens, it's a tie
    else {
        results.textContent = 'Tie game!';
    }
    currentScore.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    if (playerScore === 5) {
        results.textContent = 'You beat the computer!';
        endGame();
    } else if (computerScore === 5) {
        results.textContent = 'The computer beat you!';
        endGame();
    }
    return;
}

// create button to allow player to play again
function endGame() {
    gameStatus = false;
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Play Again';
    reset.appendChild(restartButton);
    restartButton.addEventListener('click', () => {
        reset.removeChild(restartButton);
        resetGame();
    });
}

// set values back to default to let player start again
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameStatus = true;
    currentScore.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    results.textContent = '';
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

