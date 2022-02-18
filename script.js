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
    var intro = document.getElementById('intro');
    intro.style.visibility = "hidden"
    if (rounds < 5) {
      if (singleResult == 'Player') {
        playerScore = ++playerScore;
        scoreLoad();
        }
      else if (singleResult == 'Computer') {
        computerScore = ++computerScore;
        scoreLoad();
        }
      else if (singleResult == 'Tie') {
        scoreLoad();
        }
    const scores = document.querySelector('#scores');
    setTimeout(() => {scores.textContent = 'Your score: ' + playerScore + ' Computer score: ' + computerScore}, 500);
    const yourChoice = document.querySelector('#yourChoice');
    yourChoice.textContent = 'Your choice: ' + playerSelection + '.';
    const computerChoice = document.querySelector('#computerChoice');
    setTimeout(() => {computerChoice.textContent = 'Computer choice: ' + computerSelection + '.'}, 500);
    }
    else if (rounds = 5) {
        if (singleResult == 'Player') {
            playerScore = ++playerScore;
            scoreLoad();
            }
          else if (singleResult == 'Computer') {
            computerScore = ++computerScore;
            scoreLoad();
            }
          else if (singleResult == 'Tie') {
            scoreLoad();
            }
    const yourChoice = document.querySelector('#yourChoice');
    yourChoice.textContent = 'Your choice: ' + playerSelection + '.';
    const computerChoice = document.querySelector('#computerChoice');
    setTimeout(() => {computerChoice.textContent = 'Computer choice: ' + computerSelection + '.'}, 500);
    const scores = document.querySelector('#scores');
    setTimeout(() => {scores.textContent = 'Your score: ' + playerScore + ' Computer score: ' + computerScore}, 500);
    const final = document.querySelector('#final');
    if (playerScore > computerScore) { 
        setTimeout(() => {
            document.getElementById("images").innerHTML = '';
            const final = document.getElementById('final');
            final.textContent = 'Game over! You won!';
            const restartBtn = document.createElement('button');
            restartBtn.classList.add('restartBtn');
            restartBtn.textContent = 'Restart Game!';
            const redo = document.querySelector('#redo');
            redo.appendChild(restartBtn)
            restartBtn.addEventListener('click', restart);
        }, 500)
      } 
    else if (playerScore < computerScore) { 
        setTimeout(() => {
            document.getElementById("images").innerHTML = '';
            const final = document.getElementById('final');
            final.textContent = 'Game over! You lost!';
            const restartBtn = document.createElement('button');
            restartBtn.classList.add('restartBtn');
            restartBtn.textContent = 'Restart Game!';
            const redo = document.querySelector('#redo');
            redo.appendChild(restartBtn)
            restartBtn.addEventListener('click', restart);
        }, 500)
    }
    };
};

//restarting the game
function restart() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    document.getElementById("images").innerHTML = old;
    const scores = document.querySelector('#scores');
    scores.textContent = 'Your score: ' + playerScore + ' Computer score: ' + computerScore;
    const yourChoice = document.querySelector('#yourChoice');
    yourChoice.textContent = 'Your choice: None selected';
    const computerChoice = document.querySelector('#computerChoice');
    computerChoice.textContent = 'Computer choice: None selected';
    final.textContent = '';
    redo.textContent = '';
}

function scoreLoad() {
    const yourChoice = document.querySelector('#yourChoice');
    yourChoice.textContent = 'Your choice: --';
    const computerChoice = document.querySelector('#computerChoice');
    computerChoice.textContent = 'Computer choice: --';
}

//add event listener to buttons that calls playRound with accurate playerSelection everytime button clicked
const buttons = document.querySelectorAll('#images')
buttons.forEach ((input) => {
    input.addEventListener('click', game);
});

const remember = document.getElementById("images"); 
var old = remember.innerHTML; 
let playerScore = 0;
let singleResult;
let computerScore = 0;
let rounds = 0;
