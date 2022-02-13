function computerPlay() {
    let gameOptions = ['Rock', 'Paper', 'Scissors'];
    let getSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return getSelection;
    };

// play a single round 
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
       singleResult = 'Player';
    }
    else if ((playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Paper')) {
        singleResult = 'Computer';
    }
    else if (playerSelection == computerSelection) {
        singleResult = 'Tie';
    }
};

//play 5 rounds and keep score
function game(event, singleRound) {
    rounds++;
    let playerSelection = event.target.id;
    computerSelection = computerPlay();
    singleRound = playRound(playerSelection, computerSelection);
    if (rounds < 5) {
      if (singleResult == 'Player') {
        playerScore = ++playerScore;
        }
      else if (singleResult == 'Computer') {
        computerScore = ++computerScore;
        }
      else if (singleResult == 'Tie') {
        }
    const scores = document.querySelector('#scores');
    scores.textContent = 'Your score: ' + playerScore + ' Computer score: ' + computerScore;
    const yourChoice = document.querySelector('#yourChoice');
    yourChoice.textContent = 'Your choice: ' + playerSelection + '.';
    const computerChoice = document.querySelector('#computerChoice');
    computerChoice.textContent = 'Computer choice: ' + computerSelection + '.';
    }
    else if (rounds = 5) {
        if (singleResult == 'Player') {
            playerScore = ++playerScore;
            }
          else if (singleResult == 'Computer') {
            computerScore = ++computerScore;
            }
          else if (singleResult == 'Tie') {
            }
    const scores = document.querySelector('#scores');
    scores.textContent = 'Your score: ' + playerScore + ' Computer score: ' + computerScore;
    const final = document.querySelector('#final');
    if (playerScore > computerScore) { 
        final.textContent = 'Game over! You won!'
      } 
    else if (playerScore < computerScore) { 
        final.textContent = 'Game over! You lost!'
    }
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
    const restartBtn = document.createElement('button');
    restartBtn.classList.add('restartBtn');
    restartBtn.textContent = 'Restart Game!';
    final.appendChild(restartBtn);
    restartBtn.addEventListener('click', restart);
    };
};

function restart() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    document.getElementById("Rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;
    const scores = document.querySelector('#scores');
    scores.textContent = 'Your score: ' + playerScore + ' Computer score: ' + computerScore;
    const yourChoice = document.querySelector('#yourChoice');
    yourChoice.textContent = 'Your choice: None selected';
    const computerChoice = document.querySelector('#computerChoice');
    computerChoice.textContent = 'Computer choice: None selected';
    final.textContent = '';
}

//add event listener to buttons that calls playRound with accurate playerSelection everytime button clicked
const buttons = document.querySelectorAll('button')
  buttons.forEach ((button) => {
    button.addEventListener('click', game) 
    });

let playerScore = 0;
let singleResult;
let computerScore = 0;
let rounds = 0;
