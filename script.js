function computerPlay() {
    let gameOptions = ['rock', 'paper', 'scissors'];
    let getSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return getSelection;
    };

// play a single round 
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return 'You have won!' + ' ' + playerSelection.toUpperCase() + ' ' + 'beats' + ' ' + computerSelection.toUpperCase() +'.' + ' ' + 'Your score:' + ' ' + ++yourScore + '.' + ' ' + 'Computer score:' + ' ' + computerScore + '.';;
    }
    else if ((playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'paper')) {
        return 'You have lost!' + ' ' + playerSelection.toUpperCase() + ' ' + 'loses to' + ' ' + computerSelection.toUpperCase() +'.' + ' ' + 'Your score:' + ' ' + yourScore + '.' + ' ' + 'Computer score:' + ' ' + ++computerScore + '.';
    }
    else if ((playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors') || (playerSelection == 'rock' && computerSelection == 'rock')) {
        return 'You have tied!' + ' ' + 'Your score:' + ' ' + yourScore + '.' + ' ' + 'Computer score:' + ' ' + computerScore + '.';
    }
};

//play full game, keep score, return final result
function game() {
    ++round;
    let computerSelection = computerPlay();
    let playerPrompt = prompt('Rock, paper, or scissors?', ' ');
    let playerSelection = playerPrompt.toLowerCase();
    let roundResult = playRound(playerSelection, computerSelection);
    if (round < 5) {
        return roundResult;
    }
    else if (round = 5) {
        if (yourScore > computerScore) {
            return roundResult + ' Yay, you won!';
        }
        else if (yourScore < computerScore) {
            return roundResult + ' Boo you lost.';
        }
    }
};


let yourScore = 0;
let computerScore = 0;
let round = 0;
console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());