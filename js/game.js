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
    // Make playerSelection lowercase
    playerSelection = playerSelection.toLowerCase();
    // If player=rock and computer=paper, computer wins
    if (playerSelection === 'rock'
        && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
        return('computer');
    }
    // If player=rock and computer=scissors, player wins
    else if (playerSelection === 'rock'
        && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        return('player');
    }
    // If player=paper and computer=rock, player wins
    else if (playerSelection === 'paper'
        && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock');
        return('player');
    }
    // If player=paper and computer=scissors, computer wins
    else if (playerSelection === 'paper'
        && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        return('computer');
    }
    // If player=scissors and computer=rock, computer wins
    else if (playerSelection === 'scissors'
        && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        return('computer');
    }
    // If player=scissors and computer=paper, player wins
    else if (playerSelection === 'scissors'
        && computerSelection === 'paper') {
        console.log('You Win! Scissors beats Paper');
        return('player');
    }
    // If anything else happens, it's a tie
    else {
        console.log('Tie game!');
        return('tie');
    }
}

function game(){
    // Set score for player and computer
    let playerScore = 0;
    let computerScore = 0;
    // Play up to 10 games
    for (let i = 0; i < 5; i++){
        console.log(`Round ${i+1}!`);
        // Prompt user for rock, paper, or scissors
        let userInput = prompt("Pick rock, paper, or scissors");
        // Verify user has input rock, paper, or scissors correctly
        while (!(userInput === 'rock')
            && !(userInput === 'paper')
            && !(userInput === 'scissors')) {
            userInput = prompt('Please input rock, paper, or scissors');
        }
        // Play a round and generate computer's move
        let roundResult = playRound(userInput, computerPlay());
        switch(roundResult) {
            case 'player':
                playerScore++;
                break;
            case 'computer':
                computerScore++;
                break;
            default:
                break;
        }
        // After a round, display the score
        console.log(`Current score: You ${playerScore}:${computerScore} Computer`);
    }
    // Show final score after all rounds completed
    if (playerScore > computerScore) {
        console.log("You beat the computer!");
    } else if (playerScore < computerScore) {
        console.log("The computer beat you!");
    } else {
        console.log("You tied with the computer!");
    }
}

game()