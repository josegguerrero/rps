const CHOICES = ['Rock', 'Paper', 'Scissors'];
const PROPERTIES = {
    'rock': {
        weakTo: 'Paper',
        strongTo: 'Scissors'
    },
    'paper': {
        weakTo: 'Scissors',
        strongTo: 'Rock'
    },
    'scissors': {
        weakTo: 'Rock',
        strongTo: 'Paper'
    }
}

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {

    // DRAW
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log('Draw!');
        return null;
    }
        
    
    if(PROPERTIES[playerSelection.toLowerCase()].weakTo === computerSelection) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        return false;
    }
    else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return true;
    }
}

function playGame() {
    let playerScore = computerScore = 0;

    for(let round = 1; round <= 5; round++) {
        console.log(`Round ${round}: ${playerScore}-${computerScore}`);

        let playerSelection = prompt('What is your choice (rock, paper, scissors): ');
        let result = playRound(playerSelection);

        if(result)
            playerScore++;
        else if(result === null) {}
        else  
            computerScore++;
    }

    if(playerScore > computerScore)
        return 'Congratulations! You won the game!';
    else
        return 'Too bad! You lost the game';
}

playGame();