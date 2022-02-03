
function computerPlay() {
    let gameOptions = ['rock', 'paper', 'scissors'];
    let result = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return result;
    };

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if ((playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return ('You have won!' + ' ' + playerSelection.toUpperCase() + ' ' + 'beats' + ' ' + computerSelection.toUpperCase() +'.')
        + (' ' + 'Your score:' + ' ' + ++yourScore + '.' + ' ' + 'Computer score:' + ' ' + computerScore + '.');
    }
    else if ((playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'paper')) {
        return ('You have lost!' + ' ' + playerSelection.toUpperCase() + ' ' + 'loses to' + ' ' + computerSelection.toUpperCase() +'.')
        + (' ' + 'Your score:' + ' ' + yourScore + '.' + ' ' + 'Computer score:' + ' ' + ++computerScore + '.');
    }
    else if ((playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors') || (playerSelection == 'rock' && computerSelection == 'rock')) {
        return ('You have tied!')
        + (' ' + 'Your score:' + ' ' + yourScore + '.' + ' ' + 'Computer score:' + ' ' + computerScore + '.');
    }
};

function results() {
    if (yourScore > computerScore) {
        return 'Yay, you won!';
    }
    else if (yourScore < computerScore) {
        return 'Boo you lost.';
    }
};

let yourScore = 0;
let computerScore = 0;
let playerPrompt = prompt('Rock, paper, or scissors?', ' ');
let playerSelection = playerPrompt.toLowerCase();
console.log(playRound(playerSelection));

playerPrompt = prompt('Rock, paper, or scissors?', ' ');
console.log(playRound(playerSelection));

playerPrompt = prompt('Rock, paper, or scissors?', ' ');
console.log(playRound(playerSelection));

playerPrompt = prompt('Rock, paper, or scissors?', ' ');
console.log(playRound(playerSelection));

playerPrompt = prompt('Rock, paper, or scissors?', ' ');
console.log(playRound(playerSelection));

console.log(results());



